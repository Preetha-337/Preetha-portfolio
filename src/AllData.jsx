import React from "react";
import { Container, Stack,AppBar,Toolbar, Grid, Box,Typography} from "@mui/material";
import Education from "./Education";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Strength from "./Strength";
import Quotes from "./Quotes";
import Cards from "./Cards";
import background from "./assets/background.png";

function AllData() {
  return (
    <Box
    sx={{
    position: "relative",
    // minHeight: "100vh",
    overflow: "hidden",
background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",


    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      // backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.9,       
      zIndex: -1,
    },
  }}
    >
     <AppBar position="fixed">
      <Toolbar sx={{ background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
        Preetha T
        </Typography>
        <Box>
          <Navbar />
        </Box>
      </Toolbar>
    </AppBar>
  
        <Container border="1px solid black">
          <Stack >
            <Introduction />
            <Education /> 
            <Experience />
              <Quotes/>
            <Projects />
              <Skills />
            <Cards/>
            <Strength/>
          
          </Stack>
        </Container>

    </Box>
  );
}

export default AllData;
