import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import react from "./assets/react.png";
import laptop from "./assets/laptop.png";
import coding from "./assets/coding.png";
import laptop2 from "./assets/laptop2.png";
import pattern6 from "./assets/pattern6.png"
function Cards(){
return(
<>
<Grid   container
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
     }}>
        <Box   sx={{ position: "relative", zIndex: 1, width: "100%" }}    >
<Box
  component="img"
  src={react}

  sx={{
    width: { xs: 300, sm: 320, md: 500 },
    height: { xs: 150, sm: 150, md: 250 },
         overflow: "hidden", 
    animation: "moveLeftRight 5s linear infinite",

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
<Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
             position: "relative", zIndex: 1, width: "100%", 
              gap: 2,
              px: 2, // padding for small screens
              my: 3, // margin top/bottom
            }}
          >
            {/* Quote */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{


                background: "linear-gradient(90deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: 0.8,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, // responsive font
              }}
            >
              Turning ideas into intuitive React experiences
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                maxWidth: { xs: "90%", sm: 400, md: 500 }, // responsive width
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Crafting responsive, scalable, and user-focused interfaces with
              modern frontend technologies.
            </Typography>

            {/* Image */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                mt: 4,
              }}
            >
              <Box
                component="img"
                src={coding}
            
                sx={{
                  width: { xs: 200, sm: 250, md: 200 },
                  height: { xs: 200, sm: 250, md: 200 },
                  borderRadius: "20%",
                  objectFit: "cover",
                  opacity: 0.8,
                  mt: 2,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <Box
                component="img"
                src={laptop}
              
                sx={{
                  width: { xs: 200, sm: 250, md: 200 },
                  height: { xs: 200, sm: 250, md: 200 },
                  borderRadius: "50%",
                  objectFit: "cover",
                  opacity: 0.8,
                  mt: 2,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                       "@keyframes slideIn": {
      "0%": { transform: "translateX(-100%)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
                  },
                }}
              />
                            <Box
                component="img"
                src={laptop2}
             
                sx={{
                  width: { xs: 200, sm: 250, md: 200 },
                  height: { xs: 200, sm: 250, md: 200 },
                  borderRadius: "20%",
                  objectFit: "cover",
                  opacity: 0.8,
                  mt: 2,
                  boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                       "@keyframes slideIn": {
      "0%": { transform: "translateX(-100%)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
                  },
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              ml:35
            }}
          >
            <Card
              elevation={6}
              sx={{
                display:"flex",
                width: { xs: "100%", md: "100%" },
                borderRadius: "10%",
                                                  animation: "moveLeftRight 15s ease-in-out infinite alternate",
               justifyContent: "center",
                background: "linear-gradient(135deg,  #764ba2, #764ba2)",
                color: "#fff",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.15), transparent)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                },

                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                },

                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >
              <CardContent sx={{ textAlign: "center", py: 6 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
  
                    display: "inline-block",
                    transform: "translateY(0)",
                    animation: `jumpOnce 0.6s ease forwards`,
                    animationDelay: `${0.05}s`,
                    "@keyframes jumpOnce": {
                      "0%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-10px)" },
                      "100%": { transform: "translateY(0)" }, // final position stays
                    },
                  }}
                >
Small components make powerful applications.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.9,
                    mt: 2,
                    fontSize: "1rem",
                  }}
                >
                  Frontend React Developer • UI/UX Focused • Performance Driven
                </Typography>
              </CardContent>
            </Card>
          </Box>
</Grid>

          </>
)
}
export default Cards