import React from "react";
import Slide from "@mui/material/Slide";
import Aviarlogo from "./assets/Aviarlogo.png";
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
        backgroundImage: `url(${pattern5})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        p:1,
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          p:3,
                //  background: "linear-gradient(135deg, #e9d5ff, #e9d5ff)",
           background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
          opacity: 0.95,          // ✅ controls image transparency
          zIndex: 0,
        },
      }}
    >
       <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
      <Grid container direction="row" justifyContent="center">
        <Box component="img" src={experience} sx={{ width: 35 }} alt="skill" />
        <Typography variant="h6" fontWeight="bold"    sx={{ color: "primary.main" }}>
          EXPERIENCE
        </Typography>
      </Grid>
      <Grid>

        <Card
          elevation={4}
          sx={{
            p: 3,
            mt: 7,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 10,
            },
          }}
        > 
        <Box component="img"
             alt="Aviarlogo"
             src={Aviarlogo}/>
          <Typography variant="subtitle1" fontWeight="bold">
            Aviar Technology Service | Oct 2024 – Present
          </Typography>

          <Box sx={{ p: 3 }}>
            Results-driven Frontend Developer with hands-on experience in
            designing, developing, and optimizing responsive web applications
            using React.js, React Native, JavaScript (ES6+), HTML5, CSS3,
            Bootstrap, and Material UI. Skilled at creating intuitive user
            interfaces, integrating REST APIs, and ensuring seamless
            cross-device experiences.
          </Box>
        </Card>
  
      </Grid>
      </Box>
    </Grid>
  );
}
export default Experience;
