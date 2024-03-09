import IconWithColor from "../absolute_photos/icon_with_color";
import Text from "../texts/text";

{
  /*
The component is organized with a set of inner elements within a <div> element. 
Content is received as props and placed through specific components.

The content consists of the following elements:
- Icon - Added using the IconWithColor component. The icon color is taken from the component's iconColor prop.
- Title text - Added using the Text component. The text is retrieved from the component's titleText prop and 
formatted with a specific text size, style, and spacing.

- Text content - Added using the Text component. The text is retrieved from the component's textText prop and 
formatted with a specific text size.

- The component's className property controls the width of the card based on different screen sizes. Additional 
style classes are taken from the component's style prop.

This component represents an icon card and contains icon, title, and text content. The design can be customized 
with specific sizes, colors and styles.

props => iconColor, titleText, textTExt,
*/
}

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
