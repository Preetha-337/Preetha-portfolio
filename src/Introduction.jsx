import React from "react";
import { Button, Box, Typography, Card, Grid } from "@mui/material";
import MERN from "./assets/MERN.jpg";
import resume from "./assets/Preetha T_Resume.pdf";

function Introduction() {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      sx={{
        mt: 3,
        px: { xs: 2, sm: 3, md: 6 },
        flexWrap: "nowrap",     
        overflowX: "auto",        
      }}
    >
       {/* 🔹 CARD */}
      <Grid item sx={{ minWidth: "300px", flex: 1 }}>
        <Card
          elevation={0}
          sx={{
            p: { xs: 2.5, md: 5 },
            background: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
            border: "0.5px solid #B5D4F4",
            height: "100%",
            transition: "0.3s",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#0C447C", fontWeight: 600, mb: 2 }}
          >
            MERN Stack Developer
          </Typography>

       <Typography
  sx={{
    mb: 3,
    color: "#444",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  }}
>
  Crafting high-performance, scalable interfaces with React & JavaScript — backed by a full MERN stack foundation. I build clean, responsive UI and efficient backend systems. 

  I focus on writing maintainable code, reusable components, and delivering seamless user experiences. With hands-on experience in MongoDB, Express.js, React, and Node.js, I develop end-to-end web applications that are both user-friendly and performance-driven. 

  I am passionate about learning new technologies, improving problem-solving skills, and building real-world projects that make an impact.
</Typography>

          {/* 🔥 BUTTON */}
          <Button
            variant="contained"
            href={resume}
            download
            sx={{
              background: "#378ADD",
              textTransform: "none",
              borderRadius: "10px",
              px: 3,
              width: "fit-content",

              "&:hover": {
                background: "#2f73c9",
              },
            }}
          >
            Download Resume
          </Button>
        </Card>
      </Grid>
      <Grid item sx={{ minWidth: "300px", flex: 1 }}>
        <Box
          component="img"
          src={MERN}
          alt="MERN"
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
          }}
        />
      </Grid>

     
    </Grid>
  );
}

export default Introduction;