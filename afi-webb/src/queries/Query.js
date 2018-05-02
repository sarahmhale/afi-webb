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

export const CREATE_BILLING = gql `
  mutation  createCompany($input: CreateBillingInput!) {
  createCompany(input: $input) {
    bi_address
    bi_postcode
    bi_city
    co_id
    }
  }
`
