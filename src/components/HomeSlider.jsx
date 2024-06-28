"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function HomeSlider() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 2000,
    })
  );
  const urlArray = [
    {
      id: 1,
      url: "https://mhcp-prod.s3.us-west-2.amazonaws.com/banners/660d45f7b09d5651ed925805/image.jpg",
    },
    {
      id: 2,
      url: "https://www.manipalhospitals.com/yeshwanthpur/uploads/images/default-page-banner.jpg",
    },
    {
      id: 3,
      url: "https://mhcp-prod.s3.us-west-2.amazonaws.com/banners/660d45f7b09d5651ed925805/image.jpg",
    },
    // { id: 2, url: "https://shorturl.at/PUKyh" },
    // { id: 3, url: "https://shorturl.at/PUKyh" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Carousel className="w-full max-w-screen" plugins={[autoplayRef.current]}>
        <CarouselContent>
          {urlArray.map((item) => (
            <CarouselItem key={item.id}>
              <div className="w-full overflow-hidden h-full">
                <img
                  className="w-full h-full object-full"
                  src={item.url}
                  alt="slider"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HomeSlider;
