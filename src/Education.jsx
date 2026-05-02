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
    py: 4,
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
        fontWeight: 700,
        letterSpacing: "0.4rem",
        mb: 1,
        fontFamily: "'Roboto Mono', monospace",
        color: "#0C447C",
        textAlign: "center",
        position: "relative",
        animation: "fadeDown 0.6s ease both",
        "@keyframes fadeDown": {
          from: { opacity: 0, transform: "translateY(-16px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        // Underline accent
        "&::after": {
          content: '""',
          display: "block",
          margin: "8px auto 0",
          width: "48px",
          height: "3px",
          borderRadius: "2px",
          background: "#378ADD",
        },
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
      mt: 3,
    }}
  >
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 600, md: 700 },
        borderRadius: "20px",
        border: "0.5px solid #B5D4F4",
        background: "#F8FAFF",
        position: "relative",
         boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        animation: "fadeUp 0.7s cubic-bezier(.22,.68,0,1.15) 0.2s both",

        "@keyframes fadeUp": {
          from: { opacity: 0, transform: "translateY(28px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },

        // Top shimmer line
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #378ADD 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmerTop 2.8s linear infinite",
          zIndex: 3,
        },

        // Subtle dot grid overlay
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, #B5D4F4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: "none",
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
          boxShadow: "0 12px 40px rgba(55,138,221,0.14)",
          borderColor: "#85B7EB",
        },
      }}
    >
      <Box sx={{ p: { xs: 3, md: 4 }, position: "relative", zIndex: 2 }}>

        {/* Badge */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2.5 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#E6F1FB",
              border: "0.5px solid #B5D4F4",
              borderRadius: "20px",
              px: "14px",
              py: "5px",
              fontSize: "11px",
              color: "#185FA5",
              letterSpacing: "0.08em",
              fontWeight: 500,
              animation: "popIn 0.5s cubic-bezier(.22,.68,0,1.4) 0.4s both",
              "@keyframes popIn": {
                from: { opacity: 0, transform: "scale(0.8)" },
                to: { opacity: 1, transform: "scale(1)" },
              },
            }}
          >
            🎓 Education
          </Box>
        </Box>

        {/* College name */}
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.15rem" },
            fontWeight: 600,
            color: "#0C447C",
            textAlign: "center",
            mb: 0.5,
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          Arunai Engineering College
        </Typography>

        {/* Degree */}
        <Typography
          sx={{
            fontSize: "0.85rem",
            color: "#5F5E5A",
            fontWeight: 400,
            textAlign: "center",
            mb: 2.5,
            animation: "fadeUp 0.6s ease 0.4s both",
          }}
        >
          B.E — Electronics & Communication Engineering · 2019–2023
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #B5D4F4, transparent)",
            mb: 2.5,
          }}
        />

        {/* CGPA row */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
            mb: 3,
            animation: "fadeUp 0.6s ease 0.5s both",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#5F5E5A",
              letterSpacing: "0.06em",
              fontWeight: 500,
            }}
          >
            CGPA
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#0F6E56",
            }}
          >
            8.9
          </Typography>
          <Box
            sx={{
              width: "100px",
              height: "5px",
              background: "#E1F5EE",
              borderRadius: "4px",
              overflow: "hidden",
              border: "0.5px solid #9FE1CB",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "89%",
                background: "linear-gradient(90deg, #1D9E75, #5DCAA5)",
                borderRadius: "4px",
                animation: "cgpaFill 1.2s ease 0.9s both",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "12px", color: "#888780" }}>
            / 10
          </Typography>
        </Box> */}

        {/* Body */}
        <Typography
          sx={{
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            color: "#444441",
            lineHeight: 1.8,
            textAlign: "justify",
            mb: 3,
            animation: "fadeUp 0.6s ease 0.6s both",
          }}
        >
          My academic journey sharpened my{" "}
          <Box component="span" sx={{ color: "#185FA5", fontWeight: 500 }}>
            analytical thinking
          </Box>{" "}
          and{" "}
          <Box component="span" sx={{ color: "#185FA5", fontWeight: 500 }}>
            problem-solving skills
          </Box>
          , building a solid foundation in core engineering principles — now
          driving my continuous growth as a developer.
        </Typography>

        {/* Tags */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
            animation: "fadeUp 0.6s ease 0.7s both",
          }}
        >
          {[
            { label: "Analytical Thinking", type: "blue" },
            { label: "Problem Solving", type: "teal" },
          ].map(({ label, type }) => (
            <Box
              key={label}
              sx={{
                fontSize: "11.5px",
                px: "12px",
                py: "5px",
                borderRadius: "6px",
                fontWeight: 500,
                color: type === "blue" ? "#185FA5" : "#0F6E56",
                background: type === "blue" ? "#E6F1FB" : "#E1F5EE",
                border: `0.5px solid ${
                  type === "blue" ? "#B5D4F4" : "#9FE1CB"
                }`,
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                },
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