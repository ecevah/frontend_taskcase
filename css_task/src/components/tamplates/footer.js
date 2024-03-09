import { FOOTER, WORD_ICON_PATH } from "@/constant/constant";
import FooterTitle from "../atoms/footer/footer_title";
import FooterItem from "../atoms/footer/footer_item";
import Image from "next/image";
import Market from "../atoms/footer/market";

const Footer = (props) => {
  return (
    <>
      <div className="w-full bg-custom-dark-blue text-white">
        <div
          id="layout"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[48px] px-4"
          data-aos="fade-up"
        >
          {FOOTER.items.map((footerGroup, index) => (
            <div
              key={`Footer Group ${index}`}
              className="flex flex-col justify-start lg:items-start items-center"
            >
              <FooterTitle text={footerGroup.title} />
              {footerGroup.item.map((item, itemIndex) => (
                <FooterItem
                  key={`Footer Item ${index} ${itemIndex}`}
                  text={item}
                />
              ))}
            </div>
          ))}
          <div
            className="flex flex-col justify-start lg:items-start items-center w-full lg:w-auto px-4 lg:px-0"
            data-aos="fade-up"
          >
            <FooterTitle text={FOOTER.social.title} />
            <div className="mt-5 mb-24 lg:mt-[20px] lg:mb-[97px] flex flex-col lg:items-start items-center">
              {FOOTER.social.market.map((market, marketIndex) => (
                <Image
                  src={market}
                  width={marketIndex === 0 ? 120 : 135}
                  height={40}
                  alt={marketIndex === 0 ? "apple" : "google"}
                  className="mb-4 last:mb-0 cursor-pointer"
                  key={`Market ${marketIndex}`}
                />
              ))}
            </div>
            <Market />
          </div>
        </div>
        <div id="layout" className="w-full h-[1px] bg-[#e2e8f089] my-4"></div>
        <div
          id="layout"
          className="flex flex-col md:flex-row justify-between items-center py-6 px-4 lg:py-[24px] lg:px-0"
        >
          <FooterItem text={FOOTER.copyright.title} />
          <div className="flex flex-wrap justify-start items-center mt-4 lg:mt-0">
            {FOOTER.copyright.items.map((item, i) => (
              <div className="mr-8 lg:mb-0" key={`Footer copyright ${i}`}>
                <FooterItem text={item} />
              </div>
            ))}
            <div className="flex flex-row items-center">
              <Image
                src={WORD_ICON_PATH}
                width={20}
                height={20}
                alt="world icon"
                className="mr-2"
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
