import HeaderItem from "../../atoms/header/header_item";
import { HEADER } from "@/constant/constant";

{
  /*
The component is organized by a series of elements within a <div> element. 
Header elements are taken from the constant HEADER and mapped onto an array.

For each header element, a <div> element is created. Using the map function, each header element 
is processed according to its order in the array.

Each header item is created using the HeaderItem component. This component takes the text and link 
path of each header element and displays them accordingly.

Each header element is assigned to the style with the className property. The first element is 
appended with a right margin (lg:mr-[8px]), the last element is appended with both right and left margins 
(lg:ml-[8px] and lg:mr-[16px]), and elements in between are given both right and left margins. margins are added 
(lg:mx-[8px]). Additionally, a top and bottom margin is added to each element (lg:my-0 my-4).

*/
}

const HeaderItems = (props) => {
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:items-center items-start">
        {HEADER.items.map((item, index) => (
          <div
            className={
              index == 0
                ? "lg:mr-[8px] lg:my-0 my-4"
                : index == HEADER.items.length - 1
                ? "lg:ml-[8px] lg:mr-[16px] lg:my-0 my-4"
                : "lg:mx-[8px] lg:my-0 my-4"
            }
            key={`Header İtem ${index}`}
          >
            <HeaderItem text={item.text} path={item.path} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderItems;
