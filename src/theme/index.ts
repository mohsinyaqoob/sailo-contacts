import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: `'Space Grotesk', sans-serif`,
  body: `'Space Grotesk', sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
    white: "##EDEDED",
    lightGray: "#f0f0f0",
    darkGray: "#707070",
    brand: "#02416c",
  },
  fonts,
  breakpoints,
});

export default theme;
