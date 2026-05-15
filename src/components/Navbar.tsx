import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PlacementSprint
          </span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="/curriculum" className="text-sm font-medium hover:text-primary transition-colors">
            Curriculum
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="/guarantee" className="text-sm font-medium hover:text-primary transition-colors">
            Guarantee
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="/pricing"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            data-track="enroll_button"
          >
            Start Your Prep
          </Link>
        </div>
      </div>
    </nav>
  );
}