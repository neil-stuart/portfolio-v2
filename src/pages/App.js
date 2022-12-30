import * as React from "react"
import { Grid, Box, ThemeProvider, } from "theme-ui";
import theme from "../styles/theme.js";
import "../styles/global.css"
import { mobilePageStyles, pageStyles, smallPageStyles } from "../styles/defaultStyles.js";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects"
import Wordle from "../components/Wordle"
import { useMediaQuery } from '@mui/material';

function IndexPage() {
  const isSmallScreen = useMediaQuery('(max-width:700px)');
  const isverySmallScreen = useMediaQuery('(max-width:540px)');

  return (
    
    <ThemeProvider theme={theme} >

      <Box bg="background" sx={{ 'width': "100%", 'height': "100%" }}>

        <main style={isverySmallScreen ? {...mobilePageStyles,transform:"scale("+"0.619"/*scaleAmount*/+")"}:(isSmallScreen ? smallPageStyles:pageStyles)} bg="background" >
          <Header />

          <Grid gap={4} sx={{
            marginLeft: "20px",
            marginRight: "20px",
            gridTemplateColumns: 'repeat(auto-fit, minmax(490px, 1fr))'
          }} paddingBottom={20} >

            <About isSmallScreen={isSmallScreen} />

            <Projects isSmallScreen={isSmallScreen} />

            
          </Grid>

          <Wordle isSmallScreen={isSmallScreen} />
          
        </main>

      </Box>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Portfolio.</title>
