import * as React from "react"
import { Box } from "theme-ui";
import "../styles/projectBanner.css";
import { headingStyles, headingAccentStyles, boxBorderStyles } from '../styles/defaultStyles'
const aboutMe1 = 'I created this portfolio to show my interest in science & engineering. Before beginning my studies in engineering I was always working at little projects. That collection of personal projects is what gave me the idea to make a portfolio website. This website is designed and programmed entirely by me with the aid of ReactJS and Gatsby. ';
const aboutMe2 = 'I am currently in second year of Electrical & Electronic Engineering at University of Galway. (22/23)'

const aboutMeStyles = {
    fontSize: 16,
    width: "100%",
    marginBottom: 100,
    margin: 0,
    textDecoration: "italic",
    userSelect: "auto"
}


function About() {
    return ( 
    <Box sx={boxBorderStyles}>
        <Box style={headingStyles} color={"primary"}>
          About This Portfolio.
          <br />
          <Box style={headingAccentStyles} color={"primary"}><i>What this website is for.</i></Box>
          <Box style={aboutMeStyles} color={"primary"} sx={{ paddingRight: "25px", paddingTop: "10px" }}>{aboutMe1}</Box>
        </Box>
        <Box style={headingStyles} sx={{ paddingTop: "20px", overflow: "hidden" }} color={"primary"}>
          About Me.
          <br />
          <Box style={headingAccentStyles} color={"primary"}><i>My current progress.</i></Box>
          <Box style={aboutMeStyles} color={"primary"} sx={{ paddingRight: "25px", paddingTop: "10px" }}>{aboutMe2}</Box>
        </Box>
    </Box> );
}

export default About;