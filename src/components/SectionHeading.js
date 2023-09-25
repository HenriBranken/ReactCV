import React from "react";
import Divider from "./Divider";
import classes from "./SectionHeading.module.css";

// The Definition of the <SectionHeading />.
const SectionHeading = (props) => {
  return (
    <React.Fragment> {/* Used to avoid a <div> soup: a deeply nested chain of divs. */}
      <h2 className={classes.Heading}>
        {props.icon}&nbsp;&nbsp;{props.heading} {/* A heading consists of an icon and text. */}
      </h2>
      <Divider /> {/* We want a demarcating line beneath each Section Heading. */}
    </React.Fragment>
  );
};

export default SectionHeading;
