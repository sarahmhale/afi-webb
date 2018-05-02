import React, { Component } from 'react';
import { FormGroup,Checkbox,Col } from 'react-bootstrap';
import Company from './Company'
import Subscriber from './Subscriber'


export default class StartPage extends Component {
  constructor() {
    super();
    this.state = {
      company: false,
    subscriber: true };
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeSubscriber = this.handleChangeSubscriber.bind(this);


  }
  handleChangeSubscriber(){
    this.setState({company: false, subscriber:true})
  }

handleChangeCompany(){
  this.setState({company: true, subscriber:false})
}
  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox
                checked={this.state.company}
                onChange={this.handleChangeCompany}>company
              </Checkbox>
            </Col>
            <Col smOffset={2} sm={10}>
              <Checkbox
                checked={this.state.subscriber}
                onChange={this.handleChangeSubscriber}>subscriber
              </Checkbox>
            </Col>
          </FormGroup>
        </form>
        {this.state.company ? <Company/>:<Subscriber/>}
      </div>
    )
  }
}
