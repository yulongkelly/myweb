import React, { Component } from "react";
import ProjectPage from "./projectPage";
import Agenda from "./agenda";
import Home from "./home";
import Footer from "./footer";
import Navbar from "./navbar";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={ProjectPage} />
          <Route exact path="/agenda" component={Agenda} />
          <Redirect to="/home" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
