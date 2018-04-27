import gql from "graphql-tag";

export const CREATE_COMPANY = gql `
  mutation  createCompany($input: CreateCompanyInput!) {
  createCompany(input: $input) {
    co_id
    co_corporateNumber
    co_name
    co_telephone
    co_address
    co_postcode
    co_city
    }
  }
`
