import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import LinkButton from "../LinkButton";

const Sidebar = () => {
  return (
    <Box
      width="400px"
      bg="white"
      color="#372F31"
      p={4}
      ml={{ base: 10, md: 40 }}
    >
      <Text
        fontSize="18px"
        fontWeight="bold"
        fontFamily="Playfair Display"
        color="#9F1B32"
        mb={6}
      >
        View Menu
      </Text>

      <LinkButton
        to="/products"
        btnStyle="h-20 text-[18px] font-medium text-[#372F31] hover:text-[#9F1B32] !justify-start ml-4"
        text="Super Plates"
      />

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
                Hot drinks
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Coffee"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Tea and other hot drinks"
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
                Hot food
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Porridge"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Hot food boxes"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Soup and breads"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Toasted sandwiches, wraps and baguettes"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Hot pastries"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast rolls"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Hot pots"
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
                Breakfast
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast porridge"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast pastries"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast "
              />
              baguettes
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast rolls"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast and yoghurt bowls"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast protein pot"
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
                Sandwiches, baguettes, wraps and flatbreads
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Sandwiches"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Baguettes"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32] "
                text="Rye rolls"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Wraps and flatbreads"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Breakfast rolls"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Toates sandwiches, baguettes and wraps"
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
                Cold drinks
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Iced favourites"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Pret coolers"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Iced coffee"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Juices and smoothies"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Water and soft drinks"
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
                Salads and protein pots
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Salads"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Protein pots"
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
                Sweet and savoury snacks
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={2} bgColor="#f6f4f5">
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Crips and popcorn"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Pastries"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Bars and bites"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Nuts and dried fruit snacks"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Yoghurt bowls and birchers"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Dessert pots"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Cookies and Cakes"
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
                Fruit and fruit pots
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Fresh fruit"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32] "
                text="Fruit pots"
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
                <LinkButton
                  to=""
                  btnStyle=" text-[#372F31] font-medium hover:text-[#9F1B32] !justify-start"
                  text="Little Pret Stars"
                />{" "}
              </Box>
            </AccordionButton>
          </h2>
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
                <LinkButton
                  to=""
                  btnStyle=" text-[#372F31] font-medium hover:text-[#9F1B32] !justify-start"
                  text="Veggie & Vegan-Friendly"
                />{" "}
              </Box>
            </AccordionButton>
          </h2>
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
                Pret at Home
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bgColor="#f6f4f5">
            <VStack align="start" spacing={2}>
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="All"
              />
              <LinkButton
                to=""
                btnStyle="text-[16px] text-[#372F31] font-medium hover:text-[#9F1B32]"
                text="Coffee at Home"
              />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Sidebar;
