
import React from "react";
import {Button } from "react-bootstrap";
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Referral code link'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('referral code accepted ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form  className="input1" onSubmit={this.handleSubmit}>
          <label >
            <input className="input" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Button className = "btn" type="submit" value="Submit" variant="primary">copy</Button>
        </form>
      );
    }
  }

  export default Form;