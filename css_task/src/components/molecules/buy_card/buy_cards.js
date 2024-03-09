import CustomButton from "@/components/atoms/buttons/custom_buttons";
import BuyCard from "@/components/atoms/buy_card/buy_card";
import Text from "@/components/atoms/texts/text";
import Title from "@/components/atoms/texts/title";
import { BUY_CARD } from "@/constant/constant";
import Image from "next/image";

const BuyCards = () => {
  const isOdd = BUY_CARD.length % 2 !== 0; // Check if the number of cards is odd
  return (
    <>
      <div
        className={`w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 z-20 ${
          isOdd ? "justify-center" : ""
        }`}
      >
        {BUY_CARD.map((card, index) => {
          const isLastItem = index === BUY_CARD.length - 1;
          return (
            <div
              data-aos="fade-up"
              key={`Buy Card ID ${index}`}
              className={`justify-self-center ${
                isOdd && isLastItem ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <BuyCard
                image={card.image.path}
                alt={card.image.alt}
                title={card.title}
                text={card.text}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BuyCards;
