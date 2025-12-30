import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import pattern7 from "./assets/pattern7.png";
import strength1 from "./assets/strength1.png";
const skills = [
"Problem-solving", "UI/UX focused", "Fast learner", "Team collaboration"
];
const gradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #fddb92, #d1fdff)",
  "linear-gradient(135deg, #89f7fe, #66a6ff)",
  "linear-gradient(135deg, #f6d365, #fda085)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #fccb90, #d57eeb)",
  "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
  "linear-gradient(135deg, #f093fb, #f5576c)",

];
export default function Strength() {
  return (
        <Box        
         sx={{
                position: "relative",
                backgroundImage: `url(${pattern7})`,
             
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
                  opacity: 0.9, 
                  zIndex: 0,
                },
              }}>
    <Box
      sx={{
        position: "relative", zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 4,
        mt: 4,
      }}
    >
          <Grid container direction="row" justifyContent="center">
            <Box component="img" src={strength1} sx={{ width: 30 }} alt="skill" />
  <Typography variant="h6" fontWeight="bold"    sx={{ color: "primary.main" }}>
            STRENGTH
          </Typography>
      
            </Grid>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Card
              elevation={6}
              sx={{
                width: { xs: 120, sm: 140, md: 160 },
                height: { xs: 120, sm: 140, md: 160 },
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
   background: gradients[index % gradients.length],
                color: "#fff",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                animation: `bounce 2s ${index * 0.1}s infinite`,
              }}
            >
              <CardContent sx={{ position: "relative", zIndex: 1, width: "100%" }}>
                <Typography variant="h6" color="blue">{skill}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bounce animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-15px);
            }
            60% {
              transform: translateY(-7px);
            }
          }
        `}
      </style>
    </Box>
    </Box>
  );
}
