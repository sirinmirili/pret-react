import { Images } from "../../Images/images";
import Text from "../Text";
import LinkButton from "../LinkButton";

function Card({
  name,
  imageWidth,
  imageHeight,
  divDirection = true,
  headerText,
  text,
  textStyle,
  to,
  linkText,
  btnStyle,
  infoText,
}) {
  return (
    <div
      className={`flex flex-col ${
        divDirection ? "sm:flex-row-reverse" : "sm:flex-row"
      } w-[90%] justify-center items-center gap-8`}
    >
      <div className="w-full flex justify-center md:w-auto">
  <Images
    name={name}
    width={imageWidth}
    height={imageHeight}
  />
</div>


      <div className="w-full sm:w-[45%] flex flex-col gap-y-4 text-center sm:text-left">
        {headerText && (
          <Text
            textStyle="text-[32px] md:text-[40px] font-semibold font-playfair text-[#372F31]"
            text={headerText}
          />
        )}

        <Text textStyle={textStyle} text={text} />

        {linkText && <LinkButton to={to} btnStyle={btnStyle} text={linkText} />}

        {infoText && (
          <div className="relative group flex items-center gap-x-2 md:justify-start justify-center">
            <Images name="infoIcon" width="20px" height="20px" />

            <div className="absolute left-6 top-0 bg-white w-[290px] h-[90px] z-50 hidden group-hover:block shadow-md rounded p-2">
              <Text
                text="Some shops require orders by 2pm the previous day for orders for collection or delivery."
                textStyle="text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
