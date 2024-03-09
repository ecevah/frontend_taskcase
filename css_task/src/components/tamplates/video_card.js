import Title from "../atoms/texts/title";
import Image from "next/image";
import { CHECK_PATH, VIDEO_CARD } from "@/constant/constant";
import Text from "../atoms/texts/text";
import CustomButton from "../atoms/buttons/custom_buttons";
import Shape from "../atoms/absolute_photos/shape";

const VideoCard = (props) => {
  return (
    <>
      <div
        id="layout"
        className="w-full py-[20px] xl:py-[160px] h-auto xl:h-fit"
      >
        <div className="relative flex flex-col justify-start xl:justify-center items-center xl:items-start bg-white rounded-[30px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-[16px] sm:p-[32px] xl:p-[80px] h-auto">
          <Title text={VIDEO_CARD.title} />
          <div className="my-[24px]">
            {VIDEO_CARD.content.map((item, index) => (
              <div
                className="flex flex-row justify-start items-center"
                key={`Check Text ${index}`}
              >
                <Image src={CHECK_PATH} alt="tick" width={24} height={24} />
                <Text
                  text={item}
                  style="ml-[10px] leading-[180%] text-[16px] sm:text-[18px] xl:text-[20px]"
                />
              </div>
            ))}
          </div>
          <CustomButton
            textStyle={VIDEO_CARD.button.textStyle}
            textColor={VIDEO_CARD.button.textColor}
            text={VIDEO_CARD.button.text}
            boxStyle={VIDEO_CARD.button.boxStyle}
            boxColor={VIDEO_CARD.button.boxColor}
          />
          <div className="xl:absolute relative xl:-top-[85px] xl:-right-[38px] -bottom-[30px] sm:-bottom-[100px] xl:bottom-auto z-0 xl:z-50">
            <Shape />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
