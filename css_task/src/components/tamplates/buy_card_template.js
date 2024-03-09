import CustomButton from "../atoms/buttons/custom_buttons";
import Title from "../atoms/texts/title";
import BuyCards from "../molecules/buy_card/buy_cards";

const BuyCardTemplate = (props) => {
  return (
    <>
      <div className="bg-custom-dark-blue w-full relative z-20 my-0 py-0 overflow-hidden">
        <div id="layout" className="flex flex-col py-[80px] z-20">
          <div className="flex customsm:flex-row flex-col justify-between items-center mb-[80px] z-20">
            <Title
              color="text-white customsm:text-start text-center"
              text="The best of the best"
            />
            <CustomButton
              textStyle="!font-bold !text-[24px] !px-[24px]"
              text="Sign up now"
              boxStyle="!px-[24px] !py-[20px] z-20 customsm:mt-0 mt-[32px]"
            />
          </div>
          <BuyCards />
        </div>
        <div
          className="absolute xl:w-[271px] xl:h-[271px] h-[202px] w-[202px] bg-[rgb(190,24,93,0.75)] rounded-[50px] xl:left-[3.125%] xl:top-[31%] top-[29%] left-[9%] -z-1"
          data-aos="fade-down-left"
        />
        <div
          className="absolute xl:w-[161px] xl:h-[161px] h-[120px] w-[120px] bg-[rgb(3,105,161,0.75)] rounded-[50px] xl:top-[24%] xl:left-[34%] top-[49%] right-0 -z-1"
          data-aos="fade-up-rignt"
        />
        <div
          className="absolute xl:w-[130px] xl:h-[130px] h-[96px] w-[96px] bg-[rgb(180,83,9,0.75)] rounded-[30px] xl:top-[66%] xl:right-[35.5%] top-[67%] left-[14%] -z-1"
          data-aos="fade-up-left"
        />
        <div
          className="absolute xl:w-[202px] xl:h-[202px] h-[150px] w-[150px] bg-[rgb(162,28,175,0.75)] rounded-[30px] xl:right-[12.2%] xl:top-[66.75%] top-[18%] left-0 -z-1"
          data-aos="fade-down-right"
        />
        <div
          className="absolute xl:w-[232px] xl:h-[232px] h-[173px] w-[173px] bg-[rgb(21,128,61,0.75)] rounded-[50px] xl:top-[33.11%] xl:right-[2.5%] top-[12%] right-[11%] -z-1"
          data-aos="fade-up"
        />
      </div>
    </>
  );
};
export default BuyCardTemplate;
