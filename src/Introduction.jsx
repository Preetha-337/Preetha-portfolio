import React from "react";
import { Button, Box, Typography, Card, Grid } from "@mui/material";
import Frontend from "./assets/Frontend.jpg";
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
        backgroundImage: `url(${pattern3})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        mt: 2,
        px: { xs: 2, sm: 3, md: 0 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #c3dafe, #e9d5ff)",
          opacity: 0.97,
          zIndex: 0,
        },
      }}
    >
      {/* Title Section */}
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          zIndex: 1,
          mt: 4,
          textAlign: "center",
          ml: { xs: 14, sm: 2 },
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
          }}
        >
          ABOUT ME
        </Typography>
      </Grid>

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
              elevation={4}
              sx={{
                width: { xs: "100%", md: "50%" }, // Full width on mobile, 90% on desktop
                p: { xs: 3, sm: 3, md: 5 },
                height: "50%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: { xs: "none", md: "scale(1.02)" },
                  boxShadow: { xs: 4, md: 10 },
                },
              }}
            >
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
                   I am a MERN Stack Developer with a strong focus on frontend
                development, specializing in building responsive, scalable, and
                high-performance user interfaces. I primarily work with React
                and JavaScript, along with modern CSS frameworks such as
                Bootstrap, Material-UI, and Tailwind CSS, to create clean and
                intuitive UI experiences. I have hands-on experience with state
                management using Redux, ensuring efficient data flow and
                maintainable application architecture. With a strong emphasis on
                performance optimization, reusable components, and cross-browser
                compatibility, I strive to deliver seamless user experiences.
                Passionate about continuous learning, I enjoy translating
                complex requirements into elegant and user-friendly digital
                solutions.
              </Typography>
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
              elevation={4}
              sx={{
                width: { xs: "100%", md: "50%" },
                p: { xs: 2, sm: 3 },

                mt: { xs: 3, md: 0 },

                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: { xs: "none", md: "scale(1.02)" },
                  boxShadow: { xs: 4, md: 10 },
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
                            color: "inherit",
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
                      color: "inherit",
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
