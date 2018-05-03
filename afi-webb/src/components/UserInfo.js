import React, {Component} from 'react';

import {FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap';
import {Query} from "react-apollo";
import {UPDATE_SUBSCRIBER} from '../queries/Query'

export default class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.state = {
            su_id: '',
            showForm: true
        };
    }
    handleChangeID(e) {
      this.setState({ su_id: e.target.value });
    }

    subscriberInfo(){
     this.setState({ showForm:false });
    }

    render() {
            if(this.state.showForm){
                return (
                    <div>
                        <p>Social Number :{this.props.su.su_socialnumber}</p>

                        <p>First Name: {this.props.su.su_firstname}</p>

                        <p>Last Name:{this.props.su.su_lastname}</p>

                        <p>Address:{this.props.su.su_address}</p>

                        <p>Postcode: {this.props.su.su_postcode}</p>

                        <p>City: {this.props.su.su_city}</p>

                    </div>)
                }else{
                    // return(
                    //   <Mutation mutation={UPDATE_SUBSCRIBER}
                      //     update={(cache, { data: { createAds } }) => {
                      //   const {getAds} = cache.readQuery({ query: GET_ADS });
                      //   cache.writeQuery({
                      //     query: GET_ADS,
                      //     data: { getAds: getAds.concat([createAds]) }
                      //   });
                      // }}
                      // >
                      // </Mutation>
                  // )
              }
        
    }
}
