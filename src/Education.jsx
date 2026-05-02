import React from "react";
import { Card, Typography, Box, Grid } from "@mui/material";
import education from "./assets/education.png";
import educationicon from "./assets/educationicon.png";
import pattern4 from "./assets/pattern4.png";
import education1 from "./assets/education.jpg";

function Education() {
  return (
    <Grid
      id="Education"
      container
      justifyContent="center"
      sx={{
        position: "relative",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          opacity: 0.9,
          zIndex: 0,
        },
      }}
    >
      {/* Title */}
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.6rem",
            mb: 1,
            fontFamily: "'Roboto Mono', monospace",
            background: "linear-gradient(90deg, #fff, #fafafa, #78768d, #0cfe75)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "titleGradient 6s ease infinite",
            filter: "drop-shadow(0 0 8px rgba(190, 77, 255, 0.4))",
            textAlign: "center",
          }}
        >
          Education
        </Typography>
      </Grid>

      {/* Card */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          mt: 2,
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 600, md: 700 },
            borderRadius: "16px",
            border: "1px solid rgba(56,139,253,0.22)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
            background: "linear-gradient(145deg, #414161 0%, #041747 50%)",

            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(56,139,253,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(56,139,253,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              animation: "gridMove 6s linear infinite",
              zIndex: 0,
              pointerEvents: "none",
            },

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(99,160,255,0.8) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmerTop 2.8s linear infinite",
              zIndex: 3,
            },

            "@keyframes gridMove": {
              "0%": { backgroundPosition: "0 0" },
              "100%": { backgroundPosition: "40px 40px" },
            },
            "@keyframes shimmerTop": {
              "0%": { backgroundPosition: "-200% center" },
              "100%": { backgroundPosition: "200% center" },
            },
            "@keyframes cgpaFill": {
              from: { width: 0 },
              to: { width: "89%" },
            },

            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 12px 48px rgba(56,139,253,0.18)",
            },
          }}
        >
          <Box sx={{ p: { xs: 3, md: 4 }, position: "relative", zIndex: 2 }}>

            {/* Badge */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(61, 80, 106, 0.1)",
                  border: "0.5px solid rgba(56,139,253,0.28)",
                  borderRadius: "20px",
                  px: "12px",
                  py: "3px",
                  fontSize: "11px",
                  color: "#dde3eb",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                }}
              >
                🎓 Education
              </Box>
            </Box>

            {/* College name */}
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 500,
                color: "#ddeeff",
                textAlign: "center",
                mb: 0.5,
              }}
            >
              Arunai Engineering College
            </Typography>

            {/* Degree */}
            <Typography
              sx={{
                fontSize: "0.85rem",
                color: "#f2f5f9",
                fontWeight: 500,
                textAlign: "center",
                mb: 2,
              }}
            >
              B.E — Electronics & Communication Engineering · 2019–2023
            </Typography>

            {/* Divider */}
            <Box
              sx={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(56,139,253,0.3), transparent)",
                mb: 2,
              }}
            />

            {/* CGPA row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "12px", color: "#ebeff4", letterSpacing: "0.06em" }}>
                CGPA
              </Typography>
              <Typography sx={{ fontSize: "22px", fontWeight: 500, color: "#5dd4a8" }}>
                8.9
              </Typography>
              <Box
                sx={{
                  width: "100px",
                  height: "4px",
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: "89%",
                    background: "linear-gradient(90deg, #1d9e75, #5dd4a8)",
                    borderRadius: "4px",
                    animation: "cgpaFill 1s ease 0.7s both",
                  }}
                />
              </Box>
              <Typography sx={{ fontSize: "12px", color: "#f0f4f7" }}>/ 10</Typography>
            </Box>

            {/* Body */}
            <Typography
              sx={{
                fontSize: { xs: "0.85rem", md: "0.9rem" },
                color: "#ffffff",
                lineHeight: 1.75,
                textAlign: "justify",
                mb: 2.5,
              }}
            >
              My academic journey sharpened my{" "}
              <Box component="span" sx={{ color: "#ffffff", fontWeight: 500 }}>
                analytical thinking
              </Box>{" "}
              and{" "}
              <Box component="span" sx={{ color: "#ffffff", fontWeight: 500 }}>
                problem-solving skills
              </Box>
              , building a solid foundation in core engineering principles — now driving my
              continuous growth as a developer.
            </Typography>

            {/* Tags */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
              {[
                { label: "Analytical Thinking", type: "blue" },
                { label: "Problem Solving", type: "teal" },
              ].map(({ label, type }) => (
                <Box
                  key={label}
                  sx={{
                    fontSize: "11px",
                    px: "11px",
                    py: "4px",
                    borderRadius: "6px",
                    fontWeight: 500,
                    color:
                      type === "blue" ? "#7eb8ff" : type === "teal" ? "#5dd4a8" : "#b0a9f0",
                    background:
                      type === "blue"
                        ? "rgba(56,138,253,0.11)"
                        : type === "teal"
                        ? "rgba(29,158,117,0.10)"
                        : "rgba(127,119,221,0.10)",
                    border: `0.5px solid ${
                      type === "blue"
                        ? "rgba(56,138,253,0.22)"
                        : type === "teal"
                        ? "rgba(29,158,117,0.22)"
                        : "rgba(127,119,221,0.22)"
                    }`,
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
}

export default Education;