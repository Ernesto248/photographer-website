"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function FeaturedWork() {
  const ref = useRef(null);
  const swiperRef = useRef<any>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredImages = [
    {
      src: "/romantic-wedding-moment.png",
      alt: "Wedding photography",
      category: "Weddings",
    },
    {
      src: "/outdoor-family-portrait.png",
      alt: "Family portrait",
      category: "Portraits",
    },
    {
      src: "/corporate-professional-business.png",
      alt: "Corporate photography",
      category: "Corporate",
    },
    {
      src: "/celebration-party.png",
      alt: "Event photography",
      category: "Events",
    },
  ];

  // Check if we have enough slides for loop mode, if not, duplicate them
  const getDisplaySlides = () => {
    if (featuredImages.length >= 6) {
      return featuredImages;
    }
    // Duplicate slides to have enough for loop mode
    return [...featuredImages, ...featuredImages];
  };

  const displaySlides = getDisplaySlides();
  const hasEnoughSlidesForLoop = displaySlides.length >= 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work that captures the essence of each
            special moment
          </p>
        </motion.div>

        {/* Mobile Carousel (sm and below) */}
        <div className="block md:hidden mb-12">
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next-featured",
                prevEl: ".swiper-button-prev-featured",
              }}
              onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1.4,
                  spaceBetween: 20,
                },
              }}
              className="featured-work-swiper"
              style={
                {
                  "--swiper-pagination-color": "hsl(var(--primary))",
                  "--swiper-pagination-bullet-inactive-color":
                    "hsl(var(--muted-foreground))",
                  "--swiper-pagination-bullet-size": "10px",
                  "--swiper-pagination-bullet-horizontal-gap": "4px",
                } as any
              }
            >
              {displaySlides.map((image, index) => (
                <SwiperSlide key={`${image.src}-${index}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 mx-2">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 85vw, 400px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-medium bg-accent px-3 py-1 rounded-full">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-prev-featured absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-border shadow-lg w-10 h-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="swiper-button-next-featured absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border-border shadow-lg w-10 h-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid (md and above) */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredImages.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority={index < 2}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-medium bg-accent px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
