import {
  TROPHY_PATH,
  BLUE_PATH,
  TUNNEL_PATH,
  GREEN_PATH,
  TV_PATH,
  PINK_PATH,
} from "@/constant/constant";
import Image from "next/image";

const IconWithColor = (props) => {
  return (
    <>
      {props.color == "blue" ? (
        <div className="relative">
          <Image src={TROPHY_PATH} width="64" height="64" alt="trophy" />
          <Image
            src={BLUE_PATH}
            width={45}
            height={45}
            alt="blue"
            className="absolute top-[2px] left-[27px] rotateAnimation"
          />
        </div>
      ) : props.color == "green" ? (
        <div className="relative">
          <Image src={TUNNEL_PATH} width="64" height="64" alt="trophy" />
          <Image
            src={GREEN_PATH}
            width={40}
            height={40}
            alt="blue"
            className="absolute -top-[2px] left-[23px] rotateReverseAnimation"
          />
        </div>
      ) : (
        <div className="relative">
          <Image src={TV_PATH} width="64" height="64" alt="trophy" />
          <Image
            src={PINK_PATH}
            width={40}
            height={40}
            alt="blue"
            className="absolute top-[1px] left-[42px] jumpAnimation"
          />
        </div>
      )}
    </>
  );
};

export default IconWithColor;
