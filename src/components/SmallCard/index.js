import { Images } from "../../Images/images";
import Text from "../Text";

function SmallCard({
  headerText,
  text,
  textStyle,
  image,
  imageHeight,
  imageWidth,
}) {
  return (
    <div className=" flex flex-row md:flex-col justify-start items-center md:items-center text-left md:text-center gap-6">
      <div className="flex justify-center">
        <Images name={image} width={imageWidth} height={imageHeight} />
      </div>

      <div className="md:w-[300px] w-full flex flex-col gap-y-4">
        {headerText && (
          <Text
            textStyle="text-[18px] font-semibold font-montserrat text-[#372F31]"
            text={headerText}
          />
        )}
        <Text textStyle={textStyle} text={text} />
      </div>
    </div>
  );
}

export default SmallCard;
