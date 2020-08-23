/** @format */

import React from "react";
import classes from "./SubCard.module.css";

const SubCard = ({ img, title, sub }) => {
  return (
    <div className={classes.SubCard}>
      <div className={classes.Card_Img}>
        <img src={img} alt={title} />
      </div>

      <div className={classes.Card_Title}>
        <h1>{title}</h1>
      </div>

      <div className={classes.Card_Sub}>
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default SubCard;
