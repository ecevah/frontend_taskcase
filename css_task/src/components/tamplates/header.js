import HeaderItems from "../molecules/header/header_items";
import HeaderLogo from "../atoms/header/header_logo";
import CustomButton from "@/components/atoms/buttons/custom_buttons";
import { HEADER } from "@/constant/constant";

const Header = () => {
  return (
    <>
      <div
        id="layout"
        className="flex flex-row justify-between items-center h-[97px] w-full"
      >
        <HeaderLogo companyName={HEADER.logo.companyName} />
        <div className="flex flex-row">
          <HeaderItems />
          <CustomButton
            text={HEADER.button.text}
            boxColor={HEADER.button.boxColor}
            textColor={HEADER.button.textColor}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
