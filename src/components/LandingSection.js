import React from "react";
import { VStack, Heading, Text, Avatar, Box } from "@chakra-ui/react";


const LandingSection = () => {
  return (
    <Box
      bg="blue.600"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <VStack spacing="6" align="center">
        {/* Rounded Avatar */}
        <Avatar size="2xl" src="/assets/images/profile.jpg" name="Pete" />

        {/* Greeting Text */}
        <Heading as="h1" size="2xl" color="white">
          Hello, I am {""} <Text as="span" color="color: #f9004d" fontWeight="bold">
            John Brown!
          </Text>
        </Heading>

        {/* Bio Text */}
        <Text fontSize="2xl" color="gray.300" maxW="lg">
Passionate cybersecurity professional focused on protecting systems and data. Experienced in threat analysis and risk management.
        </Text>
      </VStack>
    </Box>
  );
};

export default LandingSection;