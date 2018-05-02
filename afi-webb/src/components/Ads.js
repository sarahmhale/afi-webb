import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Query } from "react-apollo"
import { GET_ADS } from '../queries/Query'

export default class Ads extends Component {
  tableCell(data) {
    console.log(data)
    return (
      <tr>
        <td>{data.ad_title}</td>
        <td>{data.ad_content}</td>
        <td>{data.ad_productPrice}</td>
        <td>{data.ad_advertiserPrice == 40?'FÖRETAG': 'PREMURANT'}</td>
      </tr>
    )
  }

  render() {
    return (
      <Query
        query={GET_ADS}
      >
        {({ loading, error, data }) => {
          console.log(data)
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
            <Table responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Productprice</th>
                  <th>Advertiser</th>
                </tr>
              </thead>
              <tbody>
                {data.getAds.map((data)=>this.tableCell(data))}
              </tbody>
            </Table>
          );
        }}
      </Query>
    )
  }
}
