import { Box, Flex } from "@chakra-ui/react";
import LeftNavigation from "./LeftNavigation.jsx";

const Layout = ({ children }) => {
  return (
    <Flex>
      <LeftNavigation />
      <Box flex="1" p={4}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;