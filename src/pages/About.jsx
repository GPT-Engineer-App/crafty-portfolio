import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>About</Heading>
      <Text fontSize="lg">This is the About page.</Text>
    </Box>
  );
};

export default About;