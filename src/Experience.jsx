import React from "react";
import Slide from "@mui/material/Slide";
import Aviarlogo from "./assets/Aviarlogo.jpg";
import { Card, Container, Box, Grid, Typography } from "@mui/material";

function Experience() {
  return (
  <Grid
  id="Experience"
  container
  sx={{
    position: "relative",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    p: 1,
    py: 4,
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      opacity: 0.95,
      zIndex: 0,
    },
  }}
>
  <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>

    {/* Title */}
    <Grid container direction="row" justifyContent="center">
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: "0.4rem",
          mb: 1,
          fontFamily: "'Roboto Mono', monospace",
          color: "#0C447C",
          textAlign: "center",
          animation: "fadeDown 0.6s ease both",
          "@keyframes fadeDown": {
            from: { opacity: 0, transform: "translateY(-16px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
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
        Experience
      </Typography>
    </Grid>

    {/* Card */}
    <Grid>
      <Card
        elevation={0}
        sx={{
          p: { md: 2, xs: 2 },
          mt: 4,
          borderRadius: "20px",
          border: "0.5px solid #B5D4F4",
          background: "#F8FAFF",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          animation: "fadeUp 0.7s cubic-bezier(.22,.68,0,1.15) 0.2s both",

          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(28px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },

          "@keyframes shimmerTop": {
            "0%": { backgroundPosition: "-200% center" },
            "100%": { backgroundPosition: "200% center" },
          },

          "@keyframes dotPulse": {
            "0%, 100%": { opacity: 1, transform: "scale(1)" },
            "50%": { opacity: 0.4, transform: "scale(0.7)" },
          },

          "@keyframes floatCard": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-4px)" },
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

          // Dot grid overlay
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #B5D4F4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.2,
            zIndex: 0,
            pointerEvents: "none",
          },

          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: "0 12px 40px rgba(55,138,221,0.14)",
            borderColor: "#85B7EB",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>

          {/* Logo */}
          <Box
            sx={{
              textAlign: "center",
              mt: 1,
              mb: 2,
              animation: "popIn 0.5s cubic-bezier(.22,.68,0,1.4) 0.4s both",
              "@keyframes popIn": {
                from: { opacity: 0, transform: "scale(0.8)" },
                to: { opacity: 1, transform: "scale(1)" },
              },
            }}
          >
            <Box
              component="img"
              alt="Aviarlogo"
              width={{ md: "20%", xs: "50%" }}
              src={Aviarlogo}
            />
          </Box>

          {/* Company name */}
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontWeight: 600,
              color: "#0C447C",
              mb: 0.5,
              animation: "fadeUp 0.6s ease 0.3s both",
            }}
          >
            Aviar Technology Service
          </Typography>

          {/* Tenure badge with live dot */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mb: 2,
              animation: "fadeUp 0.6s ease 0.4s both",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#EAF3DE",
                border: "0.5px solid #C0DD97",
                borderRadius: "20px",
                px: "12px",
                py: "4px",
                fontSize: "11px",
                color: "#3B6D11",
                fontWeight: 500,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#639922",
                  animation: "dotPulse 1.6s ease-in-out infinite",
                }}
              />
              Oct 2024 – Present · Currently Working
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #B5D4F4, transparent)",
              mx: 2,
              mb: 2.5,
            }}
          />

          <Box sx={{ px: 2, pb: 2 }}>

            {/* Body */}
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.85rem", md: "0.95rem" },
                lineHeight: 1.8,
                color: "#444441",
                mb: 2.5,
                animation: "fadeUp 0.6s ease 0.5s both",
              }}
            >
              MERN Stack Developer with hands-on experience designing and
              optimizing{" "}
              <Box
                component="span"
                sx={{ color: "#185FA5", fontWeight: 500 }}
              >
                responsive web applications
              </Box>{" "}
              using{" "}
              <Box
                component="span"
                sx={{ color: "#185FA5", fontWeight: 500 }}
              >
                React.js, React Native
              </Box>{" "}
              and JavaScript (ES6+). Skilled in crafting intuitive UIs with
              Material UI & Bootstrap, integrating{" "}
              <Box
                component="span"
                sx={{ color: "#185FA5", fontWeight: 500 }}
              >
                REST APIs
              </Box>{" "}
              via Node.js.
            </Typography>

            {/* Tags */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                animation: "fadeUp 0.6s ease 0.6s both",
              }}
            >
              {[
                { label: "React.js", type: "blue" },
                { label: "React Native", type: "blue" },
                { label: "Node.js", type: "teal" },
                { label: "REST APIs", type: "teal" },
                { label: "Material UI", type: "purple" },
                { label: "Bootstrap", type: "purple" },
                { label: "JavaScript ES6+", type: "blue" },
              ].map(({ label, type }) => (
                <Box
                  key={label}
                  sx={{
                    fontSize: "11.5px",
                    px: "12px",
                    py: "5px",
                    borderRadius: "6px",
                    fontWeight: 500,
                    color:
                      type === "blue"
                        ? "#185FA5"
                        : type === "teal"
                        ? "#0F6E56"
                        : "#534AB7",
                    background:
                      type === "blue"
                        ? "#E6F1FB"
                        : type === "teal"
                        ? "#E1F5EE"
                        : "#EEEDFE",
                    border: `0.5px solid ${
                      type === "blue"
                        ? "#B5D4F4"
                        : type === "teal"
                        ? "#9FE1CB"
                        : "#CECBF6"
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
        </Box>
      </Card>
    </Grid>
  </Box>
</Grid>
  );
}
export default Experience;
