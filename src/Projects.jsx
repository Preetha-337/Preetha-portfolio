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
import Project from "./assets/Project.jpg";
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

// Shared card styles per project
const cardStyles = {
  aviar: {
    bg: "#F8FAFF",
    border: "#B5D4F4",
    titleColor: "#0C447C",
    textColor: "#444441",
    iconColor: "#185FA5",
    tagBg: "#E6F1FB",
    tagBorder: "#B5D4F4",
    tagColor: "#185FA5",
    glow: "rgba(55,138,221,0.12)",
  },
  rams: {
    bg: "#F5F3FF",
    border: "#CECBF6",
    titleColor: "#3C3489",
    textColor: "#444441",
    iconColor: "#534AB7",
    tagBg: "#EEEDFE",
    tagBorder: "#CECBF6",
    tagColor: "#534AB7",
    glow: "rgba(127,119,221,0.12)",
  },
  reda: {
    bg: "#F3F9EC",
    border: "#9FE1CB",
    titleColor: "#085041",
    textColor: "#444441",
    iconColor: "#0F6E56",
    tagBg: "#E1F5EE",
    tagBorder: "#9FE1CB",
    tagColor: "#0F6E56",
    glow: "rgba(29,158,117,0.12)",
  },
  apartment: {
    bg: "#FFF8F0",
    border: "#FAC775",
    titleColor: "#633806",
    textColor: "#444441",
    iconColor: "#854F0B",
    tagBg: "#FAEEDA",
    tagBorder: "#FAC775",
    tagColor: "#854F0B",
    glow: "rgba(186,117,23,0.12)",
  },
  moogambigai: {
    bg: "#F0FBF7",
    border: "#9FE1CB",
    titleColor: "#04342C",
    textColor: "#444441",
    iconColor: "#0F6E56",
    tagBg: "#E1F5EE",
    tagBorder: "#9FE1CB",
    tagColor: "#0F6E56",
    glow: "rgba(29,158,117,0.12)",
  },
};

const sharedCardSx = (s, delay = "0s") => ({
  background: s.bg,
  border: `0.5px solid ${s.border}`,
  borderRadius: "20px",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  animation: `fadeUp 0.6s ease ${delay} both`,
  "@keyframes fadeUp": {
    from: { opacity: 0, transform: "translateY(24px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
  "@keyframes shimmerTop": {
    "0%": { backgroundPosition: "-200% center" },
    "100%": { backgroundPosition: "200% center" },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "2px",
    background: `linear-gradient(90deg, transparent, ${s.border}, transparent)`,
    backgroundSize: "200% 100%",
    animation: "shimmerTop 2.8s linear infinite",
    zIndex: 3,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: "radial-gradient(circle, rgba(180,200,230,0.3) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    opacity: 0.2,
    zIndex: 0,
    pointerEvents: "none",
  },
  "&:hover": {
    transform: { xs: "translateY(-4px)", md: "scale(1.02)" },
    boxShadow: `0 12px 40px ${s.glow}`,
    borderColor: s.iconColor,
  },
});

const bulletItem = (text, i, iconColor) => (
  <ListItem key={i} disablePadding sx={{ py: 0.4, position: "relative", zIndex: 1 }}>
    <ListItemIcon sx={{ minWidth: { xs: 32, sm: 36 }, color: iconColor }}>
      <StarBorderIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        sx: {
          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.875rem" },
          color: "#444441",
          lineHeight: 1.6,
        },
      }}
    />
  </ListItem>
);

function Projects() {
  return (
    <Grid
      id="Project"
      container
      sx={{
        position: "relative",
        py: 4,
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

          {/* ─── TITLE ─────────────────────────────────────────────── */}
          <Grid container direction="row" gap={1} alignItems="center" justifyContent="center">
           <Typography
  variant="h4"
  sx={{
    fontWeight: 700,
    letterSpacing: "0.4rem",
    mb: 1,
    fontFamily: "'Roboto Mono', monospace",
    color: "#0C447C",
    textAlign: "center",
    animation: "fadeDown 0.6s ease both",

    "@keyframes fadeDown": {
      from: { opacity: 0, transform: "translateY(-16px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },

    "&::after": {
      content: '""',
      display: "block",
      margin: "8px auto 0",
      width: "48px",
      height: "3px",
      borderRadius: "2px",
      background: "#378ADD",
    },
  }}
>
  <Box
    component="img"
    src={Project}
    alt="Project"
    sx={{
      width: "700px",
      height: "auto",
      display: "block",
      mx: "auto",
    }}
  />
</Typography>
          </Grid>
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

  {/* 🔹 LEFT IMAGE SECTION */}
  <Grid item xs={12} sm={10} md={6} order={{ xs: 2, md: 1 }}>
    <Grid container direction="column" alignItems="center" spacing={3}>

      {/* MAIN IMAGE */}
      <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={0}
          sx={{
            width: { xs: "80%", sm: 300, md: 250 },
            height: { xs: 180, sm: 200, md: 230 },
            borderRadius: "16px",
            overflow: "hidden",

            background: "#ffffff", // 🔥 added
            boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",

            border: "0.5px solid #CECBF6",
            transition: "all 0.4s ease",

            "&:hover": {
              boxShadow: "0 12px 40px rgba(127,119,221,0.18)",
              transform: "translateY(-6px)",
            },
          }}
        >
          <Box component="img" src={electronics} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Paper>
      </Grid>

      {/* SECONDARY IMAGES */}
      <Grid item container justifyContent="center" spacing={4}>
        {[
          { src: RBD },
          { src: RAMS360 },
        ].map(({ src }, i) => (
          <Grid item key={i} xs={6} sm={5} md={5}>
            <Paper
              elevation={0}
              sx={{
                width: { md: 300, xs: 200, sm: 300 },
                height: { xs: 160, sm: 200, md: 230 },

                borderRadius: "16px",
                overflow: "hidden",

                background: "#ffffff",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",

                border: "0.5px solid #CECBF6",
                transition: "all 0.4s ease",

                "&:hover": {
                  boxShadow: "0 12px 40px rgba(127,119,221,0.18)",
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Box component="img" src={src} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>

  {/* 🔹 RIGHT CARD SECTION */}
  <Grid
    item
    xs={12}
    sm={10}
    md={6}
    order={{ xs: 1, md: 2 }}
    sx={{ display: "flex", justifyContent: "center" }}
  >
    <Card
      elevation={0}
      sx={{
        ...sharedCardSx(cardStyles.rams, "0.2s"),

        p: { xs: 2, sm: 3, md: 4 },

        width: "100%",
        maxWidth: { xs: "100%", sm: 600, md: 550 },

        // 🔥 NEW LOOK
        background: "#ffffff",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",
        borderRadius: "16px",
        border:"none"
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* TITLE */}
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" }, // 🔥 bigger
            mb: 1,
            textAlign: "center",
            color: cardStyles.rams.titleColor,
          }}
        >
          Rams360
        </Typography>

        {/* TAGS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          {["React", "Material UI","MongoDB","Node","Express"].map((t) => (
            <Box
              key={t}
              sx={{
                fontSize: "12.5px",
                px: "12px",
                py: "4px",
                borderRadius: "6px",
                fontWeight: 500,
                color: cardStyles.rams.tagColor,
                background: cardStyles.rams.tagBg,
                border: `0.5px solid ${cardStyles.rams.tagBorder}`,
              }}
            >
              {t}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            height: "0.5px",
            background: `linear-gradient(90deg, transparent, ${cardStyles.rams.border}, transparent)`,
            mb: 1.5,
          }}
        />

        {/* LIST */}
        <List dense>
          {[
            "Built custom UI components and forms for engineering data input and complex calculations.",
            "Integrated APIs for real-time failure rate computations and analytics.",
            "Implemented robust form validation and optimized error-handling mechanisms.",
            "Enhanced UI/UX by improving component reusability and responsiveness.",
            "Developed backend CRUD operations for managing application data efficiently.",
            "Designed RESTful APIs for seamless frontend-backend communication.",
            "Collaborated on full-stack development ensuring smooth integration.",
            "Debugged backend issues improving system reliability and performance.",
          ].map((text, i) =>
            bulletItem(text, i, cardStyles.rams.iconColor)
          )}
        </List>
      </Box>
    </Card>
  </Grid>

</Grid>
          {/* ─── PROJECT 1 : Aviar Platform ─────────────────────────── */}
     <Grid container spacing={1} mt={4} ml={3}>

  {/* 🔹 CARD */}
  <Grid item xs={12} sm={10} md={5} lg={4}>
    <Card
      elevation={0}
      sx={{
        ...sharedCardSx(cardStyles.aviar, "0.1s"),

        p: { xs: 2, sm: 3, md: 4 },
        width: { md: "85%" },

        // 🔥 White card + shadow
        background: "#ffffff",
        border:"none",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* 🔥 TITLE (bigger font) */}
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.25rem",
            },
            mb: 1,
            textAlign: "center",
            color: cardStyles.aviar.titleColor,
          }}
        >
          Aviar Platform
        </Typography>

        {/* TAGS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          {["React", "Bootstrap", "Material UI"].map((t) => (
            <Box
              key={t}
              sx={{
                fontSize: "12.5px", // 🔥 increased
                px: "12px",
                py: "4px",
                borderRadius: "6px",
                fontWeight: 500,
                color: cardStyles.aviar.tagColor,
                background: cardStyles.aviar.tagBg,
                border: `0.5px solid ${cardStyles.aviar.tagBorder}`,
              }}
            >
              {t}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            height: "0.5px",
            background: `linear-gradient(90deg, transparent, ${cardStyles.aviar.border}, transparent)`,
            mb: 1.5,
          }}
        />

        {/* 🔥 LIST TEXT (bigger font) */}
        <List dense>
          {[
            "Built custom UI components and forms for engineering data input",
            "Integrated RESTful APIs to dynamically load course data",
            "Wrote modular and reusable React.js components",
            "Developed Teacher module with course creation, schedule management, and student performance tracking",
            "Built Student module with enrollment flows, progress dashboards, and assignment submission UI",
            "Implemented Admin module with user management, role-based access control, and analytics overview",
          ].map((text, i) =>
            bulletItem(text, i, cardStyles.aviar.iconColor)
          )}
        </List>
      </Box>
    </Card>
  </Grid>

  {/* 🔹 IMAGE */}
  <Grid
    item
    xs={12}
    sm={10}
    md={6}
    lg={5}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 500, md: 500 },
        height: { xs: 200, sm: 220, md: 230 },
        borderRadius: "16px",
        overflow: "hidden",

        background: "#ffffff", 
        boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",

        border: "0.5px solid #B5D4F4",
        transition: "0.3s",

        "&:hover": {
          boxShadow: "0 12px 40px rgba(55,138,221,0.18)",
          transform: { md: "translateY(-6px)" },
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
        
          {/* ─── PROJECT 4 : Apartment Management System ────────────── */}

<Grid
  container
  direction="row"
  spacing={4}
  mt={4}
  p={{ xs: 1, sm: 2, md: 3 }}
  justifyContent="center"
  alignItems="center"
>

  {/* 🔹 LEFT IMAGE SECTION */}
  <Grid item xs={12} sm={10} md={6} order={{ xs: 2, md: 1 }}>
    <Grid container direction="column" spacing={2} alignItems="center">

      {/* MAIN IMAGE */}
      <Grid item sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 500, md: 500 },

            borderRadius: "16px",
            overflow: "hidden",

            background: "#ffffff",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",

            border: "0.5px solid #FAC775",
            transition: "all 0.3s ease-in-out",

            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 12px 40px rgba(186,117,23,0.18)",
            },
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

      {/* SECONDARY IMAGES */}
      <Grid item container spacing={2} justifyContent="center">
        {[apartment, ams].map((src, i) => (
          <Grid item key={i} xs={6} sm={6} md={6}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",

                background: "#ffffff",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",

                border: "0.5px solid #FAC775",
                transition: "all 0.3s ease-in-out",

                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 12px 40px rgba(186,117,23,0.18)",
                },
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

  {/* 🔹 RIGHT CARD SECTION */}
  <Grid
    item
    xs={12}
    sm={10}
    md={6}
    order={{ xs: 1, md: 2 }}
    sx={{ display: "flex", justifyContent: "center" }}
  >
    <Card
      elevation={0}
      sx={{
        ...sharedCardSx(cardStyles.apartment, "0.2s"),

        p: { xs: 2, sm: 3, md: 4 },

        width: "100%",
        maxWidth: { xs: "100%", sm: "100%", md: 550 },

        ml: { md: 10, sm: 0, xs: 0 },

        border:"none",
        background: "#ffffff",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* TITLE */}
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" }, // 🔥 increased
            mb: 1,
            textAlign: "center",
            color: cardStyles.apartment.titleColor,
            pt: 1,
          }}
        >
          Apartment Management System
        </Typography>

        {/* TAGS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          {["React", "MUI"].map((t) => (
            <Box
              key={t}
              sx={{
                fontSize: "12.5px",
                px: "12px",
                py: "4px",
                borderRadius: "6px",
                fontWeight: 500,
                color: cardStyles.apartment.tagColor,
                background: cardStyles.apartment.tagBg,
                border: `0.5px solid ${cardStyles.apartment.tagBorder}`,
              }}
            >
              {t}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            height: "0.5px",
            background: `linear-gradient(90deg, transparent, ${cardStyles.apartment.border}, transparent)`,
            mb: 1.5,
          }}
        />

        {/* LIST */}
        <List dense>
          {[
            "Improved frontend stability and UI responsiveness.",
            "Implemented multi-language support.",
            "Refined UI layout using Material UI theming.",
            "Optimized component reusability and reduced redundant renders.",
            "Built tenant and owner dashboards with real-time updates.",
            "Developed maintenance request module with tracking system.",
            "Integrated payment summary views for rent and dues management.",
            "Implemented role-based access for Admin, Owner, and Tenant users.",
          ].map((text, i) =>
            bulletItem(text, i, cardStyles.apartment.iconColor)
          )}

          <ListItem disablePadding sx={{ mt: 1 }}>
            <Link
              href="https://www.liveez.in/web"
              target="_blank"
              underline="hover"
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" }, // 🔥 improved
                color: cardStyles.apartment.iconColor,
                wordBreak: "break-all",
                fontWeight: 500,
              }}
            >
              liveez.in/web
            </Link>
          </ListItem>
        </List>

      </Box>
    </Card>
  </Grid>

</Grid>
          {/* ─── PROJECT 3 : Reda Boutique ──────────────────────────── */}
       <Grid
  container
  spacing={4}
  mt={4}
  p={{ xs: 1, sm: 2 }}
  justifyContent="center"
  alignItems="center"
>

  {/* 🔹 LEFT CARD */}
  <Grid item xs={12} sm={10} md={5} lg={4}>
    <Card
      elevation={0}
      sx={{
        ...sharedCardSx(cardStyles.reda, "0.1s"),

        p: { xs: 2, sm: 3, md: 4 },
        width: "100%",

       border:"none",
        background: "#ffffff",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* TITLE */}
        <Typography
          variant="subtitle1"
          fontWeight={700}
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" }, // 🔥 increased
            mb: 1,
            textAlign: "center",
            color: cardStyles.reda.titleColor,
          }}
        >
          Reda Boutique Fashion
        </Typography>

        {/* TAGS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.8,
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          {["React.js", "Tailwind CSS"].map((t) => (
            <Box
              key={t}
              sx={{
                fontSize: "12.5px",
                px: "12px",
                py: "4px",
                borderRadius: "6px",
                fontWeight: 500,
                color: cardStyles.reda.tagColor,
                background: cardStyles.reda.tagBg,
                border: `0.5px solid ${cardStyles.reda.tagBorder}`,
              }}
            >
              {t}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            height: "0.5px",
            background: `linear-gradient(90deg, transparent, ${cardStyles.reda.border}, transparent)`,
            mb: 1.5,
          }}
        />

        {/* LIST */}
        <List dense>
          {[
            "Designed and developed a responsive website showcasing products and brand identity.",
            "Utilized HTML5, CSS3, Bootstrap for clean and user-friendly interface.",
            "Implemented mobile-first responsive design for cross-device compatibility.",
            "Structured key sections (Home, About, Products, Contact) for better navigation.",
          ].map((text, i) =>
            bulletItem(text, i, cardStyles.reda.iconColor)
          )}

          <ListItem disablePadding sx={{ mt: 1 }}>
            <Link
              href="https://theredastudio.com/"
              target="_blank"
              underline="hover"
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" }, // 🔥 increased
                color: cardStyles.reda.iconColor,
                wordBreak: "break-all",
                fontWeight: 500,
              }}
            >
              theredastudio.com
            </Link>
          </ListItem>
        </List>
      </Box>
    </Card>
  </Grid>

  {/* 🔹 IMAGE SECTION */}
  <Grid item xs={12} sm={10} md={6} lg={5}>
    <Grid container spacing={2} justifyContent="center">

      {[reda2, reda1].map((src, i) => (
        <Grid item key={i} xs={6} sm={6} md={6}>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: { xs: 180, sm: 230, md: 280 },

              borderRadius: "16px",
              overflow: "hidden",

              background: "#ffffff", // 🔥 white
              boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",

              border: "0.5px solid #9FE1CB",
              transition: "all 0.4s ease",

              "&:hover": {
                boxShadow: "0 12px 40px rgba(29,158,117,0.18)",
                transform: "translateY(-6px)",
              },
            }}
          >
            <Box
              component="img"
              src={src}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Paper>
        </Grid>
      ))}

    </Grid>
  </Grid>

</Grid>

       

          {/* ─── PROJECT 5 : Moogambigai Enterprises ────────────────── */}
     <Grid container justifyContent="center" p={{ xs: 1, sm: 2 }} mt={4}>
  <Grid item xs={12} sm={10} md={8} lg={7}>

    <Card
      elevation={0}
      sx={{
        ...sharedCardSx(cardStyles.moogambigai, "0.1s"),

        p: { xs: 2, sm: 3, md: 4 },
        width: { md: 1000, xs: "100%", sm: "100%" },

       border:"none",
        background: "#ffffff",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.10)",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          mb={1}
        >
          <BusinessIcon
            sx={{
              color: cardStyles.moogambigai.iconColor,
              fontSize: 22,
            }}
          />

          {/* TITLE */}
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" }, // 🔥 increased
              color: cardStyles.moogambigai.titleColor,
              textAlign: "center",
            }}
          >
            Moogambigai Enterprises
          </Typography>

          {/* TAG */}
          <Box
            sx={{
              fontSize: "12.5px",
              px: "12px",
              py: "4px",
              borderRadius: "6px",
              fontWeight: 500,
              color: cardStyles.moogambigai.tagColor,
              background: cardStyles.moogambigai.tagBg,
              border: `0.5px solid ${cardStyles.moogambigai.tagBorder}`,
            }}
          >
            Freelancing
          </Box>
        </Box>

        {/* DIVIDER */}
        <Box
          sx={{
            height: "0.5px",
            background: `linear-gradient(90deg, transparent, ${cardStyles.moogambigai.border}, transparent)`,
            mb: 1.5,
          }}
        />

        {/* LIST */}
        <List dense>
          {[
            "Developed a responsive business website for wiring harness services.",
            "Showcased automotive, industrial, and custom wiring solutions.",
            "Implemented modern UI with smooth navigation and clean layout.",
            "Optimized for mobile responsiveness and SEO visibility.",
          ].map((text, i) =>
            bulletItem(text, i, cardStyles.moogambigai.iconColor)
          )}

          <ListItem disablePadding sx={{ mt: 1 }}>
            <Link
              href="https://moogambigaienterprise.com/"
              target="_blank"
              underline="hover"
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" }, // 🔥 improved
                color: cardStyles.moogambigai.iconColor,
                wordBreak: "break-all",
                fontWeight: 500,
              }}
            >
              moogambigaienterprise.com
            </Link>
          </ListItem>
        </List>

      </Box>
    </Card>

  </Grid>
</Grid>

        </Box>
      </Box>
    </Grid>
  );
}

export default Projects;