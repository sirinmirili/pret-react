import { Images } from "../../Images/images";


const NutritionTable = ({
    kj,
    kj2,
    kcal2,
    fibre,
    fibre2,
  kcal,
  fat,
  fat2,
  saturates2,
  saturates,
  carbs,
  carbs2,
  sugars2,
  protein2,
  salt2,
  sugars,
  protein,
  salt,
}) => {
  return (
    <div className="w-full max-w-[900px] px-4 mt-12">
      <h3 className="text-[32px] md:text-[40px] font-semibold font-playfair text-[#372F31]">Nutritional Information</h3>
       <div className="flex flex-row items-center mb-10 mt-5 gap-2">
  <div className="w-[24px] h-[24px] flex items-center justify-center">
    <Images name="infoBlue" width="24px" height="24px" />
  </div>
  <p className="text-[14px] text-[#1C4E7D] font-medium">
    Adults need around 2000 Kcal a day
  </p>
</div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b font-medium">
            <th className="py-2"> </th>
            <th className="py-2">Per 100g</th>
            <th className="py-2">Per serving</th>
          </tr>
        </thead>
        <tbody>
            <tr className="border-t">
            <td className="py-2">Energy (KJ)</td>
            <td className="py-2">{kj}</td>
            <td className="py-2">{kj2}</td>
          </tr>
          <tr className="border-t bg-[#f6f4f5]">
            <td className="py-2">Energy (Kcal)</td>
            <td className="py-2">{kcal}</td>
            <td className="py-2">{kcal2}</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">Fat (g)</td>
            <td className="py-2">{fat}</td>
            <td className="py-2">{fat2}</td>
          </tr>
          <tr className="border-t bg-[#f6f4f5]">
            <td className="py-2">of which saturates (g)</td>
            <td className="py-2">{saturates}</td>
            <td className="py-2">{saturates2}</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">Carbohydrates (g)</td>
            <td className="py-2">{carbs}</td>
            <td className="py-2">{carbs2}</td>
          </tr>
          <tr className="border-t bg-[#f6f4f5]">
            <td className="py-2">of which sugars (g)</td>
            <td className="py-2">{sugars}</td>
            <td className="py-2">{sugars2}</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">Fibre (g)</td>
            <td className="py-2">{fibre}</td>
            <td className="py-2">{fibre2}</td>
          </tr>
          <tr className="border-t bg-[#f6f4f5]">
            <td className="py-2">Protein (g)</td>
            <td className="py-2">{protein}</td>
            <td className="py-2">{protein2}</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">Salt (g)</td>
            <td className="py-2">{salt}</td>
            <td className="py-2">{salt2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionTable;
