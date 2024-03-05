import HeaderItem from "@/components/header/atoms/header_item";
import HeaderLogo from "@/components/header/atoms/header_logo";
import CustomButton from "@/components/buttons/atoms/custom_buttons";

export default function Home() {
  return (
    <>
      {/*
      <HeaderItem text="merhaba" />
      <HeaderLogo companyName="caller" />
      */}
      <CustomButton text="Sign up now" color="amber" textStyle="" icon="true" />
    </>
  );
}
