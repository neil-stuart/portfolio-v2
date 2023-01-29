import * as React from "react"
import { Box } from "theme-ui";

const WordBoxStyles = {
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
        <Box sx={WordBoxStyles} color="background" bg="accent">{props.word}</Box>
     );
}

export default WordBox;