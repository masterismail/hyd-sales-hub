import { Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Sohail Sales Channel" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-lg font-bold text-foreground">Sohail Sales Channel</h1>
            <p className="text-xs text-muted-foreground">Hyd's Fastest Sales Platform</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <a href="https://www.instagram.com/hyd_sales_channel/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" />
              Follow Us
            </a>
          </Button>
          <Button
            size="sm"
            asChild
          >
            <a href="https://wa.me/917337003606" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
