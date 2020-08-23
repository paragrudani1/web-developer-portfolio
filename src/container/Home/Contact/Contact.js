/** @format */

import React, { Component } from "react";
import classes from "./Contact.module.css";
import arrow from "../../../assets/arrows/Line 5.svg";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollApear);
  }

  scrollApear = () => {
    const introText = this.myRef.current;
    let introPosition = introText.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
      introText.classList.add(classes.intro_appear);
    }
  };

  render() {
    return (
      <section ref={this.myRef} className={classes.contactSection} id="contact">
        <div className={classes.ContactGrid}>
          <div className={classes.contactSection_title}>
            <h1>Every great design begins with an even better story.</h1>

            <p>
              With an eye on what’s important I create User centered Design for
              Websites, Apps and other visual places to work with.
            </p>
          </div>

          <div className={classes.Stats}>
            <div className={classes.StatsSection}>
              <h1 className={classes.number}>
                {new Date().getFullYear() -
                  new Date("22 December 2018").getFullYear()}
              </h1>
              <p>Years of Experience.</p>
            </div>

            <div className={classes.StatsSection}>
              <h1 className={classes.number}>
                {new Date().getFullYear() -
                  new Date("22 May 2002").getFullYear()}
              </h1>
              <p>Years Old.</p>
            </div>
          </div>
        </div>

        <div className={classes.Contact}>
          <div className={classes.Contact_Header}>
            <div className={classes.Contact_Head}>
              <div className={classes.Title}>
                <h1>
                  Contact <span>Me</span>
                </h1>
                <img src={arrow} alt="skills" />
              </div>
            </div>
          </div>
          <h1 className={classes.Contact_Title}>
            Any type of query & Discussion.
          </h1>
          <p className={classes.Contact_Sub}>
            Heyy wasup? Do you want to talk or just send me an idea over for a
            project you have in mind?
          </p>

          <div className={classes.Contact_Email}>
            <a href="mailto:mail@paragrudani.com?subject= Mail for Parag Rudani">
              mail@paragrudani.com
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
