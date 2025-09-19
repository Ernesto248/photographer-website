import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell me about your project and let's create unforgettable memories
              together. I'm here to capture your most special moments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Request Your Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form and I'll respond within 24 hours with a
                personalized quote.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Interested in My Photography Services?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our complete range of photography packages and find the
            perfect option for your needs.
          </p>
          <Button asChild size="lg" className="min-h-[48px]">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Answers to the most common questions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                How long does it take to receive the photos?
              </h3>
              <p className="text-muted-foreground">
                For portrait sessions and events, I deliver edited photos within
                1-2 weeks. For weddings, the delivery time is 4-6 weeks due to
                the larger volume of images and detailed editing process.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Do you include editing in your services?
              </h3>
              <p className="text-muted-foreground">
                Yes, all my packages include professional editing. Each image
                goes through a selection and retouching process to ensure
                maximum quality and aesthetic consistency.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Do you work outside the city?
              </h3>
              <p className="text-muted-foreground">
                I love traveling to capture special moments. For events outside
                the city, travel fees apply which vary depending on the
                distance.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                What happens if it rains on the session day?
              </h3>
              <p className="text-muted-foreground">
                I always have backup plans. We can reschedule at no additional
                cost or find covered locations that maintain the magic of your
                session.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
