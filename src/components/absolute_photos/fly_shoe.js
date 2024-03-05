import { PIEDRA_PATH } from "@/constant/constant";
import Image from "next/image";

const FlyShoe = () => {
  return (
    <>
      <div className="relative w-[486px] h-[483px] overflow-hidden flex flex-row items-end">
        <div className="w-[367px] h-[372px] bg-[#FBBF24] rounded-[50px] ml-[51px]"></div>
        <Image
          src={PIEDRA_PATH}
          width="486"
          height="388"
          alt="Piedra"
          className="absolute left-0 bottom-[35px]"
        />
      </div>
    </>
  );
};

export default FlyShoe;
