import Image from "next/image";
import Text from "../texts/text";

const Comment = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between items-start p-[32px] w-[384px] h-[430px] border-solid border-[#E2E8F0] border-[1px] rounded-[20px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] bg-white">
        <div className="flex flex-row justify-start items-center">
          <Image
            src={props.companyImage}
            width={32}
            height={32}
            alt={props.companyAlt}
          />
          <p className="text-[#475569] text-[24px] font-bold leading-[110%] ml-[8px]">
            {props.companyName}
          </p>
        </div>
        <Text
          size="text-[24px]"
          color="text-black"
          text={props.text}
          style="my-[32px]"
        />
        <div className="flex flex-row justify-start items-center">
          <Image
            src={props.image}
            width={64}
            height={64}
            alt={props.alt}
            className="!rounded-full mr-[16px]"
          />
          <div className="flex flex-col">
            <Text color="text-black" text={props.name}></Text>
            <Text
              color="text-[#475569]"
              style="leading-[140%]"
              text={props.tag}
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
