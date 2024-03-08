import FlyShoe from "../atoms/absolute_photos/fly_shoe";
import CustomButton from "../atoms/buttons/custom_buttons";
import WatchVideo from "../atoms/buttons/watch_videos";
import TitleWithText from "../molecules/texts/titlewithtext";
import { HERO_CARD } from "@/constant/constant";

const HeroCard = (props) => {
  return (
    <>
      <div
        id="layout"
        className="flex flex-row justify-between items-center py-[80px]"
      >
        <div className="flex flex-col h-fit items-start">
          <TitleWithText
            titleText={HERO_CARD.title.text}
            titleColor={HERO_CARD.title.color}
            titleSize={HERO_CARD.title.size}
            textText={HERO_CARD.text.text}
            textSize={HERO_CARD.text.size}
            textColor={HERO_CARD.text.color}
            textStyle={HERO_CARD.text.style}
          />
          <div className="flex flex-row mt-[32px]">
            <CustomButton
              boxColor={HERO_CARD.button.boxColor}
              textColor={HERO_CARD.button.textColor}
              textStyle={HERO_CARD.button.textStyle}
              text={HERO_CARD.button.text}
              boxStyle={"mr-[16px]"}
            />
            <WatchVideo />
          </div>
        </div>
        <FlyShoe />
      </div>
    </>
  );
};

export default HeroCard;
