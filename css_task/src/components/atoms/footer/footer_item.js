const FooterItem = (props) => {
  return (
    <>
      <button className="font-normal text-[16px] leading-[140%] text-[#E2E8F0] my-[12px] ">
        {props.text}
      </button>
    </>
  );
};

export default FooterItem;
