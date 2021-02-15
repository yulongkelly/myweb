import React, { Component } from "react";
import Projects from "./projects";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "whitesmoke" }}>Projects</h1>
        <Projects />
      </div>
    );
  }
}

export default ProjectPage;
