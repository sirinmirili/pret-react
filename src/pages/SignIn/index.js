import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      <a href="/" className="mt-8 mb-6">
        <Images name="PretLogo" width="100px" height="34px" />
      </a>

      <hr className="w-full border-t border-gray-300 my-2" />

      <div className="w-[450px] ">
        <div className="">
          <LinkButton
            btnStyle=" w-[70px] h-[35px] text-[#9F1B32] text-[18px] font-semibold  hover:underline"
            text=" &lt; Back"
            to="/"
          />
        </div>

        <h2 className="text-[40px] font-semibold font-playfair text-[#372F31] mt-10 h1">
          Welcome back.
        </h2>

        <div className=" mt-10">
          <label
            htmlFor="email"
            className="block text-[16px] font-medium text-[#796A5F]"
          >
            Enter your email address
          </label>

          <input
            type="email"
            id="email"
            className="w-full p-2 border border-[#796A5F] mt-2 outline-none"
          />
        </div>

        <LinkButton
          text="Continue"
          to="/"
          btnStyle="w-[150px] h-[40px] bg-[#9F1B32] text-white hover:bg-[#7a1425] mt-3"
        />

        <div className="mt-10 gap-y-8">
          <p className="text-[16px] text-[#796A5F] font-medium">
            Don't have a Pret account yet? We'll get you set up with one faster
            than you can say Organic Macchiato.
          </p>
          <a
            href="/sign-up"
            className="text-[#9F1B32] text-[16px] font-medium underline hover:no-underline"
          >
            Create a Pret account
          </a>
        </div>

        <div className=" h-[170px] flex flex-row border-t-2 border-[#5599d8]  mt-6 bg-[#f3f8fc] ">
          <div className=" w-[60px] mt-4 ml-4">
            <Images name="infoBlue" width="24px" height="24px" />
          </div>
          <div className="flex flex-col mt-4 mr-2">
            <p className="text-[16px] text-[#1C4E7D] font-medium">
              First time signing into our new Pret Delivery?
            </p>
            <p className="text-[14px] text-[#433D3E] font-medium">
              If you've ordered before, use your usual email to sign in. For
              security, click 'Forget your Password' on your first visit.
            </p>
            <p className="text-[14px] text-[#433D3E] font-medium">
              Pret Perk or Club-Pret Subscriber? Sign in with your email and
              password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
