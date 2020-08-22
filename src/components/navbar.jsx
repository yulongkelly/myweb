import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" expand="xs" className="navbar">
        <div className="container">
          <NavbarToggler onClick={this.toggleNav} />
          <NavbarBrand className="mr-auto">
            <img className="logo" src={logo} />
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem className="mt-2">
                <NavLink className="nav-link" to="/home">
                  <i className="fas fa-laptop-code" />
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="mt-2">
                <NavLink className="nav-link" to="/project">
                  <i className="fas fa-laptop-code" />
                  Project
                </NavLink>
              </NavItem>
              {/* <NavItem className="mt-2">
                <NavLink className="nav-link" to="/agenda">
                  <i className="fas fa-calendar-alt" />
                  Agenda
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </div>
        <br />
      </Navbar>
    );
  }
}

export default NavBar;
