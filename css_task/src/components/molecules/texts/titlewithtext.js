import Title from "@/components/atoms/texts/title";
import Text from "@/components/atoms/texts/text";

const TitleWithText = (props) => {
  return (
    <>
      <div className="flex flex-col w-full items-start justify-start">
        <Title
          text={props.titleText}
          size={props.titleSize}
          color={props.titleColor}
          style={`${props.titleStyle}`}
        />
        <div className={"h-[32px] bg-transparent"} />
        <Text
          text={props.textText}
          size={props.textSize}
          color={props.textColor}
          style={props.textStyle}
        />
      </div>
    </>
  );
};

export default TitleWithText;
