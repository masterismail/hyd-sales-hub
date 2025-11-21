import { Car, Bike, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Car,
    name: "Cars",
    description: "Sedans, SUVs, Hatchbacks",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bike,
    name: "Bikes",
    description: "Sports, Cruiser, Commuter",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Zap,
    name: "Scooters",
    description: "Electric & Fuel Scooters",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Smartphone,
    name: "Electronics",
    description: "Phones, Laptops, Gadgets",
    color: "bg-muted-foreground/10 text-muted-foreground",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer border-border transition-all duration-300 hover:border-primary hover:shadow-[var(--card-shadow-hover)]"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className={`mb-4 rounded-full p-4 transition-transform duration-300 group-hover:scale-110 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
