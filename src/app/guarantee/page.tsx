"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Guarantee() {
  const faqs = [
    {
      q: "What counts as an interview?",
      a: "Any scheduled technical or behavioral phone screen, technical assessment, or on-site interview with a recruiter, hiring manager, or engineer.",
    },
    {
      q: "How do I claim the refund?",
      a: "Simply email support@placementsprint.com with a link to your completed curriculum and your filled job tracker. We will process your refund within 48 hours.",
    },
    {
      q: "Are there any hidden conditions?",
      a: "No. Finish the 6 weeks of material, apply to 20 jobs using our structured tracker, and if you don't get an interview in 90 days from the start, you get a full refund.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
      <div className="text-center mb-16">
        <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">No Interview in 90 Days? Full Refund.</h1>
        <p className="text-xl text-muted-foreground">We take the risk so you don&apos;t have to.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center p-6 rounded-2xl bg-white/5 border border-border">
          <div className="text-3xl font-extrabold text-white mb-2">4</div>
          <p className="text-muted-foreground">Refunds in 18 months</p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-white/5 border border-border">
          <div className="text-3xl font-extrabold text-white mb-2">1,400+</div>
          <p className="text-muted-foreground">Completions</p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-white/5 border border-border">
          <div className="text-3xl font-extrabold text-primary mb-2">96%</div>
          <p className="text-muted-foreground">Interview rate in 90 days</p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-border">
            <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Complete the Curriculum</h3>
              <p className="text-muted-foreground">Go through all 6 weeks of material, including the DSA roadmap, resume review, and mock interviews.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-border">
            <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Apply to 20 Jobs</h3>
              <p className="text-muted-foreground">Use our built-in job tracker to apply to at least 20 relevant roles in your target market.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-border">
            <div className="bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Get an Interview or Your Money Back</h3>
              <p className="text-muted-foreground">If 90 days pass and you haven&apos;t had a single interview, email us. We refund 100% of your money. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center mb-10">Guarantee FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/pricing"
          className="inline-flex bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-lg text-xl font-bold transition-all items-center gap-2"
          data-track="enroll_button"
        >
          Enroll Risk Free <ArrowRight className="w-5 h-5" />
        </Link>
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