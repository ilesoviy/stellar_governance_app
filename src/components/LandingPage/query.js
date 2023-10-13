import { gql } from "@apollo/client";

export const allBounties = gql`
query MyQuery {
    all_bounties{
       bounty_description
       bounty_name
       bounty_type
       organization_name
       bounty_difficulty
       public_address
       id
       payment_amount
    }
  }
`


export const allSubmissions = gql`
query MyQuery ($public_address: String!) {
    submissions(where: {sub_public_address: {_eq: $public_address}}){
     id
     bounty_id
     
    }
  }
`   
