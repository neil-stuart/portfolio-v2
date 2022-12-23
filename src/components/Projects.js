import { headingStyles, headingAccentStyles, boxBorderStyles } from '../styles/defaultStyles'
import ProjectBanner from "./ProjectBanner";
import * as React from "react"
import { Box, Grid } from "theme-ui";
import "../styles/projectBanner.css";

const projects = [
    {
      title: "Temperature & Humidity Module.",
      academic: false,
      tags: [
        "Electronics",
        "C Programming",
        "Data"
      ]
    },
    {
      title: "Truck Race.",
      academic: true,
      tags: [
        "Group Work",
        "Leadership",
        "Physics"
      ]
    },
    {
      title: "Wordl Solver.",
      academic: false,
      tags: [
        "Python",
        "List Comp",
        "Data Processing"
      ]
    },
    {
      title: "Arduino Lander.",
      academic: true,
      tags: [
        "Electronics",
        "Group Work",
        "C"
      ]
    },
    {
      title: "This Website.",
      academic: false,
      tags: [
        "Web Dev",
        "CSS",
        "Javascript",
  
        "HTML",
        "React"
      ]
    },
    {
      title: "Model Bridge.",
      academic: true,
      tags: [
        "Group work",
        "Instrumentation",
        "Physics"
      ]
    }
  ]

function Projects() {
    return (             
            <Box sx={boxBorderStyles}>
              <Box style={headingStyles} color={"primary"}>
                Personal & Academic Projects.
                <br />
                <Box style={headingAccentStyles} color={"primary"}><i>Projects that I have completed.</i></Box>

              </Box>
              <Grid columns={2} gap="30px" justify="space-between" sx={{ margin: "60px", marginTop: "30px", justifyItems: "center" }}>
                {projects.map((project,i) => <ProjectBanner project={project} key={i} />)}
              </Grid>
            </Box> );
}

export default Projects;