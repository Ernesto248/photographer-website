"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

interface PortfolioSwiperProps {
  items: PortfolioItem[];
}

export function PortfolioSwiper({ items }: PortfolioSwiperProps) {
  const swiperRef = useRef<any>(null);

  const getCategoryColor = (category: string) => {
    const colors = {
      weddings: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      portraits: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      corporate: "bg-gray-500/20 text-gray-300 border-gray-500/30",
      events: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-500/20 text-gray-300 border-gray-500/30"
    );
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, EffectCoverflow]}
        slidesPerView={1}
        spaceBetween={20}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        touchRatio={1}
        touchAngle={45}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        className="portfolio-swiper"
        style={
          {
            "--swiper-pagination-color": "rgb(96 165 250)",
            "--swiper-pagination-bullet-inactive-color": "rgb(148 163 184)",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as any
        }
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className="overflow-hidden border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-xl mx-2 sm:mx-4 mb-12">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover"
                  priority={item.id < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <Badge
                    className={`${getCategoryColor(
                      item.category
                    )} text-xs sm:text-sm border`}
                  >
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </Badge>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="outline"
        size="icon"
        className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 hover:bg-slate-700 border-slate-600 text-white shadow-lg w-10 h-10 sm:w-12 sm:h-12"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 hover:bg-slate-700 border-slate-600 text-white shadow-lg w-10 h-10 sm:w-12 sm:h-12"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
}
