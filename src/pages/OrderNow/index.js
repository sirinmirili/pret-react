import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import LinkButton from "../../components/LinkButton";

const OrderNow = () => {
  const position = [51.505, -0.09];
  const zoomLevel = 5.5;
  const [activeTab, setActiveTab] = useState("delivery");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-[100%] h-[88vh] flex justify-center  !overflow-y-hidden">
      <div className="w-[500px] p-6 overflow-y-hidden">
        <div className="flex relative pb-[2px] mb-6">
          <button
            className={`text-[18px] mr-6 font-medium pb-2 ${
              activeTab === "delivery" ? "text-[#9F1B32]" : "text-[#575354]"
            }`}
            onClick={() => setActiveTab("delivery")}
          >
            Delivery
            {activeTab === "delivery" && (
              <div className="absolute bottom-0 left-0 h-[2px] w-[20%] bg-[#900028]"></div>
            )}
          </button>

          <button
            className={`text-[18px] font-medium pb-2 ${
              activeTab === "collect" ? "text-[#9F1B32]" : "text-[#575354]"
            }`}
            onClick={() => setActiveTab("collect")}
          >
            Click & Collect
            {activeTab === "collect" && (
              <div className="absolute bottom-0 left-[86px] h-[2px] w-[35%] bg-[#900028]"></div>
            )}
          </button>

          <div className="absolute bottom-0 left-0 w-[68%] h-[1px] z-[-1] "></div>
        </div>

        {activeTab === "delivery" ? (
          <>
            <h2 className="font-semibold text-[40px] mb-4 font-playfair text-[#372F31]">
              What's your address?
            </h2>
            <p className="text-[16px] text-[#372F31] font-bold mb-5">
              Start by typing any part of an address or postcode
            </p>

            <div className="mb-5">
              <label
                htmlFor="text"
                className="block text-[16px] font-bold text-[#372F31]"
              >
                Search by postcode
              </label>
              <div className="w-full flex flex-row gap-x-4">
                <input
                  type="text"
                  className="w-[60%] p-3 border border-[#615d5e] rounded-[4px] text-[14px] outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <LinkButton
                  btnStyle="w-[40%] p-2 bg-[#e7e4e4] text-[#575354] text-[14px] font-bold "
                  text="Search"
                  to=""
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[16px] font-medium mb-2 text-[#372F31]">
                Select an address
              </p>

              <select className="w-full p-3 border border-[#615d5e] rounded-[4px] bg-white text-[#473731] mb-2 text-[16px] outline-none">
                <option>address1</option>
                <option>address2</option>
                <option>address3</option>
                <option>address4</option>
              </select>
              <LinkButton
                btnStyle="w-[30%] text-[16px] text-[#9f1b32] font-semibold mt-6"
                text="Enter manually"
                to=""
              />
            </div>

            <LinkButton
              btnStyle="w-[40%] p-3.5 bg-[#e7e4e4] text-[#575354] text-[14px] font-bold mb-10"
              text="Continue"
              to=""
            />
          </>
        ) : (
          <>
            <h2 className="font-semibold text-[40px] mb-4 font-playfair text-[#372F31]">
              Find a Pret near you
            </h2>
            <p className="text-[16px] text-[#372F31] font-bold mb-5">
              Start by typing any part of an address or postcode
            </p>

            <div className="mb-5">
              <label
                htmlFor="text"
                className="block text-[16px] font-bold text-[#372F31]"
              >
                Search by postcode
              </label>
              <div className="w-full flex flex-row gap-x-4">
                <input
                  type="text"
                  className="w-[60%] p-3 border border-[#615d5e] rounded-[4px]  text-[14px] outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="w-[40%] p-2 bg-[#e7e4e4] text-[#575354] text-[14px] font-bold">
                  Search
                </button>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[16px] font-medium mb-2 text-[#372F31]">
                Select an address
              </p>

              <select className="w-full p-3 border border-[#615d5e] rounded-[4px] bg-white text-[#473731] mb-2 text-[16px] outline-none">
                <option>address1</option>
                <option>address2</option>
                <option>address3</option>
                <option>address4</option>
              </select>
            </div>
          </>
        )}

        <div className="w-full bg-[#fafafa] p-8 mt-10">
          <p className="text-[14px] font-bold text-[#372F31]">
            Ordered with us before?
          </p>
          <p className="text-[14px] text-[#575354] font-bold mb-2">
            Sign in to see your saved locations and place an order
          </p>
          <LinkButton
            btnStyle="w-[40%] h-[45px] border border-black py-[10px] text-[14px] font-bold mt-10"
            text="Sign in"
            to="/sign-in"
          />
        </div>
      </div>

      <div className=" grow ">
        <MapContainer
          center={position}
          zoom={zoomLevel}
          className="w-full h-full overflow-y-hidden"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </div>
  );
};

export default OrderNow;
