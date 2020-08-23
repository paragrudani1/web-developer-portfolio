/** @format */

import React from "react";
import classes from "./Story.module.css";
import arrow from "../../../assets/arrows/Line 5.svg";
import Card from "./Card/Card";

const Story = () => {
  return (
    <section className={classes.Story}>
      <div className={classes.Story_Header}>
        <div className={classes.Story_Head}>
          <div className={classes.Title}>
            <h1>
              My Awesome <span>Story</span>
            </h1>
            <img src={arrow} alt="skills" />
          </div>
          <div className={classes.Sub}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.Container}>
        <div className={classes.Timeline}>
          <div className={classes.Timeline_Header}>
            <h1>Education</h1>
          </div>
          <div className={classes.Timeline_Item}>
            <div className={classes.Timeline_Content}>
              <Card />
            </div>
          </div>
          <div className={classes.Timeline_Item}>
            <div className={classes.Timeline_Content}>
              <Card />
            </div>
          </div>
          <div className={classes.Timeline_Item}>
            <div className={classes.Timeline_Content}>
              <Card />
            </div>
          </div>
        </div>

        <div className={classes.Timeline}>
          <div className={classes.Timeline_Header}>
            <h1>Experience</h1>
          </div>
          <div className={classes.Timeline_Item}>
            <div className={classes.Timeline_Content}>
              <Card />
            </div>
          </div>
          <div className={classes.Timeline_Item}>
            <div className={classes.Timeline_Content}>
              <Card />
            </div>
          </div>
          <div className={classes.Timeline_Item}>
            <div className={classes.Timeline_Content}>
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.Work}>
        <h1>Let’s Work Together On Your Next Project!</h1>
        <button
          onClick={() => {
            window.location.href = "#contactform";
          }}
        >
          HIRE ME
        </button>
      </div>
    </section>
  );
};

export default Story;
