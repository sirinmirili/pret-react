import Box from "../../components/Box";
import Card from "../../components/Card";
import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import { useState, useEffect } from "react";

const OrderYourUnusual = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="orderYourUnusualDesktop" height="560px" width="100%" />
      ) : (
        <Images name="orderYourUnusualMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center gap-y-16">
        <Box
          headerText="Turn up the colour"
          text="The coolest sips of the season have landed. Our new Iced Latte recipes are fun, fresh and flavourful. And the best part? They're available on Club Pret. It's time to order your <i>unusual.</i>"
        />
        <div className="w-[90%] md:w-[77%] flex flex-wrap justify-center gap-8 relative z-10 -mt-40 mb-10">
          <LinkButton
            to="/order-online"
            text="Order now"
            btnStyle="md:w-[160px] w-full h-[42px] bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
          />
          <LinkButton
            to="/products"
            text="Explore Iced Drinks menu"
            btnStyle="md:w-[270px] w-full h-[42px] bg-[#9F1B32] text-white border border-[#9F1B32] hover:bg-[#711323] "
          />
        </div>

        <Card
          name="meetUbe"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Meet Ube Brûlée"
          text="Vibrant, purple and served over ice – this cool new iced latte is a blend of Ube’s subtly sweet, nutty flavour with a caramel syrup, made with milk and served over our signature organic espresso. It's like your favourite French dessert, in a purple outfit."
          textStyle="text-[18px] text-[#372F31] "
        />
        <Card
          name="somethingBlue"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Something blue"
          text="Next up, say hello to the <b>Spirulina Macaron Iced Latte.</b> Made with blue spirulina, sweet macaron syrup and our organic espresso, it's the perfect drink for an afternoon energy boost."
          textStyle="text-[18px] text-[#372F31] "
        />
        <Card
          name="matcha"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Matcha on your mind?"
          text="Last, but certainly not least, our <b>Matcha Iced Latte</b> has had an upgrade. Our new Matcha is still organic and ceremonial grade, and now features a radiant colour and delicate flavour - you’ll have to try it to taste the glow up."
          textStyle="text-[18px] text-[#372F31] "
        />
        <Card
          name="halfPrice"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Half price Iced Lattes, every day"
          text="Our new Iced Lattes are available on Club Pret, which means you can get them half price, every day, for just £5 a month."
          textStyle="text-[18px] text-[#372F31] "
        />
        <div className="flex flex-col xl:w-[35%] w-[90%] sm:flex-row gap-4 xl:z-10 xl:-mt-40 xl:-ml-[510px] mb-10">
          <LinkButton
            to="https://play.google.com/store/apps/details?id=com.pret.android&referrer=adjust_reftag%3Dc9u1eGYc60CCL%26utm_source%3DWebsite%2BUK%26utm_campaign%3DOYU25_Matcha_feature"
            text="Join the Half Price Iced Lattes Club"
            btnStyle="sm:w-[70%] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
          />
          <LinkButton
            to="/pret-faqs"
            text="Club Pret FAQs"
            btnStyle="sm:w-[30%] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
          />
        </div>
        
      </div>
    </>
  );
};

export default OrderYourUnusual;
