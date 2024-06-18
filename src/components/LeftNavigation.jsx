import { VStack, Link, Box, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const LeftNavigation = () => {
  return (
    <Box as="nav" width="200px" p={4} bg="gray.100" height="100vh" position="fixed">
      <VStack align="start" spacing={4}>
        <Image src="/path/to/logo.png" alt="Logo" mb={4} />
        <Link as={NavLink} to="/" exact activeClassName="active">Home</Link>
        <Link as={NavLink} to="/about" activeClassName="active">About</Link>
        <Link as={NavLink} to="/shop" activeClassName="active">Shop</Link>
        <Link as={NavLink} to="/blog" activeClassName="active">Blog</Link>
        <Link as={NavLink} to="/work" activeClassName="active">Work</Link>
      </VStack>
    </Box>
  );
};

export default LeftNavigation;