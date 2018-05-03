import React, {Component} from 'react';

import {FormControl, Button, ControlLabel} from 'react-bootstrap';
import {Query} from "react-apollo";
import {GET_SUBSCRIBER} from '../queries/subscriberQuery'
import UserInfo from './UserInfo'

export default class SubscriberPage extends Component {
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
                    return (<UserInfo su={data.subscribersByID}/>)
                    }
                }
                </Query>
            )
        }
    }
}


//3bbcee75-cecc-5b56-8031-b6641c1ed1f1
