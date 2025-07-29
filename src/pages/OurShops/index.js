import Card from "../../components/Card";
import Box from "../../components/Box";
import { Images } from "../../Images/images";
import Text from "../../components/Text";
import LinkButton from "../../components/LinkButton";
import { useState, useEffect } from "react";


const OurShops = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
  
      window.addEventListener("resize", handleResize);
    }, []);
  
    return (
      <>
        {screenWidth >= 768 ? (
          <Images name="ourShopsDesktop" height="560px" width="100%" />
        ) : (
          <Images name="ourShopsMobile" height="560px" width="100%" />
        )}

      <div className="width-full flex flex-col items-center gap-y-8">
        <Box
          headerText="Life in our Shops"
          text="We love to make our shops a wonderful place to be. Yes, for our customers, but just as much for our Teams. Our Teams are the ones who bring their spark, their magic, their talent to work to make people’s day. Indeed, they’re everything to us. We put great care and things in place that make life in shops more joyful. 
              <br /><br />
              If you thrive in a fast-paced environment, love working and having fun in a team, are a morning person (our shifts can run from as early as 5am meaning early finishes all round!) and have a passion for serving delicious food and organic coffee, sharing small moments of joy and a smile with a customer, we want to hear from you! 
              "
          btnText="Our Vacancies"
          btnStyle="w-[210px] h-[42px] bg-[#9F1B32] text-white hover:bg-[#711323] mt-5"
          to="https://pret.csod.com/ux/ats/careersite/5/home?c=pret"
        />

        <Card
          name="teamPret"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="We have a saying here at Pret"
          text="<b><i>“You can’t hire someone who can make sandwiches and teach them to be passionate. So we hire passionate people and teach them to make sandwiches.”</i></b>
                  <br/><br/>
                  That’s why we say you don’t need experience to work here – we’re looking for people who display our Pret behaviours; <b>passion, team working, great execution and clear communication.<b/>"
          to="/order-your-unusual"
          linkText="Find Out More"
          textStyle="text-[-18px] text-[#372F31] font-montserrat"
          btnStyle="w-[180px] h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
        />

        <Text
          textStyle="text-[40px] text-[#372F31] align-center font-semibold font-playfair mt-40"
          text="Our Shop Info"
        />
       <div className="w-full max-w-[790px] px-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-60">
  <LinkButton
    text="Our Teams"
    to="/our-teams-in-shops"
    btnStyle="w-full h-[80px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
  />
  <LinkButton
    text="Our Benefits"
    to="/our-benefits-shops"
    btnStyle="w-full h-[80px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
  />
  <LinkButton
    text="Early Careers & Apprenticenships"
    to="/early-careers-and-apprenticeships"
    btnStyle="w-full h-[80px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff] p-6 text-center"
  />
  <LinkButton
    text="Career Spotligths"
    to="/career-spotlights"
    btnStyle="w-full h-[80px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff]"
  />
  <LinkButton
    text="Our Franchies Partners"
    to="/our-franchise-partners"
    btnStyle="w-full h-[80px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff] p-10 text-center"
  />
  <LinkButton
    text="Our Rising Star Programme"
    to="/rising-stars"
    btnStyle="w-full h-[80px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff] p-6 text-center"
  />
</div>
      </div>
    </>
  );
};

export default OurShops;
