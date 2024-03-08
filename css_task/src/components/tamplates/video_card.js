import Title from "../atoms/texts/title";
import Image from "next/image";
import { CHECK_PATH, VIDEO_CARD } from "@/constant/constant";
import Text from "../atoms/texts/text";
import CustomButton from "../atoms/buttons/custom_buttons";
import Shape from "../atoms/absolute_photos/shape";

const VideoCard = (props) => {
  return (
    <>
      <div id="layout" className="w-full py-[160px] ">
        <div className="relative flex flex-col justify-center items-start bg-white rounded-[30px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] p-[80px]">
          <Title text={VIDEO_CARD.title} />
          <div className="my-[24px]">
            {VIDEO_CARD.content.map((item, index) => (
              <div
                className="flex flex-row justify-start items-center"
                key={`Check Text ${index}`}
              >
                <Image src={CHECK_PATH} alt="tick" width={24} height={24} />
                <Text text={item} style="leading-[180%] text-[20px]" />
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
          <div className="absolute -top-[85px] -right-[38px]">
            <Shape />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
