import React, { Component } from 'react';
import { FormControl, Button,ControlLabel,HelpBlock ,FormGroup} from 'react-bootstrap';

export default class Company extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Company Name:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Company name"
            onChange={this.handleChange}
          />

          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
