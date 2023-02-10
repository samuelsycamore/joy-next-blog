import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CssVarsProvider } from "@mui/joy/styles";
import theme from "../src/theme";
import CssBaseline from "@mui/joy/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import PlausibleProvider from "next-plausible";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <PlausibleProvider domain="sycamore.garden">
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </CssVarsProvider>
      </PlausibleProvider>
    </CacheProvider>
  );
}
