import React from "react";
import { Button, Box, Typography, Card, Grid } from "@mui/material";
import Frontend from "./assets/frontend.png";
import pattern3 from "./assets/pattern3.png";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resume from "./assets/Preetha T_Resume.pdf";

function Introduction() {
  return (
    <Grid
      id="about"
      container
      sx={{
        position: "relative",
        // backgroundImage: `url(${pattern3})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        mt: 3,
        px: { xs: 2, sm: 3, md: 0 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          // background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
          opacity: 0.97,
          zIndex: 0,
        },
      }}
    >
     
      {/* Main Content Section */}
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        sx={{
          position: "relative",
          zIndex: 1,
          mt: { xs: 2, md: 2 },
          px: { xs: 1, sm: 2, md: 0 },
        }}
      >
        {/* Main Container - This arranges left cards column and right image column */}
        <Grid
          container
          item
          xs={12}
          md={10}
          lg={8}
          spacing={3}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
          }}
        >
          {/* Left Column - Two Cards stacked vertically */}
          <Grid
            item
            xs={12}
            md={6}
            gap={5}
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            {/* About Text Card */}
        <Card
  elevation={0}
  sx={{
    width: { xs: "100%", md: "50%" },
    p: { xs: 3, sm: 3, md: 5 },
    opacity:0.1,
    background: "linear-gradient(145deg, #28047b 0%, #190361 100%)",
    color: "#fff",
    borderRadius: "20px",
    border: "1px solid rgba(56,139,253,0.2)",
    position: "relative",
    overflow: "hidden",
    animation: "fadeUp 0.7s cubic-bezier(.22,.68,0,1.15) both",
    "@keyframes fadeUp": {
      from: { opacity: 0, transform: "translateY(24px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-4px)" },
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0, left: 0, right: 0,
      height: "1px",
      background: "linear-gradient(90deg, transparent 0%, rgba(99,160,255,0.7) 50%, transparent 100%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 2.5s linear infinite",
    },
    "@keyframes shimmer": {
      "0%": { backgroundPosition: "-200% center" },
      "100%": { backgroundPosition: "200% center" },
    },
    "&:hover": {
      transform: { xs: "none", md: "scale(1.02)" },
      boxShadow: "0 12px 40px rgba(56,139,253,0.18)",
    },
    transition: "all 0.3s ease-in-out",
  }}
>
  {/* Available badge */}
  <Box sx={{
    display: "inline-flex", alignItems: "center", gap: "6px",
    background: "rgba(56,139,253,0.12)",
    border: "0.5px solid rgba(56,139,253,0.3)",
    borderRadius: "20px", px: "12px", py: "4px",
    fontSize: "11px", color: "#ebeff3", letterSpacing: "0.08em",
    fontWeight: 500, mb: 2,
  }}>
    <Box sx={{ width: 5, height: 5, borderRadius: "50%", background: "#e3e8ef" }} />
    Available for opportunities
  </Box>

  {/* Heading */}
  <Typography variant="h5" sx={{ color: "#e8f1ff", fontWeight: 500, mb: 0.75 }}>
    MERN Stack Developer
  </Typography>

  {/* Accent line */}
  <Box sx={{
    height: "2px", width: "48px", mb: 2.5,
    background: "linear-gradient(90deg, #3b8eff, #7eb8ff, transparent)",
    borderRadius: "2px",
  }} />

  {/* Body text */}
  <Typography sx={{
    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
    lineHeight: 1.75, color: "#edf0f2", mb: 3,
  }}>
    Crafting <Box component="span" sx={{ color: "#f3f5f8", fontWeight: 500 }}>
      high-performance, scalable interfaces
    </Box> with React & JavaScript — backed by a full MERN stack foundation. I specialise in{" "}
    <Box component="span" sx={{ color: "#fafcfe", fontWeight: 500 }}>
      component architecture, Redux state management
    </Box>, and pixel-precise UI using Material-UI, Tailwind CSS, and Bootstrap.
  </Typography>

  {/* Tags */}
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
    {["React", "JavaScript", "Node.js", "MongoDB", "Tailwind CSS", "Redux", "Material-UI"].map((tag, i) => (
      <Box key={tag} sx={{
        fontSize: "11.5px", px: "12px", py: "5px", borderRadius: "6px",
        fontWeight: 500, color: i < 3 ? "#ffffff" : i < 5 ? "#f0f3f2" : "#eeedf4",
        background: i < 3 ? "rgba(56,138,253,0.13)" : i < 5 ? "rgba(29,158,117,0.12)" : "rgba(127,119,221,0.12)",
        border: `0.5px solid ${i < 3 ? "rgba(56,138,253,0.25)" : i < 5 ? "rgba(29,158,117,0.25)" : "rgba(127,119,221,0.25)"}`,
      }}>
        {tag}
      </Box>
    ))}
  </Box>
</Card>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  // height: "100%",
                  justifyContent: "space-between",
                  pl: { xs: 0, md: 2 },
                  mt: { xs: 2, md: 0 },
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    mb: 3,
                  }}
                >
                  <Box
                    component="img"
                    src={Frontend}
                    sx={{
                      width: { xs: "80%", sm: "70%", md: "100%" },
                      maxWidth: { xs: 250, sm: 280, md: 320 },
                      height: "auto",
                      maxHeight: { xs: 220, sm: 240, md: 280 },
                      borderRadius: "10%",
                      objectFit: "cover",
                      animation: `jumpOnce 0.6s ease forwards`,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: { xs: "none", md: "scale(1.05)" },
                        boxShadow: { xs: 4, md: 10 },
                      },
                      animationDelay: `${0.05}s`,
                      "@keyframes jumpOnce": {
                        "0%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                        "100%": { transform: "translateY(0)" },
                      },
                    }}
                  />
                </Box>

                {/* Download Button - Positioned relative to image */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    pl: { xs: 0, md: 1 },
                  }}
                >
                  <Button
                    variant="contained"
                    component="a"
                    href={resume}
                    download
                    sx={{
                      width: { xs: "80%", sm: "70%", md: "90%" },
                      maxWidth: { xs: 250, sm: 280, md: 300 },
                      py: { xs: 1.2, sm: 1.4, md: 1.0 },
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                      mt: { xs: 1, md: 2 },
                    }}
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid>
            <Card
              elevation={0}
              sx={{
                width: { xs: "100%", md: "50%" },
                p: { xs: 2, sm: 3 },
                mt: { xs: 3, md: 0 },
                background:
                  "linear-gradient(135deg, rgba(10,18,40,0.92) 0%, rgba(14,26,60,0.97) 100%)",
                border: "1.5px solid rgba(99,160,255,0.22)",
                borderRadius: "18px",
                position: "relative",
                overflow: "hidden",
                animation: "fadeSlideIn 0.6s cubic-bezier(.22,.68,0,1.2) both",
                "&:hover": {
                  transform: { xs: "none", md: "scale(1.025)" },
                  boxShadow: "0 8px 40px rgba(59,130,246,0.22)",
                },
                // Animated border trace
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "-1.5px",
                  borderRadius: "18px",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(43, 138, 45, 0.5) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "borderTrace 2.8s linear infinite",
                  zIndex: 0,
                  pointerEvents: "none",
                },
                "@keyframes fadeSlideIn": {
                  from: { opacity: 0, transform: "translateY(18px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
                "@keyframes borderTrace": {
                  "0%": { backgroundPosition: "0% 0%" },
                  "100%": { backgroundPosition: "200% 0%" },
                },
              }}
            >
              <Box
                sx={{
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                    color: "white",
                  }}
                >
                  Contact Information
                </Typography>

                <List disablePadding>
                  <ListItem
                    button
                    component="a"
                    href="mailto:preethat1408@gmail.com"
                    sx={{ px: 0, py: { xs: 0.5, md: 1 } }}
                  >
                    <ListItemIcon sx={{ minWidth: { xs: 36, md: 40 } }}>
                      <EmailIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="preethat1408@gmail.com"
                      primaryTypographyProps={{
                        sx: {
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.85rem",
                            md: "0.9rem",
                          },
                          color: "white",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },
                      }}
                    />
                  </ListItem>

                  <ListItem sx={{ px: 0, py: { xs: 0.5, md: 1 } }}>
                    <ListItemIcon sx={{ minWidth: { xs: 36, md: 40 } }}>
                      <PhoneIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          component="a"
                          href="tel:8778662568"
                          sx={{
                            textDecoration: "none",
                            color: "white",
                            cursor: "pointer",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.85rem",
                              md: "0.9rem",
                            },
                          }}
                        >
                          8778662568
                        </Typography>
                      }
                    />
                  </ListItem>

                  <ListItem
                    component="a"
                    href="https://linkedin.com/in/preetha-t78405a258"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      px: 0,
                      py: { xs: 0.5, md: 1 },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: { xs: 36, md: 40 } }}>
                      <LinkedInIcon color="info" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary="linkedin.com/in/preetha-t78405a258"
                      primaryTypographyProps={{
                        sx: {
                          fontSize: {
                            xs: "0.8rem",
                            sm: "0.85rem",
                            md: "0.9rem",
                          },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Introduction;
