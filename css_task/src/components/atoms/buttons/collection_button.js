import { ARROW_RIGHT_BLACK_PATH, ROCKET_PATH } from "@/constant/constant";
import Image from "next/image";

{
  /* 
It contains a rocket icon, a text content, and a right arrow icon. 
This component provides the user with a button to display a collection.

The component aligns content horizontally using the flex layout. The 
button has styling properties such as margins like p-[16px] and rounded edges. 
There is also an animation effect that changes color when the button is hovered 
over and clicked.

The content of the button consists of three elements:
- A rocket icon (retrieved from ROCKET_PATH) - Added using the Image component.
- The text content is contained within the -p tag and is formatted with a specific text size, weight and spacing.
- A right arrow icon (taken from ARROW_RIGHT_BLACK_PATH) - also added using the Image component.
*/
}

const CollectionButton = (props) => {
  return (
    <>
      <button className="flex flex-row p-[16px] justify-start items-center my-[8px] rounded-[8px] bg-transparent hover:bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1), [0_0px_4px_0px_rgba(0,0,0,0.07)]">
        <Image src={ROCKET_PATH} width={24} height={24} alt="roker" />
        <p className="font-medium text-[20px] leading-[24px] tracking-[0.5px] text-custom-dark-blue ml-[16px] mr-[8px]">
          Bibendum tellus
        </p>
        <Image
          src={ARROW_RIGHT_BLACK_PATH}
          width={24}
          height={24}
          alt="Right Arrow"
        />
      </button>
    </>
  );
};
