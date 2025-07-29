import Card from "../../components/Card";
import Box from "../../components/Box";
import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import { useState, useEffect } from "react";
import RecipeCard from "../../components/RecipeCard";

const SuperPlates = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [currentSlide, setCurrentSlide] = useState(0);

  const recipes = [
    {
      image: "appleBowl",
      text: "The Big Apple Bowl",
    },
    {
      image: "pestoBaguette",
      text: "Mozzarella, Roasted Tomato & Pesto Baguette",
    },
    {
      image: "fruitPot",
      text: "Watermelon, Pineapple & Kiwi Fruit Pot",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 768 ? (
        <Images name="superPlatesDesktop" height="560px" width="100%" />
      ) : (
        <Images name="superPlatesMobile" height="560px" width="100%" />
      )}

      <div className="w-full flex flex-col items-center gap-y-16">
        <Box
          headerText="When salads dream big"
          text="Packed with a range of delicious ingredients, our brand-new Super Plates have been carefully crafted by Pret’s in house Head of Food and Registered Nutritionist to keep you fuller for longer."
        />
        <div className="w-[90%] md:w-[77%] flex flex-wrap justify-center gap-8 relative z-10 -mt-40 mb-10">
          <LinkButton
            to="/order-online"
            text="Order now"
            btnStyle="md:w-[160px] w-full h-[42px] bg-white text-[#372F31] border border-[#372F31] hover:bg-black hover:text-white"
          />
          <LinkButton
            to="/menu"
            text="See menu"
            btnStyle="md:w-[153px] w-full h-[42px] bg-[#9F1B32] text-white border border-[#9F1B32] hover:bg-[#711323] "
          />
        </div>

        <Card
          name="misoSalmon"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="A taste sensation"
          text="First up, our <b>Miso Salmon Super Plate</b>. Featuring golden roasted salmon and avocado topped with Japanese style Togarashi spiced seeds served with black rice & quinoa, Tenderstem® broccoli, chilli aubergine and edamame soya beans. Your next flavour-packed lunch."
          textStyle=" text-lg text-[#372F31]"
        />
        <Card
          name="butternut"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Veggies rejoice!"
          text="Go plant-based with our <b>new Butternut Mezze Super Plate</b>. Delicious roasted butternut squash and chilli aubergine is served alongside smoky chargrilled chickpeas and hand-massaged kale, pickled cabbage & carrot and a dollop of humous. A Pret team favourite!"
          textStyle=" text-lg text-[#372F31]"
        />
        <Card
          name="chipotle"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Feeling saucy?"
          text="Then tuck into our <b>Chipotle Chicken Super Plate</b>. Starring chargrilled British chicken breast coated in chipotle ketchup. Served with black bean mole, seasoned brown rice & quinoa, chargrilled red pepper and avocado. Finished with pickled onion, a sprinkle of coriander, feta and a wedge of lime."
          textStyle=" text-lg text-[#372F31] font-montserrat"
        />
        <Card
          name="shawarma"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Shawarma time"
          text="Our <b>Shawarma Chicken Super Plate</b> is made with chargrilled British chicken breast coated in shawarma spiced sauce. Served with smoky chickpeas, hand-massaged kale, chargrilled red pepper, cucumber sticks and humous. Finished with mint, pomegranate seeds, pistachios and a wedge of lemon."
          textStyle=" text-lg text-[#372F31] font-montserrat"
        />
        <h2 className="text-[40px] font-semibold font-playfair mt-10 text-center h1">
          New and for you!
        </h2>
        

        {screenWidth > 950 ? (
          <div className="flex flex-wrap gap-x-8 mb-20 ">
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                {...recipe}
                to="#"
                buttonText="See recipe"
                btnStyle="w-[256px] h-[42px] mt-5 border border-[#372F31] text-[#372F31] font-semibold hover:bg-black hover:text-white transition-colors duration-200"
              />
            ))}
          </div>
        ) : (
          <div className="mb-20 w-full ">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {recipes.map((recipe, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center px-4"
                  >
                    <RecipeCard
                      {...recipe}
                      to="#"
                      buttonText="See recipe"
                      btnStyle="w-[256px] h-[42px] mt-5 border border-[#372F31] text-[#372F31] font-semibold hover:bg-black hover:text-white transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {recipes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index
                      ? "bg-[#372F31]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to recipe ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SuperPlates;
