import { Images } from "../../Images/images";
import LinkButton from "../LinkButton";
import Text from "../Text";

export const DeliveryCard = ({
  to,
  image,
  text,
  imageWidth,
  imageHeight,
  btnStyle,
  linkText,
}) => {
  return (
    <div className="flex flex-col h-[320px] w-[90%] items-center md:h-[300px] md:w-[300px]">
      <Images
        name={image}
        width={imageWidth}
        height={imageHeight}
        className="w-[260px] h-[150px] md:w-[180px] md:h-[120px]"
      />
      <Text
        text={text}
        textStyle="text-[20px] text-[#796A5F] font-bold text-center p-8"
      />
      <LinkButton
        to={to}
        btnStyle={`w-[70%] md:w-[176px] ${btnStyle}`}
        text={linkText}
      />
    </div>
  );
};
