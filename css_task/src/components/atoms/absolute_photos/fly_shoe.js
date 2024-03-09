import { PIEDRA_PATH } from "@/constant/constant";
import Image from "next/image";

const FlyShoe = () => {
  return (
    <>
      <div
        className="relative min-w-[486px] h-[423px] overflow-hidden flex flex-row items-end max-[430px]:scale-[70%] max-[500px]:scale-[90%] xl:scale-100"
        data-aos="fade-up-left"
      >
        <div className="max-w-[367px] w-[367px] max-h-[372px] h-[372px] bg-[#FBBF24] rounded-[50px] ml-[51px]"></div>
        <Image
          src={PIEDRA_PATH}
          width={460}
          height={423}
          alt="Piedra"
          className="absolute object-contain max-w-[486px] left-0 bottom-[35px] SwingRotate"
        />
      </div>
    </>
  );
};

export default FlyShoe;
