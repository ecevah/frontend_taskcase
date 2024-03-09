const Title = (props) => {
  return (
    <>
      <h2
        data-aos="fade-up-left"
        className={`font-extrabold leading-[110%] ${
          props.size ?? "xl:text-[56px] text-[32px]"
        } ${props.color ?? "text-custom-dark-blue"} ${props.style}`}
      >
        {props.text}
      </h2>
    </>
  );
};

export default Title;
