import Link from "next/link";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";

export default function Curriculum() {
  const weeks = [
    {
      title: "Week 1: DSA Foundations",
      topics: ["Arrays", "Strings", "HashMap"],
    },
    {
      title: "Week 2: DSA Intermediate",
      topics: ["Trees", "Graphs", "Dynamic Programming"],
    },
    {
      title: "Week 3: Resume & Profile",
      topics: ["Resume Building", "LinkedIn Optimization", "ATS Bypass"],
    },
    {
      title: "Week 4: Mock Interviews I",
      topics: ["Mock Interview Round 1", "Recorded Session", "Expert Feedback"],
    },
    {
      title: "Week 5: Job Application Strategy",
      topics: ["Application Strategy", "Tracking System", "Cold Emailing"],
    },
    {
      title: "Week 6: Final Polish",
      topics: ["Mock Interview Round 2", "Offer Negotiation", "System Design Basics"],
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">From Zero to Interview-Ready in 6 Weeks</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A structured, proven path to land your dream role.
        </p>
        <button
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all inline-flex items-center gap-2"
          data-track="download_syllabus"
        >
          <Download className="w-5 h-5" /> Download Full Syllabus
        </button>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {weeks.map((week, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {index + 1}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-border">
              <h3 className="text-xl font-bold mb-4">{week.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {week.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Start?</h2>
        <Link
          href="/pricing"
          className="inline-flex bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all items-center gap-2"
          data-track="enroll_button"
        >
          Start Your Prep <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}