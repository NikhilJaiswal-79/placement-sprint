"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EmailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if we already captured this lead
    const hasCaptured = localStorage.getItem("ps_lead_captured");
    if (!hasCaptured) {
      // Pop up after 5 seconds to capture lead
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const calculateLeadPayload = (emailToUse: string) => {
    const stored = sessionStorage.getItem("ps_lead_data");
    const leadData = stored ? JSON.parse(stored) : {
      pagesVisited: [],
      scrolls: [],
      ctasClicked: [],
      sessionStartTime: Date.now(),
      utmParams: {}
    };

    const timeSpentSeconds = Math.round((Date.now() - (leadData.sessionStartTime || Date.now())) / 1000);
    
    let score = 0;
    
    // 1. Time spent (1 point per 10 seconds, max 20 points)
    score += Math.min(20, Math.floor(timeSpentSeconds / 10));

    // 2. CTA clicked mapping
    const ctas = leadData.ctasClicked || [];
    const hasPricing = ctas.some((c: string) => c.includes("pricing") || c.includes("enroll"));
    const hasDemo = ctas.some((c: string) => c.includes("demo"));
    
    if (hasPricing) {
      score += 40; // pricing > demo
    } else if (hasDemo) {
      score += 20; // demo > learn more
    } else if (ctas.length > 0) {
      score += 10;
    }

    // 3. Sections viewed (using scroll > 80% as proxy for viewed sections)
    const scrolls = leadData.scrolls || [];
    score += Math.min(30, scrolls.length * 10);

    // Add extra points for multiple pages visited
    const pages = leadData.pagesVisited || [];
    score += Math.min(10, pages.length * 2);

    // Cap at 100
    score = Math.min(100, score);

    // Label assignment
    let label = "Cold";
    if (score >= 70) label = "Hot";
    else if (score >= 40) label = "Warm";

    return {
      email: emailToUse,
      tracked: {
        pagesVisited: pages,
        timeSpentSeconds,
        sectionsScrolled: scrolls,
        ctasClicked: ctas,
        utmParams: leadData.utmParams || {}
      },
      score,
      label,
      formSubmitted: localStorage.getItem("ps_lead_captured") === "true"
    };
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const savedEmail = localStorage.getItem("ps_pending_email");
        const alreadySent = sessionStorage.getItem("ps_webhook_sent");
        
        // Only send if we have an email and haven't sent it in this session yet
        if (savedEmail && !alreadySent) {
          const payload = calculateLeadPayload(savedEmail);
          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
          navigator.sendBeacon("https://nikhil-jaiswal.app.n8n.cloud/webhook-test/bf84f75c-b4bb-4a62-8865-f3ab7c6572bc", blob);
          
          // Mark as sent for this session to avoid multiple beacons if they toggle tabs
          sessionStorage.setItem("ps_webhook_sent", "true");
          console.log("📤 [Session Exit]: Final payload sent to n8n", payload);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);

    // Identify user via our tracking script
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).identifyUser) {
      // Call the global identifyUser function registered by TrackingScript.tsx
      const identify = (window as unknown as Record<string, (email: string) => void>).identifyUser;
      if (typeof identify === 'function') {
        identify(email);
      }
    }

    // Mark as captured so modal doesn't show again
    localStorage.setItem("ps_lead_captured", "true");
    // Ensure the email is stored for the exit trigger
    localStorage.setItem("ps_pending_email", email);
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    console.log("✅ [Lead Captured]: Payload will be sent when user leaves the website.");

    // Close after a brief success message
    setTimeout(() => setIsOpen(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#0a0a0a] border border-border w-full max-w-md rounded-2xl p-6 relative shadow-2xl">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Unlock the Full Blueprint</h2>
            <p className="text-muted-foreground mb-6">
              Enter your email to get our free 6-week technical interview prep roadmap sent directly to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    const val = e.target.value;
                    setEmail(val);
                    localStorage.setItem("ps_pending_email", val);
                  }}
                  placeholder="Enter your email address" 
                  required
                  className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center"
                data-track="submit_email_lead"
              >
                {isSubmitting ? "Sending..." : "Send Me the Roadmap"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">You&apos;re on the list!</h2>
            <p className="text-muted-foreground">Keep an eye on your inbox.</p>
          </div>
        )}
      </div>
    </div>
  );
}