import React from "react";
import { useState, useEffect } from "react";
import { Images } from "../../Images/images";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { ItemsCard } from "../../components/ItemsCard";

const SoupRota = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="soupRotaDesktop" height="560px" width="100%" />
      ) : (
        <Images name="soupRotaMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center justofy-center gap-y-16">
        <Box
          headerText="Our Seasonal Soup Rota"
          text="Soups, wonderful soups. Hearty, wholesome, light, bright – whatever sort you like, our famous Soup Rota has pots packed with flavours sure to stir up your lunch.

<br/><br/>Spoons at the ready."
        />

        <div className="w-[80%] flex md:items-start items-center">
          <Text textStyle=" text-[30px] font-bold" text="Monday to Friday" />
        </div>
        <div className="w-[80%] flex flex-wrap gap-x-8 md:mb-10 md:items-center gap-y-6">
          <ItemsCard
            to="/products"
            image="laskaSoup"
            imageWidth="288px"
            imageHeight="256px"
            text="Chicken Laska Soup"
          />
          <ItemsCard
            to="/products"
            image="chilliSoup"
            imageWidth="288px"
            imageHeight="256px"
            text="Super Plates"
          />
          <ItemsCard
            to="/products"
            image="tomatoSoup"
            imageWidth="288px"
            imageHeight="256px"
            text="Super Plates"
            vegan={true}
          />
          <ItemsCard
            to="/products"
            image="mushroomSoup"
            imageWidth="288px"
            imageHeight="256px"
            text="Super Plates"
            vegan={true}
          />
        </div>
      </div>
    </>
  );
};

export default SoupRota;
