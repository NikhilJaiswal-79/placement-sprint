import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PlacementSprint
          </span>
          <p className="text-sm text-muted-foreground mt-2">
            Get Placed in 90 Days or Your Money Back.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link href="/curriculum" className="text-sm text-muted-foreground hover:text-white transition-colors">
            Curriculum
          </Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="/guarantee" className="text-sm text-muted-foreground hover:text-white transition-colors">
            Guarantee
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PlacementSprint. All rights reserved.
      </div>
    </footer>
  );
}