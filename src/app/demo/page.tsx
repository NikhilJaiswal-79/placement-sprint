import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Demo() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">See PlacementSprint in Action</h1>
        <p className="text-xl text-muted-foreground">Take a quick tour of the platform before you join.</p>
      </div>

      {/* Video Placeholder */}
      <div className="aspect-video w-full bg-black/80 border border-border rounded-2xl overflow-hidden relative mb-16 shadow-2xl flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="text-center relative z-10" data-track="play_demo_video">
          <div className="w-20 h-20 bg-primary/80 hover:bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-transform hover:scale-105 backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 ml-2">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
          <p className="text-white/70 font-medium">Click to play demo</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-6 text-center">What you will see in the demo:</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "DSA roadmap walkthrough",
            "Resume review process",
            "Mock interview experience",
            "Job tracker dashboard"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-border">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Start?</h2>
        <Link
          href="/pricing"
          className="inline-flex bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all items-center gap-2"
          data-track="enroll_button"
        >
          Join PlacementSprint <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}