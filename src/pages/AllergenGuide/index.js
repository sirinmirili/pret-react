import Text from "../../components/Text";
import Card from "../../components/Card";

const AllergenGuide = () => {
  return (
    <>
      <div className="width-full flex flex-col justify-center items-center gap-y-16">
        <Text
          text="Allergen Guide"
          textStyle="font-semibold text-5xl mt-10 font-playfair h1"
        />
        <p className="md:w-[45%] w-[90%] text-center text-[18px] -mt-10 font-medium">
          Having a food intolerance or allergy doesn’t mean you can’t enjoy
          delicious food when you’re out and about. At Pret, we have options to
          suit a whole range of special diets, so you don’t have to miss out on
          your favourites when you’re eating with us.
          <br />
          <br />
          We’ve listened to Pret customers with allergies who told us about the
          issues they face when eating on the go. And, from detailed ingredients
          labels on all our freshly prepared food to more allergy training for
          our staff, we’ve made keeping you safe our number one priority. .
          <br />
          <br />
          It’s all part of
          <a
            href="/"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            {" "}
            Pret’s Allergy Plan
          </a>
          , our commitment to customers living with food allergies and
          intolerances.
          <br />
          <br />
          Read on to discover how to make the right choice when you’re eating at
          Pret. But just remember that because we use many ingredients and
          shared equipment in our shop kitchens, it’s{" "}
          <b>
            impossible to guarantee that Pret food and drink will be 100%
            allergen-free.
          </b>
          <br />
          <br />
          It’s also why{" "}
          <b>
            our vegan food is not suitable for those with milk or egg allergies
          </b>
          , even though it’s made to a vegan recipe. In line with Vegan Society
          recommendations, we also use the term 'vegan-friendly' to label any
          products that may not be made in dedicated vegan sites.
        </p>

        <Text
          text="Choose the food and drink that’s right for you"
          textStyle="md:w-[40%] font-semibold text-5xl mt-10 font-playfair h1 text-center"
        />
        <p className="md:w-[45%] w-[90%] text-center text-[18px] -mt-10 font-medium">
          Whether you’re popping in for breakfast, a baguette, or a bite
          in-between, we want to make life easier for customers on special
          diets. It’s why everything we freshly prepare in our shops also comes
          <a
            href="/"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            {" "}
            freshly labelled
          </a>
          with all of its ingredients and 14 of the declarable allergens (plus
          pine nuts) highlighted in bold. You’ll also find these allergens
          listed on product shelf tickets.
          <br />
          <br />
          If you have any trouble finding what you're looking for, just ask the
          Manager - they'll be more than happy to help. All our Team Members
          take Allergy Awareness courses, while Shop Managers sit supervised
          allergen exams.
          <br />
          <br />
          while Shop Managers sit supervised allergen exams. You will also see
          QR code signs in our shops which link through to our online menu,
          allowing you to filter and check ingredients and allergens
          <br />
          <br />
          Want to find out if something we sell is right for you before you
          visit us? Download Pret’s
          <a
            href="/allergenguide"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            {" "}
            Allergen Guide PDF
          </a>
          . It contains all of the products we sell at our UK shops, with
          allergens listed along the top of the page for easy reference. If a
          product contains one of these ingredients, you’ll find a tick in the
          corresponding box. Where a product contains 'Cereals Containing
          Gluten' and 'Nuts’, you’ll find that specific ingredient listed (for
          example, wheat, rye, oats).
          <br />
          <br />
          If you are interested in an ingredient that’s not one of the allergens
          we list, check the label on the individual product, or look up the
          product in our
          <a
            href="/menu"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            {" "}
            Menu
          </a>
          <br />
          <br />
          Please remember to check our Allergen Guide and the ingredient label
          regularly as recipes do change from time to time. We don’t want anyone
          to be caught out by a new take on an old favourite.
        </p>
        <Text
          text="Other ways we’re helping customers with food allergies"
          textStyle="md:w-[40%] font-semibold text-5xl mt-10 font-playfair h1 text-center"
        />
        <p className="md:w-[45%] w-[90%] text-center text-[18px] -mt-10 font-medium">
          But that’s not all. We’ve given over 70 Pret recipes a makeover,
          removing one or more allergens without compromising on taste. And
          we’ve changed Pret’s product development process, to make sure
          potential allergens are avoided when the recipe is being created. Less
          allergens, right from the get-go.
          <br />
          <br />
          We’ve also built on our existing allergy training programme since 2019
          to encourage understanding of allergies in every shop, and added
          allergy awareness to Pret’s weekly “mystery shopper” programme.
        </p>

        <Text
          text="Want to know more?"
          textStyle="w-[40%] text-center font-semibold text-5xl mt-10 font-playfair h1"
        />
        <p className="md:w-[47%] w-[90%] text-center text-[18px] -mt-10 font-medium">
          We understand that no matter how detailed our Allergen Guide is, there
          may be times when it can't answer the questions you may have. If you
          need to know more, please get in touch with our{" "}
          <a
            href="/"
            className="text-[#9F1B32] underline hover:no-underline"
          >
            Customer Service team
          </a>{" "}
          who will be happy to help.
        </p>

        <Card
          name="allergyPlan"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Pret's Five-Point Allergy Plan"
          text="Read more about our commitment to customers with food allergies and intolerances in Pret’s Allergy Plan online."
          to=""
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="w-full h-[42px] bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527] sm:w-[180px]"
        />

        <Card
          name="ingredientLabelling"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Ingredient Labelling"
          text="Discover Pret’s approach to ingredient labelling and get peace of mind when you’re eating with us in our online ingredient labelling guide."
          to=""
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="w-full h-[42px] bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527] sm:w-[180px]"
        />

        <Card
          name="allergiensMilk"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={false}
          headerText="Allergens In Coffees, Milks & Syrups"
          text="Popping in for coffee? Find out the steps we take to keep customers with food allergies and intolerances safe."
          to=""
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="w-full h-[42px] bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527] sm:w-[180px]"
        />

        <Card
          name="awarenessTraining"
          imageWidth="384px"
          imageHeight="384px"
          divDirection={true}
          headerText="Pret’s Allergen Awareness Training"
          text="Nothing is more important to us than your safety. So find out more about the allergen awareness training we give to every member of our hard-working team."
          to=""
          linkText="Find Out More"
          textStyle=" text-[18px] text-[#372F31]"
          btnStyle="w-full h-[42px] bg-[#9F1B32] text-white text-[14px] hover:bg-[#7c1527] sm:w-[180px]"
        />
      </div>
    </>
  );
};

export default AllergenGuide;
