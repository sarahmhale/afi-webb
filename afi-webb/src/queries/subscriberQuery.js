import gql from "graphql-tag";

export const CREATE_SUBSCRIBER  = gql `
  mutation  createSubscriber($input: CreateSubscriberInput!) {
  createSubscriber(input: $input) {
      su_id
      su_socialnumber
      su_firstname
      su_lastname
      su_address
      su_postcode
      su_city
      su_subscribtion_number
    }
  }
`

export const GET_SUBSCRIBER  = gql `
query subscribersByID($id: String!) {
  subscribersByID(id: $id) {
      su_id
      su_socialnumber
      su_firstname
      su_lastname
      su_address
      su_postcode
      su_city
      su_subscribtion_number

    }
  }
`
