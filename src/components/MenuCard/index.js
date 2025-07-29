import { Images } from "../../Images/images";
import Text from "../Text";

export const MenuCard = ({ to, image, text, imageWidth, imageHeight }) => {
  return (
    <a href={to} className="block group">
      <div className="flex flex-col border-solid rounded-[4px] border-[1px] border-[#372F31] h-[400px] w-[300px] overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2 group-hover:shadow-xl bg-white">
        
        <div className="overflow-hidden">
          <Images
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            name={image}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <Text
          text={text}
          textStyle="text-[24px] text-[#372F31] font-semibold pt-[6px] pr-[16px] pb-[50px] pl-[16px] transition-colors duration-300 group-hover:text-black"
        />
      </div>
    </a>
  );
};
