import Sidebar from "../../components/Sidebar";
import { Images } from "../../Images/images";
import NutritionTable from "../../components/NutritionTable";

const Butternut = () => {
  return (
    
      <div className="flex  items-start gap-x-[150px]">
          <Sidebar />
          <div className="px-6 md:px-20 py-12 text-[#372f31] font-sans max-w-[1000px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 font-playfair">Butternut Mezze</h1>

      
      <div className="flex flex-col md:flex-row md:items-start gap-10 mb-10">
        <div>
          <Images name="butternutProduct" width="288px" height="288px" />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            With chilli aubergine, chargrilled chickpeas, massaged kale and a dollop of humous.
          </p>
          <div className="flex items-center gap-3">
           <div className="w-6 h-6 rounded-full border-2 border-[#15803d] bg-white text-[#15803d] flex items-center justify-center text-[10px] font-bold">
              VG
            </div>
            <span className="text-sm">610 Kcal</span>
          </div>
          <div className="bg-[#f3f8fc] border-l-4 border-[#007CBA] p-3 flex items-center gap-3 max-w-[520px] mt-2">
            <Images name="infoBlue" width="24px" height="24px" />
            <span className="text-[14px] text-[#1c4e7d]">Contains: Sesame</span>
          </div>
        </div>
      </div>

      <h2 className="text-[34px] font-bold mb-4 font-playfair">Ingredients and Allergens</h2>
      <p className="mb-5 text-[14px] text-[#796a5f] font-medium">
        Allergens are displayed in <strong>bold</strong> below
      </p>
      <p className="mb-6">
        Butternut Squash (17%), Chargrilled Chickpeas (14%) (Chickpeas, Rapeseed Oil, Cornflour, Brown Sugar, Salt, Garlic Powder, Black Pepper, Smoked Paprika, Spirit Vinegar, Chipotle Chilli Powder, Chilli Flakes, Ground Cumin, Dried Oregano, Thyme), Humous (13%) (Cooked Chickpeas (Chickpeas, Water), Water, Tahini Sesame Seed Paste <b>(Sesame)</b>, Rapeseed Oil, Lemon Juice, Garlic Purée, Salt), Chilli Aubergine (13%) (Aubergine, Rapeseed Oil, Sugar, Rice Vinegar, Red Chilli Purée, Red Pepper Powder, Garlic Purée, Cornflour, Salt), Water, Brown Rice, Mixed Salad Leaves, Pickled Cabbage and Carrot (Red Cabbage, Carrot, Sugar, Spirit Vinegar, Salt), Kale (4.0%), Lemon, Pomegranate Seeds, French Dressing (Vegetable Oil (Sunflower Oil and Rapeseed Oil in varying proportions), White Wine Vinegar, Extra Virgin Olive Oil, Sugar, Sherry Vinegar, Water, Black Pepper, Lemon Juice, Salt, Garlic Purée, colour (Plain Caramel), stabiliser (Xanthan Gum)), Olive Oil, Red Quinoa, Concentrated Carrot Juice, Rapeseed Oil, Garlic Purée, Mint, Lemon Juice, Sunflower Oil, Salt, Lemon Zest, Yeast Extract, Sugar, Onion Powder, Sumac, Cracked Black Pepper, Tomato Paste, Natural Lemon Flavouring.
      </p>

      <div className="bg-white border-1-4 border-[#9f1b32] p-5 text-[16px] text-[#c5bfc0] flex gap-3">
        <div className="pt-1">
          <Images name="infoRed" width="80px" height="80px" />
        </div>
        <div>
          <p className="mb-3">
            We prepare our fresh food and Barista-made drinks in our shops every day. We use many ingredients and shared equipment, and whilst we do our best to manage allergens we cannot guarantee that any of our food or Barista-made drinks are allergen-free or suitable for those with allergies due to the risk of cross-contact.
          </p>
          <p>
            Our vegan food is made to a vegan recipe but is not suitable for those with milk and egg allergies.{" "}
            <a
              href="/allergenguide"
              className="underline text-[#9f1b32] hover:no-underline"
            >
              View our Allergen Guide.
            </a>
          </p>
        </div>
      </div>
      <NutritionTable
      kj="554"
      kj2="2549"
        kcal="133"
        kcal2="610"
        fat="6.2"
        fat2="28.5"
        saturates="0.7"
        saturates2="3.2"
        carbs="13.3"
        carbs2="61.3"
        sugars="3.8"
        sugars2="17.3"
        fibre="4"
        fibre2="18.3"
        protein="3.9"
        protein2="18"
        salt="0.58"
        salt2="2.66"
      /> 
      </div>
    </div>
  );
};

export default Butternut;
