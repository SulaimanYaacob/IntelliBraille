import AppLayout from "@/components/AppLayout";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Head>
        <title>Braille Converter</title>
        <link rel="icon" href="/favicon.png"></link>
        <meta name="description" content="Convert text to braille and back" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </AppLayout>
  );
}
