"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Users,
  Building,
  PartyPopper,
  Camera,
  Grid3X3,
  Layers,
} from "lucide-react";
import { PortfolioSwiper } from "@/components/portfolio/portfolio-swiper";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { motion } from "framer-motion";

// Each item now uses a unique image (no duplicates). Count matches number of unique image assets used.
const portfolioItems = [
  {
    id: 1,
    src: "https://lf9ta072ri0w9ubt.public.blob.vercel-storage.com/images/romantic-wedding-moment.png",
    alt: "Romantic wedding moment in garden",
    category: "weddings",
    title: "Garden Romance",
    description: "An intimate ceremony surrounded by nature",
  },
  {
    id: 2,
    src: "https://lf9ta072ri0w9ubt.public.blob.vercel-storage.com/images/celebration-party.png",
    alt: "Wedding celebration party",
    category: "events",
    title: "Evening Celebration",
    description: "Energy and joy on the dance floor",
  },
  {
    id: 3,
    src: "https://lf9ta072ri0w9ubt.public.blob.vercel-storage.com/images/outdoor-family-portrait.png",
    alt: "Outdoor family portrait in park",
    category: "portraits",
    title: "Family in the Park",
    description: "Natural family moments",
  },
  {
    id: 4,
    src: "/portrait-studio-setup.png",
    alt: "Professional studio portrait setup",
    category: "portraits",
    title: "Studio Session",
    description: "Elegance and personality",
  },
  {
    id: 5,
    src: "/corporate-professional-business.png",
    alt: "Professional corporate team portrait",
    category: "corporate",
    title: "Executive Team",
    description: "Professionalism and trust",
  },
  {
    id: 6,
    src: "/charity-gala-event.png",
    alt: "Charity gala formal event",
    category: "events",
    title: "Charity Gala",
    description: "Elegance for a cause",
  },
  {
    id: 7,
    src: "/corporate-awards-ceremony.png",
    alt: "Corporate awards ceremony stage",
    category: "corporate",
    title: "Awards Night",
    description: "Celebrating achievements",
  },
  {
    id: 8,
    src: "/elegant-wedding-portrait.png",
    alt: "Elegant wedding portrait at sunset",
    category: "weddings",
    title: "Golden Elegance",
    description: "Romance in golden hour",
  },
  {
    id: 9,
    src: "/newborn-baby-portrait.png",
    alt: "Newborn baby portrait",
    category: "portraits",
    title: "New Life",
    description: "Precious first moments",
  },
  {
    id: 10,
    src: "/engagement-couple-beach.png",
    alt: "Engagement couple on beach",
    category: "portraits",
    title: "Beach Engagement",
    description: "Love by the ocean",
  },
  {
    id: 11,
    src: "/wedding-first-dance-romantic.png",
    alt: "Romantic first dance at wedding",
    category: "weddings",
    title: "First Dance",
    description: "A magical moment on the dance floor",
  },
  {
    id: 12,
    src: "/corporate-product-launch.png",
    alt: "Corporate product launch presentation",
    category: "corporate",
    title: "Product Launch",
    description: "Innovation and excitement",
  },
  {
    id: 13,
    src: "/wedding-bridal-preparation.png",
    alt: "Bridal preparation moments",
    category: "weddings",
    title: "Getting Ready",
    description: "The anticipation before the big moment",
  },
  {
    id: 14,
    src: "/family-holiday-portrait.png",
    alt: "Family holiday portrait",
    category: "portraits",
    title: "Holiday Memories",
    description: "Festive family moments",
  },
];

const categories = [
  { id: "all", name: "All", icon: Camera },
  { id: "weddings", name: "Weddings", icon: Heart },
  { id: "portraits", name: "Portraits", icon: Users },
  { id: "corporate", name: "Corporate", icon: Building },
  { id: "events", name: "Events", icon: PartyPopper },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "swiper">("grid");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="min-h-[44px]"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Link>
              </Button>
            </motion.div>
            <div className="flex gap-1 sm:gap-2 bg-muted/50 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="min-h-[40px] px-3 sm:px-4"
              >
                <Grid3X3 className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Grid</span>
              </Button>
              <Button
                variant={viewMode === "swiper" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("swiper")}
                className="min-h-[40px] px-3 sm:px-4"
              >
                <Layers className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Carousel</span>
              </Button>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Portfolio
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A collection of my most outstanding work, each image tells a
              unique story
            </motion.p>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex overflow-x-auto pb-2 gap-2 sm:gap-3 sm:flex-wrap sm:justify-center scrollbar-hide">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <Button
                    variant={
                      activeCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="flex items-center gap-2 min-h-[40px] px-3 sm:px-4 whitespace-nowrap"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="text-sm sm:text-base">
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.id === "all"
                        ? portfolioItems.length
                        : portfolioItems.filter(
                            (item) => item.category === category.id
                          ).length}
                    </Badge>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "grid" ? (
            <PortfolioGrid items={filteredItems} />
          ) : (
            <PortfolioSwiper items={filteredItems} />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Like What You See?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each image in my portfolio represents a unique story. I'd love to
            help you create yours.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-h-[48px]"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] bg-transparent"
              >
                <Link href="/about">Learn My Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
