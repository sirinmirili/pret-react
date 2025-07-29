import { Images } from "../../Images/images";
import Text from "../Text";
import LinkButton from "../LinkButton";

export const ItemsCard = ({
  to,
  image,
  text,
  imageWidth,
  imageHeight,
  linkText,
  btnStyle,
  vegan,
}) => {
  return (
    <a href={to} className="block group relative overflow-hidden">
      <div className="flex flex-col h-[370px] w-[288px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
        <div className="overflow-hidden">
          <Images
            className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
            name={image}
            width={imageWidth}
            height={imageHeight}
          />
        </div>

        <div className="px-4 py-3 transition-all duration-300 group-hover:bg-gray-50">
          <Text
            text={text}
            textStyle="text-[20px] text-[#372F31] font-semibold mb-4 transition-opacity duration-300 group-hover:opacity-90"
          />

          {vegan && (
            <div className="w-6 h-6 rounded-full border-2 border-[#15803d] bg-white text-[#15803d] flex items-center justify-center text-[10px] font-bold">
              VG
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out pointer-events-none" />
      </div>
    </a>
  );
};
