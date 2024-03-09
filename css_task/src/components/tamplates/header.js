"use client";
import { useState } from "react";
import HeaderItems from "../molecules/header/header_items";
import HeaderLogo from "../atoms/header/header_logo";
import CustomButton from "@/components/atoms/buttons/custom_buttons";
import { HAMBURGER_PATH, HEADER, X_PATH } from "@/constant/constant";
import Image from "next/image";

const Header = () => {
  // Drawer'ın açık/kapalı durumunu tutacak state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Drawer'ı açıp kapatmak için fonksiyon
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        id="layout"
        className="flex flex-row justify-between items-center h-[97px] w-full"
      >
        <HeaderLogo companyName={HEADER.logo.companyName} />
        <div className="lg:flex lg:flex-row hidden">
          <HeaderItems />
          <CustomButton
            text={HEADER.button.text}
            boxColor={HEADER.button.boxColor}
            textColor={HEADER.button.textColor}
          />
        </div>
        <div className="lg:hidden block">
          <Image
            src={HAMBURGER_PATH}
            width={24}
            height={24}
            alt="hamburger"
            onClick={toggleDrawer}
          />
        </div>
        {isDrawerOpen && (
          <div className="drawer fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-50 p-[30px]">
            <button onClick={toggleDrawer}>
              <Image src={X_PATH} alt="close" width={24} height={24} />
            </button>
            <HeaderItems />
            <CustomButton
              text={HEADER.button.text}
              boxColor={HEADER.button.boxColor}
              textColor={HEADER.button.textColor}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
