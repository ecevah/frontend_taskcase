import { ICON_CARD } from "@/constant/constant";
import IconCardIcon from "../atoms/icon_card/icon_card";

const IconCard = (props) => {
  return (
    <>
      <div
        id="layout"
        className="xl:!flex xl:!flex-row xl:justify-between xl:items-start w-full py-[80px] grid-container justify-self-center content-center justify-center"
      >
        {ICON_CARD.map((icon, index) => (
          <IconCardIcon
            key={`Icon Card Icon ${index + 1}`}
            textText={icon.text}
            titleText={icon.title}
            iconColor={icon.iconColor}
            style={index != 0 ? "xl:ml-[80px]" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default IconCard;
