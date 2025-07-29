
import React from 'react';
import { Images } from '../../Images/images';
import Box from '../../components/Box';
import Card from '../../components/Card';
import RecipeCard from '../../components/RecipeCard';


const Shop = () => {
  

  return (
    <>
        <Images name="shopDesktop" height="100px" width="100%" />

      <div className="w-full flex flex-col items-center gap-y-16">
        <Box
          headerText="Pret Joy At Home"
          text="Whether you’re craving a sweet or savoury croissant, or yearning for a delicious smoothie, you can now enjoy your Pret favourites from the comfort of your own home. Shop our range of frozen croissants and smoothies online now."
        />

        <Card
          name="croissants"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Bake our croissants at home"
          text="The Pret croissants you know and love are now available from the freezer aisle for you to bake at home.
        <br/><br/>
        Treat yourself to our Chocolate Filled Croissants, Almond Croissants, All Butter Croissants or try our new Vegan Croissants.
        <br/><br/>
        If a savoury croissant takes your fancy, our Ham & Cheese and Mozzarella & Tomato Croissants are now available at Tesco."
          to=""
          linkText="Buy online"
          textStyle=" text-[18px] text-[#372F31] font-medium"
          btnStyle="sm:w-[158px] w-full h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />

  <h2 className="text-[32px] font-semibold font-playfair mt-10 text-center ">
          Frozen And Ready To Bake At Home...
        </h2>

  <div className="flex flex-wrap gap-x-8 mb-20">

  <RecipeCard
    image="shopItem1"
    text="All Butter Croissants"
    to="https://www.tesco.com/groceries/en-GB/products/308451668"
    buttonText="Shop at Tesco"
    btnStyle="w-[256px] h-[42px] border border-[#372F31] text-[#372F31] font-semibold hover:bg-black hover:text-white"
  />

  <RecipeCard
    image="shopItem2"
    text="Chocolate Filled Croissants"
    to="https://www.tesco.com/groceries/en-GB/products/308466069"
    buttonText="Shop at Tesco"
    btnStyle="w-[256px] h-[42px] border border-[#372F31] text-[#372F31] font-semibold hover:bg-black hover:text-white"
  />

  <RecipeCard
    image="shopItem3"
    text="Vegan Croissants"
    to="https://www.tesco.com/groceries/en-GB/products/308451569"
    buttonText="Shop at Tesco"
    btnStyle="w-[256px] h-[42px] border border-[#372F31] text-[#372F31] font-semibold hover:bg-black hover:text-white"
  />

  <RecipeCard
    image="shopItem4"
    text="Chocolate Filled Croissants"
    to="https://www.sainsburys.co.uk/gol-ui/product/croissants/pret-chocolate-filled-croissants-x6-420g"
    buttonText="Shop at Sainsbury's"
    btnStyle="w-[256px] h-[42px] border border-[#372F31] text-[#372F31] font-semibold hover:bg-black hover:text-white"
  />

</div>

<Card
          name="pretSmoothies"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Pret Smoothies At Home"
          text="Our smoothies are packed full of fruity deliciousness. Our Berries & Cherries Smoothie Mix has just the right balance of sweetness and tanginess. Full of strawberries, mango, cherries, banana, raspberries, and blackcurrants.  
        <br/><br/>
Our Sweet Greens Smoothie Mix, is a mighty blend of spinach, mango, kale, avocado, ginger, and lemon zest, full of juicy deliciousness.        <br/><br/>
Whichever takes your fancy, just blend with apple juice for a deliciously fresh smoothie. Available at Tesco."          to="https://www.tesco.com/groceries/en-GB/products/312581208"
          linkText="Buy online"
          textStyle=" text-[18px] text-[#372F31] font-medium"
          btnStyle="sm:w-[158px] w-full h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />

      </div>
    </>
  );
};

export default Shop;
