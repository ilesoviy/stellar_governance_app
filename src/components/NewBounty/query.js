import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";

export const submitBounty = gql`
mutation MyMutation($bounty_name : String!, $organization_name: String!, $payment_amount:String!,$bounty_type:String!,$bounty_difficulty: String!, $bounty_description:String!,$public_address: String!) {
    insert_all_bounties_one(object:{bounty_name: $bounty_name, organization_name: $organization_name, payment_amount:$payment_amount,bounty_type:$bounty_type,bounty_difficulty:$bounty_difficulty,bounty_description:$bounty_description,public_address:$public_address}){
      id
    }
  }
`;

export const allBounties = gql`
query MyQuery ($public_address: String!) {
    all_bounties(where: {public_address: {_eq: $public_address}}){
       bounty_description
       bounty_name
       bounty_type
       organization_name
       bounty_difficulty
       public_address
       id
       Status
       bounty_availability
       bounty_topic
    }
  }
`
