import { Instagram, Phone, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={logo} alt="Sohail Sales Channel" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-bold">Sohail Sales Channel</h3>
                <p className="text-sm text-muted-foreground">Hyd's Fastest Sales Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted marketplace for buying and selling bikes, cars, scooters, and electronics in Hyderabad.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#categories" className="hover:text-primary">Cars</a></li>
              <li><a href="#categories" className="hover:text-primary">Bikes</a></li>
              <li><a href="#categories" className="hover:text-primary">Scooters</a></li>
              <li><a href="#categories" className="hover:text-primary">Electronics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/hyd_sales_channel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                @hyd_sales_channel
              </a>
              <a
                href="https://wa.me/917337003606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                +91 73370 03606
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sohail Sales Channel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
