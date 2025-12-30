import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import fashion1 from "./assets/fashion1.png";
import fashion2 from "./assets/fashion2.png";
import reda1 from "./assets/reda1.png";
import reda2 from "./assets/reda2.png";
import Reda from "./assets/Reda.png";
import { Paper } from "@mui/material";

import apartment from "./assets/apartment.png";
import agreement from "./assets/agreement.png";
import ams from "./assets/ams.png";
import Project from "./assets/Project.png";
import RAMS360 from "./assets/RAMS360.png";
import MIL from "./assets/MIL.png";

import Aviar from "./assets/Aviar.png";

import Dashboard from "./assets/Dashboard.png";
import {
  Card,
  CardContent,
  Container,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  Link,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import pattern1 from "./assets/pattern1.png";
import Course from "./assets/Course.png";
import electronics from "./assets/electronics.png";
import graph from "./assets/graph.png";
import pie from "./assets/pie.png";
import intern from "./assets/intern.png";
function Projects() {
  return (
    <Grid
      id="Project"
      container
      sx={{
        position: "relative",
        backgroundImage: `url(${pattern1})`,

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
        <Box
          p={1}
          sx={{
            // border: "2px solid black",

            overflow: "hidden",
          }}
        >
          {/* <Box sx={{ transform: "translateY(-500px)" }}> */}
          <Grid
            container
            direction={{ xs: "row", md: "row" }}
            gap={1}
            alignItems="center"
            justifyContent="center"
          >
            <Box component="img" src={Project} sx={{ width: 30 }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "primary.main" }}
            >
              PROJECTS
            </Typography>
          </Grid>
          <Grid
            container
            spacing={4}
            mt={2}
            p={2}
            // alignItems="center"
            justifyContent="space-between"
            // border="1px solid black"
            overflow="hidden"
          >
            <Grid
              item
              xs={12}
              md={6}
              spacing={2}
              p={1}
              gap={4}
              container
              direction="row"
            >
              <Card
                elevation={4}
                sx={{
                  p: 2,

                  width: { xs: "100%", md: "40%" },
                  mx: { xs: "auto", md: 0 },

                  // height: "100%",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 10,
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Aviar Platform (React | Bootstrap | Material UI)
                </Typography>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <StarBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Built custom UI components and forms for engineering data input and complex calculations Designed and developed responsive user interfaces using Material
                UI and Bootstrap."
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <StarBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Integrated RESTful APIs to dynamically load
                and update course data."
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <StarBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Wrote modular and reusable React.js
                components following best coding practices."
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <StarBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary=" Collaborated closely
                with QA and product teams to refine UI design and improve
                performance."
                  />
                </ListItem>
              </Card>
              <Grid
                container
                direction="row"
                wrap="nowrap"
                spacing={2}
                sx={{
                  overflowX: "auto",
                  flexWrap: "nowrap",
                }}
              >
                <Grid item>
                  <Paper
                    elevation={5}
                    sx={{
                      width: { xs: 350, md: 270 },
                      height: { xs: 200, md: 230 },
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "0.4s",
                      "&:hover": {
                        boxShadow: 12,
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={intern}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Grid>

                <Grid item>
                  <Paper
                    elevation={5}
                    sx={{
                      width: { xs: 350, md: 290 },
                      height: { xs: 200, md: 230 },
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "0.4s",
                      "&:hover": {
                        boxShadow: 12,
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={Aviar}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={4}
            p={2}
            mt={5}
            gap={4}
            justifyContent="space-between"
          >
            {/* ================= IMAGES SECTION ================= */}
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                spacing={4}
              >
                <Grid item alignItems="center" ml={15}>
                  <Paper
                    elevation={5}
                    sx={{
                      width: { xs: 330, md: 250 },
                      height: { xs: 200, md: 230 },
                      borderRadius: 2,
                      ml: { xs: 15, md: 4 },
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        boxShadow: 12,
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={electronics}
                      sx={{
                        width: { xs: 300, md: 250 },
                        height: { xs: 200, md: 230 },
                        borderRadius: 2,
                      }}
                    />
                  </Paper>
                </Grid>

                <Grid item container justifyContent="center" spacing={2}>
                  <Grid item>
                    <Paper
                      elevation={5}
                      sx={{
                        width: { xs: 300, md: 250 },
                        height: { xs: 200, md: 230 },
                        borderRadius: 2,
                        ml: { xs: 8, md: 2 },
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          boxShadow: 12,
                          transform: "translateY(-6px)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={pie}
                        sx={{
                          width: { xs: 300, md: 250 },
                          height: { xs: 200, md: 230 },
                          borderRadius: 2,
                        }}
                      />
                    </Paper>
                  </Grid>

                  <Grid item>
                    <Paper
                      elevation={5}
                      sx={{
                        width: { xs: 300, md: 250 },
                        height: { xs: 200, md: 230 },
                        borderRadius: 2,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          boxShadow: 12,
                          transform: "translateY(-6px)",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={RAMS360}
                        sx={{
                          width: { xs: 280, md: 300 },
                          height: { xs: 200, md: 230 },
                          borderRadius: 2,
                          objectFit: "cover",
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
              <Card
                elevation={4}
                sx={{
                  p: 3,

                  width: { xs: 680, md: 420 },
                  mt: { xs: 2, md: 0 },
                  ml: { xs: 0, md: "auto" },
                  alignSelf: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Rams360 (React | Material UI)
                </Typography>

                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Built custom UI components and forms for engineering data input and complex calculations." />
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Integrated APIs for real-time failure rate computations and analytics." />
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Implemented robust form validation and optimized error-handling mechanisms." />
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Enhanced UI/UX by improving component reusability and responsiveness across multiple devices." />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            mt={2}
            p={2}
            // alignItems="center"
            justifyContent="space-between"
            // border="1px solid black"
            overflow="hidden"
          >
            <Grid
              item
              xs={12}
              md={6}
              spacing={2}
              p={1}
              gap={4}
              container
              direction="row"
            >
              <Card
                elevation={4}
                sx={{
                  p: 2,
                  width: { xs: 700, md: "45%" },
                  mt: { xs: 2, md: 0 },
                  ml: { xs: 0, md: "auto" },
                  alignSelf: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 10,
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Reda Boutique Fashion (React.js | Tailwind CSS)
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Designed and developed a responsive, static website showcasing products, collections, and brand identity." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Utilized HTML5, CSS3, Bootstrap, and JavaScript to deliver a clean and user-friendly interface." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Implemented mobile-first responsive design to ensure accessibility and cross-device compatibility." />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Structured key sections (Home, About, Products, Contact) to enhance user navigation and brand professionalism." />
                  </ListItem>
                  <Link
                    href="https://www.theredastudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{ cursor: "pointer" }}
                  >
                    https://www.theredastudio.com/
                  </Link>
                </List>
              </Card>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      ml: { xs: 8 },
                      width: { xs: 300, md: 220 },
                      height: { xs: 200, md: 230 },
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        boxShadow: 12,
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={reda2}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      width: { xs: 300, md: 220 },
                      height: { xs: 200, md: 230 },
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "all 0.4s ease",
                      "&:hover": {
                        boxShadow: 12,
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={reda1}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            spacing={8}
            mt={2}
            alignItems="flex-start"
          >
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              <Grid container direction="column" spacing={3}>
                <Grid item ml={{ xs: 10, md: 5 }}>
                  <Paper
                    elevation={5}
                    width={{ xs: 500, md: "100%" }}
                    sx={{
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 10,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={agreement}
                      sx={{
                        width: { xs: 500, md: "90%" },

                        height: { xs: 200, md: 150 },
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Grid>

                {/* Small Images */}
                <Grid item container spacing={2} ml={{ xs: 3 }}>
                  <Grid
                    item
                    ml={{ xs: 8, md: 2 }}
                    sx={{
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 10,
                      },
                    }}
                  >
                    <Paper elevation={5}>
                      <Box
                        component="img"
                        src={apartment}
                        sx={{
                          width: { xs: 300, md: 250 },
                          height: 200,
                          objectFit: "cover",
                        }}
                      />
                    </Paper>
                  </Grid>

                  <Grid item>
                    <Paper
                      elevation={5}
                      sx={{
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: 10,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={ams}
                        sx={{
                          width: { xs: 300, md: 250 },
                          height: 200,
                          objectFit: "cover",
                        }}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* CARD SECTION */}
            <Grid
              item
              xs={12}
              md={5}
              order={{ xs: 1, md: 2 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={4}
                sx={{
                  p: 2,
                  ml: { xs: 2 },
                  width: { xs: 720, md: 420 },
                  maxWidth: { xs: 800, md: 420 },
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 10,
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  Apartment Management System (React | MUI)
                </Typography>

                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Improved frontend stability and UI responsiveness." />
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Implemented multi-language support." />
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Refined UI layout using Material UI." />
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemIcon>
                      <StarBorderIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Optimized component reusability and reduced redundant renders." />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default Projects;
