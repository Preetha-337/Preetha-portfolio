import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BusinessIcon from "@mui/icons-material/Business";
import RBD from "./assets/RBD.png";
import fashion1 from "./assets/fashion1.png";
import fashion2 from "./assets/fashion2.png";
import reda1 from "./assets/reda1.png";
import reda2 from "./assets/reda2.png";
import Reda from "./assets/Reda.png";
import { Paper } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
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
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      opacity: 0.9,
      zIndex: 0,
    },
  }}
>
  <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
    <Box p={1} sx={{ overflow: "hidden" }}>

      {/* ─── TITLE ─────────────────────────────────────────────────── */}
      <Grid
        container
        direction="row"
        gap={1}
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              letterSpacing: "0.6rem",
              mb: 1,
              fontFamily: "'Roboto Mono', monospace",
              background: "linear-gradient(90deg, #fff, #fafafa, #78768d, #0cfe75)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "titleGradient 6s ease infinite",
              filter: "drop-shadow(0 0 8px rgba(190, 77, 255, 0.4))",
              textAlign: "center",
            }}
          >
            PROJECTS
          </Typography>
        </Box>
      </Grid>

      {/* ─── PROJECT 1 : Aviar Platform ─────────────────────────────── */}
  
        {/* Card */}
       
           <Grid
        container
        spacing={1}
        mt={4}
        // p={{ xs: 1, sm: 2 }}
       ml={3}
        // alignItems="flex-start"
      >
        {/* Card */}
        <Grid item xs={12} sm={10} md={5} lg={4}>
          <Card
            elevation={4}
            sx={{
              p: { xs: 1.5, sm: 2, md: 3 },
              width:{md: "85%"},
              background: "linear-gradient(135deg,rgb(122, 106, 171),rgb(76, 22, 184))",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: { xs: "translateY(-4px)", md: "scale(1.05)" },
                boxShadow: { xs: 6, md: 10 },
              },
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                mb: 1,
                textAlign: "center",
                color: "white",
              }}
            >
              Aviar Platform (React | Bootstrap | Material UI)
            </Typography>
            <List dense>
            {[
  "Built custom UI components and forms for engineering data input",
  "Integrated RESTful APIs to dynamically load course data",
  "Wrote modular and reusable React.js components",
  "Developed Teacher module with course creation, schedule management, and student performance tracking",
  "Built Student module with enrollment flows, progress dashboards, and assignment submission UI",
  "Implemented Admin module with user management, role-based access control, and analytics overview",
].map((text, i) => (
                <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: { xs: 32, sm: 36 }, color: "white" }}>
                    <StarBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.85rem" },
                        color: "white",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

        {/* Image */}
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          lg={5}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Paper
            elevation={5}
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 500, md: 500 },
              height: { xs: 200, sm: 220, md: 230 },
              borderRadius: 2,
              overflow: "hidden",
              transition: "0.3s",
              flexShrink: 0,
              "&:hover": {
                boxShadow: { xs: 8, md: 12 },
                transform: { md: "translateY(-6px)" },
              },
            }}
          >
            <Box
              component="img"
              src={Aviar}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* ─── PROJECT 2 : RAMS360 ────────────────────────────────────── */}
   <Grid
  container
  direction="row"
  spacing={4}
  p={{ xs: 1, sm: 2, md: 3 }}
  mt={2}
  justifyContent="center"
  alignItems="flex-start"
  columnSpacing={{ xs: 2, sm: 4, md: 10 }}
>
  {/* Images column */}
  <Grid item xs={12} sm={10} md={6} order={{ xs: 2, md: 1 }}>
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={5}
          sx={{
            width: { xs: "80%", sm: 300, md: 250 },
            height: { xs: 180, sm: 200, md: 230 },
            borderRadius: 2,
            overflow: "hidden",
            transition: "all 0.4s ease",
            "&:hover": { boxShadow: 12, transform: "translateY(-6px)" },
          }}
        >
          <Box
            component="img"
            src={electronics}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Paper>
      </Grid>

      <Grid item container justifyContent="center" spacing={4}>
        <Grid item xs={6} sm={5} md={5}>
          <Paper
            elevation={5}
            sx={{
              width: {md:300,xs:200,sm:300},
              height: { xs: 160, sm: 200, md: 230 },
              borderRadius: 2,
              overflow: "hidden",
              transition: "all 0.4s ease",
              "&:hover": { boxShadow: 12, transform: "translateY(-6px)" },
            }}
          >
            <Box
              component="img"
              src={RBD}
              sx={{ width:"100%", height: "43%", mt: 10 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={5} md={5}>
          <Paper
            elevation={5}
            sx={{
                   width: {md:300,xs:200,sm:300},
              height: { xs: 160, sm: 200, md: 230 },
              borderRadius: 2,
              overflow: "hidden",
              transition: "all 0.4s ease",
              "&:hover": { boxShadow: 12, transform: "translateY(-6px)" },
            }}
          >
            <Box
              component="img"
              src={RAMS360}
              sx={{ width: "90%", height: "190%", ml:{ md:1.5,sm:0,xs:0} }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  {/* Card */}
  <Grid
    item
    xs={12}
    sm={10}
    md={6}
    order={{ xs: 1, md: 2 }}
    sx={{ display: "flex", justifyContent: "center" }}
  >
    <Card
      elevation={4}
      sx={{
        p: { xs: 1.5, sm: 2, md: 1 },
        width: "100%",
        maxWidth: { xs: "100%", sm: 600, md: 550 },
        ml: { md: "auto",xs:"auto",sm:"auto" },
        background: "linear-gradient(135deg,rgb(88, 47, 236),rgb(43, 190, 243))",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: { xs: "translateY(-4px)", md: "scale(1.05)" },
          boxShadow: { xs: 6, md: 10 },
        },
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
          mb: { xs: 0.5, sm: 1 },
          textAlign: "center",
          color: "white",
        }}
      >
        Rams360 (React | Material UI)
      </Typography>
      <List dense>
        {[
          "Built custom UI components and forms for engineering data input and complex calculations.",
          "Integrated APIs for real-time failure rate computations and analytics.",
          "Implemented robust form validation and optimized error-handling mechanisms.",
          "Enhanced UI/UX by improving component reusability and responsiveness across multiple devices.",
          "Developed backend CRUD operations for managing application data efficiently.",
          "Designed and maintained RESTful APIs for seamless frontend-backend communication.",
          "Collaborated on full-stack development, ensuring smooth integration between frontend and backend.",
          "Debugged and resolved backend issues, improving system reliability and performance.",
        ].map((text, i) => (
          <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
              <StarBorderIcon fontSize="small" sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                  color: "white",
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  </Grid>
</Grid>


      {/* ─── PROJECT 3 : Reda Boutique ──────────────────────────────── */}
<Grid
  container
  spacing={4}
  mt={4}
  p={{ xs: 1, sm: 2 }}
  justifyContent="center"
  alignItems="center"
>
  {/* Card */}
  <Grid item xs={12} sm={10} md={5} lg={4}>
    <Card
      elevation={4}
      sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        width: "100%",
        background: "linear-gradient(135deg,rgb(131, 130, 134),rgb(20, 95, 61))",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: { xs: "translateY(-4px)", md: "scale(1.05)" },
          boxShadow: { xs: 6, md: 10 },
        },
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
          mb: { xs: 0.5, sm: 1 },
          textAlign: "center",
          color: "white",
        }}
      >
        Reda Boutique Fashion (React.js | Tailwind CSS)
      </Typography>
      <List dense>
        {[
          "Designed and developed a responsive website showcasing products and brand identity.",
          "Utilized HTML5, CSS3, Bootstrap for clean and user-friendly interface.",
          "Implemented mobile-first responsive design for cross-device compatibility.",
          "Structured key sections (Home, About, Products, Contact) for better navigation.",
        ].map((text, i) => (
          <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
              <StarBorderIcon fontSize="small" sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                  color: "white",
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 1 }}>
          <Link
            href="https://theredastudio.com/"
            target="_blank"
            underline="hover"
            sx={{
              fontSize: { xs: "0.8rem", sm: "0.85rem", md: "1rem" },
              color: "#e0f2fe",
              wordBreak: "break-all",
            }}
          >
            https://theredastudio.com/
          </Link>
        </ListItem>
      </List>
    </Card>
  </Grid>

  {/* Images */}
  <Grid item xs={12} sm={10} md={6} lg={5}>
    <Grid container spacing={2} justifyContent="center">
      {[reda2, reda1].map((src, i) => (
        <Grid item key={i} xs={6} sm={6} md={6}>
          <Paper
            elevation={5}
            sx={{
              width: {xs:"110%",md:"100%"},
              height: { xs: 180, sm: 230, md: 280 },
              borderRadius: 2,
              overflow: "hidden",
              transition: "all 0.4s ease",
              "&:hover": { boxShadow: 12, transform: "translateY(-6px)" },
            }}
          >
            <Box
              component="img"
              src={src}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Grid>
</Grid>

      {/* ─── PROJECT 4 : Apartment Management System ────────────────── */}
<Grid
  container
  direction="row"
  spacing={4}
  mt={4}
  p={{ xs: 1, sm: 2, md: 3 }}
  justifyContent="center"
  alignItems="center"
>
  {/* Images — left side */}
  <Grid item xs={12} sm={10} md={6} order={{ xs: 2, md: 1 }}>
    <Grid container direction="column" spacing={2} alignItems="center">

      {/* Top wide image */}
      <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={5}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 500, md: 500 },
            borderRadius: 2,
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
            "&:hover": { transform: "scale(1.03)", boxShadow: 10 },
          }}
        >
          <Box
            component="img"
            src={agreement}
            sx={{
              width: "100%",
              height: { xs: 140, sm: 160, md: 180 },
              objectFit: "cover",
            }}
          />
        </Paper>
      </Grid>

      {/* Bottom two images side by side */}
      <Grid item container spacing={2} justifyContent="center">
        {[apartment, ams].map((src, i) => (
          <Grid item key={i} xs={6} sm={6} md={6}>
            <Paper
              elevation={5}
              sx={{
                width:{md: "100%",xs:"120%"},
                borderRadius: 2,
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.03)", boxShadow: 10 },
              }}
            >
              <Box
                component="img"
                src={src}
                sx={{
                  width: "100%",
                  height: { xs: 150, sm: 200, md: 250 },
                  objectFit: "cover",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

    </Grid>
  </Grid>

  {/* Card — right side */}
  <Grid
    item
    xs={12}
    sm={10}
    md={6}
    order={{ xs: 1, md: 2 }}
    sx={{ display: "flex", justifyContent: "center" }}
  >
    <Card
      elevation={4}
      sx={{
        p: { xs: 1.5, sm: 2, md: 2 },
        width: "100%",
        ml:{md:10,sm:0,xs:0},
        maxWidth: { xs: "100%", sm: "100%", md: 550 },
        background: "linear-gradient(135deg,rgb(88, 47, 236),rgb(249, 88, 88))",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: { xs: "translateY(-4px)", md: "scale(1.05)" },
          boxShadow: { xs: 6, md: 10 },
        },
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
          mb: { xs: 0.5, sm: 1 },
          textAlign: "center",
          color: "white",
          pt: { xs: 1, sm: 1, md: 1 },
        }}
      >
        Apartment Management System (React | MUI)
      </Typography>
      <List dense>
        {[
          "Improved frontend stability and UI responsiveness.",
          "Implemented multi-language support.",
          "Refined UI layout using Material UI components and theming.",
          "Optimized component reusability and reduced redundant renders.",
          "Built tenant and owner dashboards with real-time data updates.",
          "Developed maintenance request module with status tracking and notifications.",
          "Integrated payment summary views for rent and dues management.",
          "Implemented role-based access for Admin, Owner, and Tenant users.",
        ].map((text, i) => (
          <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
            <ListItemIcon sx={{ minWidth: { xs: 32, md: 36 } }}>
              <StarBorderIcon fontSize="small" sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                  color: "white",
                  lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <ListItem disablePadding sx={{ mt: 1 }}>
        <Link
          href="https://www.liveez.in/web"
          target="_blank"
          underline="hover"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "1rem" },
            color: "#e0f2fe",
            wordBreak: "break-all",
          }}
        >
          https://www.liveez.in/web
        </Link>
      </ListItem>
    </Card>
  </Grid>
</Grid>

      {/* ─── PROJECT 5 : Moogambigai Enterprises ────────────────────── */}
      <Grid
        container
        justifyContent="center"
        p={{ xs: 1, sm: 2 }}
        mt={4}
      >
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Card
            elevation={4}
            sx={{
              p: { xs: 1.5, sm: 2, md: 3 },
              width: {md:1000,xs:"100%",sm:"100%"},
              background: "linear-gradient(135deg, rgb(16, 185, 129), rgb(42, 86, 233))",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: { xs: "translateY(-4px)", md: "scale(1.02)" },
                boxShadow: { xs: 6, md: 10 },
              },
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
              <BusinessIcon sx={{ color: "white" }} />
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                  color: "white",
                  textAlign: "center",
                }}
              >
                Moogambigai Enterprises (Freelancing Project)
              </Typography>
            </Box>
            <List dense>
              {[
                "Developed a responsive business website for wiring harness services.",
                "Showcased automotive, industrial, and custom wiring solutions.",
                "Implemented modern UI with smooth navigation and clean layout.",
                "Optimized for mobile responsiveness and SEO visibility.",
              ].map((text, i) => (
                <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <StarBorderIcon sx={{ color: "white" }} fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
                        color: "white",
                      },
                    }}
                  />
                </ListItem>
              ))}
              <ListItem disablePadding sx={{ mt: 1 }}>
                <Link
                  href="https://moogambigaienterprise.com/"
                  target="_blank"
                  underline="hover"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.85rem", md: "1rem" },
                    color: "#e0f2fe",
                    wordBreak: "break-all",
                  }}
                >
                  https://moogambigaienterprise.com/
                </Link>
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

