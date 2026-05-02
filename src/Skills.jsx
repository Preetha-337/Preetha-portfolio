import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiMui,
} from "react-icons/si";

import { MdDevices, MdApi } from "react-icons/md";

import skill from "./assets/skill.png";

const skillData = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact color="#61DBFB" /> },
      { name: "Redux", icon: <SiRedux color="#764abc" /> },
      { name: "Material UI", icon: <SiMui color="#007FFF" /> }, // ✅ added
      { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
    ],
  },
  {
    title: "Web Basics",
    items: [
      { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> }, // ✅ added
      { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> }, // ✅ added
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "API", icon: <MdApi color="#f59e0b" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
      { name: "Figma", icon: <FaFigma color="#a259ff" /> },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "Responsive", icon: <MdDevices color="#3b82f6" /> },
      { name: "API Integration", icon: <MdApi color="#10b981" /> },
    ],
  },
];

function Skills() {
  return (
    <Box sx={{ px: 2, py: 6 }}   id="skill">
      {/* Title */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.6rem",
            mb: 1,
            fontFamily: "'Roboto Mono', monospace",
            
            /* Gradient Text Effect */
            background: "linear-gradient(90deg, #fff, #fafafa, #78768d, #0cfe75)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            
            /* Animation */
            animation: "titleGradient 6s ease infinite",
            
            /* Glow */
            filter: "drop-shadow(0 0 8px rgba(190, 77, 255, 0.4))",
            textAlign: "center"
          }}
        >
          SKILLS
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
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
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",

                width: "100%",
                height: "100%",
                minHeight: { xs: 260, md: 300 },

                display: "flex",
                flexDirection: "column",

                transition: "0.4s",

                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "20px",
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                },
              }}
            >
              {/* Section Title */}
              <Typography
                variant="h6"
                fontWeight="bold"
                textAlign="center"
                mb={2}
                sx={{ color: "white" }}
              >
                {section.title}
              </Typography>

              {/* Skills */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                  flexGrow: 1,
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
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.06)",
                      transition: "0.3s",

                      "&:hover": {
                        background: "rgba(255,255,255,0.12)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box sx={{ fontSize: "1.5rem" }}>{skill.icon}</Box>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "white",
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