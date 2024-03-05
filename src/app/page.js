import HeaderItem from "@/components/header/atoms/header_item";
import HeaderLogo from "@/components/header/atoms/header_logo";
import CustomButton from "@/components/buttons/atoms/custom_buttons";
import FlyShoe from "@/components/absolute_photos/fly_shoe";
import IconWithColor from "@/components/absolute_photos/icon_with_color";
import WorldMap from "@/components/world_map/world_map";

export default function Home() {
  return (
    <>
      {/*
      <HeaderItem text="merhaba" />
      <HeaderLogo companyName="caller" />
      */}
      <CustomButton text="Sign up now" color="amber" textStyle="" />
      <FlyShoe />
      <IconWithColor />
      <WorldMap />
    </>
  );
}
