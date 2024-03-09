import WorldMap from "../atoms/world_map/world_map";

const World = (props) => {
  return (
    <>
      <div className="w-full md:h-[717px] h-[807px] bg-custom-amber relative z-[99] flex flex-col justify-center items-center">
        <div className="absolute md:py-[42px] y-[47px] md:right-[calc((100%-1150px)/2)] -right-[600px] ">
          <WorldMap />
        </div>
        <div className=" flex flex-col justify-start items-center">
          <div className="z-10 font-extrabold text-[96px] leading-[110%] text-[#FFFBEB]">
            11,658,467
          </div>
          <div className="z-10 font-extrabold text-[56px] leading-[110%] text-[#FFFBEB]">
            Shoes Collected
          </div>
        </div>
      </div>
    </>
  );
};

export default World;
