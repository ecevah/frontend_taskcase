import { ARROW_RIGHT_BLACK_PATH, ROCKET_PATH } from "@/constant/constant";
import Image from "next/image";

const CollectionButton = (props) => {
  return (
    <>
      <button className="flex flex-row p-[16px] justify-start items-center my-[8px] rounded-[8px] bg-transparent hover:bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1), [0_0px_4px_0px_rgba(0,0,0,0.07)]">
        <Image src={ROCKET_PATH} width={24} height={24} alt="roker" />
        <p className="font-medium text-[20px] leading-[24px] tracking-[0.5px] text-custom-dark-blue ml-[16px] mr-[8px]">
          Bibendum tellus
        </p>
        <Image
          src={ARROW_RIGHT_BLACK_PATH}
          width={24}
          height={24}
          alt="Right Arrow"
        />
      </button>
    </>
  );
};
