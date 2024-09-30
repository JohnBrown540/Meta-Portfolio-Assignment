import React from 'react';
import { SimpleGrid, Box, Image, Heading, Text, VStack, Link, Icon } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ProjectCard = ({ title, description, image }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg="white"
    boxShadow="md"
    _hover={{ boxShadow: "lg" }}
  >
    {/* Image at the top */}
    <Image src={image} alt={title} />

    {/* Content section */}
    <Box p="6">
      <VStack spacing="4" align="start">
        {/* Title */}
        <Heading size="md">{title}</Heading>

        {/* Description */}
        <Text>{description}</Text>

        {/* "See more" with right arrow icon */}
        <Link color="blue.500" href="#">
          See more <Icon as={ArrowForwardIcon} ml="2" />
        </Link>
      </VStack>
    </Box>
  </Box>
);

const ProjectsSection = () => {
  const projects = [
    { title: 'Website Dev', description: 'Description 1', image:'/assets/images/project1.jpg' },
    { title: 'UX Design', description: 'Description 2', image: '/assets/images/project2.jpg' },
    { title: 'Python Dev', description: 'Description 1', image: '/assets/images/project3.jpg' },
    { title: 'Cyber Security', description: 'Description 2', image: '/assets/images/project4.jpg' },
    { title: 'Cloud Computing', description: 'Description 1', image: '/assets/images/project5.jpg' },
    { title: 'Networking', description: 'Description 2', image: '/assets/images/project6.jpg' },
    { title: 'Javascript', description: 'Description 1', image: '/assets/images/project7.jpg' },
    { title: 'Network Security', description: 'Description 2', image: '/assets/images/project8.jpg' },
    { title: 'Front End Dev', description: 'Description 2', image: '/assets/images/project1.jpg'},
  ];

  return (
    <Box bg="green.500" padding="50px" id="projects">
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;