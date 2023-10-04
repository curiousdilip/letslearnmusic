"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { gallery } from "../data/home";
// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
export default function Gallery() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={0}
        loop={true}
        modules={[Navigation]}
        className="gallery"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index}>
            {/* <Image
                src={item.src}
                width={1000}
                height={1000}
                alt={item.title}
                className="img-fluid"
                style={{ objectFit: "cover" }}
              /> */}
            <img src={item.src} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
