import React from 'react';
import classes from './Container.module.css';

// Container is a <div> element that contains the <aside> and the <main>.
const Container = (props) => {
    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );
}

export default Container;