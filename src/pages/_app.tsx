import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/global.css";
import "../styles/slider.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
