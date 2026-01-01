import React from "react";
import { Card, Typography, Box, Grid } from "@mui/material";
import education from "./assets/education.png";
import { Gradient } from "@mui/icons-material";
import educationicon from "./assets/educationicon.png";
import pattern4 from "./assets/pattern4.png";
function Education() {
  return (
    <Grid
      id="Education"
      container
      sx={{
        position: "relative",
        backgroundImage: `url(${pattern4})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
          opacity: 0.9,
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          ml={{md:60,xs:25}}
          justifyContent="space-between"
        >
        <Grid item>
  <Grid
    container
    direction="row"
    spacing={1}
    justifyContent={{ xs: "center", md: "flex-start" }}
    sx={{
      ml: { xs: -14, md: 0,sm:8 }, 
    }}
  >
    <Grid item>
      <Box
        component="img"
        src={educationicon}
        alt="education"
        sx={{ width: {xs:30,md:40}, height: {xs:30,md:40} }}
      />
    </Grid>

    <Grid item>
      <Typography
        variant="h6"
       fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
        sx={{
          color: "primary.main",
          textAlign: { xs: "center", md: "left" },
          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" } 
        }}
      >
        EDUCATION
      </Typography>
    </Grid>
  </Grid>
</Grid>


          <Grid item>
            <Box
              component="img"
              src={education}
              alt="education"
              sx={{
                width: {xs:80,md:120},
                height: {xs:80,md:120},
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>

        <Card
          elevation={4}
          sx={{
            mt: 2,
            ml: { md: 2, xs: 1 },
            width: { md: "98%", xs: "97%" },
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 10,
            },
          }}
        >
          <Box sx={{ p: 3 }}>
     <Typography 
  variant="subtitle1" 
 fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
  sx={{  
    fontSize: { 
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1rem"
    },
    textAlign: { xs:  "center", md: "center" } 
  }}
>
  Arunai Engineering College  - (2019-2023)
</Typography>

<Typography 
  variant="subtitle1" 
fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
  sx={{   
    fontSize: { 
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1rem"
    },
    textAlign: { xs:  "center", md: "center" } 
  }}
>
  B.E- Electronics and Communication Engineering
</Typography>

<Typography 
  variant="subtitle1" 
 fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
  sx={{   
    fontSize: { 
      xs: "0.9rem",
      sm: "0.9rem",
      md: "1rem"
    },
    textAlign: { xs: "center", md: "center" } // Left on mobile, center on desktop
  }}
>
  CGPA: 8.9
</Typography>
         <Typography
  sx={{
    textAlign: "justify",
    fontSize: {
      xs: "0.85rem",
      sm: "0.9rem",
      md: "1rem",
    },
    lineHeight: { xs: 1.5, md: 1.6 },

    // 🔧 Fix word spacing issue on mobile
    wordSpacing: { xs: "-0.05em", sm: "normal" },
    textJustify: "inter-word",
    hyphens: "auto",
  }}
>
  My academic journey strengthened my analytical thinking,
  problem-solving abilities, and understanding of core engineering
  principles. The strong academic foundation I gained has helped me
  develop a disciplined and detail-oriented approach to learning and
  technology. This background supports my continuous growth.
</Typography>

          </Box>
        </Card>
      </Box>
    </Grid>
  );
}
export default Education;
