import * as React from "react"
import { Box, Grid, Button, Switch, useColorMode } from "theme-ui";
import "../styles/projectBanner.css";
import { headingStyles, headingAccentStyles } from '../styles/defaultStyles'

const Header = () => {
    const [colorMode, setColorMode] = useColorMode();
    return (
        <Grid sx={{
            justifyContent: 'space-between',
            borderBottom: "solid 3px",
            borderColor: "text",
            marginBottom: 20,
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            minWidth:"535px"
          }}
            gap={0}
            paddingBottom={0}
            marginTop={30}>

            <Box style={headingStyles} color={"primary"} paddingBottom={20} >
              Portfolio.
              <br />
              <Box style={headingAccentStyles} color={"primary"}>Electrical & Electronic Engineering Undergraduate.</Box>
            </Box>

            <Grid columns={"10fr 1fr"}
              marginRight={"45px"}
              marginLeft={"45px"}
              minWidth={"143px"}
              paddingBottom={10}
              paddingTop={10}
            >
              <Box className="button-div">
                <Button sx={{
                  border: 2,
                  borderStyle: "solid",
                  borderColor: "primary",
                  borderRadius: "10px"
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
    )
}
export default Header