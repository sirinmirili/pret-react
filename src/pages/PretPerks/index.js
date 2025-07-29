import Box from "../../components/Box";
import { Images } from "../../Images/images";
import Text from "../../components/Text";
import SmallCard from "../../components/SmallCard";
import Card from "../../components/Card";
import { useState, useEffect } from "react";

const PretPerks = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="perksDesktop" height="560px" width="100%" />
      ) : (
        <Images name="pretPerksMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <Box
          headerText="Say hello to Pret Perks"
          text="Pret Perks is our way of saying thanks to our wonderful customers.
              <br /><br />
              Enjoy all kinds of top-notch treats, rewards and little extras when you shop.
              <br /><br />
              The more you Pret, the more you get!"
        />

        <div className="w-[340px] h-[50px] flex sm:flex-row flex-col gap-x-8 items-center justify-center -mt-40 sm:-mt-40 z-10">
          <a
            href="https://apps.apple.com/gb/app/pret-a-manger-organic-coffee/id1530370563?utm_medium=referral&utm_source=web&utm_campaign_id=CP&utm_campaign=CP_landing"
            className="w-[110px] h-[50px] flex items-center" target="_blank"
  rel="noopener noreferrer"
          >
            <Images name="appStore" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pret.android&hl=en_GB&utm_medium=referral&utm_source=web&utm_campaign_id=CP&utm_campaign=CP_landing&pli=1"
            className="w-[110px] h-[50px] flex items-center"
          target="_blank"
  rel="noopener noreferrer" >
            <Images name="playMarket" />
          </a>
        </div>

        <Text
          textStyle="text-[40px] align-center font-semibold font-playfair mt-10 h1"
          text="How it works"
        />

        <div className=" w-[80%] flex flex-wrap md:flex-row flex-col gap-8 justify-center">
          <SmallCard
            image="stars"
            imageWidth="75px"
            imageHeight="75px"
            headerText="Earn stars as you shop"
            text="Just scan the code in your Pret app*"
            textStyle="text-[14px] text-[#796A5F] font-montserrat"
          />
          <SmallCard
            image="lock"
            imageWidth="75px"
            imageHeight="75px"
            headerText="Track stars in the app"
            text="10 stars = a perk"
            textStyle="text-[14px] text-[#796A5F] font-montserrat"
          />
          <SmallCard
            image="pickYourPret"
            imageWidth="75px"
            imageHeight="75px"
            headerText="Pick your perk"
            text="From a selection of tasty treats (lucky you!)"
            textStyle="text-[14px] text-[#796A5F] font-montserrat "
          />
          <SmallCard
            image="getBonus"
            imageWidth="75px"
            imageHeight="75px"
            headerText="Get bonus stars and perks"
            text="When we decide to serve up a little extra Pret joy!"
            textStyle="text-[14px] text-[#796A5F] font-montserrat "
          />
        </div>

        <Card
          name="getApp"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Get the app to track"
          text="Download the Pret app to see stars and track treats.
        <br/><br/>
        Ready? Pret. Go!"
          textStyle=" text-[18px] text-[#372F31] font-montserrat"
        />
        <Card
          name="pretStart"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Club Pret stars"
          text="Earn stars every time you:
        <br/><br/>
        ● renew you subscription
        <br/>
        ● buy anything with your drink
        <br/><br/>
        Just when you thought is couldn't get any better!"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="text-[#9F1B32] bg-transparet hover:underline md:w-[200px] w-full h-[42px]"
          linkText="Find out more "
          to="/club-pret"
        />

        <p className="w-[70%] text-center align-center text-[16px] text-[#372F31] font-montserrat">
          Already got an account?
          <a href="/" className="text-[#9F1B32] underline hover:no-underline">
            Sign in to manage your subscription
          </a>
          <br /> Need help or have more questions?
          <a href="/" className="text-[#9F1B32] underline hover:no-underline">
            Have a look at our FAQs
          </a>
        </p>

        <p className="w-[70%] text-center align-center text-[14px] text-[#372F31] font-montserrat ml-40 mr-40">
          <span className="text-[16px] ">Terms and conditions</span> <br />
          <br />
          *One star awarded per transaction totalling £1.99 or above <br />
          Read our
          <a href="/" className="text-[#9F1B32] underline hover:no-underline">
            full terms and conditions.
          </a>
        </p>
      </div>
    </>
  );
};

export default PretPerks;
