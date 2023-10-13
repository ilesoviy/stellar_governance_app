import React from 'react';
import "@/styles/globals.css";
import MySorobanReactProvider from "@/components/MySorobanProvider";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <MySorobanReactProvider>
          <Head>
            <title>Tellus Cooperative</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...pageProps} />
        </MySorobanReactProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}
