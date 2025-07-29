import Box from "../../components/Box";
import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import Text from "../../components/Text";
import { MenuCard } from "../../components/MenuCard";
import Card from "../../components/Card";
import { useState, useEffect } from "react";

const Menu = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="menuDesktop" height="560px" width="100%" />
      ) : (
        <Images name="menuMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center gap-y-16">
        <Box
          headerText="Browse our menu"
          text="Our freshly prepared food is made or baked in our shop kitchens throughout the day. Our coffee is organic and always arabica. Our teas, milks and milk alternatives are all organic too."
        />
        <div className="w-[90%] md:w-[77%] flex flex-wrap justify-center gap-8 relative z-10 -mt-40 mb-10">
          <LinkButton
            to="/find-a-pret"
            text="Find your nearest Pret"
            btnStyle="md:w-[244px] w-full h-[42px] bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
          />
          <LinkButton
            to="/handmade"
            text="Order online"
            btnStyle="md:w-[173px] w-full h-[42px] bg-[#9F1B32] text-white border border-[#9F1B32] hover:bg-[#711323] "
          />
        </div>

        <Text
          textStyle="text-[40px] font-semibold font-playfair mt-10 text-center h1"
          text="Our Food and Drinks menu"
        />

        <div className="flex flex-wrap gap-6 max-w-[80%] justify-center">
          <MenuCard
            to="/products"
            image="superPlates"
            imageWidth="289px"
            imageHeight="289px"
            text="Super Plates"
          />

          <MenuCard
            to="/products"
            image="sandwiches"
            imageWidth="289px"
            imageHeight="289px"
            text="Sandwiches & Wraps"
          />

          <MenuCard
            to="/products"
            image="salads"
            imageWidth="289px"
            imageHeight="289px"
            text="Salads"
          />

          <MenuCard
            to="/products"
            image="hotFood"
            imageWidth="289px"
            imageHeight="289px"
            text="Hot Food"
          />

          <MenuCard
            to="/products"
            image="hotDrinks"
            imageWidth="289px"
            imageHeight="289px"
            text="Hot Drinks"
          />

          <MenuCard
            to="/products"
            image="coldDrinks"
            imageWidth="289px"
            imageHeight="289px"
            text="Cold Drinks"
          />

          <MenuCard
            to="/products"
            image="fruit"
            imageWidth="289px"
            imageHeight="289px"
            text="Fruit & Fruit pots"
          />

          <MenuCard
            to="/products"
            image="snacks"
            imageWidth="289px"
            imageHeight="289px"
            text="Sweet and savoury <br/> snacks"
          />
        </div>

        <Card
          name="pretDelivers"
          imageWidth="384px"
          imageHeight="274px"
          divDirection={true}
          headerText="Pret Delivers"
          text="Pret Delivers is the place to get exclusive access to our sweet and savoury Pret Platters. We’ll deliver to you, or you can collect from our shops. Minimum order value £30"
          to="/handmade"
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="sm:w-[180px] w-full h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />
        <Card
          name="shoppingList"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Add Pret to your weekly shopping list"
          text="Whether you’re craving a sweet or savoury croissant, or yearning for a delicious smoothie, you can now enjoy your Pret favourites from the comfort of your own home. Shop our range of frozen croissants and smoothies online now."
          to="/shop"
          linkText="Shop now"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="sm:w-[154px] w-full h-[42px] text-[16px] bg-white text-[#372F31] border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />

        <Text
          text="Allergen Guide"
          textStyle="font-semibold text-5xl mt-10 -mb-5 font-playfair h1"
        />
        <p className="md:w-[50%] w-[90%] text-center text-[18px] font-montserrat -mb-10 -mt-5">
          We prepare our fresh food and Barista-made drinks in our shops every
          day. We use many ingredients and shared equipment, and whilst we do
          our best to manage allergens we cannot guarantee that any of our food
          or Barista-made drinks are allergen-free or suitable for those with
          allergies due to the risk of cross-contact.
          <br />
          <br />
          Our vegan food is made to a vegan recipe but is not suitable for those
          with milk or egg allergies.
          <br />
          <br />
          Our{" "}
          <a
            href="/allergenguide"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            Allergen Guide
          </a>{" "}
          contains a list of all the products we sell in our shops, with the 14
          declarable allergens listed along the top of the page for your
          reference. You will also find the declarable allergens listed on the
          product shelf tickets in our shops. In addition, we also declare Pine
          Nuts as an allergen.
          <br />
          <br />
          If you are interested in an ingredient outside the 14 allergens
          listed, please check our Ingredient List which contains a list of all
          the products we sell in our shops, with ingredients listed for easy
          reference.
          <br />
          <br />
          If you need to know more, please get in touch with our{" "}
          <a href="/" className="text-[#9F1B32] underline hover:no-underline">
            Custom Service
          </a>{" "}
          team who will be happy to help.
        </p>
        <LinkButton
          to="/allergenguide"
          text="Read our allergen guide"
          btnStyle="md:w-[290px] w-[90%] h-[42px] mb-20 bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
        />
      </div>
    </>
  );
};

export default Menu;
