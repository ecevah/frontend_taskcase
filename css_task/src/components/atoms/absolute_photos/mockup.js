import { CONVERSE_PATH, PIEDRA_PATH, PLAY_PATH } from "@/constant/constant";
import Image from "next/image";

const Mockup = (props) => {
  return (
    <>
      <div
        id="mockupShadow"
        data-aos="fade-up"
        className={`${props.width ?? "w-[510px]"} ${
          props.height ?? "h-[340px]"
        } bg-white border-solid border-white border-[5px] rounded-[20px] flex flex-col justify-start items-start overflow-hidden m-0`}
      >
        <div className="w-full flex flex-row justify-start items-center px-[16px] pt-[15.5px] pb-[5px]">
          <div className=" cursor-pointer bg-rose-600 hover:bg-rose-800 w-[10px] h-[10px] rounded-full"></div>
          <div className=" cursor-pointer bg-amber-400 hover:bg-amber-600 w-[10px] h-[10px] rounded-full mx-[5.88px]"></div>
          <div className=" cursor-pointer bg-green-500 hover:bg-green-700 w-[10px] h-[10px] rounded-full"></div>
        </div>
        <div
          className={`w-full h-full ${props.image} flex items-center justify-center bg-cover m-0 bg-center bg-no-repeat cursor-pointer `}
        >
          {props.video ? (
            <div className="w-[144px] h-[144px] rounded-[100px] bg-[rgb(18,22,25,0.75)] flex justify-center items-center cursor-pointer hover:bg-[rgba(18,22,25,0.9)]">
              <Image
                src={PLAY_PATH}
                alt="play"
                width={96}
                height={96}
                className="ml-3"
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Mockup;
