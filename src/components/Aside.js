import React from "react";
import classes from "./Aside.module.css";
import AsideInner from "./AsideInner";


const Aside = (props) => {
  return (
    <aside className={classes.aside}>
      {/*The content that appears on the left-hand side of the screen, in the red box.*/}
        <AsideInner />
    </aside>
  );
};

export default Aside;
