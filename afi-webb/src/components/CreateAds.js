import React, { Component } from 'react';
import { FormControl, Button, ControlLabel, FormGroup } from 'react-bootstrap';
import { Mutation } from "react-apollo";
import { CREATE_ADS } from '../queries/Query'


export default class CreateAds extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleChangeProductPrice = this.handleChangeProductPrice.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);


    this.state = {
      ad_advertiserPrice: this.props.adPrice,
      ad_productPrice: '',
      ad_content: '',
      ad_title: '',
      ad_advertiserID: this.props.id
    };
  }

  handleChangeProductPrice(e) {
    this.setState({ ad_productPrice: e.target.value });
  }

  handleChangeContent(e) {
    this.setState({ ad_content: e.target.value });
  }
  handleChangeTitle(e) {
    this.setState({ ad_title: e.target.value });
  }


  render() {
    return (
      <Mutation mutation={CREATE_ADS}>
        {(createAds, { data,error }) => {

          return(
            <form
              onSubmit={e => {
                e.preventDefault();
                createAds({
                  variables: {
                      input: this.state
                  }
                });
              }}>
              <h1>Ad</h1>
                <FormGroup
                  controlId="formBasicText"

                >
                  <ControlLabel>Title:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.ad_title}
                    placeholder="Enter title"
                    onChange={this.handleChangeTitle}
                  />
                  <br/>
                  <ControlLabel>Content:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.ad_content}
                    placeholder="Enter content"
                    onChange={this.handleChangeContent}
                  />
                  <br/>
                  <ControlLabel>Productprice:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.ad_productPrice}
                    placeholder="Enter phonenumber"
                    onChange={this.handleChangeProductPrice}
                  />
                  <br/>

                </FormGroup>
                <Button type="submit">Submit</Button>
              </form>)

        }}
      </Mutation>
    );
  }
}
