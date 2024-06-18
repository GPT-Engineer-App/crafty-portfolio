import { VStack, Link, Box, Image, Collapse, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const LeftNavigation = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" width="200px" p={4} bg="gray.100" height="100vh" position="fixed">
      <VStack align="start" spacing={4}>
        <Image src="/path/to/logo.png" alt="Logo" mb={4} />
        <Link as={NavLink} to="/" exact activeClassName="active">Home</Link>
        <Link as={NavLink} to="/about" activeClassName="active">About</Link>
        <Link as={NavLink} to="/shop" activeClassName="active">Shop</Link>
        <Link as={NavLink} to="/blog" activeClassName="active">Blog</Link>
        <Box width="100%">
          <Link onClick={onToggle} activeClassName="active">Work</Link>
          <Collapse in={isOpen} animateOpacity>
            <VStack align="start" pl={4} mt={2} spacing={2}>
              <Link as={NavLink} to="/work/design" activeClassName="active">Design</Link>
              <Link as={NavLink} to="/work/web-development" activeClassName="active">Web Development</Link>
              <Link as={NavLink} to="/work/photography" activeClassName="active">Photography</Link>
              <Link as={NavLink} to="/work/music" activeClassName="active">Music</Link>
            </VStack>
          </Collapse>
        </Box>
      </VStack>
    </Box>
  );
};

export default LeftNavigation;