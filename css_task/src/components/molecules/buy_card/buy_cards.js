import CustomButton from "@/components/atoms/buttons/custom_buttons";
import BuyCard from "@/components/atoms/buy_card/buy_card";
import Text from "@/components/atoms/texts/text";
import Title from "@/components/atoms/texts/title";
import { BUY_CARD } from "@/constant/constant";
import Image from "next/image";

const BuyCards = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center z-20">
        {BUY_CARD.map((card, index) => (
          <BuyCard
            key={`Buy Card ID ${index}`}
            image={card.image.path}
            alt={card.image.alt}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </>
  );
};

export default BuyCards;
