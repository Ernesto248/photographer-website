import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Heart, Users, Building, PartyPopper } from "lucide-react"

export function ServicePackages() {
  const packages = [
    {
      icon: Heart,
      name: "Complete Wedding",
      price: "$2,500",
      duration: "8 hours",
      popular: true,
      features: [
        "Full event coverage",
        "300+ edited photos",
        "Private online gallery",
        "Digital album included",
        "Free engagement session",
        "Delivery in 4-6 weeks",
      ],
    },
    {
      icon: Users,
      name: "Family Session",
      price: "$350",
      duration: "1 hour",
      popular: false,
      features: [
        "1-hour session",
        "50+ edited photos",
        "Private online gallery",
        "High-resolution photos",
        "Location of choice",
        "Delivery in 1-2 weeks",
      ],
    },
    {
      icon: Building,
      name: "Corporate",
      price: "$500",
      duration: "2 hours",
      popular: false,
      features: [
        "Professional portraits",
        "Team photos",
        "100+ edited photos",
        "Commercial use included",
        "Express 48h delivery",
        "Office session",
      ],
    },
    {
      icon: PartyPopper,
      name: "Special Event",
      price: "$800",
      duration: "4 hours",
      popular: false,
      features: [
        "Event coverage",
        "200+ edited photos",
        "Private online gallery",
        "Key moments captured",
        "Delivery in 2 weeks",
        "Security backup",
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Service Packages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible options tailored to your needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? "border-primary shadow-lg" : ""}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                <p className="text-muted-foreground">{pkg.duration}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Request Info
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need something custom? All packages can be adapted to your specific needs.
          </p>
          <Button size="lg" variant="outline">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
