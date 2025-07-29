import LinkButton from "../LinkButton";
import Text from "../Text";

const JobsCard = ({ headerText, text, textStyle, to, btnStyle, linkText }) => {
  return (
    <div className="w-[23%] h-[400px] border-8 border-[#e7e4e4] p-6 box-border min-w-[300px]">
      {headerText && (
        <Text
          textStyle="text-[23px] font-semibold font-montserrat text-[#372F31] mt-10"
          text={headerText}
        />
      )}
      <Text textStyle={textStyle} text={text} />
      {linkText && <LinkButton to={to} btnStyle={btnStyle} text={linkText} />}
    </div>
  );
};

export default JobsCard;
