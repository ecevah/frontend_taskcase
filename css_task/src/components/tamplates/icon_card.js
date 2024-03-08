import { ICON_CARD } from "@/constant/constant";
import IconCardIcon from "../atoms/icon_card/icon_card";

const IconCard = (props) => {
  return (
    <>
      <div
        id="layout"
        className="flex flex-row justify-between items-start w-full py-[80px]"
      >
        {ICON_CARD.map((icon, index) => (
          <IconCardIcon
            key={`Icon Card Icon ${index + 1}`}
            textText={icon.text}
            titleText={icon.title}
            iconColor={icon.iconColor}
            style={index != 0 ? "ml-[80px]" : ""}
          />
        ))}
      </div>
    </>
  );
};

export default IconCard;
