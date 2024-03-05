import Image from "next/image";
import { SHOPPING_CARD_PATH } from "@/constant/constant";

const CustomButton = (props) => {
  return (
    <>
      <button
        className={`border-solid border-[2px] rounded-[8px] p-[12px] w-fit flex flex-row items-center justify-center ${
          props.color == "amber" ? "border-custom-amber" : "border-white"
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
          className={`px-[16px] font-medium text-[16px] leading-[24px] tracking-[0.5px] ${
            props.color == "amber" ? "text-custom-amber" : "text-white"
          } ${props.textStyle}`}
        >
          {props.text}
        </p>
      </button>
    </>
  );
};

export default CustomButton;
