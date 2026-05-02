import React from "react";
import Slide from "@mui/material/Slide";
import Aviarlogo from "./assets/Aviarlogo.jpg";
import { Card, Container, Box, Grid, Typography } from "@mui/material";
import pattern5 from "./assets/pattern5.png";
import experience from "./assets/experience.png";
function Experience() {
  return (
    <Grid
      id="Experience"
      container
      sx={{
        position: "relative",
        // backgroundImage: `url(${pattern5})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        p: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          p: 3,
          //  background: "linear-gradient(135deg, #e9d5ff, #e9d5ff)",
          // background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
          opacity: 0.95, // ✅ controls image transparency
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Grid container direction="row" justifyContent="center">
          {/* <Box
            component="img"
            src={experience}
            sx={{ width: 35 }}
            alt="skill"
          /> */}
           <Typography
             variant="h4"
             sx={{
               fontWeight: "bold",
               letterSpacing: "0.6rem",
               mb: 1,
               fontFamily: "'Roboto Mono', monospace",
               
               /* Gradient Text Effect */
               background: "linear-gradient(90deg, #fff, #fafafa, #78768d, #0cfe75)",
               backgroundSize: "300% 300%",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
               
               /* Animation */
               animation: "titleGradient 6s ease infinite",
               
               /* Glow */
               filter: "drop-shadow(0 0 8px rgba(190, 77, 255, 0.4))",
               textAlign: "center"
             }}
           >
           EXPERIENCE
           </Typography>
        </Grid>
        <Grid>
      <Card
  elevation={0}
  sx={{
    p: { md: 2, xs: 2 },
    mt: 7,
    borderRadius: "18px",
    border: "1px solid rgba(99,140,255,0.18)",
    position: "relative",
    overflow: "hidden",
 background: "linear-gradient(135deg, #d639b4 0%, #1a7448 35%, #2a34a4 65%, #021510 100%)",
    backgroundSize: "300% 300%",
    transition: "all 0.3s ease-in-out",

    "@keyframes waveShift": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
    "@keyframes shimmerTop": {
      "0%": { backgroundPosition: "-200% center" },
      "100%": { backgroundPosition: "200% center" },
    },
    "@keyframes floatCard": {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-5px)" },
    },
    "@keyframes dotPulse": {
      "0%, 100%": { opacity: 1, transform: "scale(1)" },
      "50%": { opacity: 0.4, transform: "scale(0.7)" },
    },

    animation: "waveShift 8s ease infinite, floatCard 5s ease-in-out 1.2s infinite",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0, left: 0, right: 0,
      height: "2px",
      background: "linear-gradient(90deg, transparent, rgba(99,140,255,0.7), #a78bfa, transparent)",
      backgroundSize: "200% 100%",
      animation: "shimmerTop 2.5s linear infinite",
      zIndex: 3,
    },

    "&:hover": {
      boxShadow: "0 16px 48px rgba(99,120,255,0.15)",
    },
  }}
>
  {/* Logo */}
  <Box sx={{ textAlign: "center", mt: 1, mb: 2 }}>
    <Box
      component="img"
      alt="Aviarlogo"
      width={{ md: "20%", xs: "50%" }}
      src={Aviarlogo}
      sx={{ animation: "logoFadeIn 0.5s ease 0.2s both", "@keyframes logoFadeIn": { from: { opacity: 0, transform: "scale(0.88)" }, to: { opacity: 1, transform: "scale(1)" } } }}
    />
  </Box>

  {/* Company */}
  <Typography sx={{ textAlign: "center", fontSize: { xs: "0.95rem", md: "1rem" }, fontWeight: 500, color: "#e4e1f8", mb: 0.5 }}>
    Aviar Technology Service
  </Typography>

  {/* Tenure badge with live dot */}
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 2 }}>
    <Box sx={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "dotPulse 1.6s ease-in-out infinite" }} />
    <Typography sx={{ fontSize: "12px", color: "#d1d1f1", fontWeight: 500 }}>
      Oct 2024 – Present · Currently Working
    </Typography>
  </Box>

  {/* Divider */}
  <Box sx={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(120,100,255,0.2), transparent)", mx: 2, mb: 2 }} />

  <Box sx={{ px: 2, pb: 2 }}>
    {/* Body */}
    <Typography sx={{ textAlign: "justify", fontSize: { xs: "0.85rem", md: "0.9rem" }, lineHeight: 1.78, color: "#ffffff", mb: 2.5 }}>
      MERN Stack Developer with hands-on experience designing and optimizing{" "}
      <Box component="span" sx={{ color: "#d2cff8", fontWeight: 500 }}>responsive web applications</Box>{" "}
      using <Box component="span" sx={{ color: "#dcdbf3", fontWeight: 500 }}>React.js, React Native</Box> and JavaScript (ES6+).
      Skilled in crafting intuitive UIs with Material UI & Bootstrap, integrating{" "}
      <Box component="span" sx={{ color: "#dbdae8", fontWeight: 500 }}>REST APIs</Box> via Node.js.
    </Typography>

    {/* Tags */}
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {[
        { label: "React.js", type: "indigo" },
        { label: "React Native", type: "indigo" },
        { label: "Node.js", type: "sky" },
        { label: "REST APIs", type: "sky" },
        { label: "Material UI", type: "violet" },
        { label: "Bootstrap", type: "violet" },
        { label: "JavaScript ES6+", type: "indigo" },
      ].map(({ label, type }) => (
        <Box key={label} sx={{
          fontSize: "11px", px: "11px", py: "4px", borderRadius: "6px", fontWeight: 500,
          color: type === "indigo" ? "#d4d1f4" : type === "violet" ? "#eae5f3" : "#e7e9ed",
          background: type === "indigo" ? "rgba(99,102,241,0.1)" : type === "violet" ? "rgba(139,92,246,0.1)" : "rgba(56,139,253,0.1)",
          border: `0.5px solid ${type === "indigo" ? "rgba(99,102,241,0.22)" : type === "violet" ? "rgba(139,92,246,0.22)" : "rgba(56,139,253,0.2)"}`,
        }}>
          {label}
        </Box>
      ))}
    </Box>
  </Box>
</Card>
        </Grid>
      </Box>
    </Grid>
  );
}
export default Experience;
