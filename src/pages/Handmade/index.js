import { useState, useEffect } from "react";
import Box from "../../components/Box";
import Card from "../../components/Card";
import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import Text from "../../components/Text";
import { MenuCard } from "../../components/MenuCard";
import SmallCard from "../../components/SmallCard";

const Handmade = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="handmadeDesktop" height="560px" width="100%" />
      ) : (
        <Images name="handmadeMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center gap-y-16">
        <Box headerText="Fresh from our kitchen, direct to your door" />

        <Card
          name="sharingPlatters"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Freshly prepared sharing platters"
          text="Only available when you order directly through us, these kitchen favourites include our Breakfast Baguette Selection, freshly baked croissants and All Time Classics. Something for everyone and every occasion."
          textStyle="text-[18px] text-[#372F31] "
        />
        <Card
          name="seasonal"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Seasonal specials and newly launched grazing platters"
          text="Try the brand-new <b>Pret's Ploughmans Platter</b>, a delicious selection of Cheddar, Grevé and Brie, with cornichons, baby plum tomatoes, and sliced artisan stone baked baguettes, accompanied with Pret Pickle and pickled onions. Or order our <b>Golden Roasted Salmon & Mango Salad Platter</b>, a larger version of Pret’s Spring salad. All perfect for sharing."
          textStyle="text-[18px] text-[#372F31] "
        />
        <Text
          text="Browse our menu"
          textStyle="font-semibold text-5xl mt-10 font-playfair h1"
        />
        <p className="md:w-[40%] w-[90%] text-center text-[18px] -mb-10 ">
          Freshly-prepared & thoughtfully made breakfast, lunch & snacks. We’ve
          got you covered. Here today, gone today.
        </p>
        <div id="breakfast-section">
        <Text
          text="Breakfast"
          textStyle="font-semibold text-[40px] mt-10 font-playfair h1 text-center "
        />
        <div className="flex flex-wrap gap-6 w-[100%] justify-center mt-10">
          <MenuCard
            to="/products"
            image="fruit"
            imageWidth="289px"
            imageHeight="289px"
            text="Fruit"
          />
          <MenuCard
            to="/products"
            image="bakery"
            imageWidth="289px"
            imageHeight="289px"
            text="Bakery"
          />
          <MenuCard
            to="/products"
            image="breakfastBakery"
            imageWidth="289px"
            imageHeight="289px"
            text="Breakfast baguettes"
          />
          <MenuCard
            to="/products"
            image="breakfastBakeryPlatters"
            imageWidth="289px"
            imageHeight="289px"
            text="Breakfast Platters"
          />
        </div>
        </div>
        <Text
          text="Lunch"
          textStyle="font-semibold text-[40px] mt-10 font-playfair h1 "
        />
        <div className="flex flex-wrap gap-6 w-[90%] justify-center">
          <MenuCard
            to="/products"
            image="lunchPlattersHandmade"
            imageWidth="289px"
            imageHeight="289px"
            text="Lunch Platters"
          />
          <MenuCard
            to="/products"
            image="baguettesHandmade"
            imageWidth="289px"
            imageHeight="289px"
            text="Baguettes"
          />
          <MenuCard
            to="/products"
            image="sandwichesHandmade"
            imageWidth="289px"
            imageHeight="289px"
            text="Sandwiches"
          />
          <MenuCard
            to="/products"
            image="saladsHandmade"
            imageWidth="289px"
            imageHeight="289px"
            text="Salads and protein pots"
          />
        </div>
        <Text
          text="Snacks & Drinks"
          textStyle="font-semibold text-[40px] mt-10 font-playfair h1"
        />
        <div className="flex flex-wrap gap-6 w-[90%] justify-center">
          <MenuCard
            to="/products"
            image="drinks"
            imageWidth="289px"
            imageHeight="289px"
            text="Cold drinks"
          />
          <MenuCard
            to="/products"
            image="snacksHandmade"
            imageWidth="289px"
            imageHeight="289px"
            text="Pret snacks"
          />
          <MenuCard
            to="/products"
            image="sweetTreats"
            imageWidth="289px"
            imageHeight="289px"
            text="Sweet treats"
          />
          <MenuCard
            to="/products"
            image="sweetPotsHandmade"
            imageWidth="289px"
            imageHeight="289px"
            text="Sweet pots"
          />
          
        </div>

        <Text
          textStyle="text-[40px] align-center font-semibold font-playfair h1"
          text="Why use Pret Delivers? "
        />

        <Card
          name="clock"
          imageWidth="121px"
          imageHeight="120px"
          divDirection={false}
          headerText="Same-day lunchtime delivery"
          text="Freshly prepared sandwiches, baguettes, salads and sweet treats. The only way to order Pret platters! Schedule a slot as late as 10am for 11.30-12.30 same-day delivery."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="bottle"
          imageWidth="152px"
          imageHeight="158px"
          divDirection={true}
          headerText="Breakfast delivery"
          text="Select from our range of breakfast baguettes, sweet and savoury pastries, yoghurt bowls, and more. Schedule your order as late as midnight for next-day 08:30-09:00am delivery."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="pack"
          imageWidth="132px"
          imageHeight="162px"
          divDirection={false}
          headerText="Pret Packed breakfast & lunch"
          text="Treat busy teams by getting individual breakfast and lunch orders delivered to your office, packed and labelled for each person. Just apply for a Business+ Account."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Card
          name="bag"
          imageWidth="153px"
          imageHeight="120px"
          divDirection={true}
          headerText="Click & Collect (if we can't get to you)"
          text="If you’re close enough to a Pret shop, we can pop round and deliver your order. If not, book a Click & Collect slot (even on the same day*) and pick up your freshly made order in person."
          textStyle=" text-[16px] text-[#372F31]"
        />

        <Text
          text="Choose how to get Pret"
          textStyle="font-semibold text-5xl mt-10 font-playfair h1"
        />
        <Text
          text="We’re making freshly-made food work for everyone, so there are
          accounts for different needs. Choose from our Personal account for
          home orders, Business for work or apply for Business+"
          textStyle=" w-[40%] text-center text-[18px] font-semibold -mt-10"
        ></Text>

        <div class="w-full md:w-[70%] container mx-auto px-4 py-8 space-y-4">
  
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 pb-4">
    <div class="hidden sm:block"></div>
    <div class="bg-[#9f1b32] text-white text-center p-4 font-bold">
      Personal
      <br />
      <span class="text-sm font-light text-white">
        (Picnics, parties or family get-togethers)
      </span>
    </div>
    <div class="bg-[#9f1b32] text-white text-center p-4 font-bold">
      Business
      <br />
      <span class="text-sm font-light text-white">
        (Bringing a little joy to the office)
      </span>
    </div>
    <div class="bg-[#9f1b32] text-white text-center p-4 font-bold">
      Business+
      <br />
      <span class="text-sm font-light text-white">
        (Brightening everyone's day)
      </span>
    </div>
  </div>

 
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b">
    <div class="font-semibold p-2 sm:p-0">Minimum spend £30.</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b">
    <div class="font-semibold p-2 sm:p-0">
      Made to order Pret Platters, both savoury & sweet.
    </div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b">
    <div class="font-semibold p-2 sm:p-0">Pay with card, on demand.</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4 border-b">
    <div class="font-semibold p-2 sm:p-0">
      Order Pret packed breakfast & lunch for your team — set a budget & they can choose.
    </div>
    <div class="text-center text-gray-400 text-2xl flex justify-center items-center">✕</div>
    <div class="text-center text-gray-400 text-2xl flex justify-center items-center">✕</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 py-4">
    <div class="font-semibold p-2 sm:p-0">
      Apply for credit and pay for your colleague's meals on your company account.
    </div>
    <div class="text-center text-gray-400 text-2xl flex justify-center items-center">✕</div>
    <div class="text-center text-gray-400 text-2xl flex justify-center items-center">✕</div>
    <div class="text-center text-red-700 text-2xl flex justify-center items-center">★</div>
  </div>
</div>
        <Text
          text="Let’s get started with your account"
          textStyle="font-bold text-[22px] mt-10"
        />
        <LinkButton
          text="Get started"
          to="/sign-up"
          btnStyle="h-[40px] sm:w-[50%] w-[90%] mb-10 bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527]"
        />

        <div className="md:w-[50%] w-[90%] flex flex-col items-center">
          <Images name="search" width="86px" height="96px" />
          <Text
            text="Options to suit different dietary requirements"
            textStyle="font-semibold text-[40px] mt-10 font-playfair h1 text-center"
          />
          <p className=" text-center text-[18px]">
            We know how hard it can be to order for everyone, whether they’re
            veggies, vegans or flexitarians, so we label our menus clearly and
            let you filter by dietary and allergen needs. We prepare our fresh
            food and Barista-made drinks in our shops every day. We use many
            ingredients and shared equipment, and whilst we do our best to
            manage allergens we cannot guarantee that any of our food or
            Barista-made drinks are allergen-free or suitable for those with
            allergies due to the risk of cross-contact. Our vegan food is made
            to a vegan recipe but is not suitable for those with milk and egg
            allergies. Want to find out if something we sell is right before you
            order? Download Pret’s <br />
            <a
              href="/allergenguide"
              className="text-[#9F1B32] underline hover:no-underline"
            >
              Allergen Guide PDF.
            </a>
          </p>
        </div>
        <div className="md:w-[50%] w-[90%] flex flex-col items-center">
          <Images name="earth" width="86px" height="96px" />
          <Text
            text="Steps to sustainability"
            textStyle="font-semibold text-[40px] mt-10 font-playfair h1"
          />
          <p className=" text-center text-[18px]">
            When you choose Pret, you choose a company that's successfully
            working towards making all packaging recyclable, re-usable or
            compostable by 2025.
          </p>
        </div>

        <div className="w-[80%] flex flex-wrap md:flex-row flex-col gap-x-24 gap-y-4 justify-center">
          <SmallCard
            image="one"
            imageWidth="96px"
            imageHeight="96px"
            text="When you order from us, know that 73% of our packaging and cutlery by weight is made from wood, paper or cardboard and sourced from sustainably managed forests."
            textStyle="text-[14px] font-medium"
          />
          <SmallCard
            image="two"
            imageWidth="96px"
            imageHeight="96px"
            text="The polythene bags your order arrives in now contain 50% recycled plastic. We're working closely with our packaging suppliers to increase this figure."
            textStyle="text-[14px] font-medium"
          />
          <SmallCard
            image="three"
            imageWidth="96px"
            imageHeight="96px"
            text="Our sandwich packaging is thoughtfully designed, so it's easy to separate the film from the cardboard to help you recycle."
            textStyle="text-[14px] font-medium"
          />
        </div>

        <Text
          text="Our packaging progress with Pret Platters"
          textStyle="font-semibold text-[40px] mt-10 font-playfair h1 text-center"
        />
        <div className="md:w-[50%] w-[90%] flex flex-col items-center gap-4 relative bg-white p-6 rounded-xl shadow-lg">
          <div className="absolute -top-10 -left-6">
            <Images name="doubleQuote" width="86px" height="96px" />
          </div>
          <p className="text-center sm:text-left font-medium text-[18px] text-[#372F31]">
            Doing the right thing is fundamental to our approach to designing
            packaging. So we replaced our rigid plastic trays with a bespoke
            design made from paperboard. Paperboard is both renewable and
            recyclable, and the material we use carries the Forestry Stewardship
            Council (FSC) standard to certify that the forests it comes from are
            properly managed. This change enables us to remove 25 tonnes of
            plastic a year.
            <br />
            <span className="font-normal text-[16px]">Simon Oxley</span>
            <br />
            <span className="font-bold">Pret Global Head of Packaging</span>
          </p>
          <div className="absolute -bottom-6 -right-6">
            <Images name="doubleQuote2" width="86px" height="96px" />
          </div>
        </div>

        <p className="w-[50%] h-[48px] mt-10 mb-20 text-[16px] text-[#372F31] text-center align-center font-montserrat font-medium">
          *Some shops require orders by 2pm the previous day. Don't worry
          though, your food will still be freshly made the day we deliver it.
        </p>
      </div>
    </>
  );
};

export default Handmade;
