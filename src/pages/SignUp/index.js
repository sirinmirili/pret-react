import LinkButton from "../../components/LinkButton";
import { Images } from "../../Images/images";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

const plans = [
  { label: "+994", description: "Azerbaijan" },
  { label: "+90", description: "Turkey" },
  { label: "+1", description: "USA" },
  { label: "+49", description: "Germany" },
  { label: "+7", description: "Russia" },
  { label: "+44", description: "UK" },
];

const SignUp = () => {
  const [selected, setSelected] = useState(plans[0]);
  const [password, setPassword] = useState("");

  const requirements = [
    {
      label: "Have 12 or more characters",
      test: (pw) => pw.length >= 12,
    },
    {
      label: "Include letters a-z",
      test: (pw) => /[a-zA-Z]/.test(pw),
    },
    {
      label: "Include numbers 0-9",
      test: (pw) => /\d/.test(pw),
    },
    {
      label: "Have at least one special character @$!%*#?&",
      test: (pw) => /[@$!%*#?&]/.test(pw),
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-full px-4">
        <a href="/" className="mt-8 mb-6">
          <Images name="PretLogo" width="100px" height="34px" />
        </a>

        <hr className="w-full border-t border-gray-300 my-2" />

        <div className="w-[450px] h-[1360px] ">
          <div className="">
            <LinkButton
              btnStyle=" w-[70px] h-[35px] text-[#9F1B32] text-[18px] font-semibold  hover:underline"
              text=" &lt; Back"
              to="/sign-in"
            />
          </div>
          <h2 className="text-[40px] font-semibold font-playfair text-[#372F31] mt-6 mb-4">
            Getting to know you
          </h2>
          <p className="text-[16px] text-[#796A5F] font-medium mb-8">
            Tell us a bit about yourself!
          </p>

          <div className="mb-6">
            <label
              htmlFor="firstName"
              className="block text-[16px] font-medium text-[#796A5F] mb-1"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border border-[#796A5F] mt-2 outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="lastName"
              className="block text-[16px] font-medium text-[#796A5F] mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border border-[#796A5F] mt-2 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[16px] font-medium text-[#796A5F]">
              Mobile number
            </label>
            <span className="text-[14px] text-[#575354] text-right font-medium">
              Don't worry, we won't spam you. This is just to keep your account
              secure.
            </span>
            <div className="flex flex-row gap-x-4">
              <Box w="80px" mt="2">
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    h="42px"
                    w="100%"
                    px="2"
                    border="1px solid"
                    borderColor="#796A5F"
                    borderRadius="0"
                    bg="white"
                    color="black"
                    fontWeight="normal"
                    textAlign="left"
                    _hover={{ bg: "white" }}
                    _active={{ bg: "white" }}
                    _focus={{ boxShadow: "none" }}
                  >
                    {selected.label}
                  </MenuButton>
                  <MenuList
                    w="80px"
                    border="1px solid"
                    borderColor="#796A5F"
                    borderRadius="0"
                    p="0"
                  >
                    {plans.map((plan) => (
                      <MenuItem
                        key={plan.value}
                        onClick={() => setSelected(plan)}
                        px="3"
                        py="2"
                        _hover={{ bg: "#F3F3F3" }}
                      >
                        <VStack align="start" spacing={0}>
                          <Text fontSize="sm" color="black">
                            {plan.label} - {plan.description}
                          </Text>
                        </VStack>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </Box>

              <input
                type="tel"
                className="w-full p-2 border border-[#796A5F] mt-2 outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[16px] font-medium text-[#796A5F] mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-[#796A5F] mt-2 outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[16px] font-medium text-[#796A5F] mb-1"
            >
              Password
            </label>

            <p className="text-[14px] text-[#575354] mb-2">
              Your password must…
            </p>
            <ul className="mt-3 ml-2 text-sm space-y-1">
              {requirements.map((req, index) => {
                const valid = req.test(password);
                return (
                  <li key={index} className="flex items-center">
                    <span
                      className={`inline-block w-4 h-4 mr-2 rounded-full text-white text-xs text-center ${
                        valid ? "bg-green-600" : "border border-[#796A5F]"
                      }`}
                    >
                      {valid && "✓"}
                    </span>
                    <span
                      className={`${valid ? "text-green-700" : "text-gray-600"}`}
                    >
                      {req.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <input
              type="password"
              id="password"
              className="w-full p-2 border border-[#796A5F] mt-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-[16px] font-medium text-[#796A5F]">
              Where do you live?
            </label>
            <span className="text-[14px] text-[#575354] text-right font-medium">
              Helps us know which services to provide to you
            </span>
            <select
              className="w-[280px] h-[42px] w-full p-2 border border-[#796A5F] mt-2 outline-none"
              defaultValue="Choose a location"
            >
              <option>Choose a location</option>
              <option>United Kingdom</option>
              <option>France</option>
              <option>USA</option>
            </select>
          </div>

          <div className="mb-8">
            <p className="text-[16px] text-[#796A5F] mb-4 font-medium">
              Receive marketing messages from us, including the latest Pret
              news, menu launches, new recipes and a whole lot of other good
              stuff. (Amend these boxes at any time)
            </p>
            <div className="flex items-center gap-x-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] accent-[#9F1B32] mr-2"
                />
                <span className="text-[16px] text-[#796A5F]">Email</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] accent-[#9F1B32] mr-2"
                />
                <span className="text-[14px] text-[#796A5F]">SMS</span>
              </label>
            </div>

            <LinkButton
              text="Create Account"
              to="/"
              btnStyle="w-[200px] h-[40px] bg-[#9F1B32] text-white hover:bg-[#7a1425] mt-8"
            />

            <hr className="w-full border-t border-gray-300 my-8" />

            <p className="text-[16px] text-[#796A5F] mb-4 font-medium">
              Already have a Pret account?
            </p>
            <p className="text-[16px] text-[#796A5F] mb-4 font-medium">
              You can skip all this and sign in{" "}
              <a
                href="/sign-in"
                className="text-[#9F1B32] underline hover:no-underline"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
