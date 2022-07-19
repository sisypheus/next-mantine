import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

        <MantineProvider theme={{colorScheme: "light"}}>
            <Component {...pageProps} />
        </MantineProvider>
    </>
  );
}
