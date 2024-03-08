import { PLAY_CIRCLE_PATH } from "@/constant/constant";
import Image from "next/image";

const WatchVideo = (props) => {
  return (
    <>
      <button className=" border-none bg-transparent flex flex-row px-[8px] py-[12px]">
        <Image src={PLAY_CIRCLE_PATH} height={24} width={24} alt="Play Icon" />
        <p className="text-custom-amber text-[16px] font-medium leading-[24px] indent-[0.5px] mx-[8px]">
          WatchVideo
        </p>
      </button>
    </>
  );
};

export default WatchVideo;
