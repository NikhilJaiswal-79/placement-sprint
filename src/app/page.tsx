import Link from "next/link";
import { ArrowRight, Play, BookOpen, FileText, Video, LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Get Placed in 90 Days <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              or Your Money Back
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            DSA prep, resume reviews, mock interviews and job tracking — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/pricing"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              data-track="enroll_button"
            >
              Start Your Prep <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-border bg-black/50 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            <span className="text-white font-bold">1,400+ placements</span> | India, Nigeria, Philippines, US, UK, Middle East
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why do smart people fail interviews?</h2>
            <p className="text-xl text-muted-foreground">It is rarely about intelligence. It is about execution.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "No structured roadmap",
              "No real feedback on resume",
              "No mock interview practice",
              "Applying blindly with no tracking"
            ].map((problem, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-border">
                <div className="mt-1 bg-red-500/20 p-2 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                </div>
                <p className="text-lg font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete System</h2>
            <p className="text-xl text-muted-foreground">Everything you need to land your next role.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-border hover:border-primary/50 transition-colors group">
              <BookOpen className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">DSA Roadmap</h3>
              <p className="text-muted-foreground">A structured, 6-week path focusing on patterns, not memorization.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-border hover:border-secondary/50 transition-colors group">
              <FileText className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Resume Review</h3>
              <p className="text-muted-foreground">AI + expert feedback to ensure you pass the ATS and impress humans.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-border hover:border-primary/50 transition-colors group">
              <Video className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Mock Interviews</h3>
              <p className="text-muted-foreground">Recorded, reviewed, and critiqued so you never freeze up.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-border hover:border-secondary/50 transition-colors group">
              <LayoutDashboard className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Job Tracker</h3>
              <p className="text-muted-foreground">Apply smarter, track conversions, and follow up like a pro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your sprint?</h2>
          <Link
            href="/pricing"
            className="inline-block bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-lg text-xl font-bold transition-all"
            data-track="enroll_button"
          >
            Join PlacementSprint Today
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      </section>
    </div>
  );
}