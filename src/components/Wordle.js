import { Grid, Box } from "theme-ui";
import React, { Component } from "react";
import { headingStyles, headingAccentStyles } from "../styles/defaultStyles";
import WordleSquare from "./WordleSquare";
import WordBox from "./WordBox";
import GridTemplate from "./GridTemplate";

const tagStyle = {
  display: "flex",
  height: "50%",
  width: "auto",
  flexFlow: "row wrap",
  border: "1px solid",
  borderColor: "transparent",
  minHeight: "22.5rem",

  maxHeight: "22.5rem",
  borderRadius: "1.6rem",
  padding: "0.7rem",
  overflow: "hidden",
  justifyContent: "center",
  alignContent: "center",
  fontSize: "1.5rem",
  userSelect: "none",
};

const thisBoxBorderStyles = {
  border: 0,
  borderStyle: "solid",
  borderColor: "text",
  borderRadius: "1.3rem",
  paddingTop: "0.4rem",
  paddingBottom: "1.6rem",
  height: "fit-content",
  display: "inline-block",
  width: "93%",
  borderRadius: "1.6rem",
  overflow: "hidden",
  borderWidth: "0.16rem",
  padding: "2.5rem",
};

const listBoxStyle = {};

class Wordle extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.updateWords = this.updateWords.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.squareClicked = this.squareClicked.bind(this);

    this.state = {
      possibleWords: [],
      input: "store,12132",
      cursor: 4,
      letters: [
        "W",
        "O",
        "R",
        "D",
        "L",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      colors: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1,
      ], //Initial colors.
    };
  }

  handleKeyDown(e) {
    const newletters = this.state.letters;
    // if its a letter

    if (e.key === "Backspace" && this.state.cursor - 1 >= -1) {
      const newcolors = this.state.colors;
      newcolors[this.state.cursor] = 1;
      newletters[this.state.cursor] = "";
      this.setState({
        letters: newletters,
        colors: newcolors,
        cursor: this.state.cursor - 1,
      });
      return;
    }

    if (e.key.length === 1 && this.state.cursor + 1 < 25) {
      // Add the new letter.
      newletters[this.state.cursor + 1] = e.key.toUpperCase();
      this.setState({ letters: newletters, cursor: this.state.cursor + 1 });

      // If a full new word was just completed, then update, every 5th letter.
      if ((this.state.cursor + 2) % 5 === 0) {
        this.updateWords();
      }
    }
  }

  updateWords() {
    fetch("https://neilstu.art/api/wordl_guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        letters: this.state.letters,
        colors: this.state.colors,
      }),
    })
      .then((response) => response.text())
      .then((response) => JSON.parse(response))
      .then((response) => this.setState({ possibleWords: response }));
  }

  componentDidMount() {
    //this.updateWords()

    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate() {}

  squareClicked(i) {
    // Selected square's color.
    let current = this.state.colors[i];

    // Cycle colors.
    current++;
    if (current === 4) {
      current = 1;
    }

    // New list of colors.
    let newcolors = this.state.colors;
    newcolors[i] = current;

    // Set the state, and update the words
    this.setState({ colors: newcolors });
    this.updateWords();
  }

  render() {
    return (
      <Grid
        style={{
          marginTop: "1.6rem",
        }}
      >
        <Box style={{ minWidth: "100%" }}>
          <Box sx={headingStyles} style={{ textAlign: "center" }}>
            Wordle Solver.
          </Box>
        </Box>

        <Box style={{ minWidth: "100%", marginBottom: "2rem" }}>
          <Box sx={headingAccentStyles} style={{ textAlign: "center" }}>
            <i>
              A solver for wordle using list comprehension, made using Python.
              <br />
              Feel free to open wordle and give it a go, type in your guesses so
              far and click the squares to set the colours.
            </i>
          </Box>
        </Box>

        <GridTemplate
          morestyle={{
            placeItems: "center",
            alignItems: "center",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Grid
            style={{
              gridTemplateColumns: "repeat(5, 14.5%)",
              gridTemplateRows: "repeat(5, 5.7rem)",
              marginLeft:"7%",
              maxWidth:"100rem"
            }}
            color="text"
          >
            {this.state.colors.map((color, i) => (
              <WordleSquare
                squareClicked={this.squareClicked}
                key={i}
                pos={i}
                color={color}
                letter={this.state.letters[i]}
              />
            ))}
          </Grid>

          <Box sx={thisBoxBorderStyles} style={listBoxStyle} color="text">
            <Box style={{ minWidth: "100%" }}>
              <Box
                sx={headingStyles}
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                Suggested Answers.
              </Box>
            </Box>
            <Box bg="secondary" sx={tagStyle}>
              {this.state.possibleWords.map((word) => (
                <WordBox key={word} word={word} />
              ))}
            </Box>
          </Box>
        </GridTemplate>
      </Grid>
    );
  }
}

export default Wordle;
