"use client";
import { useState } from "react";
import {
  ARROW_RIGHT_BLACK_PATH,
  COLLECTION_CARD,
  WAVES_BG_PATH,
} from "@/constant/constant";
import TitleWithText from "../molecules/texts/titlewithtext";
import Image from "next/image";
import Mockup from "../atoms/absolute_photos/mockup";

const Collection = (props) => {
  const [state, setState] = useState(0);
  const [pastState, setPastState] = useState(2);

  const handleButton = (index) => {
    setPastState(state);
    setState(index);
  };

  return (
    <>
      <div className="relative overflow-hidden pb-[30px] xl:pb-0">
        <div
          id="layout"
          className="relative w-full pt-[80px] bg-cover bg-no-repeat"
        >
          <TitleWithText
            titleText="Grow your collection"
            textText="Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus."
          />
          <div className="xl:mt-[80px] mt-[32px] pb-[268px] w-full relative">
            <div className="flex xl:flex-col flex-row justify-start items-start w-full overflow-x-scroll scrollOff">
              {COLLECTION_CARD.map((collection, index) => (
                <button
                  key={`Buttons ${index + 1}`}
                  className={`group flex flex-row p-[16px] min-w-[256px] justify-between items-center my-[8px] xl:mx-0 mx-4 rounded-[8px] hover:bg-white hover:shadow-md w-[256px] ${
                    state === index
                      ? "bg-white collectionShadow shadow-md"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleButton(index)}
                >
                  <div className="flex flex-row">
                    <Image
                      src={collection.button.icon}
                      width={24}
                      height={24}
                      alt={collection.button.name}
                    />
                    <p className="font-medium text-[20px] leading-[24px] tracking-[0.5px] text-custom-dark-blue ml-[16px] mr-[8px]">
                      {collection.button.name}
                    </p>
                  </div>
                  <Image
                    src={ARROW_RIGHT_BLACK_PATH}
                    width={24}
                    height={24}
                    alt="Right Arrow"
                    className={`array group-hover:opacity-100 transition-opacity duration-300 ${
                      state === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ))}
            </div>
            <div className="xl:scale-100 customb:scale-[55%] scale-[40%]">
              <div
                className="absolute top-0 xl:-top-[460px] xl:right-[185px] md:right-[165px] right-[20px] cursor-pointer"
                onClick={() => handleButton(pastState)}
              >
                <Mockup
                  width="w-[749px]"
                  height="h-[400px]"
                  image={COLLECTION_CARD[pastState].imageBg}
                />
              </div>
              <div className="absolute top-[105px] xl:-top-[375px] xl:right-[91px] customsm:right-[71px] -right-[70px]">
                <Mockup
                  width="w-[749px]"
                  height="h-[400px]"
                  image={COLLECTION_CARD[state].imageBg}
                />
              </div>
              <div
                id="mockupShadow"
                className={`w-[256px] h-[286px] rounded-[10px] ${
                  COLLECTION_CARD[
                    state + 1 < COLLECTION_CARD.length ? state + 1 : 0
                  ].imageBg
                } border-solid border-white border-[5px] absolute xl:-right-[5px] customsm:-right-[25px] -right-[150px] xl:-top-[202px] top-[202px] cursor-pointer`}
                onClick={() => handleButton(state + 1)}
              ></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[50px] left-0 w-full h-full bg-[url(/svg/Waves.svg)] bg-cover bg-top-bottom -z-10"></div>
      </div>
    </>
  );
};

export default Collection;
