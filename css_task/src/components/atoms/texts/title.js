const Title = (props) => {
  return (
    <>
      <h2
        className={`font-extrabold leading-[110%] ${
          props.size ?? "text-[56px]"
        } ${props.color ?? "text-custom-dark-blue"} ${props.style}`}
      >
        {props.text}
      </h2>
    </>
  );
};

export default Title;
