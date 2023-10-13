import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://bountyhunter.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "V935tbjSI3nuygYcxAxXX2Y5FvUXsF8jeWkLC260YIlvvkYNsNF0eLpRpbB7izON",
  },
});

export default client;
