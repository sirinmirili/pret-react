import { useState, useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
} from "@chakra-ui/react";
import LinkButton from "../LinkButton";

export const FooterAccordion = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${screenWidth > 1000 ? "hidden" : "block"}`}>
      <Accordion allowMultiple display={"flex"} flexDir={"column"} rowGap={4}>
        <AccordionItem>
          <h2>
            <AccordionButton
              _hover={{ color: "#9F1B32", bg: "#f5f5f5" }}
              _expanded={{ color: "#9F1B32", bg: "#f5f5f5" }}
            >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="medium"
                fontSize="18px"
                color="#372F31"
              >
                Customer Services
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Allergen Guide"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Delivery FAQs"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Contact Us"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Accessibility statement"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="UK Shop locations"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Terms & Conditions"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Privacy Policy"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Cookies"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _hover={{ color: "#9F1B32", bg: "#f5f5f5" }}
              _expanded={{ color: "#9F1B32", bg: "#f5f5f5" }}
            >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="medium"
                fontSize="18px"
                color="#372F31"
              >
                Corporate
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Media Centre"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Pret Blog"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="UK Tax Strategy"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Franchise Applications"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="ESG Report"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Pret Reports"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="The Pret Foundation"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Gender Pay Gap Report"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Modern Stowry Statement"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _hover={{ color: "#9F1B32", bg: "#f5f5f5" }}
              _expanded={{ color: "#9F1B32", bg: "#f5f5f5" }}
            >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="medium"
                fontSize="18px"
                color="#372F31"
              >
                Jobs
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Jobs at Pret"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Candidate Privacy Notice"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton
              _hover={{ color: "#9F1B32", bg: "#f5f5f5" }}
              _expanded={{ color: "#9F1B32", bg: "#f5f5f5" }}
            >
              <Box
                flex="1"
                textAlign="left"
                fontWeight="medium"
                fontSize="18px"
                color="#372F31"
              >
                Club Pret
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Subscribe"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Manage My Account"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
