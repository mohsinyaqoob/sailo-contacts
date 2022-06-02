import { Box } from "@chakra-ui/react";

const Layout = ({ ...rest }) => {
  return <Box w={"full"} h={"100vh"} bg={"white"} {...rest} />;
};

export default Layout;
