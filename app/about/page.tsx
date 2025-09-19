import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Award, Camera, Heart, Users, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const achievements = [
    {
      icon: Camera,
      number: "500+",
      label: "Sessions Completed",
    },
    {
      icon: Heart,
      number: "200+",
      label: "Weddings Captured",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      number: "5+",
      label: "Awards Received",
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description:
        "I capture genuine moments and real emotions, without forced poses.",
    },
    {
      title: "Creativity",
      description:
        "Each session is unique, tailored to your personality and style.",
    },
    {
      title: "Professionalism",
      description:
        "Punctuality, preparation and attention to detail in every project.",
    },
    {
      title: "Passion",
      description: "I love what I do and it shows in every photograph I take.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Hello, I'm
                <span className="block text-primary">Sarah Mitchell</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional photographer with over 5 years of experience
                capturing life's most important moments. My passion is telling
                stories through images that will last forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Let's Work Together</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl" />
              <Image
                src="/profile.jpg"
                alt="Sarah Mitchell - Professional Photographer"
                width={600}
                height={800}
                className="relative rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Story
            </h2>
            <p className="text-xl text-muted-foreground">
              How I discovered my passion for photography
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-xl leading-relaxed mb-8">
              It all started when I was 16 and my grandmother gave me her old
              film camera. What began as curiosity became an obsession with
              capturing beauty in everyday moments.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I studied Fine Arts with a specialization in Photography at New
              York University, where I perfected my technique and developed my
              unique style. During my studies, I discovered that my true passion
              was in photographing people: capturing emotions, telling stories,
              and preserving memories.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Since then, I've had the privilege of documenting over 200
              weddings, hundreds of family sessions, and corporate events. Each
              project is a new adventure, an opportunity to meet incredible
              people and be part of their most special moments.
            </p>
          </div>

          <div className="mt-12 p-8 bg-muted/50 rounded-2xl border-l-4 border-primary">
            <Quote className="h-8 w-8 text-primary mb-4" />
            <blockquote className="text-xl italic text-foreground mb-4">
              "I don't just take photographs, I create memories that will last a
              lifetime. My goal is that when you look at my images 20 years from
              now, you can relive exactly how you felt in that moment."
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              - Sarah Mitchell
            </cite>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Achievements & Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect my dedication and experience
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values that guide my work and my relationship with each client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into my creative process and professional equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="/corporate-product-launch.png"
                alt="Professional photography equipment"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-foreground">
                Professional Equipment
              </h3>
              <p className="text-muted-foreground">
                I use the latest Canon cameras and premium lenses to ensure
                maximum quality.
              </p>
            </div>

            <div className="space-y-4">
              <Image
                src="/corporate-professional-business.png"
                alt="Editing studio workspace"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-foreground">
                Editing Process
              </h3>
              <p className="text-muted-foreground">
                Each image goes through a careful editing process to enhance its
                natural beauty.
              </p>
            </div>

            <div className="space-y-4">
              <Image
                src="/romantic-wedding-moment.png"
                alt="Photographer in action"
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold text-foreground">
                In Action
              </h3>
              <p className="text-muted-foreground">
                I move discreetly to capture authentic moments without
                interrupting the natural flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Memories Together?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            I'd love to hear your story and help you capture your most special
            moments. Let's talk about your next session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
