import Link from "next/link";

const HeaderItem = (props) => {
  return (
    <>
      <Link
        href={props.path ?? "#"}
        className={`mx-2 my-3 text-base font-medium leading-6 tracking-[0.5px] text-custom-amber ${props.style}`}
      >
        {props.text}
      </Link>
    </>
  );
};

export default HeaderItem;
