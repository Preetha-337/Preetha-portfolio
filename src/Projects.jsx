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
            direction={{ xs: "row", md: "row",sm:"row" }}
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
  container
  direction={{ xs: "column", md: "row",sm:"row" }}
  spacing={{ xs: 2, md: 3}}
  alignItems="stretch"
  justifyContent="flex-start"
>
  {/* Card Section - Takes 5 columns on desktop */}
  <Grid item xs={12} md={5} sx={{ display: "flex",  ml:{sm:4,md:0},width:{sm:700,md:"40%"} }}>
<Card
  elevation={4}
   sx={{
    p: { xs: 1.5, sm: 2, md: 3 },
    width: { xs: "100%", sm: "100%", md: 420 },
    maxWidth: { xs: "100%", md: 420 ,sm:600},
    mx: { xs: "auto", md: "auto" },
    mt: { xs: 2, md: 0 },
    ml:{xs:0,sm:0},
    // alignSelf: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": { 
      transform: { xs: "translateY(-4px)", md: "scale(1.05)" }, 
      boxShadow: { xs: 6, md: 10 } 
    },
  }}
>
  <Typography 
    variant="subtitle1" 
    fontWeight="bold"
    sx={{ 
      fontSize: { 
        xs: "0.9rem", 
        sm: "1rem",    // Slightly larger on tablet
        md: "1rem" 
      },
      mb: 1,
      textAlign: { xs: "center", sm: "center", md: "center" } 
    }}
  >
    Aviar Platform (React | Bootstrap | Material UI)
  </Typography>
  <Box sx={{ flexGrow: 1 }}>
    <List dense>
      <ListItem disablePadding sx={{ py: 0.5 }}>
        <ListItemIcon sx={{ 
          minWidth: { xs: 32, sm: 36 },
          justifyContent: { xs: "center", sm: "center", md: "flex-start" }
        }}>
          <StarBorderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="Built custom UI components and forms for engineering data input"
          primaryTypographyProps={{ 
            sx: { 
              fontSize: { 
                xs: "0.8rem", 
                sm: "0.9rem",   
                md: "0.85rem" 
              },
              // textAlign: { xs: "center", sm: "center", md: "left" }
            } 
          }}
        />
      </ListItem>
      <ListItem disablePadding sx={{ py: 0.5 }}>
        <ListItemIcon sx={{ 
          minWidth: { xs: 32, sm: 36 },
          justifyContent: { xs: "center", sm: "center", md: "flex-start" }
        }}>
          <StarBorderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="Integrated RESTful APIs to dynamically load course data"
          primaryTypographyProps={{ 
            sx: { 
              fontSize: { 
                xs: "0.8rem", 
                sm: "0.9rem", 
                md: "0.85rem" 
              },
              // textAlign: { xs: "center", sm: "center", md: "left" }
            } 
          }}
        />
      </ListItem>
      <ListItem disablePadding sx={{ py: 0.5 }}>
        <ListItemIcon sx={{ 
          minWidth: { xs: 32, sm: 36 },
          justifyContent: { xs: "center", sm: "center", md: "flex-start" }
        }}>
          <StarBorderIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary="Wrote modular and reusable React.js components"
          primaryTypographyProps={{ 
            sx: { 
              fontSize: { 
                xs: "0.8rem", 
                sm: "0.9rem", 
                md: "0.85rem" 
              },
              // textAlign: { xs: "center", sm: "center", md: "left" }
            } 
          }}
        />
      </ListItem>
    </List>
  </Box>
</Card>
  </Grid>

  {/* Images Section - Takes 7 columns on desktop, appears to the right of card */}
  <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center" }}>
    <Grid
      container
      direction="row"
      wrap="nowrap"
      spacing={{ xs: 1.5, sm: 2, md: 4 }}
      sx={{
        overflowX: "auto",
        flexWrap: "nowrap",
        pb: 1,
        height: "100%",
        alignItems: "center",
        // Hide scrollbar for cleaner look
        "&::-webkit-scrollbar": {
          height: 4,
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: 2,
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: 2,
        },
        // For Firefox
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #f1f1f1",
      }}
    >
      {/* Image 1 */}
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <Paper
          elevation={5}
          sx={{
            width: { xs: 130, sm: 300, md: 270 },
            height: { xs: 180, sm: 200, md: 230 },
            borderRadius: 2,
            overflow: "hidden",
            //  cursor: { xs: "zoom-in" },
            transition: "0.3s",
            position: "relative",
            flexShrink: 0,
            "&:hover": {
              boxShadow: { xs: 8, md: 12 },
              transform: { md: "translateY(-6px)" },
            },
            // Mobile zoom effect
            "@media (max-width: 900px)": {
              "&:active": {
                zIndex: 9999,
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1.8)",
                width: "90vw !important",
                height: "auto !important",
                maxHeight: "80vh",
                transition: "transform 0.3s ease",
                boxShadow: 24,
              },
            },
          }}
        >
          <Box
            component="img"
            src={intern}
            sx={{
              width: { xs: 130, md: 270,sm:380 },
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Paper>
      </Grid>

      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <Paper
          elevation={5}
          sx={{
            width: { xs: 130, sm: 300, md: 300 },
            height: { xs: 180, sm: 200, md: 230 },
            borderRadius: 2,
            overflow: "hidden",
            // cursor: { xs: "zoom-in" },
            transition: "0.3s",
            position: "relative",
            flexShrink: 0,
            "&:hover": {
              boxShadow: { xs: 8, md: 12 },
              transform: { md: "translateY(-6px)" },
            },
         
            "@media (max-width: 900px)": {
              "&:active": {
                zIndex: 9999,
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1.8)",
                width: "90vw !important",
                height: "auto !important",
                maxHeight: "80vh",
                transition: "transform 0.3s ease",
                boxShadow: 24,
              },
            },
          }}
        >
          <Box
            component="img"
            src={Aviar}
            sx={{
              width: { xs: 130, md: 300,sm:300 },
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  </Grid>
</Grid>
          </Grid>
          <Grid
            container
            direction="row"
            spacing={2}
            p={2}
            mt={5}
            gap={4}
            justifyContent="space-between"
         
          >
            
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                spacing={4}
              >
                <Grid item alignItems={{md:"center"}} ml={{md:15,xs:0} }>
                  <Paper
                    elevation={5}
                    sx={{
                      width: { xs: 200, md: 250,sm:400 },
                      height: { xs: 200, md: 230 },
                      borderRadius: 2,
                      ml: { xs: 6, md: 4,sm:15 },
                   
                      overflow: "hidden",
                      // cursor: "pointer",
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
                         width: { xs: 200, md: 250,sm:350 },
                            ml: { sm: 5,md:0},
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
                        width: { xs: 110, md: 250,sm:300 },
                        height: { xs: 200, md: 230 },
                        borderRadius: 2,
                        ml: { xs: 1, md: 2 },
                        overflow: "hidden",
                        // cursor: "pointer",
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
                           width: { xs: 130, md: 250,sm:300 },
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
                         width: { xs: 110, md: 250,sm:300 },
                        height: { xs: 200, md: 230 },
                        borderRadius: 2,
                        overflow: "hidden",
                        // cursor: "pointer",
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
                          width: { xs: 130, md: 250,sm:300 },
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

            <Grid item xs={12} md={5} sx={{ mr: { md: 20 } }}

 order={{ xs: 1, md: 2}}>
          <Card
  elevation={4}
  sx={{
    p: { xs: 1.5, sm: 2, md: 3 },
    width: { xs: "100%", sm: "90%", md: 420 },
    maxWidth: { xs: "100%", md: 420 },
    mx: { xs: "auto", md: "auto" },
    mt: { xs: 2, md: 0 },
    alignSelf: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": { 
      transform: { xs: "translateY(-4px)", md: "scale(1.05)" }, 
      boxShadow: { xs: 6, md: 10 } 
    },
  }}
>
  <Typography 
    variant="subtitle1" 
    fontWeight="bold"
    sx={{ 
      fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
      mb: { xs: 0.5, sm: 1 },
       textAlign: { xs: "center", sm: "center", md: "center" } 
    }}
    
  >
    Rams360 (React | Material UI)
  </Typography>

  <List dense>
    <ListItem disablePadding sx={{ py: 0.5 }}>
      <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
        <StarBorderIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText 
        primary="Built custom UI components and forms for engineering data input and complex calculations."
        primaryTypographyProps={{ 
          sx: { 
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
          } 
        }}
      />
    </ListItem>

    <ListItem disablePadding sx={{ py: 0.5 }}>
      <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
        <StarBorderIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText 
        primary="Integrated APIs for real-time failure rate computations and analytics."
        primaryTypographyProps={{ 
          sx: { 
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
          } 
        }}
      />
    </ListItem>

    <ListItem disablePadding sx={{ py: 0.5 }}>
      <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
        <StarBorderIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText 
        primary="Implemented robust form validation and optimized error-handling mechanisms."
        primaryTypographyProps={{ 
          sx: { 
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
          } 
        }}
      />
    </ListItem>

    <ListItem disablePadding sx={{ py: 0.5 }}>
      <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
        <StarBorderIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText 
        primary="Enhanced UI/UX by improving component reusability and responsiveness across multiple devices."
        primaryTypographyProps={{ 
          sx: { 
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
          } 
        }}
      />
    </ListItem>
  </List>
</Card>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={7}
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
              spacing={7}
              p={1}
              gap={4}
              container
              direction="row"
            >
              <Card
                elevation={4}
        sx={{
    p: { xs: 1.5, sm: 2, md: 3 },
    width: { xs: "100%", sm: "90%", md: 420 },
    maxWidth: { xs: "100%", md: 420 },
    mx: { xs: "auto", md: "auto" },
    mt: { xs: 2, md: 0 },
    alignSelf: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": { 
      transform: { xs: "translateY(-4px)", md: "scale(1.05)" }, 
      boxShadow: { xs: 6, md: 10 } 
    },
  }}
              >
              <Typography 
  variant="subtitle1" 
  fontWeight="bold"
  sx={{ 
    fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
    mb: { xs: 0.5, sm: 1 },
     textAlign: { xs: "center", sm: "center", md: "center" } 
  }}
>
  Reda Boutique Fashion (React.js | Tailwind CSS)
</Typography>

<List dense>
  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Designed and developed a responsive website showcasing products and brand identity."
      primaryTypographyProps={{ 
       sx: { 
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
          } 
      }}
    />
  </ListItem>
  
  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Utilized HTML5, CSS3, Bootstrap for clean and user-friendly interface."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
  </ListItem>
  
  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Implemented mobile-first responsive design for cross-device compatibility."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
  </ListItem>
  
  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Structured key sections (Home, About, Products, Contact) for better navigation."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
  </ListItem>
  
  <ListItem disablePadding sx={{ py: 0.5 }}>
    <Link
      href="https://theredastudio.com/"
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
      sx={{ 
         cursor: "pointer",
        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
        display: "block",
        mt: { xs: 0.5, sm: 1 },
        wordBreak: "break-all",
        color: "primary.main",
        "&:hover": {
          color: "primary.dark",
          textDecoration: "underline"
        }
      }}
    >
      https://www.theredastudio.com/
    </Link>
  </ListItem>
</List>
              </Card>

              <Grid container spacing={5}>
                <Grid item xs={6}>
                  <Paper
                    elevation={5}
                    sx={{
                      ml: { xs: 0 },
                      width: { xs: 280, md: 280 },
                      height: { xs: 300, md: 230 },
                      borderRadius: 2,
                      overflow: "hidden",
                      // cursor: "pointer",
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
                      width: { xs: 280, md: 280 },
                      height: { xs: 300, md: 230 },
                      borderRadius: 2,
                      overflow: "hidden",
                      // cursor: "pointer",
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
                <Grid item ml={{ xs: 1, md: 5 }}>
                  <Paper
                    elevation={5}
                    width={{ xs: 400, md: "100%",sm:"85%" }}
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
                        width: { xs: 400, md: "90%" },
                       ml:{sm:5},
                        height: { xs: 150, md: 150 },
                        objectFit: "cover",
                      }}
                    />
                  </Paper>
                </Grid>

                {/* Small Images */}
                <Grid item container spacing={2} ml={{ xs: 3 }}>
                  <Grid
                    item
                    ml={{ xs: 0, md: 2 }}
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
    p: { xs: 1.5, sm: 2, md: 3 },
    width: { xs: "90%", sm: 600, md: 420 },
    maxWidth: { xs: "100%", md: 420 },
    mx: { xs: "auto", md: "auto" },
    ml:{sm:5},
    mt: { xs: 2, md: 0 },
    alignSelf: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": { 
      transform: { xs: "translateY(-4px)", md: "scale(1.05)" }, 
      boxShadow: { xs: 6, md: 10 } 
    },
  }}
              >
             <Typography 
  variant="subtitle1" 
  fontWeight="bold"
  sx={{ 
    fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
    mb: { xs: 0.5, sm: 1 },
     textAlign: { xs: "center", sm: "center", md: "center" } 
  }}
>
  Apartment Management System (React | MUI)
</Typography>

<List dense>
  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Improved frontend stability and UI responsiveness."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
  </ListItem>

  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Implemented multi-language support."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
  </ListItem>

  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Refined UI layout using Material UI."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
  </ListItem>

  <ListItem disablePadding sx={{ py: 0.5 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText 
      primary="Optimized component reusability and reduced redundant renders."
      primaryTypographyProps={{ 
        sx: { 
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 }
        } 
      }}
    />
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
