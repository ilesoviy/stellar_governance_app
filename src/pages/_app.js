import React from 'react';
import "@/styles/globals.css";
import Head from 'next/head';
// import { GlobalProvider } from '@/contexts/GlobalContext';
// import { ReduxContext } from '@/contexts/ReduxContext';
// import { WalletProvider } from '@/contexts/WalletContext';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <title>Tellus Cooperative</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <GlobalProvider>
        <ReduxContext>
          <WalletProvider> */}
            <Component {...pageProps} />
          {/* </WalletProvider>
        </ReduxContext>
      </GlobalProvider> */}
    </React.StrictMode>
  );
}
