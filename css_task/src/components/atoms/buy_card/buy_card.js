import Image from "next/image";
import CustomButton from "../buttons/custom_buttons";
import Text from "../texts/text";
import Title from "../texts/title";

{
  /*

This widget contains a product's image, title, description, and a buy button.

The component is organized with a set of inner elements within a <div> element. 
Content is received as props and placed through specific components.

The content consists of the following elements:
- Product image - Added using the Image component. The image is retrieved from props and formatted with specific dimensions and style properties.
- Title - Added using the Title component. The title is taken from the component's title prop and formatted with a specific text size, color, and style.
- Text description - Added using the Text component. The description is retrieved from the component's text prop and formatted with a specific text size, color, and style.
- Purchase button - Added using the CustomButton component. The button text is taken from the component's text prop, and the "icon" prop is set to true for the visual icon. Additionally, the button's style properties are specified via the boxStyle prop.
- This component creates a shopping card with a product's information and a purchase button. Its design can be customized with specific sizes, colors and styles.


props => image, alt, title, text
*/
}

const BuyCard = (props) => {
  return (
    <>
      <div
        id="buyShadow"
        className=" flex flex-col w-[394.67px] max-[440px]:w-full justify-start items-start bg-custom-dark-blue border-solid border-[1px] border-custom-dark-blue rounded-[10px] overflow-hidden p-0"
      >
        <Image
          src={props.image}
          alt={props.alt}
          width={394.67}
          height={220}
          style={{ objectFit: "cover" }}
        />
        <div className="p-[32px] flex flex-col items-start justify-start w-full">
          <Title
            text={props.title}
            color="text-white"
            size="text-[24px]"
            style="!font-bold"
          />
          <Text
            text={props.text}
            color="text-white"
            style="mt-[16px] mb-[32px]"
          />
          <CustomButton icon="true" text="Buy Now" boxStyle="!w-full" />
        </div>
      </div>
    </>
  );
};

export default BuyCard;
