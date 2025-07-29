import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SignupBanner = ({ text }) => {
  const [close, setClose] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const isClosed = sessionStorage.getItem("notificationClose") === "true";
    setClose(isClosed);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("notificationClose", "true");
    setClose(true);
  };

  if (close) return null;
  return (
    <>
      {path !== ("/order-now", "/handmade") &&
        !localStorage.getItem("notificationClose") && (
          <div className="flex justify-center items-center py-[8px] bg-[#CBF174] w-full relative">
            <span className=" text-black flex gap-[20px] items-center text-[16px] font-semibold">
              Club Pret | Save everyday{" "}
              <a
                href="/sign-up"
                className="text-black underline cursor-pointer font-normal hover:no-underline"
              >
                Sign up today!
              </a>
            </span>

            <button
              onClick={handleClose}
              className="absolute right-[20px] bg-none border-none cursor-pointer text-[20px] text-black"
            >
              ×
            </button>
          </div>
        )}
    </>
  );
};

export default SignupBanner;
