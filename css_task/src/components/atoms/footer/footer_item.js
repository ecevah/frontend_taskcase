const FooterItem = (props) => {
  return (
    <>
      <button className="font-normal text-[16px] leading-[140%] text-[#E2E8F0]">
        {props.text}
      </button>
    </>
  );
};

export default FooterItem;
