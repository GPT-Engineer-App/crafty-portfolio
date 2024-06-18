import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Portfolio</Heading>
          <Text fontSize="lg">I'm a passionate web developer creating modern and responsive designs.</Text>
        </Box>
        <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Picture" />
        <Flex justify="center" gap={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">GitHub</Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">LinkedIn</Button>
          <Button as="a" href="mailto:example@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">Email</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;