import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
//import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./cvsomesh.pdf";

const Services = () => {
  return (
    <div className="services" id='Services'>
        <div className="awesome">
        <span>My Awesome</span>
        <span>Skills</span>
        <span>
        I am good in making responsive designs, and can build
        <br/>
        web apps that can bring a change in the society,
        <br/>
        I am good in Data Structures and Algorithms and have
        <br/>
        quite good problem solving skills.
        </span>
        <a href={Resume} download> 
        <button className="button s-button">Download CV

        </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        <div className="cards">
        <div style={{left:"19rem"}}>
          <Card
            emoji={HeartEmoji}
            heading={"Languages"}
            detail={"Python, C++/C, Java script, Sql"}
          />
        </div>
        {/* second card */}
        <div style={{top:"16rem",left:"-4rem"}}>
          <Card
            emoji={Glasses}
            heading={"Web Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Bootstrap, MysQL"}
          />
        </div>
        {/* 3rd */}
        <div style={{top:"19rem",left:"19rem"}}>
          <Card
            emoji={Humble}
            heading={"Others"}
            detail={
              "Data structure and algorithms, Machine Learning, Operating system, Opps Concept, Jupyter Notebook, Vs-Code"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
     </div>
  </div>
  )
}

export default Services