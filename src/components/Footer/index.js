import { Images } from "../../Images/images";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const location = useLocation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  const path = location.pathname;
  const hiddenPaths = ["/sign-in", "/sign-up", "/order-now"];
  const shouldHide = hiddenPaths.includes(path);
  if (hiddenPaths.includes(path)) {
    return null;
  }

  return (
    <>
      <footer
        className={`font-montserrat py-[40px] px-[10px] pb-[20px] w-[90%] mx-auto mt-10 `}
      >
        <div className="flex justify-between">
          <div
            className={`w-[80%] flex flex-wrap justify-between mb-[30px] ${screenWidth > 1000 ? "block" : "hidden"}`}
          >
            <div className="flex-1 w-[200px] mb-[30px] px-[15px]">
              <h4 className="text-[16px] mb-[15px] text-[#372F31] font-bold">
                Customer Services
              </h4>
              <ul className="list-none">
                <li className="mb-[10px]">
                  <a
                    href="/allergenguide"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Allergen Guide
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[rgb(87,83,84)] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Delivery FAQs
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Accessibility statement
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    UK Shop locations
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-[200px] mb-[30px] px-[15px]">
              <h4 className="text-[16px] mb-[15px] text-[#372F31] font-bold">
                Corporate
              </h4>
              <ul className="list-none">
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Media Centre
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Pret Blog
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    UK Tax Strategy
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Franchise Applications
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="https://assets.ctfassets.net/4zu8gvmtwqss/3Q5rrPfmGS4OXtIUvpvfX3/0ee7b8b4b3430a5ea99282d5c16d342b/Pret_DoingTheRightThing_2022_Report.pdf"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                 target="_blank"
  rel="noopener noreferrer" >
                    ESG Report
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Pret Reports
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    The Pret Foundation
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="https://assets.ctfassets.net/4zu8gvmtwqss/7u4YgoyGOFvFwUcqZDCFrS/8a49205970e10ff7ccd18d2d2b8e1b64/753454_Gender_Pay_Gap_Report_2024.pdf"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                    target="_blank"
  rel="noopener noreferrer"
                  >
                    Gender Pay Gap Report
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Modern Stowry Statement
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-[200px] mb-[30px] px-[15px]">
              <h4 className="text-[16px] mb-[15px] text-[#372F31] font-bold">
                Jobs
              </h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-[10px]">
                  <a
                    href="/jobs"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Jobs at Pret
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Candidate Privacy Notice
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1 w-[200px] mb-[30px] px-[15px]">
              <h4 className="text-[16px] mb-[15px] text-[#372F31] font-bold">
                Club Pret
              </h4>
              <ul className="list-none p-0 m-0">
                <li className="mb-[10px]">
                  <a
                    href="/club-pret"
                    className="text-[#9F1B32] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Subscribe
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a
                    href="/sign-in"
                    className="text-[#575354] no-underline text-[14px] font-medium hover:text-[#9F1B32] transition-colors duration-200"
                  >
                    Manage My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-1 w-[200px] mb-[30px] px-[15px]">
            <div className="flex gap-[15px] mb-[20px]">
              <a href="https://www.facebook.com/pretamanger/" aria-label="Facebook" className="inline-block" target="_blank"
  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 1244 1227"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="#9f1b32"
                    d="M1236.2,615.7C1236.2,278.2,962.5,4.6,625,4.6S13.9,278.2,13.9,615.7 c0,286.6,197.3,527.1,463.5,593.1V802.5h-126V615.7h126v-80.5c0-208,94.1-304.4,298.3-304.4c38.7,0,105.5,7.6,132.9,15.2v169.3 c-14.4-1.5-39.5-2.3-70.6-2.3c-100.2,0-138.9,38-138.9,136.6v66h199.6l-34.3,186.8H699.1v419.9 C1001.7,1185.8,1236.2,928.2,1236.2,615.7z"
                  ></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/pret/#" aria-label="Instagram" className="inline-block" target="_blank"
  rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 1244 1227"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="#9f1b32"
                    d="M622,2.4C456,2.4,435.2,3,370,6C305,9,260.6,19.3,221.7,34.5C181.5,50,147.5,71,113.4,104.9 C79.5,138.9,58.5,173,43,213.2c-15.1,38.9-25.5,83.3-28.4,148.4c-3,65.2-3.7,86-3.7,252s0.6,186.8,3.7,252 c2.9,65,13.3,109.5,28.4,148.4c15.6,40.2,36.5,74.3,70.4,108.3c34,33.9,68.1,54.9,108.3,70.4c38.9,15.1,83.3,25.5,148.4,28.4 c65.2,3,86,3.7,252,3.7s186.8-0.6,252-3.7c65-2.9,109.5-13.3,148.4-28.4c40.2-15.6,74.2-36.5,108.3-70.4 c33.9-33.9,54.9-68.1,70.4-108.3c15.1-38.9,25.5-83.3,28.4-148.4c3-65.2,3.7-86,3.7-252s-0.6-186.8-3.7-252 c-2.9-65-13.3-109.5-28.4-148.4c-15.6-40.2-36.5-74.2-70.4-108.3c-34-33.9-68.1-54.9-108.3-70.4C983.4,19.3,939,9,874,6 C808.8,3,788,2.4,622,2.4 M622,112.5c163.2,0,182.5,0.6,247,3.6c59.5,2.7,91.9,12.6,113.5,21.1c28.5,11,48.8,24.3,70.2,45.7 c21.4,21.4,34.7,41.7,45.7,70.2c8.4,21.6,18.4,53.9,21.1,113.6c2.9,64.4,3.6,83.7,3.6,246.9s-0.6,182.5-3.6,247 c-2.7,59.5-12.6,92-21.1,113.5c-11,28.5-24.3,48.8-45.7,70.2c-21.4,21.4-41.7,34.7-70.2,45.7c-21.5,8.4-53.9,18.4-113.5,21.1 c-64.5,2.9-83.8,3.6-247,3.6s-182.5-0.6-247-3.6c-59.5-2.7-91.9-12.6-113.5-21.1c-28.5-11-48.8-24.3-70.2-45.7 c-21.4-21.4-34.7-41.7-45.7-70.2c-8.4-21.5-18.4-53.9-21.1-113.5c-2.9-64.5-3.6-83.8-3.6-247s0.6-182.5,3.6-246.9 c2.7-59.6,12.6-91.9,21.1-113.6c11-28.5,24.3-48.8,45.7-70.2s41.7-34.7,70.2-45.7c21.5-8.4,53.9-18.4,113.5-21.1 C439.5,113.1,458.9,112.5,622,112.5"
                  ></path>
                  <path
                    fill="#9f1b32"
                    d="M622,817.2c-112.5,0-203.7-91.2-203.7-203.7c0-112.6,91.2-203.8,203.7-203.8S825.7,501,825.7,613.6 C825.7,726,734.5,817.2,622,817.2"
                  ></path>
                  <path
                    fill="#9f1b32"
                    d="M1021.6,287.3c0,40.5-32.8,73.4-73.4,73.4s-73.4-32.8-73.4-73.4s32.8-73.4,73.4-73.4 S1021.6,246.8,1021.6,287.3"
                  ></path>
                </svg>
              </a>
            </div>

            <h4 className="text-[16px] font-normal mb-[15px] text-[#796A5F]">
              Switch Country
            </h4>
            <select
              className="w-[100%] h-[45px] py-[8px] px-[5px] border border-[#ddd] rounded-[4px] bg-white text-[14px] text-[#372F31] cursor-pointer font-montserrat font-semibold"
              defaultValue="United Kingdom"
            >
              <option>United Kingdom</option>
              <option>France</option>
              <option>United States</option>
              <option>Hong Kong</option>
              <option>Dubai</option>
              <option>Singapore</option>
              <option>Germany</option>
              <option>Switzerland</option>
              <option>Belgium</option>
              <option>Ireland</option>
              <option>Canada</option>
              <option>Kuwait</option>
              <option>Luxembourg</option>
              <option>India</option>
              <option>Italy</option>
              <option>Spain</option>
              <option>Qatar</option>
              <option>Greece</option>
              <option>Portugal</option>
              <option>Saudi Arabia</option>
            </select>
          </div>
        </div>

        <hr className="border-none border-t border-[#ddd] my-[20px]" />

        <div className="w-full">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-[20px] flex-1 w-[300px]">
              <a href="/" className="min-h-[24px] min-w-[71px]">
                <Images name="PretLogo" alt="Pret Logo" width="71px" />
              </a>
              <p className="text-[12px] text-[#796A5F] m-0">
                © Pret & Manager 2023. Pret & Manager (Europe) Ltd, Reg.
                Number: 165423 - Pret & Manager (USA) Ltd, Reg. Number: 355854.
                The above two companies are registered in England and their
                registered office is at 978, Verde, to Bressanette Place, London
                SWE 5DH.
              </p>
            </div>
          </div>
          <div className="mt-[40px] ml-[-230px]">
            {/* <button className="bg-white text-[#372F31] border border-[#372F31] rounded-[4px] font-bold font-montserrat text-[14px] h-[40px] w-[180px] cursor-pointer flex items-center justify-center box-border hover:bg-black hover:text-white">
            Cookies Settings
          </button> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
