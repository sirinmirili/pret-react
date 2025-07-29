import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../Images/images";

const NotFound = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white px-4 py-24">
      <div className="w-full md:w-[60%] flex flex-col md:flex-row items-center justify-center md:gap-x-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-3xl font-bold text-[#3e0e15] mb-4">Page not found.</h2>
          <p className="text-gray-600 mb-6">
            We are very sorry for the inconvenience.
          </p>
          <Link
            to="/"
            className="text-[#9f1b32] hover:underline text-lg font-medium"
          >
            Go back home
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Images name="notFound" width="600" height="600" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
