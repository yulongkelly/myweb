import React, { Component } from "react";
import ProjectPage from "./projectPage";
import Agenda from "./agenda";
import Home from "./home";
import Footer from "./footer";
import Navbar from "./navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import SecretAgenda from "./secret-agenda";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={ProjectPage} />
          <Route exact path="/contact" component={Footer} />
          <Route exact path="/agenda" component={Agenda} />
          <Route exact path="/secretagenda" component={SecretAgenda} />
          <Redirect to="/home" component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
