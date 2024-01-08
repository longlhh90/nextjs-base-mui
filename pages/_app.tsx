// Supports weights 300-800
import "@fontsource-variable/open-sans";

import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createEmotionCache from "@/theme/createEmotionCache";
import theme from "@/theme/theme";
import AppLayout from "@/components/layout/AppLayout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>{"Foo Page"}</title>
        <meta property="og:title" content="Foo page - Title meta" key="title" />
        <meta
          property="og:description"
          content="Foo Page - Description meta."
          key="description"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
