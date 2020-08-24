import React, { Component } from "react";
import Header from "./header";
import AvaliableTime from "./avaliabletime";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <Header />
          <AvaliableTime />
        </div>
      </div>
    );
  }
}

export default Home;
