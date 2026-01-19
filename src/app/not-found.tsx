import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20 md:py-32">
      <div className="container">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-bold gradient-text">404</h1>
            <p className="text-xl md:text-2xl text-white/80">Page Not Found</p>
          </div>
          
          <p className="text-base md:text-lg text-white/60 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="pill" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <Button variant="pill-light" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}