import { gql } from "@apollo/client";


export const fetchSubmittedData = gql`
query MyQuery ($bounty_id: uuid!) {
    submissions(where: {bounty_id: {_eq: $bounty_id}}){
       bounty_id
       submission_title
       submission_link
       submission_description
    }
  }
`  


export const updateBounty = gql`
mutation MyMutation($id:uuid!) {
  update_all_bounties_by_pk(_set:{Status:"BOUNTY PAID", bounty_availability:"APPROVED"},pk_columns: {id: $id}) {
    id
  }
}
`

export const updateBountyReject = gql`
mutation MyMutation($id:uuid!) {
  update_all_bounties_by_pk(_set:{Status:"BOUNTY RETURNED", bounty_availability:"REJECTED"},pk_columns: {id: $id}) {
    id
  }
}
`

export const MyAllBounties = gql`
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

