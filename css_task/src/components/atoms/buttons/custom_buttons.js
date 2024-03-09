import Image from "next/image";
import { SHOPPING_CARD_PATH } from "@/constant/constant";

{
  /*

It provides the user with various options: text content, icon content, 
button color, text color, and style properties.

The component contains a button element. Button properties are taken as props and 
the appearance of the component is shaped according to these properties using certain 
styling classes. In particular, it is possible to customize the color and text style of 
the button with properties such as boxColor, textColor and textStyle.

The content consists of two main elements:
- An icon (optional) - Added using the Image component. It is invisible by default (hidden with the hidden class), but becomes visible when the icon value is set to true in the props.
- It is contained within a text -p tag and is formatted with a specific text size, weight and spacing. The text content is retrieved from the component's text prop.
- The component animates the page using the data-aos feature and provides an interactive experience to the user. It also adds animations that provide visual feedback on mouse hovers and clicks.

props => boxColor, boxStyle, icon, textColor, textStyle, text
*/
}

const CustomButton = (props) => {
  return (
    <>
      <button
        data-aos="fade-up-right"
        className={`border-solid border-[2px] rounded-[8px] p-[12px] w-fit flex flex-row items-center justify-center hover:bg-[rgb(0,0,0,0.05)] hover:shadow-lg ${
          props.boxColor ?? "border-white hover:!bg-[rgb(255,255,255,0.3)]"
        } ${props.boxStyle}`}
        href="#"
      >
        <Image
          src={SHOPPING_CARD_PATH}
          className={props.icon ? "flex" : "hidden"}
          alt="shop"
          width="24"
          height="24"
        />
        <p
          className={`px-[16px] font-semibold text-[16px] leading-[24px] tracking-[0.5px] ${
            props.textColor ?? "text-white"
          } ${props.textStyle}`}
        >
          {props.text}
        </p>
      </button>
    </>
  );
};

export default CustomButton;
