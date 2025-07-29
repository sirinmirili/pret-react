import { Images } from "../../Images/images";
import LinkButton from "../LinkButton";
import Text from "../Text";

export const BigMenuCard = ({
  to,
  image,
  text,
  imageWidth,
  imageHeight,
  btnStyle,
  linkText,
  headerText,
}) => {
  return (
    <div className="flex flex-col h-[1144px] md:w-[70%] w-[90%] gap-y-8 items-center">
      <Images name={image} width={imageWidth} height={imageHeight} />
      {headerText && (
        <Text
          textStyle="text-[32px] md:text-[40px] font-semibold font-playfair text-[#372F31]"
          text={headerText}
        />
      )}
      <Text
        text={text}
        textStyle="text-[#372F31] text-center mb-5 text-[18px] "
      />
      <LinkButton to={to} btnStyle={btnStyle} text={linkText} />
    </div>
  );
};
