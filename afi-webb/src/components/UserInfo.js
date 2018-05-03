import React, {Component} from 'react';

import {FormControl, Button, ControlLabel, FormGroup} from 'react-bootstrap';
import {Mutation} from "react-apollo";
import {UPDATE_SUBSCRIBER,GET_SUBSCRIBER} from '../queries/Query'
import CreateAds from './CreateAds'

export default class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.showSubscriberInfo = this.showSubscriberInfo.bind(this);
        this.handleChangeSocialnumber=this.handleChangeSocialnumber.bind(this)
        this.handleChangeFirstname=this.handleChangeFirstname.bind(this)
        this.handleChangeLastname=this.handleChangeLastname.bind(this)
        this.handleChangeAddress=this.handleChangeAddress.bind(this)
        this.handleChangePostcode=this.handleChangePostcode.bind(this)
        this.handleChangeCity=this.handleChangeCity.bind(this)

        this.state = {
            su_id: this.props.su.su_id,
            su_socialnumber:this.props.su.su_socialnumber,
            su_firstname: this.props.su.su_firstname,
            su_lastname: this.props.su.su_lastname,
            su_address: this.props.su.su_address,
            su_postcode: this.props.su.su_postcode,
            su_city:this.props.su.su_city,
            showForm: true
        };
    }
    handleChangeID(e) {
        this.setState({su_id: e.target.value});
    }

    showSubscriberInfo(bool) {
        this.setState({showForm: bool});
    }

    handleChangeSocialnumber(e) {
        this.setState({su_socialnumber: e.target.value});
    }
    handleChangeFirstname(e) {
        this.setState({su_firstname: e.target.value});
    }

    handleChangeLastname(e) {
        this.setState({su_lastname: e.target.value});
    }
    handleChangeAddress(e) {
        this.setState({su_address: e.target.value});
    }

    handleChangePostcode(e) {
        this.setState({su_postcode: e.target.value});
    }
    handleChangeCity(e) {
        this.setState({su_city: e.target.value});
    }


    render() {
        return (<Mutation mutation={UPDATE_SUBSCRIBER}
          update={(cache, { data: { updateSubscriber } }) => {

            const {subscribersByID} = cache.readQuery({ query: GET_SUBSCRIBER, variables:{id: this.state.su_id} });

            cache.writeQuery({
              query: GET_SUBSCRIBER,
              data: { subscribersByID: updateSubscriber }
            });
          }}>

          {(updateSubscriber, {data, error}) => {
            if (this.state.showForm) {
              return (<div>
                <p>Social Number :{this.state.su_socialnumber}</p>

                <p>First Name: {this.state.su_firstname}</p>

                <p>Last Name:{this.state.su_lastname}</p>

                <p>Address:{this.state.su_address}</p>

                <p>Postcode: {this.state.su_postcode}</p>

                <p>City: {this.state.su_city}</p>

                <Button onClick={()=>{
                  this.showSubscriberInfo(false)
                }}>Change</Button>

                <CreateAds id={this.state.su_id} adPrice={0} />

              </div>)
            } else {
              return (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.showSubscriberInfo(true)
                    updateSubscriber({
                      variables: {
                        input:{
                          su_id:this.state.su_id,
                          su_socialnumber: this.state.su_socialnumber,
                          su_firstname:this.state.su_firstname,
                          su_lastname:this.state.su_lastname,
                          su_address:this.state.su_address,
                          su_postcode:this.state.su_postcode,
                          su_city:this.state.su_city,
                          su_subscribtion_number:this.state.su_subscribtion_number

                        }
                      }
                    });
                  }}>
                  <h1>Your info</h1>
                  <FormGroup
                    controlId="formBasicText"

                  >
                    <ControlLabel>Social Number:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.su_socialnumber}
                      placeholder={this.state.su_socialnumber}
                      onChange={this.handleChangeSocialnumber}
                    />
                    <br/>
                    <ControlLabel>Firstname:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.su_firstname}
                      placeholder={this.state.su_firstname}
                      onChange={this.handleChangeFirstname}
                    />
                    <br/>
                    <ControlLabel>Lastname:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.su_lastname}
                      placeholder={this.state.su_lastname}
                      onChange={this.handleChangeLastname}
                    />
                    <br/>
                    <ControlLabel>Adress:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.su_address}
                      placeholder={this.state.su_address}
                      onChange={this.handleChangeAddress}
                    />
                    <br/>
                    <ControlLabel>Postcode:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.su_postcode}
                      placeholder={this.state.su_postcode}
                      onChange={this.handleChangePostcode}
                    />

                    <ControlLabel>City:</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.su_city}
                      placeholder={this.state.su_city}
                      onChange={this.handleChangeCity}
                    />

                  </FormGroup>
                  <Button type="submit">Submit</Button>
                </form>)

            }
          }
          }
        </Mutation>)
    }
}
