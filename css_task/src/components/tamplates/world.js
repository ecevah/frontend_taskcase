import WorldMap from "../atoms/world_map/world_map";

const World = (props) => {
  return (
    <>
      <div className="w-full h-[717px] bg-custom-amber relative z-[99] flex flex-col justify-center items-center">
        <div className="absolute top-[42px] right-[calc((100%-1150px)/2)]">
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
