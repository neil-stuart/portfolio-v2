
import { Grid, Box, Button } from "theme-ui";
import React, { Component, useEffect } from 'react';
import { headingStyles, headingAccentStyles } from '../styles/defaultStyles'
import WordleSquare from "./WordleSquare";
import WordBox from "./WordBox";

const tagStyle = {
    display:"flex", 
    height:"71%",
    width:"100%",
    flexFlow:"row wrap",
    border: "1px solid",
    borderColor: "transparent",
    maxHeight:"300px",
    minHeight:"300px",
    borderRadius:"20px",
    padding: "8px",
    overflow:"hidden",
    justifyContent:"center",
    alignContent:"center",
    fontSize:"18px",
    userSelect:"none",
    marginBottom:"30px"
}

const thisBoxBorderStyles = {
    border:0,
    borderStyle: "solid", 
    borderColor: "text",
    borderRadius: "15px",
    paddingTop: "5px",
    paddingBottom: "20px",
    height: "fit-content"
}

const listBoxStyle = {
    display:"inline-block",
    marginRight:"40px",
    width:"100%",
    maxHeight:"500px",
    borderRadius:"20px",
    overflow:"hidden",
    borderWidth:"2px",
    padding:"30px"
}

class Wordle extends Component {
    state = {  } 

    constructor(props){
        super(props);
        this.updateWords = this.updateWords.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.squareClicked = this.squareClicked.bind(this);

        this.state = {
            possibleWords: [],
            input:"store,12132",
            cursor:4,
            letters: ['W','O','R','D','L','','','','','','','','','','','','','','','','','','','',''],
            colors: [1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] //Initial colors.
        }

    }

    
    handleKeyDown(e){
        const newletters = this.state.letters;
        // if its a letter

        if((e.key == 'Backspace') && (this.state.cursor-1>=-1)){
            newletters[this.state.cursor] = '';
            this.setState({letters:newletters, cursor:this.state.cursor-1})
            this.updateWords()
            return;
        }

        if((e.key.length === 1)&&(this.state.cursor+1<25)){
            newletters[this.state.cursor+1] = e.key.toUpperCase();
            this.setState({letters:newletters, cursor:this.state.cursor+1})
            this.updateWords()
            return;
        }

    }
    updateWords() {
        fetch('http://localhost:5000/run_python_file', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
          },
          body: JSON.stringify({ letters: this.state.letters, colors: this.state.colors })
        }).then(response => response.text())
          .then(response => JSON.parse(response))
          .then(response =>this.setState({possibleWords:response}))
    }

    
    componentDidMount() {
        //this.updateWords()

        window.addEventListener('keydown', this.handleKeyDown);
      }
    

    componentDidUpdate(){
    }

    squareClicked(i){
        let current = this.state.colors[i];
        current++;
        if(current == 4){
            current = 1
        }
        let newcolors = this.state.colors
        newcolors[i] = current 
        this.setState({colors:newcolors})
        this.updateWords()

    }

    render() { 
        return (

        <Grid sx={{}} style={{marginLeft:"20px",marginRight:"20px", marginTop:"20px"}}>

            <Box style={{minWidth:"100%"}} ><Box sx={headingStyles} style={{textAlign:"center"}}>Wordle Solver.</Box></Box>
            
            <Box style={{minWidth:"100%"}} ><Box sx={headingAccentStyles} style={{textAlign:"center"}}><i>A solver for wordle using list comprehension, made using Python.<br/>Feel free to open wordle and give it a go, type in your guesses so far and click the squares to set the colours.</i></Box></Box>


        <Grid gap={4} sx={{
            marginTop:"20px",
            gridTemplateColumns: 'repeat(auto-fit, minmax(490px, 1fr))'}}>
           
            
            <Grid style={{gridTemplateColumns:"repeat(5, 80px)",gridTemplateRows:"repeat(5, 80px)", placeItems:"center", margin:"auto"}} color="text">
                {this.state.colors.map((color, i ) => <WordleSquare squareClicked={this.squareClicked} key={i} pos={i} color={color} letter={this.state.letters[i]}></WordleSquare> )}
            </Grid>
            <Box sx={thisBoxBorderStyles} style={listBoxStyle} color="text">
                <Box style={{minWidth:"100%"}} ><Box sx={headingStyles} style={{textAlign:"center", marginBottom:"30px"}}>Suggested Answers.</Box></Box>
                <Box bg="secondary" sx={tagStyle}>{this.state.possibleWords.map((word, i) => <WordBox key={i} word={word}/>)}</Box>

            </Box>

        </Grid>
        
        </Grid>

        );
    }
}
 
export default Wordle;