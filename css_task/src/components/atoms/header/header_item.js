import Link from "next/link";

{
  /*
The component contains a <Link> component, which is retrieved from the next/link module. 
The connection address is taken from the component's path prop. If path is not specified, 
# is used by default.

The content of the link is retrieved from the component's text prop and displayed as the text of the link.

The component also includes a set of CSS classes:
- mx-2: The right and left margins of the link are determined.
- my-3: The top and bottom margins of the link are determined.
- text-base: Text size is determined.
- font-medium: The thickness of the text is determined.
- leading-6: Line spacing is determined.
- tracking-[0.5px]: Letter spacing is determined.
- text-custom-amber: Text color is determined.
- props.style: Additional style classes are specified. These style classes are taken from the component's style prop.
- This component represents a title element and displays a piece of text with a link. The link directs the user to the specified address. Properties such as style and size are specified via CSS classes and can be passed externally.

props => path, text
*/
}

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
