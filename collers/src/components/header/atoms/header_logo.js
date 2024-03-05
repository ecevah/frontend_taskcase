import Link from "next/link";

const HeaderLogo = (props) => {
  //
  return (
    <>
      <Link
        href={props.path ?? "/"}
        className="font-bold text-[32px] indent-[5px] leading-[110%] text-custom-amber"
      >
        {props.companyName}
      </Link>
    </>
  );
};

export default HeaderLogo;
