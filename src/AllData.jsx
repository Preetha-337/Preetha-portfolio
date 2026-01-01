import React from "react";
import { Container, Stack, AppBar, Toolbar, Grid, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Education from "./Education";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Strength from "./Strength";
import Quotes from "./Quotes";
import Cards from "./Cards";

function AllData() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden", // Prevent horizontal scrolling
        background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
        width: "100%",
        maxWidth: "100vw", // Ensure it doesn't exceed viewport
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0.9,
          zIndex: -1,
        },
      }}
    >
      {/* Fixed AppBar with responsive settings */}
      <AppBar 
        position={isMobile ? "sticky" : "fixed"} // Use sticky on mobile for better UX
        sx={{ 
          top: 0,
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          minHeight: { xs: 56, sm: 64 }, // Responsive toolbar height
          px: { xs: 2, sm: 3 } // Responsive padding
        }}>
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            component="div"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
            Preetha T
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Navbar />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Add padding to account for AppBar height */}
      <Box sx={{ 
        pt: { xs: "56px", sm: "64px" }, // Matches toolbar height
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden"
      }}>
        <Container 
          maxWidth="lg" // Limits max width on large screens
          sx={{
            width: "100%",
            maxWidth: "100%", // Allow full width on mobile
            px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
            overflow: "hidden",
            "& > *": {
              width: "100%",
              maxWidth: "100%",
            }
          }}
        >
          <Stack spacing={4} sx={{ width: "100%", maxWidth: "100%" }}>
            <Introduction />
            <Education />
            <Experience />
            <Quotes />
            <Projects />
            <Skills />
            <Cards />
            <Strength />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default AllData;