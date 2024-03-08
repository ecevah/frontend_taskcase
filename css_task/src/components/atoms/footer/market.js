"use client";
import { SOCIAL_ARRAY } from "@/constant/constant";
import Image from "next/image";

const Market = (props) => {
  return (
    <>
      <div className="flex flex-row justify-start items-start">
        {SOCIAL_ARRAY.map((item, index) => (
          <Image
            src={item}
            alt="social"
            width={24}
            height={24}
            className={
              index == 0
                ? "mr-[8px]"
                : index == SOCIAL_ARRAY.length - 1
                ? "ml-[8px]"
                : "mx-[8px]"
            }
          />
        ))}
      </div>
    </>
  );
};

export default Market;
