import Card from "../../components/Card";
import { Images } from "../../Images/images";
import Text from "../../components/Text";
import LinkButton from "../../components/LinkButton";
import { useState, useEffect } from "react";

const About = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 700 ? (
        <Images name="aboutDesktop" height="560px" width="100%" />
      ) : (
        <Images name="aboutMobile" height="560px" width="100%" />
      )}

      <div className="width-full flex flex-col items-center gap-y-16">
        <Text
          text="About Pret"
          textStyle="font-semibold text-5xl mt-10 font-playfair h1"
        />
        <p className="md:w-[60%] w-[90%] text-center text-[18px] font-montserrat -mb-10 -mt-5">
          Since opening our first shop in 1986, Pret's mission has been simple.
          To serve freshly made food and good organic coffee, whilst also trying
          to do the right thing.
          <br />
          <br />
          That's why our food is handmade in our shop kitchens throughout the
          day and anything we don't sell, goes to charity.
          <br />
          <br />
          That's also why our coffee is organic (and always will be) and our
          Coffee Fund is supporting the next generation of farmers. It's
          (partly) what we think makes Pret special.
          <br />
          <br />
          See our full menu for our delicious range of food and coffee.
        </p>
        <LinkButton
          to="/menu"
          text="View more"
          btnStyle="md:w-[162px] w-[90%] h-[42px] bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
        />

        <Card
          name="pretBlog"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Pret Blog"
          text="The latest news and fresh thoughts from Pret."
          to="/pret-blog"
          linkText="Pret blog"
          textStyle=" text-[-18px] text-[#372F31]"
          btnStyle="md:w-[150px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
        />
        <Card
          name="ourFood"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Our Food"
          text="What makes Pret special is our freshly made food. Not everyone knows that all Pret shops have a kitchen (or one very close by), where our Team Members lovingly prepare sandwiches, wraps, salads and so much more throughout the day (and through the night, ready for breakfast).
        <br/></br/>
        Everything on the Pret menu is created by people who have a passion for great food. We tweak our menu often, to ensure we use seasonal ingredients when they're at their freshest and best."
          to="/menu"
          linkText="View more"
          textStyle=" text-[-18px] text-[#372F31]"
          btnStyle="md:w-[162px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
        />
        <Card
          name="pretRecepies"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Pret Recipes"
          text="Many of our most loved recipes are freshly made in our shop kitchens by Pret Team members. No scary machines, no red-faced shouty chefs… and no reason not to try making these delicious recipes at home!"
          to=""
          linkText="Recepies"
          textStyle=" text-[-18px] text-[#372F31]"
          btnStyle="md:w-[140px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
        />
        <Card
          name="organicCoffee"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Organic Coffee"
          text="Our coffee is 100% organic and always arabica. Our teas, milks and milk alternatives are organic too. We have long-standing relationships with our farmers and take time to train up each and every one of our brilliant Baristas. It's just much better this way."
          to=""
          linkText="PRET'S COFFEE STORY"
          textStyle=" text-[-18px] text-[#372F31]"
          btnStyle="md:w-[250px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
        />

        <div className="w-full md:h-[588px] h-[620px] bg-gray-50 flex place-content-center justofy-center">
          <Card
            name="pretFoundation"
            imageWidth="704px"
            imageHeight="396px"
            divDirection={false}
            headerText="The Pret Foundation"
            text="Set up by our founders in 1995, The Pret Foundation is a global charity with a clear purpose. To alleviate poverty, hunger and help break the cycle of homelessness by donating our unsold food, partnering with grassroots charities and giving opportunities to those in need of a second chance."
            to=""
            linkText="Find out more"
            textStyle=" text-[-18px] text-[#372F31]"
            btnStyle="md:w-[184px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
          />
        </div>
        <Card
          name="sustainability"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Sustainability"
          text="We’re doing everything we can to reduce our impact on the environment and to help make caring for our planet that little bit easier for our customers and teams. Follow Pret’s sustainability journey and keep telling us what you think."
          to=""
          linkText="Sustainability of Pret"
          textStyle=" text-[-18px] text-[#372F31]"
          btnStyle="md:w-[235px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
        />
        <Card
          name="goodJobs"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Good Jobs"
          text="At Pret we work hard, have fun and enjoy brilliant perks and pay. You can't hire someone who can make sandwiches and teach them to be passionate. So we hire passionate people and teach them to make sandwiches."
          to="/jobs"
          linkText="Work at Pret"
          textStyle=" text-[-18px] text-[#372F31]"
          btnStyle="md:w-[172px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
        />

        <div className="relative w-full h-[710px]">
          <Images name="FAQ" height="560px" width="100%" />
          <div className="absolute md:top-[44px] md:left-[170px] top-[180px] md:w-[427px] w-[98%] md:h-[536px] z-10 flex flex-col gap-6 text-left bg-white p-[64px] font-montserrat">
            <Text
              textStyle="text-[32px] font-bold text-[#372F31]"
              text="FAQs"
            />
            <Text
              textStyle="text-[18px] text-[#372F31] w-2xl "
              text="Got a burning question? Take a look at our FAQs page."
            />
            <LinkButton
              to=""
              btnStyle=" md:w-[158px] w-full h-[42px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-black hover:text-[#fff]"
              text="Pret FAQs"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
