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
  mutation  createBilling($input: CreateBillingInput!) {
  createBilling(input: $input) {
    bi_address
    bi_postcode
    bi_city
    co_id
    }
  }
`

export const CREATE_ADS = gql `
  mutation  createAds($input: CreateAdsInput!) {
  createAds(input: $input) {
    ad_id
    ad_advertiserPrice
    ad_productPrice
    ad_content
    ad_title
    ad_advertiserID
    }
  }
`

export const GET_ADS = gql `
  {
    Ads {
      ad_id
      ad_advertiserPrice
      ad_productPrice
      ad_content
      ad_title
      ad_advertiserID
    }
  }

`
