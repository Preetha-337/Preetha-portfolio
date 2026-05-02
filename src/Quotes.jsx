import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function Quotes() {
  const quotes = [
    "Code. Debug. Learn. Repeat.",
    "Every bug is a lesson in disguise.",
    "Build once, reuse everywhere.",
    "Learning React, one component at a time.",
  ];

  const quoteStyles = [
    {
      bg: "#F8FAFF",
      border: "#B5D4F4",
      color: "#185FA5",
      ringColor: "#85B7EB",
      quoteMarkColor: "#378ADD",
      glow: "rgba(55,138,221,0.12)",
      delay: "0s",
    },
    {
      bg: "#F3F9EC",
      border: "#9FE1CB",
      color: "#0F6E56",
      ringColor: "#5DCAA5",
      quoteMarkColor: "#1D9E75",
      glow: "rgba(29,158,117,0.12)",
      delay: "0.5s",
    },
    {
      bg: "#F5F3FF",
      border: "#CECBF6",
      color: "#534AB7",
      ringColor: "#AFA9EC",
      quoteMarkColor: "#7F77DD",
      glow: "rgba(127,119,221,0.12)",
      delay: "1s",
    },
    {
      bg: "#FFF8F0",
      border: "#FAC775",
      color: "#854F0B",
      ringColor: "#EF9F27",
      quoteMarkColor: "#BA7517",
      glow: "rgba(186,117,23,0.12)",
      delay: "1.5s",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 3, md: 4 },
        my: { xs: 2, md: 3 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        {quotes.map((quote, index) => {
          const s = quoteStyles[index];
          return (
            <Grid
              item
              key={index}
              xs={6}
              sm={4}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  animation: `fadeUp 0.5s ease ${s.delay} both`,
                  "@keyframes fadeUp": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                {/* Spinning dashed ring */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: "-8px",
                    borderRadius: "50%",
                    border: `1.5px dashed ${s.ringColor}`,
                    opacity: 0.5,
                    animation: "spinRing 12s linear infinite",
                    pointerEvents: "none",
                    "@keyframes spinRing": {
                      from: { transform: "rotate(0deg)" },
                      to: { transform: "rotate(360deg)" },
                    },
                  }}
                />

                {/* Counter spinning inner ring */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "50%",
                    border: `1px dotted ${s.border}`,
                    opacity: 0.6,
                    animation: "spinRingReverse 18s linear infinite",
                    pointerEvents: "none",
                    "@keyframes spinRingReverse": {
                      from: { transform: "rotate(360deg)" },
                      to: { transform: "rotate(0deg)" },
                    },
                  }}
                />

                {/* Circle */}
                <Box
                  sx={{
                    width: { xs: 110, sm: 120, md: 148 },
                    height: { xs: 110, sm: 120, md: 148 },
                    borderRadius: "50%",
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    boxShadow: `0 8px 28px ${s.glow}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: { xs: 1.5, sm: 2, md: 2.5 },
                    position: "relative",
                    overflow: "hidden",
                    animation: `floatBall 4s ease-in-out ${s.delay} infinite`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow: `0 14px 36px ${s.glow}`,
                      borderColor: s.ringColor,
                    },

                    // Subtle inner shine
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "8%",
                      left: "12%",
                      width: "40%",
                      height: "28%",
                      background: "rgba(255,255,255,0.55)",
                      borderRadius: "50%",
                      filter: "blur(5px)",
                      pointerEvents: "none",
                    },

                    "@keyframes floatBall": {
                      "0%, 100%": { transform: "translateY(0px)" },
                      "50%": { transform: "translateY(-7px)" },
                    },
                  }}
                >
                  {/* Big quote mark */}
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "8px",
                      left: "14px",
                      fontSize: "36px",
                      opacity: 0.18,
                      color: s.quoteMarkColor,
                      fontFamily: "Georgia, serif",
                      lineHeight: 1,
                      fontWeight: "bold",
                    }}
                  >
                    "
                  </Typography>

                  <Typography
                    sx={{
                      color: s.color,
                      fontWeight: 600,
                      fontSize: { xs: "0.68rem", sm: "0.78rem", md: "0.83rem" },
                      lineHeight: { xs: 1.35, md: 1.5 },
                      position: "relative",
                      zIndex: 1,
                      letterSpacing: "0.01em",
                    }}
                  >
                    "{quote}"
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Quotes;