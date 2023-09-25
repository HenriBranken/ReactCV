import React from "react";
import MainInner from "./MainInner";
import classes from './Main.module.css';

// Main encapsulates everything that is displayed on the Right-Hand Column, In the Blue Box, next to the "aside".
const Main = (props) => {
  return (
    <main className={classes.main}>
      {/* All the contents are reflected in <MainInner /> */}
      <MainInner />
    </main>
  );
};

export default Main;
