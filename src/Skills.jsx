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
import { SiMongodb } from "react-icons/si";

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
        p: { xs: 1, md: 2 },
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
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Title */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          gap={1}
          mb={3}
        >
          <Box component="img" src={skill} sx={{ width: 28 }} alt="skill" />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "primary.main" }}
          >
            SKILLS
          </Typography>
        </Grid>

        {/* Cards */}
        <Grid
          container
              gap={{ xs: 4, md: 5 }}
         
          justifyContent="center"
        >
          {/* Frontend */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="subtitle1" fontWeight="bold">
                Frontend Technologies
              </Typography>

              <List dense>
                <SkillItem icon={<FaReact color="#61DBFB" size={22} />} text="React.js" />
                <SkillItem icon={<PhoneIphoneIcon color="success" />} text="React Native" />
                <SkillItem icon={<AccountTreeIcon color="secondary" />} text="Redux" />
              </List>

              <Typography variant="subtitle2" fontWeight="bold" mt={2}>
                UI & Styling
              </Typography>
              <List dense>
                <SkillItem icon={<LayersIcon color="warning" />} text="Material UI" />
                <SkillItem icon={<ViewQuiltIcon color="info" />} text="Bootstrap" />
                <SkillItem icon={<StyleIcon sx={{ color: "#38bdf8" }} />} text="Tailwind CSS" />
              </List>
            </Card>
          </Grid>

          {/* Web Tech */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="subtitle1" fontWeight="bold">
                Web Technologies
              </Typography>
              <List dense>
                <SkillItem icon={<JavascriptIcon sx={{ color: "#f7df1e" }} />} text="JavaScript (ES6+)" />
                <SkillItem icon={<HtmlIcon color="error" />} text="HTML5" />
                <SkillItem icon={<CssIcon color="info" />} text="CSS3" />
                <SkillItem icon={<SiMongodb size={22} color="#47A248" />} text="MongoDB" />
              </List>
            </Card>
          </Grid>

          {/* Tools */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="subtitle1" fontWeight="bold">
                Tools & Platforms
              </Typography>
              <List dense>
                <SkillItem icon={<SourceIcon color="warning" />} text="Git" />
                <SkillItem icon={<GitHubIcon />} text="GitHub" />
                <SkillItem icon={<CodeIcon color="primary" />} text="VS Code" />
                <SkillItem icon={<DesignServicesIcon color="secondary" />} text="Figma" />
              </List>
            </Card>
          </Grid>

          {/* Core */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={cardStyle}>
              <Typography variant="subtitle1" fontWeight="bold">
                Core Concepts
              </Typography>
              <List dense>
                <SkillItem icon={<DevicesIcon color="primary" />} text="Responsive Design" />
                <SkillItem icon={<ApiIcon color="secondary" />} text="API Integration" />
                <SkillItem icon={<LanguageIcon color="success" />} text="Cross Browser" />
                <SkillItem icon={<AccountTreeIcon color="warning" />} text="State Management" />
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
    }}
  >
    <ListItemIcon sx={{ minWidth: 36, justifyContent: "center" }}>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

/* Card Styles */
const cardStyle = {
  p: { xs: 1.5, sm: 2 },
  height: { xs: 320, sm: 300 },
  width: { xs: 300, sm:  300,md:"100%" },
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: { xs: "none", md: "scale(1.05)" },
    boxShadow: 10,
  },
};

export default Skills;
