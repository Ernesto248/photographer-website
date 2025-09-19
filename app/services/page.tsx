import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Heart,
  Users,
  Building,
  PartyPopper,
  Camera,
  Clock,
  Star,
} from "lucide-react";

export default function ServicesPage() {
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
  ];

  const additionalServices = [
    {
      icon: Camera,
      title: "Photo Editing",
      description:
        "Professional editing and retouching for your existing photos",
      price: "From $15/photo",
    },
    {
      icon: Clock,
      title: "Rush Delivery",
      description: "Need your photos faster? Get them within 24-48 hours",
      price: "+50% of package price",
    },
    {
      icon: Star,
      title: "Premium Album",
      description: "High-quality printed album with professional design",
      price: "From $300",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" size="sm" className="min-h-[44px]">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Photography Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional photography packages designed to capture your most
              important moments. Each service is crafted with attention to
              detail and personalized to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Service Packages
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible options tailored to your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? "border-primary shadow-lg" : ""
                } h-full`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground">{pkg.duration}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm"
                      >
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-auto"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">Request Info</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Need something custom? All packages can be adapted to your
              specific needs.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-[48px]"
            >
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Extra services to enhance your photography experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-primary">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose My Services */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose My Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              What makes my photography services unique and valuable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Professional Equipment
              </h3>
              <p className="text-muted-foreground">
                I use the latest professional cameras and lenses to ensure
                maximum quality in every shot.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Passion & Dedication
              </h3>
              <p className="text-muted-foreground">
                Every project is approached with genuine passion and dedication
                to capture your unique story.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Exceptional Quality
              </h3>
              <p className="text-muted-foreground">
                Meticulous attention to detail in both shooting and
                post-processing ensures stunning results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Book Your Session?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss your photography needs and create a package that's
            perfect for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="min-h-[48px]"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent min-h-[48px]"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
