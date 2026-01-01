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
        <Typography variant="h6" fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
            sx={{ color: "primary.main",fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" }  }}>
          EXPERIENCE
        </Typography>
      </Grid>
      <Grid>

        <Card
          elevation={4}
          sx={{
            p: {md:2,xs:2},
            mt: 7,
             
                  fontSize: { 
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1rem"
    },
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 10,
              
            },
          }}
        > 
        <Box    sx={{  textAlign: { xs:  "center", md: "center" }}}>
        <Box component="img"
             alt="Aviarlogo"
            width={{md:"20%",xs:"50%"}}
             src={Aviarlogo}/>
             </Box>
          <Typography variant="subtitle1" fontWeight={{md:"bold",xs:"bold",sm:"bold"}} sx={{    textAlign: { xs:  "center", md: "center" } , fontSize: { 
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1rem"
    },}}>
            Aviar Technology Service | Oct 2024 – Present
          </Typography>

          <Box sx={{ p: 2 }}>
             <Typography 
                                      sx={{
    textAlign: "justify",
    fontSize: {
      xs: "0.85rem",
      sm: "0.9rem",
      md: "1rem",
    },
    lineHeight: { xs: 1.5, md: 1.6 },

  
    wordSpacing: { xs: "-0.05em", sm: "normal" },
    textJustify: "inter-word",
    hyphens: "auto",
  }}
                                      >
            Frontend Developer with hands-on experience in
            designing, developing, and optimizing responsive web applications
            using React.js, React Native, JavaScript (ES6+), HTML5, CSS3,
            Bootstrap, and Material UI. Skilled at creating intuitive user
            interfaces, integrating REST APIs, and ensuring seamless
            cross-device experiences.
            </Typography>
          </Box>
        </Card>
  
      </Grid>
      </Box>
    </Grid>
  );
}
export default Experience;
