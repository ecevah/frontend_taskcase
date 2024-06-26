"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Comment from "../atoms/comment/comment";

import "swiper/css";
import "swiper/css/navigation";

import "@/app/style/carousel.css";
import { ARROW_RIGHT_PATH, COMMENT_CARD } from "@/constant/constant";
import Title from "../atoms/texts/title";
import Image from "next/image";

const CommentTemplate = () => {
  const swiperRef = useRef(null);

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
      <div className="flex flex-col w-full py-[50px] relative xl:mt-0 mt-[50px]">
        <div
          id="layout"
          className="flex flex-row justify-between items-center mt-[30px] mb-[50px]"
        >
          <Title
            text="Because they love us"
            style="max-[367px]:text-center text-start"
          />
          <div className="customb:flex flex-row justify-center items-center hidden">
            <button
              className="p-[12px] border-solid border-custom-amber border-[2px] rounded-full mr-[24px] hover:bg-[rgb(0,0,0,0.05)]"
              onClick={goPrev}
            >
              <Image
                src={ARROW_RIGHT_PATH}
                alt="arrow"
                width={24}
                height={24}
                className="rotate-180 "
              />
            </button>
            <button
              className="p-[12px] border-solid border-custom-amber border-[2px] rounded-full hover:bg-[rgb(0,0,0,0.05)]"
              onClick={goNext}
            >
              <Image
                src={ARROW_RIGHT_PATH}
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          loop={true}
          slidesPerView={3.6}
          centeredSlides={true}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            570: {
              slidesPerView: 1.5,
            },

            787: {
              slidesPerView: 2,
            },
            972: {
              slidesPerView: 2.5,
            },
            1175: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 3.6,
            },
          }}
        >
          {COMMENT_CARD.map((comment, index) => (
            <SwiperSlide key={`Comment ${index}`}>
              <Comment
                companyImage={comment.company.image}
                companyAlt={comment.company.alt}
                companyName={comment.company.name}
                text={comment.text}
                image={comment.user.image}
                alt={comment.user.alt}
                name={comment.user.name}
                tag={comment.user.tag}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="h-[421px] custom-width md:w-[calc(100%-80px)] w-full max-w-[1280px] min-w-[768px] absolute top-[182px] left-0 md:left-[40px] bg-[#FDE68A]" />
      </div>
    </>
  );
};

export default CommentTemplate;
