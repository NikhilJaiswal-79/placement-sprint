import Link from "next/link";
import { ArrowRight, Target, Users, Code, LineChart } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About PlacementSprint</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We built PlacementSprint because we watched brilliant people fail interviews&mdash;not because they weren&apos;t smart enough, but because they had no structured path, no feedback, and no one in their corner.
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">What Makes Us Different</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white/5 border border-border">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Not just content—a complete system</h3>
            <p className="text-muted-foreground">
              Most platforms just give you videos to watch. We give you a start-to-finish operating system for your job hunt.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-border">
            <Users className="w-10 h-10 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-3">Real feedback</h3>
            <p className="text-muted-foreground">
              AI mock interviews combined with human resume reviews ensure you know exactly where you are falling short.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-border">
            <Code className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Built for action</h3>
            <p className="text-muted-foreground">
              Our built-in job tracker forces you to apply consistently instead of passively consuming tutorials.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white/5 border border-border">
            <LineChart className="w-10 h-10 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-3">Unmatched Guarantee</h3>
            <p className="text-muted-foreground">
              We offer a 90-day guarantee that nobody else offers, because we know our system works when you put in the effort.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">The Team</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { name: "Sarah Jenkins", role: "Co-Founder & CEO", exp: "ex-Google SWE" },
            { name: "Michael Chen", role: "Head of Curriculum", exp: "ex-Meta Staff SWE" },
            { name: "Aisha Patel", role: "Career Coach", exp: "Placed 500+ engineers" },
          ].map((member, i) => (
            <div key={i} className="p-6">
              <div className="w-32 h-32 mx-auto bg-white/10 rounded-full mb-6 border border-border"></div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{member.exp}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
        <h2 className="text-3xl font-bold mb-6">Ready to change your career trajectory?</h2>
        <Link
          href="/pricing"
          className="inline-flex bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg text-lg font-medium transition-all items-center gap-2"
          data-track="enroll_button"
        >
          Start Your Prep <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}