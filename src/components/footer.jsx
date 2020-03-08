import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Col, Form, FormFeedback } from "reactstrap";
import axios from "axios";
import { userInfo } from "os";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      subject: "",
      email: "",
      message: "",
      touched: {
        name: false,
        email: false,
        message: false
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };

    axios
      .post("http://localhost:5001/contacts/add", contact)
      .then(res => console.log(res.data));

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.setState.touched, [field]: true }
    });
  };

  validate(name, email, message) {
    const errors = {
      name: "",
      email: "",
      message: ""
    };
    if (this.state.touched.message && message.length < 30) {
      errors.message = "Message should be >=30 characters";
    }

    if (
      this.state.touched.email &&
      email.split("").filter(x => x === "@").length !== 1
    ) {
      errors.email = "Email should contain a @";
    }

    const letters = /^[A-Za-z]+$/;
    if (this.state.touched.name && !name.match(letters)) {
      console.log(name.match(letters));
      errors.name = "Your name should contain only letters";
    }
    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.email,
      this.state.message
    );
    return (
      <div className="footer">
        <footer>
          <Form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-5 mb-4">
                <h5 style={{ color: "whitesmoke" }}>Links</h5>
                <div>
                  <Link to="/project">Project</Link>
                </div>
                <div>
                  <Link to="/Agenda">Agenda</Link>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <h5 style={{ color: "whitesmoke" }}>Contact</h5>
                <form className="input-group">
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("name")}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    className="form-control form-control-sm mr-3 w-75"
                    placeholder="Your Name(required)"
                    aria-label="suggester"
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </form>
                <br />
                <form className="input-group">
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("email")}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    className="form-control form-control-sm"
                    placeholder="Your email(required)"
                    aria-label="Your email"
                    aria-describedby="basic-addon2"
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </form>
                <br />
                <form className="input-group">
                  <Input
                    type="text"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleInputChange}
                    className="form-control form-control-sm"
                    placeholder="Subject"
                    aria-label="Subject"
                    aria-describedby="basic-addon2"
                  />
                </form>
                <br />
                <form className="input-group">
                  <Input
                    type="textarea"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("message")}
                    valid={errors.message === ""}
                    invalid={errors.message !== ""}
                    className="form-control form-control-sm"
                    placeholder="Message"
                    aria-label="Message"
                    aria-describedby="basic-addon2"
                  />
                  <FormFeedback>{errors.message}</FormFeedback>
                </form>
                <br />
                <form className="input-group">
                  <Col md={{ size: 10, offset: 9 }}>
                    <Button color="primary">Send</Button>
                  </Col>
                </form>
              </div>
            </div>
          </Form>
          <div
            className="footer-copyright text-center py-3"
            style={{ color: "whitesmoke" }}
          >
            © 2020 Copyright:
            <a href="https://google.com/"> YULONGKELLY.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
