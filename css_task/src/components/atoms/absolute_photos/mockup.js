import { CONVERSE_PATH, PIEDRA_PATH, PLAY_PATH } from "@/constant/constant";
import Image from "next/image";

{
  /* 
This component creates a simulation/mockup area containing a specific image 
along with a play icon to play that image. The image and play icon path are 
taken as props and the appearance of the component is shaped according to these 
properties.

The component animates the page using the data-aos property. It also checks the width 
and height properties that come as props and sets the width and height of the component 
accordingly. Default values are provided, but these properties can be passed externally.

The widget has a header section (div) with a series of colored circles inside it, and then 
a div containing the main image. If there is video value in props, a play icon will be displayed. The image is added as the Image component and is provided in specific sizes.

This component creates a simulation/mockup space and adds animation along with its visual 
content to provide an interactive experience to the user.

props => widht, height, image, video
*/
}

const Mockup = (props) => {
  return (
    <>
      <div
        id="mockupShadow"
        data-aos="fade-up"
        className={`${props.width ?? "w-[510px]"} ${
          props.height ?? "h-[340px]"
        } bg-white border-solid border-white border-[5px] rounded-[20px] flex flex-col justify-start items-start overflow-hidden m-0`}
      >
        <div className="w-full flex flex-row justify-start items-center px-[16px] pt-[15.5px] pb-[5px]">
          <div className=" cursor-pointer bg-rose-600 hover:bg-rose-800 w-[10px] h-[10px] rounded-full"></div>
          <div className=" cursor-pointer bg-amber-400 hover:bg-amber-600 w-[10px] h-[10px] rounded-full mx-[5.88px]"></div>
          <div className=" cursor-pointer bg-green-500 hover:bg-green-700 w-[10px] h-[10px] rounded-full"></div>
        </div>
        <div
          className={`w-full h-full ${props.image} flex items-center justify-center bg-cover m-0 bg-center bg-no-repeat cursor-pointer `}
        >
          {props.video ? (
            <div className="w-[144px] h-[144px] rounded-[100px] bg-[rgb(18,22,25,0.75)] flex justify-center items-center cursor-pointer hover:bg-[rgba(18,22,25,0.9)]">
              <Image
                src={PLAY_PATH}
                alt="play"
                width={96}
                height={96}
                className="ml-3"
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Mockup;
