import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import react from "./assets/react.png";
import laptop from "./assets/laptop.png";
import coding from "./assets/coding.png";
import laptop2 from "./assets/laptop2.png";
import pattern6 from "./assets/pattern6.png";

function Cards() {
  return (
    <Grid
      container
      mt={2}
      sx={{
        position: "relative",
        backgroundImage: `url(${pattern6})`,
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
      {/* Animated React Image */}
      <Box sx={{ position: "relative", zIndex: 1, width: "100%", overflow: "hidden" }}>
        <Box
          component="img"
          src={react}
          sx={{
            width: { xs: 250, sm: 350, md: 500 },
            height: { xs: 120, sm: 150, md: 250 },
            animation: "moveLeftRight 10s linear infinite",
            "@keyframes moveLeftRight": {
              "0%": {
                transform: "translateX(-100%)",
                opacity: 1,
              },
              "50%": {
                transform: "translateX(0%)",
              },
              "100%": {
                transform: "translateX(100%)",
              },
            },
          }}
        />
      </Box>

      {/* Main Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
          gap: { xs: 1, sm: 2, md: 3 },
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Quote */}
        <Typography
          variant="h6"
          fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
          sx={{
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: 0.8,
            fontSize: { 
              xs: "1rem", 
              sm: "1.3rem", 
              md: "1.8rem" 
            },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          Turning ideas into intuitive React experiences
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            maxWidth: { xs: "95%", sm: "80%", md: 500 },
            fontSize: { 
              xs: "0.85rem", 
              sm: "0.95rem", 
              md: "1.1rem" 
            },
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
            mb: { xs: 1, sm: 2, md: 3 },
          }}
        >
          Crafting responsive, scalable, and user-focused interfaces with
          modern frontend technologies.
        </Typography>

        {/* Images Grid */}
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: { xs: 1, sm: 2, md: 4 } }}
        >
          {[coding, laptop, laptop2].map((img, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={img}
                sx={{
                  width: { 
                    xs: 100, 
                    sm: 180, 
                    md: 200 
                  },
                  height: { 
                    xs: 100, 
                    sm: 180, 
                    md: 200 
                  },
                  borderRadius: index === 1 ? "50%" : "20%",
                  objectFit: "cover",
                  opacity: 0.8,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: { 
                      xs: "scale(1.03)", 
                      sm: "scale(1.05)" 
                    },
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Card Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: {md:"80%"},
            mt: { xs: 3, sm: 4, md: 5 },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          <Card
            elevation={6}
            sx={{
              width: { 
                xs: "100%", 
                sm: "90%", 
                md: "70%", 
                lg: "70%" 
              },
              maxWidth: 800,
              borderRadius: { 
                xs: "15px", 
                sm: "20px", 
                md: "30px" 
              },
              animation: "moveLeftRight 15s ease-in-out infinite alternate",
              background: "linear-gradient(135deg, #764ba2, #667eea)",
              color: "#fff",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: "linear-gradient(120deg, rgba(255,255,255,0.15), transparent)",
                opacity: 0,
                transition: "opacity 0.4s ease",
              },
              "&:hover": {
                transform: { 
                  xs: "translateY(-4px) scale(1.01)", 
                  sm: "translateY(-8px) scale(1.02)" 
                },
                boxShadow: "0px 15px 30px rgba(0,0,0,0.25)",
              },
              "&:hover::before": {
                opacity: 1,
              },
            }}
          >
            <CardContent 
              sx={{ 
                textAlign: "center", 
                py: { xs: 3, sm: 4, md: 4 },
                px: { xs: 2, sm: 3, md: 3 }
              }}
            >
              <Typography
                variant="h5"
                fontWeight={{md:"bold",xs:"bold",sm:"bold"}}
                gutterBottom
                sx={{
                     fontSize: { 
                    xs: "0.85rem", 
                    sm: "0.95rem", 
                    md: "1.2rem" 
                  },
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                  animation: `jumpOnce 0.6s ease forwards`,
                  animationDelay: `${0.05}s`,
                  "@keyframes jumpOnce": {
                    "0%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                    "100%": { transform: "translateY(0)" },
                  },
                }}
              >
                Small components make powerful applications.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  opacity: 0.9,
                  mt: { xs: 1, sm: 2, md: 3 },
                  fontSize: { 
                    xs: "0.85rem", 
                    sm: "0.95rem", 
                    md: "1rem" 
                  },
                  lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                }}
              >
                MERN Stack Developer • UI/UX Focused • Performance Driven
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Grid>
  );
}

export default Cards;