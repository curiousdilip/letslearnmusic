"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { slider1 } from "../data/home";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
export default function HomeSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider-1"
      >
        {slider1.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="img-container">
              {/* <Image
                src={item.src}
                width={1000}
                height={1000}
                alt={item.title}
                className="img-fluid"
                style={{ objectFit: "cover" }}
              /> */}
              <img src={item.src} alt="" />
            </div>
            <div className="text-block">
              <div className="heading">{item.title}</div>
              <div className="description">{item.description}</div>
              <a href={item.link}>View More</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
