import CustomButton from "@/components/atoms/buttons/custom_buttons";
import BuyCard from "@/components/atoms/buy_card/buy_card";
import Text from "@/components/atoms/texts/text";
import Title from "@/components/atoms/texts/title";
import { BUY_CARD } from "@/constant/constant";
import Image from "next/image";

{
  /*
The component is organized by a series of card elements within a <div> element. 
Card items are taken from the BUY_CARD constant and mapped onto an array.

For each card element, a <div> element is created. Using the map function, each card element 
is processed according to its order in the array.

Each card item is created using the BuyCard component. This component takes the image, title, 
and description of each product and displays them accordingly.

Each card element is animated with the data-aos feature, which adds animation to the page and 
provides an interactive experience to the user.

If the number of shopping cards is odd, the cards are centered (justify-center class is added). 
Also, if the last card is odd and the page has an expanded view (one of the classes md:grid-cols-2 or 
xl:grid-cols-3 is added), that last card spans an expanded column (md:col-span-2 or xl:col-span-1 class is added).

*/
}

const BuyCards = (props) => {
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
