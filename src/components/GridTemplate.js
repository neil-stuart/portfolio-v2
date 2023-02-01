import * as React from "react"
import { Grid } from "theme-ui";

function GridTemplate(props) {
    return (           <Grid gap={4} sx={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(34rem, 1fr))',
        paddingBottom:"1.5rem"
      }}  >{props.children}
        </Grid> );
}

export default GridTemplate;