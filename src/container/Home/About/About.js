/** @format */

import React from "react";
import classes from "./About.module.css";
import img from "../../../assets/Images/a5f7aa9176c30ad5e257d34e00bc21fd-removebg-preview 1(1).png";
import resume from "../../../assets/arrows/download 1.svg";
import arrow from "../../../assets/arrows/Vector 3.svg";

const About = () => {
  return (
    <section id='about' className={classes.About}>
      <div className={classes.Img_Section}>
        <img src={img} alt="Kishan Rudani" />
      </div>

      <div className={classes.About_Section}>
        <div className={classes.Name}>
          <h1>John Doe</h1>
          <p>
            I'm Passionate <span>Web Designer</span>
          </p>
        </div>
        <div className={classes.About_Info}>
          <div className={classes.About_Me}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className={classes.Btn}>
            <div className={classes.About_Resume}>
              <a href="kishanrudani.pdf" download>
                RESUME
              </a>
              <img src={resume} alt="resume" />
            </div>
            <div className={classes.About_Arrow}>
              <img src={arrow} alt="resume" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
