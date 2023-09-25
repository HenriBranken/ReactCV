import React from "react";
import Container from "./components/Container";
import Aside from "./components/Aside";
import Main from "./components/Main";
import classes from './App.module.css';

function App() {
  return (
    // How the App is Structured.
    <div className={classes.Global}>
      <Container >
        <Aside />
        <Main />
      </Container>
    </div>
  );
}

export default App;
