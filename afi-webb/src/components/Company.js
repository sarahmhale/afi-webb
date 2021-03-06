import React, { Component } from 'react';
import { FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import { Mutation } from "react-apollo";
import { CREATE_COMPANY } from '../queries/Query'
import Billing from './Billing'

export default class Company extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeCorporateNumber = this.handleChangeCorporateNumber.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePostcode = this.handleChangePostcode.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);


    this.state = {

      co_corporateNumber: '',
      co_name: '',
      co_telephone: '',
      co_address: '',
      co_postcode: '',
      co_city: '',

    };
  }

  handleChangeCorporateNumber(e) {
    this.setState({ co_corporateNumber: e.target.value });
  }

  handleChangeName(e) {
    this.setState({ co_name: e.target.value });
  }
  handleChangeTelephone(e) {
    this.setState({ co_telephone: e.target.value });
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
      <Mutation mutation={CREATE_COMPANY}
        onCompleted={(data)=>{
        }}>
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
                <h1>Company</h1>
                <FormGroup
                  controlId="formBasicText"

                >
                  <ControlLabel>Name:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.co_name}
                    placeholder="Enter name"
                    onChange={this.handleChangeName}
                  />
                  <br/>
                  <ControlLabel>Company number:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.co_corporateNumber}
                    placeholder="Enter Company number"
                    onChange={this.handleChangeCorporateNumber}
                  />
                  <br/>
                  <ControlLabel>Phonenumber:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.co_telephone}
                    placeholder="Enter phonenumber"
                    onChange={this.handleChangeTelephone}
                  />
                  <br/>
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
              </form>)
          }
          else{
            return <Billing id={data.createCompany.co_id}/>
          }
        }}
      </Mutation>
    );
  }
}
