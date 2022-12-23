import * as React from "react"
import { Box } from "theme-ui";

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

function WordBox(props) {
    return ( 
        <Box sx={tagTextStyle} color="background" bg="accent">{props.word}</Box>
     );
}

export default WordBox;