"use client";
import { SOCIAL_ARRAY } from "@/constant/constant";
import Image from "next/image";

{
  /*
The component is organized with a set of social media icons (Image component) within a 
<div> element. Social media icons are taken from the SOCIAL_ARRAY constant and mapped onto an array.

For each social media icon, an <Image> component is created. Using the map function, each symbol 
is processed according to its order in the array. The src, alt, width and height properties of icons are 
taken from the elements in SOCIAL_ARRAY.

Each icon is assigned a className, which helps distinguish the icons from each other. The first icon 
is added a right margin (mr-[8px]), the last icon is added a left margin (ml-[8px]). The icons in between 
have both right and left margins (mx-[8px]). Additionally, each icon is assigned a cursor-pointer class so 
that when hovered over it, a pointer appears and indicates that it is clickable.

*/
}

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
