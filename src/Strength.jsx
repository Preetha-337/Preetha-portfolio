import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import ExtensionIcon from '@mui/icons-material/Extension';
import PaletteIcon from '@mui/icons-material/Palette';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupsIcon from '@mui/icons-material/Groups';

const skills = [
  { name: "Problem-solving", icon: <ExtensionIcon sx={{ fontSize: 40 }} />, color: "#ff4d4d", delay: "0s" },
  { name: "UI/UX Focused", icon: <PaletteIcon sx={{ fontSize: 40 }} />, color: "#4d94ff", delay: "0.5s" },
  { name: "Fast Learner", icon: <BoltIcon sx={{ fontSize: 40 }} />, color: "#be4dff", delay: "1s" },
  { name: "Team Collaboration", icon: <GroupsIcon sx={{ fontSize: 40 }} />, color: "#4dff88", delay: "1.5s" }
];

export default function Strength() {
  return (
    <Box
      sx={{
     
        backgroundImage: `linear-gradient(rgba(25, 25, 60, 0.4) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(25, 25, 60, 0.4) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        overflow: "hidden"
      }}
    >
      {/* Animation Definitions */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulseGlow {
            0% { box-shadow: 0 0 10px rgba(var(--rgb), 0.3); }
            50% { box-shadow: 0 0 25px rgba(var(--rgb), 0.7); }
            100% { box-shadow: 0 0 10px rgba(var(--rgb), 0.3); }
          }
        `}
      </style>

    <Box>
  <style>
    {`
      @keyframes titleGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>
  
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      letterSpacing: "0.6rem",
      mb: 10,
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
    STRENGTH
  </Typography>
</Box>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1100 }}>
        {skills.map((skill, index) => {
          // Convert hex to RGB for the CSS variable pulse
          const r = parseInt(skill.color.slice(1, 3), 16);
          const g = parseInt(skill.color.slice(3, 5), 16);
          const b = parseInt(skill.color.slice(5, 7), 16);

          return (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  "--rgb": `${r}, ${g}, ${b}`,
                  height: 220,
                  backgroundColor: "rgba(10, 10, 25, 0.9)",
                  border: `1.5px solid ${skill.color}`,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  opacity:0.7,
                  // Applying the animations from the video
                  animation: `float 4s ease-in-out infinite, pulseGlow 3s ease-in-out infinite`,
                  animationDelay: `${skill.delay}, ${skill.delay}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(20, 20, 40, 1)",
                    transform: "scale(1.05) !important", 
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Box sx={{ color: skill.color, mb: 2, filter: `drop-shadow(0 0 8px ${skill.color})` }}>
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "0.9rem",
                      textTransform: "uppercase"
                    }}
                  >
                    {skill.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}