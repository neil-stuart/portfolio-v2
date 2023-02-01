import * as React from "react"
import { Box, Grid, Button, Switch, useColorMode } from "theme-ui";
import "../styles/projectBanner.css";
import { headingStyles, headingAccentStyles } from '../styles/defaultStyles'

const Header = () => {
    const [colorMode, setColorMode] = useColorMode();
    return (
      <Box sx={{width:"100%"}}>
        <Grid sx={{
            justifyContent: 'space-between',
            borderBottom: "solid 0.33rem",
            borderColor: "text",
            marginBottom: 20,
            
            gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))'
          }}
            gap={0}
            paddingBottom={0}
            marginTop={30}>

            <Box sx={headingStyles}  paddingBottom={20} >
              Portfolio.
              <br />
              <Box sx={headingAccentStyles} >Electrical & Electronic Engineering Undergraduate.</Box>
            </Box>

            <Grid columns={"10fr 1fr"}
              marginRight={"3.5rem"}
              marginLeft={"3.5rem"}
              paddingBottom={10}
              paddingTop={10}
            >
              <Box className="button-div">
                <Button sx={{
                  border: 2,
                  borderStyle: "solid",
                  borderColor: "primary",
                  borderRadius: "0.8rem"
                }} bg={"transparent"} color={"primary"}  >Resume</Button>
              </Box>

              <Box className="switch-div">
                <Switch sx={{
                  backgroundColor: 'accent',
                  'input:checked ~ &': {
                    backgroundColor: 'accent',
                  },
                }}
                  onClick={(e) => {
                    setColorMode(colorMode === 'light' ? 'dark' : 'light')
                  }}
                >
                </Switch>
              </Box>
            </Grid>

          </Grid>
        </Box>
    )
}
export default Header