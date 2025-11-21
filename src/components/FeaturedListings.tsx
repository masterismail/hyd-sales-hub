import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useRef } from "react";

const listings = [
  {
    id: 1,
    title: "Maruti Swift VDI",
    price: "₹5,50,000",
    year: "2020",
    km: "35,000 km",
    category: "Cars",
    video: "/videos/maruti-car-2.mp4",
  },
  {
    id: 2,
    title: "Royal Enfield Classic 350",
    price: "₹1,45,000",
    year: "2021",
    km: "8,500 km",
    category: "Bikes",
    video: "/videos/bike-2.mp4",
  },
  {
    id: 3,
    title: "Honda Activa 6G",
    price: "₹65,000",
    year: "2022",
    km: "12,000 km",
    category: "Scooters",
    video: "/videos/activa-2.mp4",
  },
  {
    id: 4,
    title: "iPhone 13 Pro",
    price: "₹75,000",
    year: "2022",
    km: "Excellent Condition",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&auto=format&fit=crop",
  },
];

const ListingCard = ({ listing }: { listing: typeof listings[0] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <Card
      className="group overflow-hidden border-border transition-all duration-300 hover:border-primary hover:shadow-[var(--card-shadow-hover)]"
      onMouseEnter={() => {
        if (videoRef.current) videoRef.current.play();
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {listing.video ? (
          <video
            ref={videoRef}
            src={listing.video}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={listing.image}
            alt={listing.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">
          {listing.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold line-clamp-1">{listing.title}</h3>
        <p className="mb-3 text-2xl font-bold text-primary">{listing.price}</p>
        <div className="flex gap-3 text-sm text-muted-foreground">
          <span>{listing.year}</span>
          <span>•</span>
          <span>{listing.km}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          size="sm"
          className="w-full"
          asChild
        >
          <a href="https://wa.me/917337003606" target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" />
            Contact Seller
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedListings = () => {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Listings
          </h2>
          <p className="text-lg text-muted-foreground">
            Handpicked deals for you
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
