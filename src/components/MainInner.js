import React from "react";
import classes from "./MainInner.module.css";
import { BsFilePerson } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { FaToolbox, FaPenNib, FaCat, FaBlackTie } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import Skill from "./Skill";

const MainInner = (props) => {
  return (
    //On a global scale is MainInner an enclosing <div>.
    <div className={classes.MainInner}>
      {/* The Introduction Section */}
      <SectionHeading icon={<BsFilePerson />} heading="Introduction" />
      <p>
        In light of acquiring my Master's degree in Astrophysics, and also
        having 3+ years of Data Science experience, I consider myself to be a
        competent programmer who is adept at problem-solving, mathematical
        analyses, and learning new skills. During my time as a Data Scientist, I
        realized that I have a bigger passion for software development, instead
        of data wrangling and modeling. The following quote by Richard Stallman
        embodies my drive for programming:{" "}
        <em>"Being a hacker means appreciating playful cleverness."</em>
      </p>
      <p>
        Currently, I am a budding Full-Stack Developer under the tutelage of
        HyperionDev. Creating beautiful websites from scratch gives me a great
        sense of achievement and satisfaction. I strive to work in an
        environment where I can make a tangible difference to my team members,
        and simultaneously grow as a Full-Stack Developer.
      </p>

      {/* The Work Section */}
      <SectionHeading icon={<FaBlackTie />} heading="Work" />
      {/* Work Subsection */}
      <h3>January 2019 &mdash; July 2022</h3>
      <p>
        Data Scientist at{" "}
        <a
          href="https://ai.matogen.com/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          Matogen Applied Insights
        </a>
      </p>
      {/* Work Subsection */}
      <h3>January 2017 &mdash; December 2017</h3>
      <p>Intern at the North West University</p>

      {/* The Education Section */}
      <SectionHeading icon={<TbCertificate />} heading="Education" />
      {/* Education Subsection */}
      <h3>January 2023 &mdash; Current</h3>
      <p>
        Fulltime Student of the Hyperion{" "}
        <a
          style={{ color: "white" }}
          href="https://www.hyperiondev.com/bootcamps/immersive/full-stack-web-and-software-engineer/"
          target="_blank"
          rel="noreferrer"
        >
          Full Stack Web &amp; Software Engineer Bootcamp
        </a>
        .
      </p>
      {/* Education SubSection */}
      <h3>January 2017 &mdash; March 2017</h3>
      <p>
        Completed the <em>Data Science with Python Track</em> on DataCamp
        (Certificate Number &#35;13,897)
      </p>
      {/* Education Subsection */}
      <h3>2014 &mdash; 2016</h3>
      <p>
        M.Sc. in Astrophysics:{" "}
        <a
          href="https://repository.nwu.ac.za/handle/10394/25063"
          style={{ color: "white" }}
          rel="noreferrer"
          target="_blank"
        >
          "Weighing dark matter in brightest cluster galaxies"
        </a>
      </p>

      {/* The Skills SubSection */}
      <SectionHeading icon={<FaToolbox />} heading="Skills" />
      <p>
        {/* Each <Skill/> is a colored <li> element */}
        <Skill text="Python" color="white" bcolor="purple" />
        <Skill text="PySpark" color="white" bcolor="purple" />
        <Skill text="DataBricks" color="white" bcolor="purple" />
        <Skill text="SnowFlake" color="white" bcolor="purple" />
        <Skill text="Power BI" color="white" bcolor="purple" />
        <Skill text="Tableau" color="white" bcolor="purple" />
        <Skill text="Linux" color="white" bcolor="red" />
        <Skill text="Bash Programming" color="white" bcolor="red" />
        <Skill text="Git" color="white" bcolor="red" />
        <Skill text="GitHub" color="white" bcolor="red" />
        <Skill text="Analytical Thinking" color="white" bcolor="coral" />
        <Skill text="Problem Solving" color="white" bcolor="coral" />
        <Skill text="LaTeX" color="white" bcolor="peru" />
        <Skill text="TikZ" color="white" bcolor="peru" />
        <Skill text="HTML5" color="white" bcolor="deeppink" />
        <Skill text="CSS3" color="white" bcolor="deeppink" />
        <Skill text="SCSS" color="white" bcolor="deeppink" />
        <Skill text="JavaScript" color="white" bcolor="slategray" />
        <Skill text="jQuery" color="white" bcolor="slategray" />
        <Skill text="SQL" color="white" bcolor="slategray" />
        <Skill text="PHP" color="white" bcolor="slategray" />
        <Skill text="React" color="white" bcolor="slategray" />
        <Skill text="MongoDB" color="white" bcolor="slategray" />
        <Skill text="Java" color="white" bcolor="lightseagreen" />
        <Skill text="TEFL" color="white" bcolor="navy" />
        <Skill text="TEFL Business English" color="white" bcolor="navy" />
      </p>

      {/* The Testimonials Section */}
      <SectionHeading icon={<FaPenNib />} heading="Testimonials" />
      <h3>Bayan Dekker &mdash; Managing Director Versuro International</h3>
      <p>
        I have had the privilege of working alongside Henri for a number of
        years. He is extremely meticulous, thorough and very detailed
        orientated. He is a highly proficient data engineering and has an
        uncanny ability to quickly spot logic, coding or data issues that most
        skilled professionals would miss. He is a quiet completer-finisher who
        excels when given highly complex tasks.
      </p>

      {/* The Hobbies Section */}
      <SectionHeading icon={<FaCat />} heading="Hobbies" />
      <p>
        In my free time I like to pet my cat, read books, do some exercise,
        watch アニメ, and study books about coding. I'm also an ardent student
        of studying Japanese kanji on{" "}
        <a
          href="https://www.wanikani.com/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          this
        </a>{" "}
        site.
      </p>
      <p></p>
    </div>
  );
};

export default MainInner;
