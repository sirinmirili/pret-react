import Box from "../../components/Box";
import Card from "../../components/Card";
import JobsCard from "../../components/JobsCard";
import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import React, { useState, useEffect } from "react";

const Jobs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 700 ? (
        <Images name="jobsDesktop" height="560px" width="100%" />
      ) : (
        <Images name="jobsMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <Box
          headerText="People with Passion"
          to=""
          btnText="Discover jobs at Pret"
          btnStyle="w-[90%] lg:w-[260px] h-[42px] bg-[#9F1B32] text-white hover:bg-[#711323] mt-5 "
        />

        <Card
          name="aboutPret"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="About Pret"
          text="<b>Our story starts in London in the 80s </b>
        <br/><br/>
        Back then, phones were big, customer service was generally poor, and lunches in the busy city were bland. 
        <br/><br/>
        Our first ever shop (a little deli in Victoria) came in to change all that. And offer Londoners vibrant, freshly made, delicious food, served with a warm welcome and good organic coffee. 
        <br/><br/>
        While we swapped the deli counters for kitchens and wicker baskets for fridges, not much else has changed. We still freshly make the food in our shops every day. We still love serving our regulars. We just do it in shops all over the world now. 
        "
          to="/about"
          linkText="More on our story"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="w-[212px] h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff] "
        />
        <Card
          name="ourCulture"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Our Culture"
          text="<b>At Pret, We Believe in Growing Good Things </b>
        <br/><br/>
        From the fresh, hand-made food we create every day to the way we invest in our people, growth is at the heart of everything we do. We believe in setting up our team members for success, offering opportunities to grow in confidence, learn valuable skills, and pursue their own unique paths. 
        <br/><br/>
        At Pret, good growth means more than just career progression—it means becoming part of a community that values kindness, honesty, and generosity. Our teams are mentors, friends, and the backbone of an inclusive, supportive culture. We work together, sharing smiles and joyful moments, while doing our part to make the world a lit bit brighter for our customers and communities.​ 
        "
          textStyle=" text-[18px] text-[#372F31] font-[montserrat]"
        />
        <Card
          name="appleHeart"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Pret is a business with heart"
          text="We believe in being kind, being honest, and being generous. It’s why, at the end of each night, we donate as much of our unsold food as possible to those who need it most. And why we support those experiencing homelessness through The Pret Foundation. "
          textStyle=" text-[18px] text-[#372F31] font-[montserrat]"
        />
        <Card
          name="hand"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Our Values"
          text="Pret, and its people, go about things according to four key values – H.A.N.D as it’s known around here. Everything we do comes back to these, even careers at Pret."
          textStyle=" text-[18px] text-[#372F31] font-[montserrat]"
        />

        <div className="w-[80%] flex flex-wrap gap-8  mt-10 justify-center">
          <JobsCard
            headerText="Happy teams, happy customers"
            text="We believe our people are the stars, and when our people are happy, that makes for happy customers, too. So, we’re here to support and celebrate every contribution, with empathy and heart, cheering our people on at every stage of their career with Pret.​ "
            textStyle=" text-[14px] font-montserrat font-medium mt-2 text-[#796a5f] leading-relaxed"
          />
          <JobsCard
            headerText="Amazing standards every day"
            text="We’re committed to quality. From our fresh, hand-made food to our top-notch training programmes, we uphold the highest standards in everything we do. You’ll be part of a team that works with passion, skill, integrity, confidence and pride."
            textStyle=" text-[14px] font-montserrat font-medium mt-2 text-[#796a5f] leading-relaxed"
          />
          <JobsCard
            headerText="Never standing still"
            text="We are always moving. Driven by passion for our products, customers, partners and people, a love of innovation and a drive for ambitious growth, we boldly move forward, and show persistence, energy and excitement in everything we do. "
            textStyle=" text-[14px] font-montserrat font-medium mt-5 text-[#796a5f] leading-relaxed"
          />
          <JobsCard
            headerText="Doing the right thing"
            text="We’re dedicated to making a positive impact. Whether it’s working through the Pret Foundation or looking after our people, we hold ourselves accountable, act with integrity, and strive to do the right thing, every time."
            textStyle=" text-[14px] font-montserrat font-medium mt-2 text-[#796a5f] leading-relaxed"
          />
        </div>

        <Card
          name="makingUs"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Our People are the Making of Us"
          text="Pret is a place of opportunity. Where hardworking, passionate, wonderful people (like you) are given the chance to shine. Did you know that over 80% of our Managers started on our shop floor and that over 20% of our Support Centre teams started in shops (including our CEO, Pano!)
        <br/> <br/>
        We’ve been lucky in our 30-something years to attract the kindest, most wonderful people into Pret. People with big hearts, who care about others – a lot. It’s a trait that seems to come naturally. A trait we only want to nurture. Which is why we host annual volunteering days, walkathons, sleepouts, sing-alongs, bake-offs as often as we can, to give our teams the chance to do what they love doing. "
          textStyle=" text-[18px] text-[#372F31] font-[montserrat]"
        />
        <Card
          name="yetToCome"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="The Best is Yet to Come"
          text="Since opening our first shop, we’ve opened shops in 18 different countries. We own and operate shops in the UK, US, Hong Kong and France. The majority of our newest markets are owned and operated by our wonderful franchise partners, carefully selected and identified teams that are as passionate about Pret as we are. After a record year of openings in 2023, we currently have over 650 shops and ambitious plans to reach 1000 shops in 2026.
        <br/><br/>
        The vision is big, and a world of opportunity awaits, so we need the best people to be part of the journey. Success takes a team."
          textStyle=" text-[18px] text-[#372F31] font-[montserrat]"
        />
        <Card
          name="diversity"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Diversity, Equity & Belonging & Wellbeing"
          text="Beyond a warm welcome, Diversity, Equity, Belonging & Wellbeing are things we care deeply about. Regardless of who you are, your background, or how you take your coffee, you can be yourself at Pret. As well as creating an environment where we listen, and listen more to constantly evolve and grow, for our teams, customers, and communities; we set ourselves bold diversity, equity, belonging and wellbeing goals to ensure we continue to stay true to our value of doing the right thing, recognising that belonging and wellbeing go hand in hand and one size does not fit all. Supported by employee-led Belonging groups to who help our diverse talent to shine brightly. 
        <br/><br/>
        We also have our amazing Rising Star programme supporting those experiencing homelessness, prision leavers and refugees to join our teams. If you want to know more about the Rising Star programme please click here
        <br/> <br/>
        If we can support your application process, making adjustments that meet your individual needs and help you be at your best, please just ask."
          textStyle=" text-[18px] text-[#372F31] font-[montserrat]"
          to="https://assets.ctfassets.net/4zu8gvmtwqss/3Q5rrPfmGS4OXtIUvpvfX3/0ee7b8b4b3430a5ea99282d5c16d342b/Pret_DoingTheRightThing_2022_Report.pdf"
          linkText="See our ESG Report"
          btnStyle="w-[240px] h-[42px] text-[16px] bg-white text-[#372F31] border-solid border-[1px] border-black hover:bg-[#372F31] hover:text-[#fff] "
        />

        

        <h2 className="text-[40px] font-semibold font-playfair text-[#372F31] -mb-10 mt-10 h2">
          Life at Pret
        </h2>
        <div className="flex sm:flex-row flex-col gap-4 mb-10">
          <LinkButton
            to="/life-in-our-shops"
            text="Life in our Shops"
            btnStyle="sm:w-[170px] sm:h-[130px] w-full h-[30px] text-center p-12 bg-white text-[#372F31] border-[1px] border-black hover:bg-[#372F31] hover:text-white"
          />
          <LinkButton
            to=""
            text="Life in our Head Office(75B)"
            btnStyle="sm:w-[170px] sm:h-[130px] w-full h-[30px] text-center p-12 px-10 bg-white text-[#372F31] border-[1px] border-black hover:bg-[#372F31] hover:text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Jobs;
