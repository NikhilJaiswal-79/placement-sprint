"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TrackingScript() {
  const pathname = usePathname();

  useEffect(() => {
    const SESSION_ID =
      localStorage.getItem("ps_session") ||
      "sess_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("ps_session", SESSION_ID);

    // Initialize lead session state
    let leadData = {
      pagesVisited: [] as string[],
      scrolls: [] as string[],
      ctasClicked: [] as string[],
      sessionStartTime: Date.now(),
      utmParams: {} as Record<string, string>,
    };

    try {
      const stored = sessionStorage.getItem("ps_lead_data");
      if (stored) {
        leadData = JSON.parse(stored);
      } else {
        const params: Record<string, string> = {};
        if (typeof window !== "undefined") {
          const searchParams = new URLSearchParams(window.location.search);
          searchParams.forEach((value, key) => {
            params[key] = value;
          });
        }
        leadData.utmParams = params;
        sessionStorage.setItem("ps_lead_data", JSON.stringify(leadData));
      }
    } catch (e) {
      console.error("Failed to parse lead data", e);
    }

    function updateLeadData(updateFn: (data: typeof leadData) => void) {
      try {
        const stored = sessionStorage.getItem("ps_lead_data");
        if (stored) {
          const data = JSON.parse(stored);
          updateFn(data);
          sessionStorage.setItem("ps_lead_data", JSON.stringify(data));
        }
      } catch (e) {}
    }

    const API = "https://YOUR_VULTR_IP/api/track";

    function send(event: string, data: Record<string, unknown>) {
      const payload = {
        sessionId: SESSION_ID,
        event,
        data,
        timestamp: new Date().toISOString(),
      };

      // 🔴 DEBUGGING: Log to console so you can see tracking signals working
      console.log(`[Tracking Event Fired]: ${event}`, payload);

      // Mocking fetch to avoid CORS/Network errors in local dev, but implementing exactly as requested
      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silently catch fetch errors since API is a mock placeholder
      });
    }

    // Page visit
    send("page_visit", { page: pathname });
    updateLeadData((data) => {
      if (!data.pagesVisited.includes(pathname)) {
        data.pagesVisited.push(pathname);
      }
    });

    // Time spent
    const start = Date.now();
    const handleBeforeUnload = () => {
      send("time_spent", {
        page: window.location.pathname,
        seconds: Math.round((Date.now() - start) / 1000),
      });
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Scroll depth
    let scrollFired = false;
    const handleScroll = () => {
      if (scrollFired) return;
      const depth = Math.round(
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      if (depth > 80) {
        scrollFired = true;
        send("scroll_depth", {
          page: window.location.pathname,
          depth,
        });
        updateLeadData((data) => {
          if (!data.scrolls.includes(window.location.pathname)) {
            data.scrolls.push(window.location.pathname);
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Button clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-track]") as HTMLElement;
      if (el) {
        const trackId = el.dataset.track;
        if (trackId) {
          send("click", {
            element: trackId,
            page: window.location.pathname,
          });
          updateLeadData((data) => {
            if (!data.ctasClicked.includes(trackId)) {
              data.ctasClicked.push(trackId);
            }
          });
        }
      }
    };
    document.addEventListener("click", handleClick);

    // Identify user when email is captured
    (window as unknown as Record<string, unknown>).identifyUser = function (email: string) {
      send("identify", { email });
    };

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

  return null;
}