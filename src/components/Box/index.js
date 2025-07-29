import Text from "../Text";
import LinkButton from "../LinkButton";

const Box = ({ headerText, text, btnText, to, btnStyle }) => {
  return (
    <div className="w-[90%] md:w-[77%] flex justify-center mb-20 z-10 md:-mt-24 -mt-10 bg-white">
      <div className="w-[60%] flex flex-col items-center justify-center text-center z-10 mb-12 ">
        <Text
          textStyle="font-semibold text-[40px] md:text-[48px] mt-10 font-playfair"
          text={headerText}
        />
        <Text
          textStyle="text-[18px] text-center mt-5 font-montserrat"
          text={text}
        />
        {btnText && <LinkButton to={to} btnStyle={btnStyle} text={btnText} />}
      </div>
    </div>
  );
};

export default Box;
