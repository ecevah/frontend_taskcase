import CustomButton from "../atoms/buttons/custom_buttons";
import Title from "../atoms/texts/title";
import BuyCards from "../molecules/buy_card/buy_cards";

const BuyCardTemplate = (props) => {
  return (
    <>
      <div className="bg-custom-dark-blue w-full relative h-[776px] z-20 my-0 py-0">
        <div id="layout" className="flex flex-col py-[80px] z-20">
          <div className="flex flex-row justify-between mb-[80px] z-20">
            <Title color="text-white" text="The best of the best" />
            <CustomButton
              textStyle="!font-bold !text-[24px] !px-[24px]"
              text="Sign up now"
              boxStyle="!px-[24px] !py-[20px] z-20"
            />
          </div>
          <BuyCards />
        </div>
        <div className="absolute w-[271px] h-[271px] bg-[rgb(190,24,93,0.75)] rounded-[50px] left-[3.125%] top-[31%] -z-1" />
        <div className="absolute w-[161px] h-[161px] bg-[rgb(3,105,161,0.75)] rounded-[50px] top-[24%] left-[34%] -z-1" />
        <div className="absolute w-[130px] h-[130px] bg-[rgb(180,83,9,0.75)] rounded-[30px] top-[66%] right-[35.5%] -z-1" />
        <div className="absolute w-[202px] h-[202px] bg-[rgb(162,28,175,0.75)] rounded-[30px] right-[12.2%] top-[66.75%] -z-1" />
        <div className="absolute w-[232px] h-[232px] bg-[rgb(21,128,61,0.75)] rounded-[50px] top-[33.11%] right-[2.5%] -z-1" />
      </div>
    </>
  );
};
export default BuyCardTemplate;
