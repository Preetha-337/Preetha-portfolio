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
import background from "./assets/background.mp4"

function AllData() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflowX: "hidden",
        width: "100vw",
        maxWidth: "100vw",
        left: 0,
        right: 0,
      }}
    >
      {/* Fixed Video Background - Reduced Zoom */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transform: "scale(1)",
          zIndex: -1,
        }}
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Fixed AppBar with responsive settings */}
      <AppBar 
        position="fixed"
        sx={{ 
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))",
          backdropFilter: "blur(10px)",
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 2, sm: 3 },
          width: "100%",
          maxWidth: "100%",
        }}>
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            component="div"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, color: "white" }}
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
        pt: { xs: "56px", sm: "64px" },
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
        left: 0,
        right: 0,
      }}>
        <Container 
          maxWidth={false}
          disableGutters
          sx={{
            width: "100vw",
            maxWidth: "100%",
            px: { xs: 0, sm: 0, md: 0 },
            mx: 0,
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
            px: { xs: 2, sm: 3, md: 4 },
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