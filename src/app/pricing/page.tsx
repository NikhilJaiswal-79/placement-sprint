"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const faqs = [
    {
      q: "Is this for freshers or experienced?",
      a: "Both. Freshers learn how to break in, while experienced folks learn how to jump a tier (e.g., SDE 1 to SDE 2).",
    },
    {
      q: "What if I have no CS background?",
      a: "Our week 1 & 2 curriculum covers the foundations from scratch. It is designed to be accessible.",
    },
    {
      q: "How much time do I need per day?",
      a: "We recommend setting aside 90 minutes a day to stay on track with the 6-week timeline.",
    },
    {
      q: "What happens after I enroll?",
      a: "You get instant lifetime access to the platform, the tracker, and the community. You can book your first mock interview whenever you are ready.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">Invest in your career. Get the return in your first paycheck.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Card 1 */}
        <div className="p-8 rounded-2xl bg-white/5 border border-border flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold mb-2">One Time</h3>
          <div className="mb-6">
            <span className="text-5xl font-extrabold">$297</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {["Full lifetime access", "All features included", "1-on-1 Resume Review", "2 AI Mock Interviews", "Job Tracking System"].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all"
            data-track="enroll_button"
          >
            Enroll Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-2xl bg-white/5 border border-border flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Payment Plan</h3>
          <div className="mb-6 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold">3 × $99</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {["Same full access", "Split over 3 months", "1-on-1 Resume Review", "2 AI Mock Interviews", "Job Tracking System"].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-lg text-lg font-medium transition-all"
            data-track="enroll_button_payment_plan"
          >
            Start Payment Plan
          </button>
        </div>
      </div>

      <div className="text-center mb-24">
        <Link
          href="/guarantee"
          className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-white transition-colors"
          data-track="clicked_guarantee_link"
        >
          Not sure? Read our guarantee <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg bg-white/5 overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 font-medium text-lg flex justify-between items-center"
        onClick={() => setOpen(!open)}
        data-track="clicked_faq"
      >
        {q}
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-4 text-muted-foreground">
          {a}
        </div>
      )}
    </div>
  );
}