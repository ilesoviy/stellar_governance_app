import { gql } from "@apollo/client";

export const submitSubmission = gql`
  mutation MyMutation(
    $bounty_id: uuid!
    $bounty_owner_address: String!
    $sub_public_address: String!
    $submission_title: String!
    $submission_link: String!
    $submission_description: String!
  ) {
    insert_submissions_one(
      object: {
        bounty_id: $bounty_id
        bounty_owner_address: $bounty_owner_address
        sub_public_address: $sub_public_address
        submission_title: $submission_title
        submission_link: $submission_link
        submission_description: $submission_description
      }
    ) {
      id
    }
  }
`;

export const allBounties = gql`
query MyQuery ($public_address: String!) {
    submissions(where: {sub_public_address: {_eq: $public_address}}){
       bounty_id
    }
  }
`  


export const newBounties = gql`
query MyQuery ($id: uuid!) {
  all_bounties_by_pk(id: $id){
       bounty_description
       bounty_name
       bounty_type
       organization_name
       bounty_difficulty
       public_address
       id
       Status
       bounty_availability
    }
  }
`

export const updateBounty = gql`
mutation MyMutation($id:uuid!) {
  update_all_bounties_by_pk(_set:{Status:"IN ESCROW", bounty_availability:"PENDING"},pk_columns: {id: $id}) {
    id
  }
}
`

