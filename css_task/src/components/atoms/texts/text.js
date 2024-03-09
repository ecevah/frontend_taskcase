const Text = (props) => {
  return (
    <>
      <p
        data-aos="fade-up"
        className={`font-normal leading-[160%] ${props.size ?? "text-[18px]"} ${
          props.color ?? "text-custom-dark-blue"
        } ${props.style ?? ""}`}
      >
        {props.text}
      </p>
    </>
  );
};

export default Text;
