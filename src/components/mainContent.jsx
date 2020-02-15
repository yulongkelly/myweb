import React, { Component } from "react";

class MianContent extends Component {
  state = {
    tags: ["project", "everydayPlan", "suggestions"]
  };
  handleProject = () => {
    //redirect to a new page
    console.log("clicked", this);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleProject}>Project</button>
        <button onClick={this.handleProject}>Project</button>
        <button onClick={this.handleProject}>Project</button>
      </div>
    );
  }
}

export default MainContent;
