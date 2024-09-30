import React, { useEffect, useState } from "react";
import { HStack, Link, IconButton, Box, Flex, useDisclosure } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <Box
      bg="blue.600"
      padding="20px"
      position="fixed"
      width="100%"
      top="0"
      transition="all 0.3s"
      transform={visible ? "translateY(0)" : "translateY(-100%)"}
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* Logo/Brand */}
        <Box color="white" fontSize="lg" fontWeight="bold">
          My Portfolio
        </Box>

        {/* Hamburger Menu for Small Screens */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="outline"
            colorScheme="whiteAlpha"
            aria-label="Toggle Navigation"
            _hover={{ bg: "gray.300" }}
          />
        </Box>

        {/* Social Media Links - Left Section */}
        <HStack
          spacing="12px"
          display={{ base: "none", md: "flex" }}
          align="center"
        >
          <IconButton
            as={Link}
            href="https://github.com"
            icon={<FaGithub />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.300" }}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://linkedin.com"
            icon={<FaLinkedin />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.300" }}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://twitter.com"
            icon={<FaTwitter />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.300" }}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://facebook.com"
            icon={<FaFacebook />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.300" }}
            isExternal
          />
          <IconButton
            as={Link}
            href="https://instagram.com"
            icon={<FaInstagram />}
            variant="outline"
            colorScheme="whiteAlpha"
            _hover={{ bg: "gray.300" }}
            isExternal
          />
        </HStack>

        {/* Internal Links Section - Right Section */}
        <HStack
          as="nav"
          spacing="24px"
          display={{ base: "none", md: "flex" }}
          align="center"
        >
          <Link
            href="#projects"
            fontSize="lg"
            color="white"
            _hover={{ color: "gray.300" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            fontSize="lg"
            color="white"
            _hover={{ color: "gray.300" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </Link>
        </HStack>
      </Flex>

      {/* Menu for Small Screens */}
      {isOpen && (
        <Box pb="4" display={{ md: "none" }}>
          <HStack as="nav" spacing="24px" flexDirection="column" align="start">
            <Link
              href="#projects"
              fontSize="lg"
              color="white"
              _hover={{ color: "gray.300" }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              fontSize="lg"
              color="white"
              _hover={{ color: "gray.300" }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Link>
            {/* Social Media Icons for Small Screens */}
            <Flex mt="4">
              <IconButton
                as={Link}
                href="https://github.com"
                icon={<FaGithub />}
                variant="outline"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.300" }}
                mr="4"
                isExternal
              />
              <IconButton
                as={Link}
                href="https://linkedin.com"
                icon={<FaLinkedin />}
                variant="outline"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.300" }}
                mr="4"
                isExternal
              />
              <IconButton
                as={Link}
                href="https://twitter.com"
                icon={<FaTwitter />}
                variant="outline"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.300" }}
                mr="4"
                isExternal
              />
              <IconButton
                as={Link}
                href="https://facebook.com"
                icon={<FaFacebook />}
                variant="outline"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.300" }}
                mr="4"
                isExternal
              />
              <IconButton
                as={Link}
                href="https://instagram.com"
                icon={<FaInstagram />}
                variant="outline"
                colorScheme="whiteAlpha"
                _hover={{ bg: "gray.300" }}
                isExternal
              />
            </Flex>
          </HStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;