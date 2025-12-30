import React from "react";
import {
  Button,
  Box,
  Avatar,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Card,
  Container,
  Grid,
} from "@mui/material";
import Frontend from "./assets/Frontend.jpg";
import pattern3 from "./assets/pattern3.png";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import resume from "./assets/Preetha T_Resume.pdf";
import about from "./assets/about_.png";
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{ position: "relative", zIndex: 1, width: "100%" ,mt:4}}
      >
        {/* <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}> */}
        {/* <Box component="img" src={about} sx={{ width: 30 }}  /> */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "primary.main" }}
        >
          ABOUT ME
        </Typography>
        {/* </Box> */}
      </Grid>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative", zIndex: 1,mt:2 }}
      >
        <Grid container direction="row" xs={12} md={6}>
          <Grid container direction="column">
            <Grid item container direction="row">
              <Card
                elevation={4}
                sx={{
                  width: "40%",
                  p: 3,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 10,
                  },
                }}
              >
                <Typography sx={{ textAlign: { md: "left" } }}>
                  I'm a frontend React developer with expertise in crafting
                  responsive and scalable UI applications. I leverage React,
                  JavaScript, and modern CSS frameworks such as Bootstrap,
                  Material-UI, and Tailwind CSS to build clean, user-friendly
                  interfaces. With experience in state management using Redux, I
                  ensure efficient data flow and maintainable code structures. I
                  focus strongly on performance optimization, reusable
                  components, and cross-browser compatibility. Passionate about
                  learning new technologies, I enjoy transforming complex
                  requirements into intuitive digital experiences.
                </Typography>
              </Card>

              <Grid item>
                <Box
                  alignSelf="flex-end"
                  p={2}
                  height={300}
                  sx={{
                    //  border: "1px solid blue",
                    width: "100%",
                    ml: 7,
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // alignItems: "flex-end",
                  }}
                >
                  <Box
                    component="img"
                    src={Frontend}
                    sx={{
                      overflow: "hidden",
                      animation: `jumpOnce 0.6s ease forwards`,
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 10,
                      },
                      animationDelay: `${0.05}s`,
                      "@keyframes jumpOnce": {
                        "0%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                        "100%": { transform: "translateY(0)" }, // final position stays
                      },
                      // width: "80%",
                      height: "100%",
                      maxHeight: 220,
                      borderRadius: "10%",
                      objectFit: "cover",
                      flexGrow: 1,
                    }}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href={resume}
                    download
                  >
                    Download Resume
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Card
                elevation={4}
                sx={{ width: "40%", p: 3, transition: "all 0.3s ease-in-out" }}
              >
                <Box
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 10,
                    },
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    Contact Information
                  </Typography>

                  <List>
                    <ListItem
                      button
                      component="a"
                      href="mailto:preethat1408@gmail.com"
                    >
                      <ListItemIcon>
                        <EmailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="preethat1408@gmail.com" />
                    </ListItem>

                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="success" />
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
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItemIcon>
                        <LinkedInIcon color="info" />
                      </ListItemIcon>
                      <ListItemText primary="linkedin.com/in/preetha-t78405a258" />
                    </ListItem>
                  </List>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Introduction;
