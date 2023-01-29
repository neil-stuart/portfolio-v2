import * as React from "react"
import { Box, ThemeProvider, } from "theme-ui";
import theme from "../styles/theme.js";
import "../styles/global.css"
import { mobilePageStyles, pageStyles, smallPageStyles } from "../styles/defaultStyles.js";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects"
import Wordle from "../components/Wordle"
import GridTemplate from "../components/GridTemplate";
import { useMediaQuery } from '@mui/material';

function IndexPage() {
  const isSmallScreen = useMediaQuery('(max-width:53rem)');

  return (
    
    <ThemeProvider theme={theme} >

        <main style={isSmallScreen ? smallPageStyles:pageStyles} bg="background" >
          
          <Header />


          <GridTemplate>
            <About />
            <Projects />
          </GridTemplate>

          <Wordle />
          
        </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Portfolio.</title>
