import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import theme from "../lib/theme";
import CssBaseline from "@mui/joy/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";

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
      <CssVarsProvider
        defaultMode="dark"
        theme={theme}
        modeStorageKey="dark-mode"
        disableNestedContext
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            // CSS object styles
            html: {
              // ...
            },
            body: {
              // ...
            },
            a: {
              textDecoration: "none",
            },
          }}
        />
        <Component {...pageProps} />
      </CssVarsProvider>
    </CacheProvider>
  );
}
