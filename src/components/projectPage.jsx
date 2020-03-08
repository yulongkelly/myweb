import React, { Component } from "react";
import Project from "./projects";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Projects</h1>
        <Project />
      </div>
    );
  }
}

export default ProjectPage;
