import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box id="about" padding="50px" backgroundColor="#edf2f7">
      <VStack spacing="4">
        <Heading as="h2" size="xl">About Me</Heading>
        <Text fontSize="lg">
          I am a passionate developer with a background in computer science.
          I love creating web applications that solve real-world problems.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;