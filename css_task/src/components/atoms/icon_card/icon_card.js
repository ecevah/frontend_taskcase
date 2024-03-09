import IconWithColor from "../absolute_photos/icon_with_color";
import Text from "../texts/text";

const IconCardIcon = (props) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className={`flex flex-col w-[373.33px] min-w-[373.33px] max-[400px]:min-w-full max-[400px]:w-full items-center xl:items-start ${props.style}`}
      >
        <IconWithColor color={props.iconColor} />
        <Text
          size="text-[20px]"
          text={props.titleText}
          style="leading-[110%] my-[16px] !font-medium xl:text-start text-center"
        />
        <Text
          size="text-[18px] xl:text-start text-center"
          text={props.textText}
        />
      </div>
    </>
  );
};

export default IconCardIcon;
