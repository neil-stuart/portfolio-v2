import { Box, __ThemeUIContext } from "theme-ui";
import React, { useState, useEffect } from 'react';

const boxStyle = {
    border: "4px solid",
    borderColor:"secondary",
    borderRadius:"10px",
    width:"80px",
    height:"80px",
    fontSize:"30px",
    textAlign:"center",
    verticalAlign:"center",
    alignItems: "center",
    justifyContent: "center",
    margin:"auto",
    display:"flex",
    userSelect:"none",
    color:"white"
}



function WordleSquare(props) {
    const [bgColor, setBgColor] = useState('#264653');


    const changeColor = (color) => {
        if(color == 1){
            setBgColor("#264653");
        }else if(color == 2){
            setBgColor("#faa307");
        }else{
            setBgColor("#2a9d8f")
        }
    }



    const handleClick = () => {
        console.log("clicked")

        let newcolor = props.color+1;
        if(newcolor == 4){
            newcolor = 1
        }
        changeColor(newcolor);
        
        props.squareClicked(props.pos);
    }

    return ( <Box sx={boxStyle} onClick={handleClick} style={{backgroundColor:bgColor}}> {props.letter} </Box> );
}

export default WordleSquare;