import { Box } from "@chakra-ui/react";

const Layout = (props: any) => {
    const {...rest} = props;
  return <Box w={"full"} h={"100vh"} bg={"white"} {...rest} />;
};

export default Layout;
