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
import Contact from "./Contact";
import Type from "./Type";
import Type2 from "./Type2"
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
        backgroundColor: "#faf7f2",  // cream white base
      }}
    >
      {/* Fixed AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          background: "rgba(250, 247, 242, 0.88)",  // cream with transparency
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(180, 160, 130, 0.2)",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 2, sm: 3 },
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            component="div"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: "#1b095b",           // warm dark brown for name
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Preetha T
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Navbar />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main content area */}
      <Box
        sx={{
          pt: { xs: "56px", sm: "64px" },
          width: "100vw",
          maxWidth: "100vw",
          overflowX: "hidden",
          position: "relative",
          left: 0,
          right: 0,
          backgroundColor: "#eff1e2",    // cream white throughout
        }}
      >
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
            },
          }}
        >
          <Stack
            spacing={4}
            sx={{
              width: "100%",
              maxWidth: "100%",
              px: { xs: 2, sm: 3, md: 4 },
              pb: 6,
            }}
          >
            <Type/>
            <Introduction />
            <Contact/>
            <Education />
            <Experience />
            <Quotes />
            <Projects />
            <Skills />
            <Type2/>
            <Cards />
            <Strength />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default AllData;