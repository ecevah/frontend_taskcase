import { FOOTER, WORD_ICON_PATH } from "@/constant/constant";
import FooterTitle from "../atoms/footer/footer_title";
import FooterItem from "../atoms/footer/footer_item";
import Image from "next/image";
import Market from "../atoms/footer/market";

const Footer = (props) => {
  return (
    <>
      <div className="w-full bg-custom-dark-blue">
        <div
          id="layout"
          className="flex flex-row justify-between items-start py-[48px]"
        >
          <div className="flex flex-col justify-start items-start w-[284px]">
            <FooterTitle text={FOOTER.items[0].title} />
            {FOOTER.items[0].item.map((item, index) => (
              <FooterItem key={index} text={item} />
            ))}
          </div>
          <div className="flex flex-col justify-start items-start w-[284px]">
            <FooterTitle text={FOOTER.items[1].title} />
            {FOOTER.items[0].item.map((item, index) => (
              <FooterItem key={index} text={item} />
            ))}
          </div>
          <div className="flex flex-col justify-start items-start w-[284px]">
            <FooterTitle text={FOOTER.items[2].title} />
            {FOOTER.items[0].item.map((item, index) => (
              <FooterItem key={index} text={item} />
            ))}
          </div>
          <div className="flex flex-col justify-between items-start w-[284px]">
            <FooterTitle text={FOOTER.social.title} />
            <div className="mt-[20px] mb-[97px]">
              <Image
                src={FOOTER.social.market[0]}
                width={120}
                height={40}
                alt="apple"
                className="mb-[12px]"
              />
              <Image
                src={FOOTER.social.market[1]}
                width={135}
                height={40}
                alt="google"
              />
            </div>
            <Market />
          </div>
        </div>
        <div
          id="layout"
          className="w-full h-[1px] bg-[#e2e8f089] mt-[4px]"
        ></div>
        <div
          id="layout"
          className="flex flex-row justify-between w-full items-center py-[24px]"
        >
          <FooterItem text={FOOTER.copyright.title} />
          <div className="flex flex-row justify-start items-start">
            {FOOTER.copyright.items.map((item, i) => (
              <div className="mr-[32px]" key={i}>
                <FooterItem text={item} />
              </div>
            ))}
            <div className="flex flex-row items-center">
              <Image
                src={WORD_ICON_PATH}
                width={20}
                height={20}
                alt="world icon"
                className="mr-[8px]"
              />
              <FooterItem text="EN" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
