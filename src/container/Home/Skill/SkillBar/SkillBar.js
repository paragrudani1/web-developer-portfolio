import React from 'react'
import classes from './SkillBar.module.css';

const SkillBar = ({Bar_Img, SkillName, Percentage}) => {
    return ( 
        <div className={classes.Bar}>
            <div className={classes.Bar_Color}></div>
            <div className={classes.Percentage} style={{height: Percentage}}></div>
            <div className={classes.Bar_Img}>
                <img src={Bar_Img} alt={SkillName} />
            </div>
        </div>
     );
}
 
export default SkillBar;