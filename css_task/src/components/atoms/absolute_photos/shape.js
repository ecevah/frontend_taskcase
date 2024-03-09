import Mockup from "./mockup";

const Shape = (props) => {
  return (
    <>
      <div
        className="relative w-[713px] h-[625.24px] bg-transparent overflow-hidden xl:scale-100 md:scale-90 scale-75"
        data-aos="fade-up-left"
      >
        <div className="absolute w-[666.28px] h-[217.93px] bg-[#FDE68A] -rotate-45 bottom-[205px] -left-[20px] -z-2" />
        <div className="absolute w-[90px] h-[90px] bg-[rgb(180,83,9,0.75)] rounded-[30px] top-[188.19px] left-[55px] -z-2" />
        <div className="absolute w-[85px] h-[86px] bg-[rgb(21,128,61,0.75)] rounded-[50px] min-[1359px]:top-[106.05px] min-[1359px]:left-[145px] bottom-[111px] left-[145px] max-[1359px]:z-10" />
        <div className="absolute w-[59px] h-[60px] bg-[rgb(3,105,161,0.75)] rounded-[50px] top-[43.19px] right-[139px] -z-2" />
        <div className="absolute w-[74px] h-[74px] bg-[rgb(162,28,175,0.75)] rounded-[30px] bottom-[98.05px] right-[181px] -z-2" />
        <div className="absolute md:w-[218px] md:h-[218px] h-[160px] w-[160px] bg-[rgb(190,24,93,0.75)] rounded-[50px] bottom-[33.05px] md:right-0 right-[55px] -z-2" />
        <div className="absolute top-[133.19px] left-[75px] ">
          <Mockup video="true" image="bg-[url('/webp/Picture.webp')]" />
        </div>
      </div>
    </>
  );
};

export default Shape;
