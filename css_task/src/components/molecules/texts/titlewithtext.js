import Title from "@/components/atoms/texts/title";
import Text from "@/components/atoms/texts/text";

{
  /*
The component is organized with a set of inner elements within a <div> element. 
Content is received as props and placed through specific components.

The content consists of the following elements:

Title - Added using the Title component. Title text, size, color, and style properties are retrieved from props.
Spacing - A <div> element is added and used to add space. This element has a specific height with the h-[32px] 
class and a transparent background with the bg-transparent class.
Text - Added using the Text component. Text content, size, color and style properties are retrieved from props.

props => titleText, titleSize, titleColor, titleStyle, textText, textColor, textStyle, textSize
*/
}
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
