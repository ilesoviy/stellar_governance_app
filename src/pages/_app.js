import React from 'react';
import "@/styles/globals.css";
import MySorobanReactProvider from "@/components/MySorbeanProvider";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <MySorobanReactProvider>
          <Component {...pageProps} />
        </MySorobanReactProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}
