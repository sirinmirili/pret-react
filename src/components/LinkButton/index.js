const LinkButton = ({ btnStyle, text, to }) => {
  return (
    <a
      href={to}
      className={` ${btnStyle} 
        font-bold
        rounded-[4px]
        font-[montserrat] 
        flex 
        items-center 
        justify-center 
        cursor-pointer 
        no-underline
      `}
    >
      {text}
    </a>
  );
};

export default LinkButton;
