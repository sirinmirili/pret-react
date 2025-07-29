import Box from "../../components/Box";
import Card from "../../components/Card";
import SmallCard from "../../components/SmallCard";
import { Images } from "../../Images/images";
import LinkButton from "../../components/LinkButton";
import { useState, useEffect } from "react";

const ClubPret = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="ClubPretDesktop" height="560px" width="100%" />
      ) : (
        <Images name="clubPretMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <Box
          headerText="Sip more, spend less."
          text="Join The Half Price Coffee Club to enjoy 50% off up to five hot or iced* Barista-made drinks a day, for just £5 per month.
              <br /><br />
              Flat White? Classic cuppa? Iced Matcha? Whatever your go-to, Club Pret has you covered. Saving money never tasted so good.
              <br /><br />
              <b>Join Club Pret and start saving today.</b>
              <br />"
        />
        <a
          href="https://play.google.com/store/apps/details?id=com.pret.android&referrer=adjust_reftag%3DcNFZKUIrTFRdf%26utm_source%3DWebsite%2BUK%26utm_campaign%3DCS_web_UK"
          className="text-lg text-center text-[#9f1b32] font-bold text-[14px] z-10 -mt-40 font-montserrat underline hover:no-underline"
        target="_blank"
  rel="noopener noreferrer">
          Download the app to subscribe
        </a>
        <div className="w-[340px] h-[50px] flex sm:flex-row flex-col gap-x-8 items-center justify-center -mt-10 sm:-mt-5 z-10">
          <a
            href="https://apps.apple.com/gb/app/pret-a-manger-organic-coffee/id1530370563?utm_medium=referral&utm_source=web&utm_campaign_id=CP&utm_campaign=CP_landing"
            className="w-[110px] h-[50px] flex items-center"
          target="_blank"
  rel="noopener noreferrer">
            <Images name="appStore" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pret.android&hl=en_GB&utm_medium=referral&utm_source=web&utm_campaign_id=CP&utm_campaign=CP_landing&pli=1"
            className="w-[110px] h-[50px] flex items-center"
          target="_blank"
  rel="noopener noreferrer">
            <Images name="playMarket" />
          </a>
        </div>

        <div className="w-[80%] flex flex-wrap md:flex-row flex-col gap-x-24 justify-center">
          <SmallCard
            image="coffeeCup"
            imageWidth="60px"
            imageHeight="60px"
            headerText="Five Barista-made drinks every day"
            text="Use your Pret app to claim 50% off five hot or iced* Barista-made drinks a day, with 30 mins between redemptions."
            textStyle="text-[14px] text-[#796A5F] font-montserrat"
          />
          <SmallCard
            image="hourglass"
            imageWidth="60px"
            imageHeight="60px"
            headerText="Cancel or pause anytime"
            text="Use your Pret app to claim 50% off five hot or iced* Barista-made drinks a day, with 30 mins between redemptions."
            textStyle="text-[14px] text-[#796A5F] font-montserrat"
          />
          <SmallCard
            image="smartphone"
            imageWidth="60px"
            imageHeight="60px"
            headerText="Scan your QR code to redeem"
            text="Use your Pret app to claim 50% off five hot or iced* Barista-made drinks a day, with 30 mins between redemptions."
            textStyle="text-[14px] text-[#796A5F] font-montserrat "
          />
        </div>

        <Card
          name="cups"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Start saving every day"
          text="With your Club Pret subscription, you can now get 50% off five hot or iced Barista-made drinks every day."
          textStyle=" text-lg text-[#372F31] font-montserrat"
        />

        <Card
          name="baristaRed"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Five Barista-made drinks, every day"
          text="Our Baristas are experts in more than just the classics. So with Club Pret, why not mix up your usual? From our organic teas and coffees, to Coolers, iced matchas or hot chocolates, with up to five a day, pop in and try something new."
          textStyle=" text-lg text-[#372F31] font-montserrat"
        />

        <Card
          name="cup"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Your drink, your way"
          text="At Pret, our Baristas are at the heart of everything we do. These talented crafters train for twelve weeks before they serve up a coffee in shops. They take all the good that goes into the organic beans and milk, and make our coffee what it is (and just how you like it). Finished with milk or alternatives, long or short, white or with sprinkles, but always organic and always with a smile."
          textStyle=" text-lg text-[#372F31] font-montserrat"
        />

        <div className="md:w-[700px] w-[90%] md:h-[450px] h-[70%] border-8 border-[#e7e4e4] p-6 pt-12 flex flex-col items-center gap-y-6 relative mt-10">
          <div className="bg-white w-[100px] h-[80px] -mt-[90px] flex justify-center items-center">
            <div className="w-[70px] ml-2">
              <Images name="subscribe" />
            </div>
          </div>
          <h2 className="w-[80%] text-[32px] font-semibold font-montserrat text-[#372F31] text-center">
            Subscribe to Club Pret for £5/mo
          </h2>
          <p className="text-left text-[#372F31] font-montserrat text-[16px] font-medium">
            The Club Pret subscription includes:
            <br />
            <br />
            <span className="inline-block text-[#9F1B32] mr-2">✓</span>
            Up to five Barista-made drinks half price every day.
            <br />
            <span className="inline-block text-[#9F1B32] mr-2">✓</span>
            Hot and iced drinks included.
            <br />
            <span className="inline-block text-[#9F1B32] mr-2">✓</span>
            Pause or cancel anytime. You're in control.
          </p>
          <LinkButton
            to="https://play.google.com/store/apps/details?id=com.pret.android&referrer=adjust_reftag%3DcQU8ZPjhNwl4a%26utm_source%3DWebsite%2BUK%26utm_campaign%3DCS_web_UK"
            text="Dowload the app to subscripe"
            btnStyle="md:w-[310px] w-full sm:h-[42px] h-[53px] bg-[#9F1B32] text-white hover:bg-[#711323] mt-5 text-center "
          />
        </div>

        <p className="w-[70%] text-center text-[16px] text-[#372F31]">
          Already got an account?
          <a
            href="/sign-in"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            Sign in to manage your subscription
          </a>
          <br /> Need help or have more questions?{" "}
          <a href="/" className="text-[#9F1B32] underline hover:no-underline">
            Have a look at our FAQs
          </a>
        </p>

        <p className=" w-[70%] text-center align-center text-[14px] text-[#372F31] font-montserrat ml-40 mr-40">
          <span className="text-[16px] ">Terms and conditions</span> <br />
          <br />
          *50% off up to five hot or iced Barista-made drinks per day – blended
          drinks (frappés and smoothies) not included. Club Pret monthly
          subscription fee is £5. Participating shops. Subject to availability,
          not all products sold in all shops – exclusions apply. Cannot be used
          in conjunction with any other offer or discount. See{" "}
          <a href="/" className="text-[#9F1B32] underline hover:no-underline">
            pret.co.uk/terms.
          </a>
        </p>
      </div>
    </>
  );
};

export default ClubPret;
