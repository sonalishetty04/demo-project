"use client";
import React, { useRef } from "react";
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
    { id: 1, url: "https://shorturl.at/a8mJk" },
    { id: 2, url: "https://shorturl.at/PUKyh" },
    { id: 3, url: "https://shorturl.at/PUKyh" },
  ];

  return (
    <div className=" flex items-center justify-center p-5 ">
      <Carousel
        className="w-full max-w-screen  h-1/4"
        plugins={[autoplayRef.current]}
      >
        <CarouselContent>
          {urlArray.map((item) => (
            <CarouselItem key={item.id}>
              <div className="">
                <div>
                  <img
                    className="w-full h-full object-cover"
                    src={item.url}
                    alt="slider"
                  />
                </div>
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
