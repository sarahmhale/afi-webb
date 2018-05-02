import React, { Component } from 'react';
import { FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import { Mutation } from "react-apollo";
import { CREATE_BILLING } from '../queries/Query'
import CreateAds from './CreateAds'

export default class Billing extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);


    this.state = {
      bi_address: '',
      bi_postcode: '',
      bi_city: '',
      co_id: this.props.id,

    };
  }

  handleChangeAddress(e) {
    this.setState({ bi_address: e.target.value });
  }
  handleChangePostcode(e) {
    this.setState({ bi_postcode: e.target.value });
  }

  handleChangeCity(e) {
    this.setState({ bi_city: e.target.value });
  }

  render() {
    return (
      <Mutation mutation={CREATE_BILLING}>
        {(createCompany, { data,error }) => {
          if(!data){
            return(
              <form
                onSubmit={e => {
                  e.preventDefault();
                  createCompany({
                    variables: {
                      input: this.state
                    }
                  });
                }}>
                <h1>Billing</h1>
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
              </form>)}
          else{
            return <CreateAds id={this.state.co_id} adPrice={40} />
          }
        }}
      </Mutation>
    );
  }
}
