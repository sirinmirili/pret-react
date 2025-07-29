import Card from "../../components/Card";
import { MenuCard } from "../../components/MenuCard";
import Text from "../../components/Text";
import { Images } from "../../Images/images";
import Box from "../../components/Box";
import { DeliveryCard } from "../../components/DeliveryCard";
import LinkButton from "../../components/LinkButton";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="newSuperSalads" height="560px" width="100%" />
      ) : (
        <Images name="homePageMobile" height="560px" width="100%" />
      )}

      <div className="width-full flex flex-col justify-center items-center gap-y-16">
        <Box
          headerText="When salads dream big"
          text="Introducing our brand-new Super Plates, think salads but bigger and better. Made with a mixture of fresh and filling ingredients and created specially by Pret’s in-house Head of Food and Registered Nutritionist to keep you feeling fuller for longer. "
          to="/super-plates"
          btnText="Meet our new Super Plates"
          btnStyle="md:w-[300px] w-[90%] h-[42px] bg-[#9F1B32] text-white hover:bg-[#711323] mt-5 "
        />

        <Card
          name="icedLattes"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Turn up the colour with our Iced Lattes"
          text="We all have our usuals. Flat White. Iced Latte maybe. But what's your unusual: Ube Brûlée or Spirulina Macaron? Discover our colourful range of truly unusual iced drinks."
          to="/order-your-unusual"
          linkText="Find Out More"
          textStyle="text-[18px] text-[#372F31] "
          btnStyle="sm:w-[180px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />
        <Card
          name="handmade"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Handmade. Hand delivered."
          text="Our freshly made food, delivered from our kitchen to your door.
        <br/> <br/>
        Made for important meetings, treating busy teams or entertaining friends and family at home. We deliver freshly made breakfast, lunch & sweet platters straight to your door. Order by 10am for same day delivery*.
        <br/> <br/>
        Pret Delivers is now available in even more shops near you."
          to="/handmade"
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="sm:w-[180px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />
        <Card
          name="forKids"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Created by kids for kids"
          text="Discover our Little Pret Stars menu, a kid-sized range of simply delicious sandwiches and snack pots freshly made each day in our little shop kitchens. Tried and tested by our pickiest customers (our children)."
          to="/products"
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="sm:w-[180px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />
        <Card
          name="soup"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Our Seasonal Soup Rota"
          text="Soups, wonderful soups. Hearty, wholesome, light, bright – whatever sort you like, our famous Soup Rota has pots packed with flavours sure to stir up your lunch.
        <br/><br/>
        Spoons at the ready."
          to="/soup-rota"
          linkText="View Rota"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="sm:w-[180px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />

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

        <Text
          textStyle="text-[48px] h1 align-center font-semibold font-playfair mt-10"
          text="How do you Pret?"
        />

        <div className="flex flex-row flex-wrap items-center justify-center gap-x-10">
          <DeliveryCard
            image="orderDelivery"
            imageWidth="180px"
            imageHeight="120px"
            text="Order Pret straigth to your door"
            to="/order-online"
            linkText="Order delivery"
            btnStyle="w-[176px] md:h-[66px]  text-[16px] bg-white text-[#372F31] font-semibold border-solid border-[1px] border-black hover:bg-black hover:text-[#fff] py-[8px] px-[40px] text-center"
          />

          <DeliveryCard
            image="location"
            imageHeight="120px"
            imageWidth="180px"
            text="Eat in at your nearest Pret"
            to="/find-a-pret"
            linkText="Find a Pret"
            btnStyle="w-[176px] h-[42px] text-[16px] bg-white text-[#372F31] font-semibold border-solid border-[1px] border-black hover:bg-black hover:text-[#fff] py-[8px] px-[40px] text-center"
          />
        </div>

        <Text
          text="Allergen Guide"
          textStyle="font-semibold text-5xl mt-10 font-playfair h1"
        />
        <p className="md:w-[50%] w-[90%] text-center text-[18px] -mb-10">
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
          Our {' '}
          <a
            href="/allergenguide"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            Allergen Guide
          </a>
         {' '} contains a list of all the products we sell in our shops, with the 14
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
          </a>
         {' '} team who will be happy to help.
        </p>
        <LinkButton
          to="/allergenguide"
          text="Read our allergen guide"
          btnStyle="md:w-[290px] w-[90%] h-[42px] bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
        />

        <p className="w-[60%] h-[48px] mt-10 mb-20 text-[16px] text-[#372F31] text-center align-center font-montserrat font-medium">
          *Some shops require orders by 2pm the previous day. Don't worry
          though, your food will still be freshly made the day we deliver it.
        </p>
      </div>
    </>
  );
};

export default Home;
