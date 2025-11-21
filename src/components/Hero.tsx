import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary py-20 text-primary-foreground">
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hyderabad's Fastest Sales Listing Platform
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 sm:text-xl">
            Buy & Sell Bikes, Cars, Scooters & Electronics with Ease
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-base font-semibold"
              asChild
            >
              <a href="#categories">
                Browse Listings
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="https://wa.me/917337003606" target="_blank" rel="noopener noreferrer">
                List Your Item
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    </section>
  );
};

export default Hero;
