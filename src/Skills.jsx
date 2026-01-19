import React from "react";
import {
  Card,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import LayersIcon from "@mui/icons-material/Layers";
import StyleIcon from "@mui/icons-material/Style";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

import JavascriptIcon from "@mui/icons-material/Javascript";
import SourceIcon from "@mui/icons-material/Source";
import GitHubIcon from "@mui/icons-material/GitHub";
import DevicesIcon from "@mui/icons-material/Devices";
import ApiIcon from "@mui/icons-material/Api";
import LanguageIcon from "@mui/icons-material/Language";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

import { FaReact } from "react-icons/fa";
import { SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";


import skill from "./assets/skill.png";
import pattern2 from "./assets/pattern2.png";

function Skills() {
  return (
    <Grid
      id="skill"
      container
      sx={{
        position: "relative",
        backgroundImage: `url(${pattern2})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        overflow: "hidden",
        p: { xs: 1, sm: 2, md: 3 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #e9d5ff, #e9d5ff)",
          opacity: 0.8,
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          px: { xs: 1, sm: 2 },
        }}
      >
        {/* Title */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          gap={1}
          mb={{ xs: 2, sm: 3, md: 4 }}
        >
          <Box
            component="img"
            src={skill}
            sx={{ width: { xs: 24, sm: 26, md: 28 } }}
            alt="skill"
          />
          <Typography
            variant="h6"
            fontWeight={{ md: "bold", xs: "bold", sm: "bold" }}
            sx={{
              color: "primary.main",
              fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            SKILLS
          </Typography>
        </Grid>

        {/* Cards Grid - 2 per row on mobile, 4 per row on desktop */}
        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {/* Frontend */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={cardStyle}>
              <Typography
                variant="subtitle1"
                fontWeight={{ md: "bold", xs: "bold", sm: "bold" }}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: "0.6rem", sm: "0.95rem", md: "1rem" } }}
              >
                Frontend Technologies
              </Typography>

              <List dense disablePadding>
                <SkillItem
                  icon={<FaReact color="#61DBFB" size={20} />}
                  text="React.js"
                />
                <SkillItem
                  icon={<PhoneIphoneIcon color="success" fontSize="small" />}
                  text="React Native"
                />
                <SkillItem
                  icon={<AccountTreeIcon color="secondary" fontSize="small" />}
                  text="Redux"
                />
              </List>

              <Typography
                variant="subtitle2"
                fontWeight={{ md: "bold", xs: "bold", sm: "bold" }}
                mt={2}
                textAlign={{ xs: "center", md: "left" }}
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.95rem", md: "0.95rem" },
                }}
              >
                UI & Styling
              </Typography>
              <List dense disablePadding>
                <SkillItem
                  icon={<LayersIcon color="warning" fontSize="small" />}
                  text="Material UI"
                />
                <SkillItem
                  icon={<ViewQuiltIcon color="info" fontSize="small" />}
                  text="Bootstrap"
                />
                <SkillItem
                  icon={
                    <StyleIcon sx={{ color: "#38bdf8" }} fontSize="small" />
                  }
                  text="Tailwind CSS"
                />
              </List>
            </Card>
          </Grid>

          {/* Web Tech */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={cardStyle}>
              <Typography
                variant="subtitle1"
                fontWeight={{ md: "bold", xs: "bold", sm: "bold" }}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: "0.7rem", sm: "0.95rem", md: "1rem" } }}
              >
                Web Technologies
              </Typography>
              <List dense disablePadding>
                <SkillItem
                  icon={
                    <JavascriptIcon
                      sx={{ color: "#f7df1e" }}
                      fontSize="small"
                    />
                  }
                  text="JavaScript (ES6+)"
                />
                <SkillItem
                  icon={<HtmlIcon color="error" fontSize="small" />}
                  text="HTML5"
                />
                <SkillItem
                  icon={<CssIcon color="info" fontSize="small" />}
                  text="CSS3"
                />
                <SkillItem
                  icon={<SiMongodb size={20} color="#47A248" />}
                  text="MongoDB"
                />
                <SkillItem
                  icon={<SiNodedotjs size={20} color="#339933" />}
                  text="Node.js"
                />

                <SkillItem
                  icon={<SiExpress size={22} color="#000000" />}
                  text="Express.js"
                />
              </List>
            </Card>
          </Grid>

          {/* Tools */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={cardStyle}>
              <Typography
                variant="subtitle1"
                fontWeight={{ md: "bold", xs: "bold", sm: "bold" }}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: "0.7rem", sm: "0.95rem", md: "1rem" } }}
              >
                Tools & Platforms
              </Typography>
              <List dense disablePadding>
                <SkillItem
                  icon={<SourceIcon color="warning" fontSize="small" />}
                  text="Git"
                />
                <SkillItem
                  icon={<GitHubIcon fontSize="small" />}
                  text="GitHub"
                />
                <SkillItem
                  icon={<CodeIcon color="primary" fontSize="small" />}
                  text="VS Code"
                />
                <SkillItem
                  icon={
                    <DesignServicesIcon color="secondary" fontSize="small" />
                  }
                  text="Figma"
                />
              </List>
            </Card>
          </Grid>

          {/* Core */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card sx={cardStyle}>
              <Typography
                variant="subtitle1"
                fontWeight={{ md: "bold", xs: "bold", sm: "bold" }}
                textAlign={{ xs: "center", md: "left" }}
                sx={{ fontSize: { xs: "0.7rem", sm: "0.95rem", md: "1rem" } }}
              >
                Core Concepts
              </Typography>
              <List
                dense
                disablePadding
                sx={{ fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" } }}
              >
                <SkillItem
                  icon={<DevicesIcon color="primary" fontSize="small" />}
                  text="Responsive Design"
                />
                <SkillItem
                  icon={<ApiIcon color="secondary" fontSize="small" />}
                  text="API Integration"
                />
                <SkillItem
                  icon={<LanguageIcon color="success" fontSize="small" />}
                  text="Cross Browser"
                />
                <SkillItem
                  icon={<AccountTreeIcon color="warning" fontSize="small" />}
                  text="State Management"
                />
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

/* Reusable Skill Item */
const SkillItem = ({ icon, text }) => (
  <ListItem
    sx={{
      justifyContent: { xs: "center", md: "flex-start" },
      textAlign: { xs: "center", md: "left" },
      px: { xs: 0, sm: 1 },
      py: { xs: 0.25, sm: 0.5 },
    }}
  >
    <ListItemIcon
      sx={{
        minWidth: { xs: 32, sm: 36 },
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {icon}
    </ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        sx: {
          fontSize: { xs: "0.5rem", sm: "0.8rem", md: "0.85rem" },
          fontWeight: { xs: 400, md: 500 },
        },
      }}
    />
  </ListItem>
);

/* Card Styles - All cards will have same width */
const cardStyle = {
  p: { xs: 2, sm: 1.5, md: 2 },
  height: { xs: 220, sm: 300, md: 320 },
  width: { sm: 300, md: "100%" }, // All cards take full width of their grid item
  maxWidth: { xs: "100%", sm: "100%", md: "100%" }, // Same max width for all
  transition: "all 0.3s ease-in-out",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: {
      xs: "translateY(-4px)",
      sm: "translateY(-4px)",
      md: "scale(1.05)",
    },
    boxShadow: { xs: 4, sm: 6, md: 10 },
  },
};

export default Skills;
