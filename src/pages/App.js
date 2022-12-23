import * as React from "react"
import { Grid, Box, ThemeProvider, } from "theme-ui";
import theme from "../styles/theme.js";
import "../styles/global.css"
import { pageStyles } from "../styles/defaultStyles.js";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects"
import Wordle from "../components/Wordle"

function IndexPage() {

  return (
    <ThemeProvider theme={theme} >
      <Box bg="background" sx={{ 'width': "100%", 'height': "100%" }}>

        <main style={pageStyles} bg="background" >
          <Header />

          <Grid gap={4} sx={{
            marginLeft: "20px",
            marginRight: "20px",
            gridTemplateColumns: 'repeat(auto-fit, minmax(490px, 1fr))'
          }} paddingBottom={20} >

            <About />

            <Projects />

            
          </Grid>

          <Wordle />
          
        </main>

      </Box>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Portfolio.</title>
