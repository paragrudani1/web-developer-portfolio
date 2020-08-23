/** @format */

import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.Card}>
      <div className={classes.Time}>
        <h3>2013-2014</h3>
      </div>
      <div className={classes.Place}>
        <h1>Master Degree of Design</h1>
        <p>ABC University India</p>
      </div>
      <div className={classes.Detail}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
    </div>
  );
};

export default Card;
