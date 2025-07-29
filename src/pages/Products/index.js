import Sidebar from "../../components/Sidebar";
import {ItemsCard} from "../../components/ItemsCard";

const Products = () => {
  return (
    <>
      <div className="w-full justify-center mt-20">
        <div className="flex  items-start gap-x-[150px]">
          <Sidebar />
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <ItemsCard to="/butternut-meze"
            image="butternutProduct"
            imageWidth="288px"
            imageHeight="256px"
            text="Butternut Mezze" 
            vegan={true}
            />
      <ItemsCard to="/chipotle-chicken"
            image="chipotleProduct"
            imageWidth="288px"
            imageHeight="256px"
            text="Chipotle Chicken" />
      <ItemsCard to="/miso-salmon"
            image="misoProduct"
            imageWidth="288px"
            imageHeight="256px"
            text="Miso Salmon"
            />
      <ItemsCard to="/shawarma-chicken"
            image="shawarmaProduct"
            imageWidth="288px"
            imageHeight="256px"
            text="Shawarma Chicken"
            />
          </div>
        </div>


      </div>
    </>
  );
};

export default Products;
