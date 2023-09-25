import React from "react";
import classes from "./AsideInner.module.css";
import ProfilePic from "../assets/henri_square.png";
import Divider from "./Divider";
import {
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
  FaMailBulk,
} from "react-icons/fa";

// All the content that goes into the left box of the screen.
const AsideInner = () => {
  return (
    <div className={classes.AsideInner}>
      <img // Profile Photo of Me
        className={classes.Figure}
        src={ProfilePic}
        alt="Profile"
      ></img>
      <h1 style={{ textAlign: "center" }}>Henri Branken</h1>
      <h3 style={{ textAlign: "center" }}> {/* Job Title */}
        Full-Stack Web Developer &amp; Software Engineering
      </h3>
      <Divider />{" "}
      {/*The <Divider /> is used to clearly group/demarcate different sections of content.*/}
      <ul style={{ listStyleType: "none" }}>
        <li>
          {" "}
          {/* Location */}
          <FaLocationArrow />
          &nbsp;&nbsp;Welkom, Free State, South Africa
        </li>
        <li>
          {" "}
          {/* Email Address */}
          <FaMailBulk />
          &nbsp;&nbsp;
          <a
            className={classes.LinkColor}
            href="mailto:henri.branken777@gmail.com"
          >
            henri.branken777@gmail.com
          </a>
        </li>
      </ul>
      <Divider />
      
      {/* Provide Links to GitHub & LinkedIn Accounts */}
      <div className={classes.icons}>
        {/* GitHub Account */}
        <a className={classes.icon} href="https://github.com/HenriBranken">
          <FaGithub />
        </a>
        &nbsp;&nbsp;&nbsp;
        {/* LinkedIn Account */}
        <a
          className={classes.icon}
          href="https://www.linkedin.com/in/henri-branken-1423a2153/"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <Divider />
      <div>
        {" "}
        {/* A Closing Comment on how this site was built */}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          React
        </a>{" "}
        was used to build this site.
      </div>
    </div>
  );
};

export default AsideInner;
