import Box from "../../components/Box";
import Card from "../../components/Card";
import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import Text from "../../components/Text";
import { BigMenuCard } from "../../components/BigMenuCard";
import { useState, useEffect } from "react";

const Platters = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 700 ? (
        <Images name="plattersDesktop" height="560px" width="100%" />
      ) : (
        <Images name="plattersMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center gap-y-16">
        <Box
          headerText="Freshly prepared sharing platters"
          text="Summer has arrived, and so has our brand-new <b> Flatbread Platter </b> & <b>Fruit Pot Platter</b>. Freshly made and packed with flavour. Why not also try our <b>Simple Vegan Friendly Platter</b> or our <b>Veggie Classics Baguette Selection</b>, which have made a return. Getting your veggies in has never been easier!"
        />
        <div className="w-[90%] md:w-[77%] flex flex-wrap justify-center gap-8 z-10 -mt-40 mb-10">
          <LinkButton
            to="/products"
            text="See our platter menu"
            btnStyle="sm:w-[244px] w-full h-[42px] bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
          />
          <LinkButton
            to="/order-now"
            text="Order now"
            btnStyle="sm:w-[173px] w-full h-[42px] bg-[#9F1B32] text-white border border-[#9F1B32] hover:bg-[#711323] "
          />
        </div>

        <div className=" w-[75%] flex md:flex-row flex-col items-center gap-x-8">
          <BigMenuCard
            image="breakfastPlatters"
            imageWidth="608px"
            imageHeight="608px"
            headerText="Breakfast platters"
            text="Need breakfast for that super-early meeting or a hungry team? Or maybe you want to set the family up well for a busy day out? We’ve got you covered with a range of delicious breakfast platters, including freshly baked golden pastries, filling breakfast baguettes and fresh fruit pots. All available exclusively from Pret Delivers."
            textStyle="text-[18px] text-[#372F31] "
            to=""
            linkText="Find Out More"
            btnStyle="md:w-[180px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
          />
          <BigMenuCard
            image="lunchPlatters"
            imageWidth="608px"
            imageHeight="608px"
            headerText="Breakfast platters"
            text="Need breakfast for that super-early meeting or a hungry team? Or maybe you want to set the family up well for a busy day out? We’ve got you covered with a range of delicious breakfast platters, including freshly baked golden pastries, filling breakfast baguettes and fresh fruit pots. All available exclusively from Pret Delivers."
            textStyle="text-[18px] text-[#372F31] "
            to=""
            linkText="Find Out More"
            btnStyle="md:w-[180px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
          />
        </div>

        <Text
          textStyle="text-[40px] align-center font-semibold font-playfair -mt-20 h1"
          text="Why use Pret Delivers? "
        />

        <Card
          name="croissantBox"
          imageWidth="154px"
          imageHeight="154px"
          divDirection={true}
          headerText="The only place to get Pret Platters!"
          text="Hungry people in boardrooms, classrooms and living rooms everywhere dream of our platters. And this is the only place to get them."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="clock"
          imageWidth="121px"
          imageHeight="120px"
          divDirection={false}
          headerText="Order today, get it today"
          text="Order as late as 10am for 11.30-12.30 delivery the same day. Or by midnight the night before if you want some brain fuel for your breakfast meeting."
          infoText="info"
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="bottle"
          imageWidth="152px"
          imageHeight="158px"
          divDirection={true}
          headerText="Freshly-made every day"
          text="Like the sandwiches, salads and soups in our shops, we make our sandwich platters freshly every day (even Mondays!)"
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="locationS"
          imageWidth="132px"
          imageHeight="162px"
          divDirection={false}
          headerText="Delivery to suit you..."
          text="If you’re close to a Pret shop, we can drop your order round – just choose the delivery time that works best."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="bag"
          imageWidth="153px"
          imageHeight="120px"
          divDirection={true}
          headerText="...or collection if you prefer "
          text="If you’re not near a Pret, or just because you want to, book a Click & Collect slot, even the same day. Then come and get your freshly made order (and a smile)."
          textStyle=" text-[16px] text-[#372F31]"
          infoText="info"
        />

        <Card
          name="account"
          imageWidth="136px"
          imageHeight="152px"
          divDirection={false}
          headerText="Account types to suit you"
          text="Whether you need platters for a meeting, a picnic for the kids, or you want to treat your hardworking team to daily lunch (or breakfast!) we have an account for you."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="recycle"
          imageWidth="154px"
          imageHeight="154px"
          divDirection={true}
          headerText="Cardboard packaging"
          text="We’ve now replaced plastic packaging for our Pret Platters with cardboard to reduce our reliance on plastic packaging. We think they look nicer too."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <LinkButton
          text="Order now"
          btnStyle="h-[40px] sm:w-[400px] w-[90%] mb-10 bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527]"
          to="/order-now"
        />
      </div>
    </>
  );
};

export default Platters;
