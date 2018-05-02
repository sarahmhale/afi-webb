import React, { Component } from 'react';
import { FormControl, Button, ControlLabel, HelpBlock, FormGroup } from 'react-bootstrap';
import { Mutation } from "react-apollo";
import { CREATE_BILLING } from '../queries/Query'

export default class Company extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);


    this.state = {
      bi_address: this.props.id,
      bi_postcode: '',
      bi_city: '',
      co_id: '',

    };
  }

  handleChangeAddress(e) {
    this.setState({ co_address: e.target.value });
  }
  handleChangePostcode(e) {
    this.setState({ co_postcode: e.target.value });
  }

  handleChangeCity(e) {
    this.setState({ co_city: e.target.value });
  }

  render() {
    return (
      <Mutation mutation={CREATE_COMPANY}>
        {(createCompany, { data,error }) => (
          <form
            onSubmit={e => {
              let input = this.state
              console.log(input)
              e.preventDefault();
              createCompany({
                variables: {
                  input: this.state
                }
              });
            }}>
            <FormGroup
              controlId="formBasicText"

            >
              <ControlLabel>Adress:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.co_address}
                placeholder="Enter adress"
                onChange={this.handleChangeAddress}
              />
              <br/>
              <ControlLabel>Postcode:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.co_postcode}
                placeholder="Enter postcode"
                onChange={this.handleChangePostcode}
              />

              <ControlLabel>City:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.co_city}
                placeholder="Enter postcode"
                onChange={this.handleChangeCity}
              />

            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Mutation>
    );
  }
}
