import { Box } from "theme-ui";
import React, { useEffect, useState } from 'react';

const boxStyle = {
    border: ".3rem solid",
    transitionDuration:"0.45s",
    borderColor:"secondary",
    borderRadius:"0.8rem",
    width:"5.4rem",
    height:"5.4rem",
    fontSize:"2.5rem",
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
        if(color === 1){
            setBgColor("#264653");
        }else if(color === 2){
            setBgColor("#faa307");
        }else{
            setBgColor("#2a9d8f")
        }
    }

    useEffect(()=>{
        if(props.letter === ''){
            setBgColor("#264653");
        }
    },[props.letter])

    const handleClick = () => {
        if(props.letter !== ''){
            let newcolor = props.color+1;
            if(newcolor === 4){
                newcolor = 1
            }
            changeColor(newcolor);
            props.squareClicked(props.pos)
        }
    }

    return ( <Box sx={boxStyle} onClick={handleClick} style={{backgroundColor:bgColor}}> {props.letter} </Box> );
}

export default WordleSquare;