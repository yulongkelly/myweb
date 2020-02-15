import React, { Component, useRef, useState, useEffect } from "react";
import styled from "styled-components";

// function useHover(params) {
//   const ref = useRef();
//   const [hovered, setHovered] = useState(false);

//   const enter = () => setHovered(true);
//   const leave = () => setHovered(false);

//   useEffect(() => {
//     ref.current.addEventListener("mouseenter", enter);
//     ref.current.addEventListener("mouseenter", leave);
//     return () => {
//       ref.current.addEventListener("mouseenter", enter);
//       ref.current.addEventListener("mouseenter", leave);
//     };
//   });
//   return [ref, hovered];
// }
class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kelly"
    };
    this.changeToYulong = this.changeToYulong.bind(this);
    this.changeToKelly = this.changeToKelly.bind(this);
  }

  changeToYulong() {
    this.setState({ name: "Yulong" });
  }

  changeToKelly() {
    this.setState({ name: "Kelly" });
  }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt='' /> */}
        <h1 className="header">
          Hi, I am
          <span
            onMouseEnter={this.changeToYulong}
            onMouseLeave={this.changeToKelly}
          >
            {" "}
            {this.state.name}{" "}
          </span>
          Wu
        </h1>
      </div>
    );
  }
}

// getGradient() {
//   let classes = this.state.name === "Kelly Wu" ? "purple" : "blue";
//   classes += "-gradient";
//   return classes;
// }

export default Header;
