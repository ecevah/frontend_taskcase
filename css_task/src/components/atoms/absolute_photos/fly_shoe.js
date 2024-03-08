import { PIEDRA_PATH } from "@/constant/constant";
import Image from "next/image";

const FlyShoe = () => {
  return (
    <>
      <div className="relative min-w-[486px] h-[423px] overflow-hidden flex flex-row items-end">
        <div className="max-w-[367px] w-[367px] max-h-[372px] h-[372px] bg-[#FBBF24] rounded-[50px] ml-[51px]"></div>
        <Image
          src={PIEDRA_PATH}
          width={460}
          height={423}
          alt="Piedra"
          style={{ objectFit: "contain" }}
          className="absolute object-contain max-w-[486px] left-0 bottom-[35px]"
        />
      </div>
    </>
  );
};

export default FlyShoe;
