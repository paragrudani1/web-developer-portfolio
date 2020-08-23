/** @format */

import React from "react";
import classes from "./Card.module.css";
import arrow from "../../../assets/arrows/Line 5.svg";
import SubCard from "./SubCard/SubCard";

// Images
import uiux from "../../../assets/Images/artist 1.svg";
import logo from "../../../assets/Images/3d-design 1.svg";
import web from "../../../assets/Images/art 1.svg";

const Card = () => {
  return (
    <section className={classes.Card}>
      <div className={classes.Card_Header}>
        <h1>
          Specializing <span>In</span>
        </h1>
        <img src={arrow} alt="img" />
        <div className={classes.Card_SubHeader}>
          <p>
            All skills are perfected through the process of failure. Embrace
            loss as a necessary part
          </p>
        </div>
      </div>
      <div className={classes.Sub_Cards}>
        <SubCard
          img={uiux}
          title="UI/UX Design"
          sub="Making a well designed logo is not a simple task, and being up-to-date with the latest trends."
        />
        <SubCard
          img={logo}
          title="Logo Design"
          sub="Making a well designed logo is not a simple task, and being up-to-date with the latest trends."
        />
        <SubCard
          img={web}
          title="Web Development"
          sub="Making a well designed logo is not a simple task, and being up-to-date with the latest trends."
        />
      </div>
    </section>
  );
};

export default Card;
