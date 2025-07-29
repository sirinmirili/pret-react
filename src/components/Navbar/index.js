import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { Images } from "../../Images/images";

const NAV_ITEMS = [
  {
    label: "Order Online",
    href: "/order-online",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Find A Pret",
    href: "/find-a-pret",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Platters",
    href: "/platters",
  },
  {
    label: "Club Pret",
    href: "/club-pret",
  },
  {
    label: "Pret Perks",
    href: "/pret-perks",
  },
  {
    label: "Jobs",
    href: "/jobs",
  },
];

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const path = location.pathname;

  const hiddenPaths = ["/sign-in", "/sign-up"];
  const shouldHide = hiddenPaths.includes(path);
  return (
    <Box display={shouldHide ? "none" : "block"}>
      <Flex
        bg={useColorModeValue("white")}
        color={useColorModeValue("#372F31", "#9F1B32")}
        minH={"60px"}
        py={"15px"}
        px={{ base: 4, lg: "200px" }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("#f0f0f0")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to="/">
            <Images
              name="pretLogo"
              className={
                path !== ("/order-now", "/handmade")
                  ? "h-[25px] min-w-[62px]"
                  : "h-[40px] w-[120px]"
              }
            />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={8}
        >
          <Button
            as={"a"}
            fontSize={"md"}
            fontWeight={400}
            variant={"link"}
            href={"/sign-in"}
            color={"#372F31"}
             _hover={{
    textDecoration: "none",
  }}
   textDecoration={ "none" }
          >
            Sign In
          </Button>

          {path === "/handmade" && (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"16px"}
              fontWeight={600}
              color={"white"}
              bg={"#9F1B32"}
              href={"#breakfast-section"}
              _hover={{
                bg: "#7c1527",
              }}
            >
              See Our Menu
            </Button>
          )}

          {path !== "/order-now" && (
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"16px"}
              fontWeight={600}
              color={"white"}
              bg={"#9F1B32"}
              href={"/order-now"}
              _hover={{
                bg: "#7c1527",
              }}
            >
              Order now
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "#372F31";
  const linkHoverColor = "#9F1B32";
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path !== ("/order-now", "/handmade") && (
        <Stack direction={"row"} spacing={4}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Box
                    as="a"
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={navItem.href === path ? linkHoverColor : linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Box>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      )}
    </>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#9F1B32" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"16px"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#9F1B32"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          color: "#9F1B32",
        }}
      >
        <Text fontWeight={600} color={"#372F31"} _hover={{ color: "#9F1B32" }}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color="#372F31"
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                href={child.href}
                color="#372F31"
                _hover={{ color: "#9F1B32" }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
