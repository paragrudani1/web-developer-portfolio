/** @format */

import React from "react";
import classes from "./Skill.module.css";
import arrow from "../../../assets/arrows/Line 5.svg";  

// Images
import html from "../../../assets/Skill/icons8-html-5 1.svg";
import css from "../../../assets/Skill/icons8-css3 (1) 1.svg";
import js from "../../../assets/Skill/icons8-javascript 3.svg";
import photoshop from "../../../assets/Skill/icons8-adobe-photoshop 2.svg";
import xd from "../../../assets/Skill/icons8-adobe-xd 2.svg";
import SkillBar from "./SkillBar/SkillBar";

const Skill = () => {
  return (
    <section className={classes.Skill}>
      <div className={classes.Skill_Header}>
        <div className={classes.Skill_Head}>
          <div className={classes.Title}>
            <h1>
              My <span>Skills</span>
            </h1>
            <img src={arrow} alt="skills" />
          </div>
          <div className={classes.Sub}>
            <p>
              Ignorance and bungling with love are better than wisdom and skill
              without.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.Skill_Bar}>
        <SkillBar Percentage="95%" Bar_Img={html} title="HTML5" />
        <SkillBar Percentage="95%" Bar_Img={css} title="CSS3" />
        <SkillBar Percentage="95%" Bar_Img={js} title="JavaScript" />
        <SkillBar Percentage="95%" Bar_Img={photoshop} title="Photoshop" />
        <SkillBar Percentage="95%" Bar_Img={xd} title="Adobe XD" />
        <SkillBar Percentage="95%" Bar_Img={html} title="HTML5" />
        <SkillBar Percentage="95%" Bar_Img={html} title="HTML5" />
        <SkillBar Percentage="95%" Bar_Img={html} title="HTML5" />
      </div>
    </section>
  );
};

export default Skill;
