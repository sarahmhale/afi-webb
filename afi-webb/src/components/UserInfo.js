import React, {Component} from 'react';

import {FormControl, Button, ControlLabel} from 'react-bootstrap';
import {Mutation} from "react-apollo";
import {UPDATE_SUBSCRIBER} from '../queries/Query'

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
            su_id: '',
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

    showSubscriberInfo() {
        this.setState({showForm: false});
    }

    handleChangeSocialnumber(e) {
        this.setState({su_socialnumber: e.target.value});
    }
    handleChangeFirstname(e) {
        this.setState({su_firstname: e.target.value});
    }


    render() {
        return (<Mutation mutation={UPDATE_SUBSCRIBER}>

            {(updateSubscriber, {data, error}) => {
                    if (this.state.showForm) {
                        return (<div>
                            <p>Social Number :{this.props.su.su_socialnumber}</p>

                            <p>First Name: {this.props.su.su_firstname}</p>

                            <p>Last Name:{this.props.su.su_lastname}</p>

                            <p>Address:{this.props.su.su_address}</p>

                            <p>Postcode: {this.props.su.su_postcode}</p>

                            <p>City: {this.props.su.su_city}</p>

                            <Button onClick={()=>{
                                this.showSubscriberInfo()
                            }}>Change</Button>

                        </div>)
                    } else {
                        return (
                            <form
                              onSubmit={e => {
                                e.preventDefault();
                                updateSubscriber({
                                  variables: {
                                    input: this.state
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
                        )
                    }
                }
            }
        </Mutation>)
    }
}
