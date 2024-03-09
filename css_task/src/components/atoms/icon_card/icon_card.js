import IconWithColor from "../absolute_photos/icon_with_color";
import Text from "../texts/text";

const IconCardIcon = (props) => {
  return (
    <>
      <div
        className={`flex flex-col w-[373.33px] min-w-[373.33px] items-center xl:items-start ${props.style}`}
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
