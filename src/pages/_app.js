import React from 'react';
import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <title>Tellus Cooperative</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
