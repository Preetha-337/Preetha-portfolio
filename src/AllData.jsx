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
        width: "100vw", // Use 100vw for full viewport width
        maxWidth: "100vw", // Ensure it doesn't exceed viewport
        left: 0,
        right: 0,
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
        position="fixed"
        sx={{ 
          top: 0,
          left: 0,
          right: 0,
          width: "100vw", // Full viewport width
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          minHeight: { xs: 56, sm: 64 }, // Responsive toolbar height
          px: { xs: 2, sm: 3 }, // Responsive padding
          width: "100%",
          maxWidth: "100%",
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
        width: "100vw", // Full viewport width
        maxWidth: "100vw",
        overflowX: "hidden", // Prevent horizontal scroll
        position: "relative",
        left: 0,
        right: 0,
      }}>
        <Container 
          maxWidth={false} // Remove max width restriction
          disableGutters // Remove default padding
          sx={{
            width: "100vw", // Full width
            maxWidth: "100%",
            px: { xs: 0, sm: 0, md: 0 }, // Remove all padding from Container
            mx: 0, // Remove margin
            overflow: "hidden",
            "& > *": {
              width: "100%",
              maxWidth: "100%",
            }
          }}
        >
          <Stack spacing={4} sx={{ 
            width: "100%", 
            maxWidth: "100%",
            px: { xs: 2, sm: 3, md: 4 }, // Add padding directly to Stack instead
          }}>
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