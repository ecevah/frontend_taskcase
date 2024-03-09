import Image from "next/image";
import Text from "../texts/text";

{
  /*
This component represents a user's or customer's comment and displays information about the comment.

The component is organized with a set of inner elements within a <div> element. 
Content is received as props and placed through specific components.

The content consists of the following elements:

- Company logo - added using the Image component. The image of the logo is taken from the props and 
formatted with specific dimensions.
- Company name - contained within a <p> element and formatted with a specific text size, weight and 
spacing. The company name is taken from the component's companyName prop.

- Comment text - Added using the Text component. The comment text is retrieved from the component's text
 prop and formatted with a specific text size, color, and style.

- User image - Added using the Image component. The image of the user image is taken from the props and 
formatted with specific dimensions and rounded corners.

- Username and tag - the username is displayed in one <Text> component while the tag is displayed in another 
<Text> component. This information is taken from the component's name and tag props.

- This component represents a comment and displays the content of the comment, the company name and logo, 
the user's name and tag. Properties such as style and size can be customized to specific values.

props => companyImage, companyAlt, companyName, text, image, alt, name, tag
*/
}

const Comment = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between items-start p-[32px] w-[384px] h-[430px] max-[395px]:w-[97%] border-solid border-[#E2E8F0] border-[1px] rounded-[20px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] bg-white">
        <div className="flex flex-row justify-start items-center">
          <Image
            src={props.companyImage}
            width={32}
            height={32}
            alt={props.companyAlt}
          />
          <p className="text-[#475569] text-[24px] font-bold leading-[110%] ml-[8px]">
            {props.companyName}
          </p>
        </div>
        <Text
          size="text-[24px]"
          color="text-black"
          text={props.text}
          style="my-[32px]"
        />
        <div className="flex flex-row justify-start items-center">
          <Image
            src={props.image}
            width={64}
            height={64}
            alt={props.alt}
            className="!rounded-full mr-[16px]"
          />
          <div className="flex flex-col">
            <Text color="text-black" text={props.name}></Text>
            <Text
              color="text-[#475569]"
              style="leading-[140%]"
              text={props.tag}
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
