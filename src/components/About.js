import * as React from "react"
import { Box } from "theme-ui";
import "../styles/projectBanner.css";
import { headingStyles, headingAccentStyles, boxBorderStyles } from '../styles/defaultStyles'
const aboutMe1 = 'I created this portfolio to show my interest in science & engineering. Before beginning my studies in engineering I was always working at little projects. That collection of personal projects is what gave me the idea to make a portfolio website. This website is designed and programmed entirely by me with the aid of ReactJS and Gatsby. ';
const aboutMe2 = 'I am currently in second year of Electrical & Electronic Engineering at University of Galway. (22/23)'

const aboutMeStyles = {
    fontSize: "1.2rem",
    width: "100%",
    marginBottom: 100,
    margin: 0,
    textDecoration: "italic",
    userSelect: "auto"
}


function About() {
    return ( 
    <Box sx={boxBorderStyles}>
        <Box sx={headingStyles} >
          About This Portfolio.
          <br />
          <Box sx={headingAccentStyles} ><i>What this website is for.</i></Box>
          <Box style={{...aboutMeStyles,paddingRight: "2rem", paddingTop: "1rem"}} color={"primary"} >{aboutMe1}</Box>
        </Box>
        <Box sx={{...headingStyles, paddingRight: "2rem", paddingTop: "1rem", overflow: "hidden" }} color={"primary"}>
          About Me.
          <br />
          <Box sx={headingAccentStyles} ><i>My current progress.</i></Box>
          <Box sx={{...aboutMeStyles,paddingRight: "2rem", paddingTop: "1rem" }}>{aboutMe2}</Box>
        </Box>
    </Box> );
}

export default About;