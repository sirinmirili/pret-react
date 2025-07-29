import Sidebar from "../../components/Sidebar";
import { Images } from "../../Images/images";
import NutritionTable from "../../components/NutritionTable";

const Butternut = () => {
  return (
    
      <div className="flex  items-start gap-x-[150px]">
          <Sidebar />
          <div className="px-6 md:px-20 py-12 text-[#372f31] font-sans max-w-[1000px] mx-auto">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 font-playfair">Shawarma Chicken</h1>

      
      <div className="flex flex-col md:flex-row md:items-start gap-10 mb-10">
        <div>
          <Images name="shawarmaProduct" width="288px" height="288px" />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            With chargrilled chickpeas, red peppers, massaged kale, pistachios and a dollop of humous.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-sm">608 Kcal</span>
          </div>
          <div className="bg-[#f3f8fc] border-l-4 border-[#007CBA] p-3 flex items-center gap-3 max-w-[520px] mt-2">
            <Images name="infoBlue" width="24px" height="24px" />
            <span className="text-[14px] text-[#1c4e7d]">Contains: Pistachio Nuts, Sesame, Milk</span>
          </div>
        </div>
      </div>

      <h2 className="text-[34px] font-bold mb-4 font-playfair">Ingredients and Allergens</h2>
      <p className="mb-5 text-[14px] text-[#796a5f] font-medium">
        Allergens are displayed in <strong>bold</strong> below
      </p>
      <p className="mb-6">
        Chargrilled Chicken (24%) (Chicken Breast, Sugar, Salt, Rapeseed Oil, Red Bell Pepper, Parsley, Garlic Powder, Yeast Extract, Onion Powder, Black Pepper, Brown Sugar), Chargrilled Chickpeas (15%) (Chickpeas, Rapeseed Oil, Cornflour, Brown Sugar, Salt, Garlic Powder, Black Pepper, Smoked Paprika, Spirit Vinegar, Chipotle Chilli Powder, Chilli Flakes, Ground Cumin, Dried Oregano, Thyme), Humous (14%) (Cooked Chickpeas (Chickpeas, Water), Water, Tahini Sesame Seed Paste <b>(Sesame)</b>, Rapeseed Oil, Lemon Juice, Garlic Purée, Salt), Cucumber, Chargrilled Red Peppers (11%) (Red Pepper, Sunflower Oil), Spinach, Kale (4.0%), Lemon, French Dressing (Vegetable Oil (Sunflower Oil and Rapeseed Oil in varying proportions), White Wine Vinegar, Extra Virgin Olive Oil, Sugar, Sherry Vinegar, Water, Black Pepper, Lemon Juice, Salt, Garlic Purée, colour (Plain Caramel), stabiliser (Xanthan Gum)), Pomegranate Seeds, Roasted Pistachio Nuts <b>(Pistachio Nuts)</b>, Natural Yogurt <b>(Milk)</b>, Shawarma Spiced Paste (Water, Sugar, Red Pepper Purée, Salt, Coriander, Smoked Paprika, Tomato Paste, Spirit Vinegar, Red Chilli Purée, Cumin Powder, Cornflour, Garlic Powder, Lemon Juice Concentrate, Cinnamon, Olive Oil, Spearmint, Ginger Purée, Yeast Extract Powder (Yeast Extract, Salt), Onion Powder, Crushed Dried Chilli, Cardamom, Lemon Zest, Cayenne Pepper, Ground Pimento, Garlic Purée, colour (Paprika Extract), Nutmeg, Black Pepper), Mint.
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
      kj="563"
      kj2="2544"
        kcal="135"
        kcal2="608"
        fat="6.3"
        fat2="28.3"
        saturates="0.9"
        saturates2="3.9"
        carbs="7.1"
        carbs2="32"
        sugars="3.1"
        sugars2="14"
        fibre="3"
        fibre2="13.7"
        protein="11"
        protein2="49.7"
        salt="0.55"
        salt2="2.49"
      /> 
      </div>
    </div>
  );
};

export default Butternut;
