"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

export default function CustomCarousel() {
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  // Custom navigation buttons outside the Swiper component
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign the Swiper instance to the ref
        spaceBetween={50}
        slidesPerView={3.5}
        loop={true}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      {/* Navigation buttons */}
      <button onClick={goPrev}>Previous</button>
      <button onClick={goNext}>Next</button>
    </>
  );
}
