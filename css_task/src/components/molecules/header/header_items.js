import HeaderItem from "../../atoms/header/header_item";
import { HEADER } from "@/constant/constant";

const HeaderItems = () => {
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
