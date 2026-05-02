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
      bg: "linear-gradient(135deg, #3b0a1e, #6b1535, #4a0d28)",
      border: "rgba(244,63,94,0.3)",
      color: "#fda4af",
      glow: "rgba(244,63,94,0.22)",
      delay: "0s",
    },
    {
      bg: "linear-gradient(135deg, #2e1a00, #5c3500, #3d2200)",
      border: "rgba(251,146,60,0.3)",
      color: "#fdba74",
      glow: "rgba(251,146,60,0.2)",
      delay: "0.5s",
    },
    {
      bg: "linear-gradient(135deg, #1e0a3b, #3d1470, #280a52)",
      border: "rgba(167,139,250,0.3)",
      color: "#c4b5fd",
      glow: "rgba(167,139,250,0.2)",
      delay: "1s",
    },
    {
      bg: "linear-gradient(135deg, #001e2e, #00365a, #002040)",
      border: "rgba(34,211,238,0.28)",
      color: "#67e8f9",
      glow: "rgba(34,211,238,0.18)",
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
                    inset: "-6px",
                    borderRadius: "50%",
                    border: "1.5px dashed rgba(255,255,255,0.1)",
                    animation: "spinRing 12s linear infinite",
                    pointerEvents: "none",
                    "@keyframes spinRing": {
                      from: { transform: "rotate(0deg)" },
                      to: { transform: "rotate(360deg)" },
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
                    backgroundSize: "200% 200%",
                    border: `1px solid ${s.border}`,
                    boxShadow: `0 10px 30px ${s.glow}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: { xs: 1.5, sm: 2, md: 2.5 },
                    position: "relative",
                    overflow: "hidden",
                    animation: `floatBall 4s ease-in-out ${s.delay} infinite`,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.08)" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "8%",
                      left: "12%",
                      width: "40%",
                      height: "30%",
                      background: "rgba(255,255,255,0.09)",
                      borderRadius: "50%",
                      filter: "blur(4px)",
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
                      top: "10px",
                      left: "16px",
                      fontSize: "32px",
                      opacity: 0.12,
                      color: "#fff",
                      fontFamily: "Georgia, serif",
                      lineHeight: 1,
                    }}
                  >
                    "
                  </Typography>

                  <Typography
                    sx={{
                      color: s.color,
                      fontWeight: "bold",
                      fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem" },
                      lineHeight: { xs: 1.3, md: 1.45 },
                      position: "relative",
                      zIndex: 1,
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