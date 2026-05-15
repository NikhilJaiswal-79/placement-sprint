import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Hyderabad, India",
      role: "BPO Agent → SDE at Infosys",
      timeline: "Placed in 9 weeks",
      quote: "I had zero CS background. Week 3 changed everything.",
      avatar: "R",
    },
    {
      name: "Emeka Okafor",
      location: "Lagos, Nigeria",
      role: "Fresh grad → Frontend Dev at Andela",
      timeline: "Placed in 11 weeks",
      quote: "The mock interviews were brutally honest. That's what I needed.",
      avatar: "E",
    },
    {
      name: "Priya Menon",
      location: "Bangalore, India",
      role: "Working professional → Data Analyst at Flipkart",
      timeline: "Placed in 8 weeks",
      quote: "90 minutes a day. That's all it took.",
      avatar: "P",
    },
    {
      name: "Maria Santos",
      location: "Manila, Philippines",
      role: "Call center → UI/UX at a US startup",
      timeline: "Placed in 10 weeks",
      quote: "The resume review alone was worth $297.",
      avatar: "M",
    },
    {
      name: "Alex Johnson",
      location: "New York, US",
      role: "Self-taught → React Developer",
      timeline: "Placed in 12 weeks",
      quote: "The job tracking system kept me accountable when I wanted to quit.",
      avatar: "A",
    },
    {
      name: "David Chen",
      location: "London, UK",
      role: "Bootcamp grad → Junior Engineer",
      timeline: "Placed in 7 weeks",
      quote: "Finally, a roadmap that actually focuses on passing the interview, not just theory.",
      avatar: "D",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">1,400 Placements. Real Stories.</h1>
        <p className="text-xl text-muted-foreground">Don&apos;t just take our word for it. See what our alumni say.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/5 border border-border relative">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">
                {t.avatar}
              </div>
              <div>
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
            <p className="font-medium text-secondary mb-2">{t.role}</p>
            <p className="text-xs text-muted-foreground font-mono mb-4 uppercase tracking-wider">{t.timeline}</p>
            <p className="text-white/80 leading-relaxed">&quot;{t.quote}&quot;</p>
          </div>
        ))}
      </div>

      <div className="text-center bg-white/5 border border-border p-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6">Ready to be our next success story?</h2>
        <Link
          href="/pricing"
          className="inline-flex bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all items-center gap-2"
          data-track="enroll_button"
        >
          Join PlacementSprint <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}