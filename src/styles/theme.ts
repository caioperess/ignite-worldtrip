import { Theme, extendTheme } from "@chakra-ui/react";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const customTheme = {
  colors: {
    yellow: {
      "400": "#FFBA08",
      "450": "rgba(255, 186, 8, 0.5)",
    },
    dark: {
      black: "#000000",
      text: "#47585B",
      info: "#999999",
      info_50: "rgb(153, 153, 153,0.5)",
    },
    light: {
      white: "#000000",
      text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  styles: {
    global: {
      body: {
        bg: "light.text",
        color: "dark.text",
      },
    },
  },
};

export const theme = extendTheme(customTheme);
