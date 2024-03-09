import { ICON_CARD } from "@/constant/constant";
import IconCardIcon from "../atoms/icon_card/icon_card";

const IconCard = (props) => {
  return (
    <>
      <div
        id="layout"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center py-[80px] w-full justify-self-center content-center"
      >
        {ICON_CARD.map((icon, index) => (
          <IconCardIcon
            key={`Icon Card Icon ${index + 1}`}
            textText={icon.text}
            titleText={icon.title}
            iconColor={icon.iconColor}
            style={`transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${
              ICON_CARD.length == index + 1 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default IconCard;
