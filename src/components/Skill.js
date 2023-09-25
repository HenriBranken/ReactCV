import React from 'react';
import classes from './Skill.module.css';

const Skill = (props) => {
    // With each Skill Element, we can tweak the +text color +border color, and +background color.
    return <li className={classes.Skill} 
        style={{backgroundColor: props.bcolor, color: props.color, borderColor: props.color}}>
        {props.text}
    </li>
}

export default Skill;