import HeaderItem from "../../atoms/header/header_item";
import { HEADER } from "@/constant/constant";

const HeaderItems = () => {
  return (
    <>
      <div className="flex flex-row items-center">
        {HEADER.items.map((item, index) => (
          <div
            className={
              index == 0
                ? "mr-[8px]"
                : index == HEADER.items.length - 1
                ? "ml-[8px] mr-[16px]"
                : "mx-[8px]"
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
