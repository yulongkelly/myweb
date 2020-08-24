import React, { Component } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class SecretAgenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      passport: "123456",
      wrong: null,
      redirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      input: value,
    });
  }

  handleSubmit() {
    if (this.state.input === this.state.passport) {
      let path = `/agenda`;
      this.props.history.push(path);
    } else {
      this.setState({
        input: "",
        wrong: <h5>Wrong!</h5>,
      });
    }
  }

  redirect() {
    if (this.state.redirect === true) {
      return <Redirect to="/agenda" />;
    }
  }
  render() {
    return (
      <div style={{ color: "white" }}>
        <h5>
          Please type the password to get the permission of midifing the agenda
        </h5>
        <input
          type="text"
          name="name"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        {this.redirect}
        <Button color="primary" onClick={this.handleSubmit}>
          {" "}
          enter{" "}
        </Button>
        {this.state.wrong}
      </div>
    );
  }
}

export default SecretAgenda;
