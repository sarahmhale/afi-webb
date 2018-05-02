import React, {Component} from 'react';

import {FormControl, Button, ControlLabel, HelpBlock} from 'react-bootstrap';
import {Query} from "react-apollo";
import {GET_SUBSCRIBER} from '../queries/subscriberQuery'

export default class SubscriberPage extends React.Component {
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
            return(
                <form onSubmit={e => { e.preventDefault();
                    console.log('')
                    {this.subscriberInfo()}
                    }}>

                    <ControlLabel>ID:</ControlLabel>
                    <FormControl type="text" value={this.state.su_id}
                    placeholder="Enter ID" onChange={this.handleChangeID}
                    />
                    <Button type="submit">Submit</Button>
                </form>)}
        else{
            return(
                <Query
                    query={GET_SUBSCRIBER}
                    variables={{ id: this.state.su_id}}
                >
                {({loading, error,data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    console.log(data)
                    return (
                        <div>
                            <p>Social Number :{data.subscribersByID.su_socialnumber}</p>

                            <p>First Name: {data.subscribersByID.su_firstname}</p>

                            <p>Last Name:{data.subscribersByID.su_lastname}</p>

                            <p>Address:{data.subscribersByID.su_address}</p>

                            <p>Postcode: {data.subscribersByID.su_postcode}</p>

                            <p>City: {data.subscribersByID.su_city}</p>

                        </div>)
                    }
                }
                </Query>
            )
        }
    }
}


//3bbcee75-cecc-5b56-8031-b6641c1ed1f1
