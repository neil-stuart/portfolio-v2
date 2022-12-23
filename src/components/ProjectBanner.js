import * as React from "react"
import { Box } from "theme-ui";
import "../styles/projectBanner.css";

const style = {
    height: "160px",
    width: "160px",
    border: "0.5px solid",
    borderColor: "accent",
    padding: "0px",
    fontWeight: "bold",
    borderRadius:"20px",
    fontSize:14,
    textAlign:"center"
}

const titleStyle = {
    textAlign:"center",
    justifyContent:"center",
    display:"flex",
    userSelect:"none",
    height:"30%",
    color:"text",
    alignContent: "center",
    flexDirection: "column",
    verticalAlign:"middle",
}

const tagStyle = {
    display:"flex", 
    height:"71%",
    width:"100%",
    flexFlow:"row wrap",
    border: "1px solid",
    borderColor: "accent",
    
    borderRadius:"20px",
    padding: "8px",
    overflow:"hidden",
    justifyContent:"flex-start",
    alignContent:"flex-start",
    fontSize:"12px",
    userSelect:"none"
}

const tagTextStyle = {
    width:"fit-content",
    height:"fit-content",
    padding:"3px",
    margin:"4px",
    marginTop:"4px",
    borderRadius: "5px",
    border: "1px solid",
    borderColor: "background",
}

const academicTag = ( academic ) => {
    if(academic === true)
        return (<Box sx={tagTextStyle} color="text" bg="secondary"> Academic </Box>); 
    else
        return (<Box sx={tagTextStyle} color="#FFFFFF" bg="#A928FF"> Personal </Box>);
}

const ProjectBanner = ({ project }) => {
    return (
        <Box sx={style} color="accent" id="project-banner">
                <Box sx={titleStyle}>{project.title}</Box>
                <Box bg="accent" sx={tagStyle}>{project.tags.map(tag => <Box sx={tagTextStyle} color="background" bg="accent">{tag}</Box>)}
                {academicTag(project.academic)};
                </Box>

        </Box>
    )
}

export default ProjectBanner;