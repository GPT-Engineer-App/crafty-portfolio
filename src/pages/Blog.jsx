import { Box, Heading, Text } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>Blog</Heading>
      <Text fontSize="lg">This is the Blog page.</Text>
    </Box>
  );
};

export default Blog;