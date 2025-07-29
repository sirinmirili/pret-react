import { Images } from "../../Images/images";
import Text from "../Text";
import LinkButton from "../LinkButton";

const RecipeCard = ({ image, text, to, buttonText, btnStyle }) => {
  return (
    <div className="w-[288px] flex flex-col border border-gray-200 ">
      <Images name={image} className="w-full h-[256px] object-cover" />
      <div className="h-full p-4 flex flex-col items-center justify-between gap-y-4 ">
        <Text text={text} textStyle="text-[16px] text-[#372F31] text-center" />
        <LinkButton text={buttonText} to={to} btnStyle={btnStyle} />
      </div>
    </div>
  );
};

export default RecipeCard;
