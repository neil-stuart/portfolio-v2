function ProjectHeading() {
  return (
    <>
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
    </>
  );
}

export default ProjectHeading;
