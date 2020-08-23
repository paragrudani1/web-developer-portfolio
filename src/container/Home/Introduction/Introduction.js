import React from 'react'
import classes from './Introduction.module.css';

import mainImg from "../../../assets/Images/main-img.png";
import rigthArrow from "../../../assets/arrows/up-arrow 1.svg";

// Import Social Media Icons
import instagram from "../../../assets/Social Media/instagram 1.svg";
import linkedIn from "../../../assets/Social Media/linkedin 1.svg";
import github from "../../../assets/Social Media/github 1.svg";

const Introduction = () => {
    return (
        <header id="home">
      <div className={classes.Info}>
        <div className={classes.Header_Name}>
          <p>HELLO, I'M</p>
           {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
          <h1></h1>
        </div>

        <div className={classes.Header_Info}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={classes.Header_RightArrow}>
            <a href="#about">Wanna know More?</a>
          <img src={rigthArrow} alt="right arrow" />
        </div>
      </div>

      <div className={classes.Header_Img_Section}>
        {/* Main Header Image */}
        <img src={mainImg} alt="I'm working :) " />
        {/* Social Media Icons */}
        <div className={classes.Header_SocialIcons}>
          {/* Instagram */}
          <div className={classes.Instagram}>
            <a href="#instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          {/* LinkedIn */}
          <div className={classes.LinkedIn}>
            <a href="#LinkedIn">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
          </div>
          {/* Github */}
          <div className={classes.Github}>
            <a href="#Github">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Introduction
