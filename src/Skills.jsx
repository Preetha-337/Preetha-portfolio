import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt,
} from "react-icons/fa";

import {
  SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiRedux, SiBootstrap, SiMui,
} from "react-icons/si";

import { MdDevices, MdApi } from "react-icons/md";

const skillData = [
  {
    title: "Frontend",
    border: "#B5D4F4",
    titleColor: "#0C447C",
    bg: "#F8FAFF",
    tagBg: "#E6F1FB",
    tagBorder: "#B5D4F4",
    items: [
      { name: "React.js", icon: <FaReact color="#61DBFB" /> },
      { name: "Redux", icon: <SiRedux color="#764abc" /> },
      { name: "Material UI", icon: <SiMui color="#007FFF" /> },
      { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
        { name: "React Native", icon: <FaReact color="#61DBFB" /> },
    ],
  },
  {
    title: "Web Basics",
    border: "#FAC775",
    titleColor: "#633806",
    bg: "#FFF8F0",
    tagBg: "#FAEEDA",
    tagBorder: "#FAC775",
    items: [
      { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    ],
  },
  {
    title: "Backend",
    border: "#9FE1CB",
    titleColor: "#085041",
    bg: "#F3F9EC",
    tagBg: "#E1F5EE",
    tagBorder: "#9FE1CB",
    items: [
      { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
      { name: "Express.js", icon: <SiExpress color="#333" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "REST API", icon: <MdApi color="#f59e0b" /> },
    ],
  },
  {
    title: "Tools",
    border: "#CECBF6",
    titleColor: "#3C3489",
    bg: "#F5F3FF",
    tagBg: "#EEEDFE",
    tagBorder: "#CECBF6",
    items: [
      { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
      { name: "Figma", icon: <FaFigma color="#a259ff" /> },
    ],
  },
  {
    title: "Concepts",
    border: "#9FE1CB",
    titleColor: "#04342C",
    bg: "#F0FBF7",
    tagBg: "#E1F5EE",
    tagBorder: "#9FE1CB",
    items: [
      { name: "Responsive", icon: <MdDevices color="#3b82f6" /> },
      { name: "API Integration", icon: <MdApi color="#10b981" /> },
    ],
  },
];

function Skills() {
  return (
    <Box sx={{ px: 2, py: 6 }} id="skill">

      {/* Title */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
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
          Skills
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {skillData.map((section, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex" }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                background: section.bg,
                border: `0.5px solid ${section.border}`,
                width: "100%",
                minHeight: { xs: 240, md: 280 },
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                animation: `fadeUp 0.5s ease ${index * 0.1}s both`,

                "@keyframes fadeUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },

                "@keyframes shimmerTop": {
                  "0%": { backgroundPosition: "-200% center" },
                  "100%": { backgroundPosition: "200% center" },
                },

                // Top shimmer line
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${section.border}, transparent)`,
                  backgroundSize: "200% 100%",
                  animation: "shimmerTop 2.8s linear infinite",
                  zIndex: 3,
                },

                // Dot grid overlay
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(180,200,230,0.35) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  opacity: 0.25,
                  zIndex: 0,
                  pointerEvents: "none",
                },

                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: `0 16px 40px ${section.border}80`,
                  borderColor: section.titleColor,
                },
              }}
            >
              {/* Section Title */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mb: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={600}
                  textAlign="center"
                  sx={{
                    color: section.titleColor,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    letterSpacing: "0.02em",
                  }}
                >
                  {section.title}
                </Typography>
              </Box>

              {/* Divider */}
              <Box
                sx={{
                  height: "0.5px",
                  background: `linear-gradient(90deg, transparent, ${section.border}, transparent)`,
                  mb: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* Skills Grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1.5,
                  flexGrow: 1,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {section.items.map((skill, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1,
                      borderRadius: "10px",
                      background: section.tagBg,
                      border: `0.5px solid ${section.tagBorder}`,
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: `0 4px 14px ${section.border}60`,
                        borderColor: section.titleColor,
                      },
                    }}
                  >
                    <Box sx={{ fontSize: "1.4rem", flexShrink: 0 }}>
                      {skill.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.78rem", md: "0.82rem" },
                        color: "#1a1a1a",
                        fontWeight: 500,
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;