import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar dark color="dark" expand="md" id="navbar">
        <div className="container">
          <NavbarBrand className="mr-auto">
            <img
              className="logo"
              src="https://yulongkellyweb.s3.amazonaws.com/logo.png"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem className="mt-2">
                <NavLink className="navlink" href="/home">
                  <i className="fas fa-laptop-code" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mt-2">
                <NavLink className="navlink" href="/project">
                  <i className="fas fa-laptop-code" />
                  Project
                </NavLink>
              </NavItem>
              <NavItem className="mt-2">
                <NavLink className="navlink" href="/secretagenda">
                  <i className="fas fa-calendar-alt" />
                  Agenda
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        <br />
      </Navbar>
    );
  }
}

export default NavBar;
