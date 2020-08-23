/** @format */

import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

class Navbar extends Component {
  state = {
    toggled: false,
  };

  toggleBar = () => {
    this.setState({ toggled: !this.state.toggled });
  };

  render() {
    let attachedClasses1 = this.state.toggled
      ? [classes.toggles, classes.line1]
      : [classes.line1];
    let attachedClasses2 = this.state.toggled
      ? [classes.toggles, classes.line2]
      : [classes.line2];
    let attachedClasses3 = this.state.toggled
      ? [classes.toggles, classes.line3]
      : [classes.line3];

    return (
      <React.Fragment>
        <nav
          style={
            this.state.toggled
              ? { position: "fixed", top: 0, zIndex: 11 }
              : null
          }
        >
          <div className={classes.Logo}>
            <h1>
              <a href="/">Logo</a>
            </h1>
          </div>

          <div className={classes.burger} onClick={this.toggleBar}>
            <div className={attachedClasses1.join(" ")}></div>
            <div className={attachedClasses2.join(" ")}></div>
            <div className={attachedClasses3.join(" ")}></div>
          </div>

          <ul className={classes.NavItems}>
            <li className={classes.NavLinks}>
              <Link to="#home">Home</Link>
            </li>
            <li className={classes.NavLinks}>
              <Link to="#about">About</Link>
            </li>
            <li className={classes.NavLinks}>
              <Link to="#portfolio">Portfolio</Link>
            </li>
            <li className={classes.NavLinks}>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Sidebar toggled={this.state.toggled} toggleBar={this.toggleBar} />
      </React.Fragment>
    );
  }
}

export default Navbar;
