import React, { Component } from "react";
import Header from "./header";
import Nav from "./navbar";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <Header />
        </div>
      </div>
    );
  }
}

export default Home;
