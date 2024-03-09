import Image from "next/image";
import { SHOPPING_CARD_PATH } from "@/constant/constant";

const CustomButton = (props) => {
  return (
    <>
      <button
        data-aos="fade-up-right"
        className={`border-solid border-[2px] rounded-[8px] p-[12px] w-fit flex flex-row items-center justify-center hover:bg-[rgb(0,0,0,0.05)] hover:shadow-lg ${
          props.boxColor ?? "border-white hover:!bg-[rgb(255,255,255,0.3)]"
        } ${props.boxStyle}`}
        href="#"
      >
        <Image
          src={SHOPPING_CARD_PATH}
          className={props.icon ? "flex" : "hidden"}
          alt="shop"
          width="24"
          height="24"
        />
        <p
          className={`px-[16px] font-semibold text-[16px] leading-[24px] tracking-[0.5px] ${
            props.textColor ?? "text-white"
          } ${props.textStyle}`}
        >
          {props.text}
        </p>
      </button>
    </>
  );
};

export default CustomButton;
