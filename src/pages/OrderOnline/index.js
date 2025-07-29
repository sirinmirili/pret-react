import React from "react";
import { Images } from "../../Images/images";
import Box from "../../components/Box";
import Card from "../../components/Card";
import { DeliveryCard } from "../../components/DeliveryCard";
import Text from "../../components/Text";
import { useState, useEffect } from "react";

const OrderOnline = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="orderOnlineDesktop" height="560px" width="100%" />
      ) : (
        <Images name="orderOnlineMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center justify-center">
        <Box
          headerText="Fresh from our kitchen, direct to your door"
          text="Made for important meetings, treating busy teams, entertaining friends and family at home or just because you fancy something tasty for lunch."
        />

        <Card
          name="orderingForGroup"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Ordering for a group"
          text="Looking to order for colleagues, teams, friends and family, and spend more than £30? Order by 10am for same day delivery*"
          to="/handmade"
          linkText="Get started"
          textStyle=" text-lg text-[#372F31]"
          btnStyle="w-full h-[42px] bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527] sm:w-[180px]"
        />
        <div className="mt-20 align-center text-center ">
          <Text
            textStyle="text-[48px] align-center font-semibold font-playfair mt-10 h1 p-4"
            text="Ordering just for me"
          />
          <Text
            textStyle="text-[18px] text-[#372F31] text-center font-medium p-4"
            text="Hop on to your app of choice and order Pret through one of our delivery partners."
          />

          <div className="flex flex-wrap items-center justify-center gap-6 mt-20 p-8 mb-10">
            <DeliveryCard
              image="deliveroo"
              imageHeight="120px"
              imageWidth="180px"
              text="Order delivery from Deliveroo"
              to="https://deliveroo.co.uk/brands/pret-a-manger/"
              linkText="Order now"
              btnStyle="w-[176px] h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
            />
            <div className="w-px bg-gray-200 my-6"></div>
            <DeliveryCard
              image="uberEats"
              imageHeight="120px"
              imageWidth="180px"
              text="Order delivery from Uber Eats"
              to="https://www.ubereats.com/gb/brand/pret-a-manger?&utm_campaign=bd-pret-EMEA-pretgb&utm_source=pret&utm_medium=web&publisher=Uber%20Eats%20-%20BD%20(Biz%20Dev)%20-%20Partnerships&publisher_sub_campaign_name=bd-pret-EMEA-pretgb"
              linkText="Order now"
              btnStyle="w-[176px] h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
            />
            <div className="w-px bg-gray-200 my-6"></div>
            <DeliveryCard
              image="justEat"
              imageHeight="120px"
              imageWidth="180px"
              text="Order delivery from Just Eat"
              to="https://www.just-eat.co.uk/takeaway/brands/pret-a-manger?utm_campaign=pret&utm_source=facebook&utm_medium=web"
              linkText="Order now"
              btnStyle="w-[176px] h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
            />
          </div>
        </div>

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
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="sm:w-[158px] w-full h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />

        <p className="w-[60%] mt-20 mb-20 text-[16px] text-[#372F31] text-center font-medium">
          *Some shops require orders by 2pm the previous day. Don't worry
          though, your food will still be freshly made the day we deliver it.
        </p>
      </div>
    </>
  );
};

export default OrderOnline;
