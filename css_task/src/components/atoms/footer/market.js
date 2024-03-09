"use client";
import { SOCIAL_ARRAY } from "@/constant/constant";
import Image from "next/image";

const Market = (props) => {
  return (
    <>
      <div className="flex flex-row justify-start items-start">
        {SOCIAL_ARRAY.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="social"
            width={24}
            height={24}
            className={
              index == 0
                ? "mr-[8px] cursor-pointer"
                : index == SOCIAL_ARRAY.length - 1
                ? "ml-[8px] cursor-pointer"
                : "mx-[8px] cursor-pointer"
            }
          />
        ))}
      </div>
    </>
  );
};

export default Market;
