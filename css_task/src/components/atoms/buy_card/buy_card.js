import Image from "next/image";
import CustomButton from "../buttons/custom_buttons";
import Text from "../texts/text";
import Title from "../texts/title";

const BuyCard = (props) => {
  return (
    <>
      <div
        id="buyShadow"
        className=" flex flex-col w-[394.67px] justify-start items-start bg-custom-dark-blue border-solid border-[1px] border-custom-dark-blue rounded-[10px] overflow-hidden p-0"
      >
        <Image
          src={props.image}
          alt={props.alt}
          width={394.67}
          height={220}
          style={{ objectFit: "cover" }}
        />
        <div className="p-[32px] flex flex-col items-start justify-start w-full">
          <Title
            text={props.title}
            color="text-white"
            size="text-[24px]"
            style="!font-bold"
          />
          <Text
            text={props.text}
            color="text-white"
            style="mt-[16px] mb-[32px]"
          />
          <CustomButton icon="true" text="Buy Now" boxStyle="!w-full" />
        </div>
      </div>
    </>
  );
};

export default BuyCard;
