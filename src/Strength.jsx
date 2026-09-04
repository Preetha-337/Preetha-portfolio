import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import PaletteIcon from "@mui/icons-material/Palette";
import BoltIcon from "@mui/icons-material/Bolt";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SpeedIcon from "@mui/icons-material/Speed";

const strengths = [
  {
    name: "Problem Solving",
    icon: <ExtensionIcon sx={{ fontSize: 38 }} />,
    bg: "#F8FAFF",
    border: "#B5D4F4",
    iconColor: "#185FA5",
    titleColor: "#0C447C",
    tagBg: "#E6F1FB",
    delay: "0s",
  },
  {
    name: "UI/UX Focused",
    icon: <PaletteIcon sx={{ fontSize: 38 }} />,
    bg: "#F5F3FF",
    border: "#CECBF6",
    iconColor: "#534AB7",
    titleColor: "#3C3489",
    tagBg: "#EEEDFE",
    delay: "0.15s",
  },
  {
    name: "Fast Learner",
    icon: <BoltIcon sx={{ fontSize: 38 }} />,
    bg: "#FFF8F0",
    border: "#FAC775",
    iconColor: "#854F0B",
    titleColor: "#633806",
    tagBg: "#FAEEDA",
    delay: "0.3s",
  },
  {
    name: "Team Collaboration",
    icon: <GroupsIcon sx={{ fontSize: 38 }} />,
    bg: "#F3F9EC",
    border: "#9FE1CB",
    iconColor: "#0F6E56",
    titleColor: "#085041",
    tagBg: "#E1F5EE",
    delay: "0.45s",
  },
  {
    name: "React.js Expert",
    icon: <CodeIcon sx={{ fontSize: 38 }} />,
    bg: "#F8FAFF",
    border: "#B5D4F4",
    iconColor: "#185FA5",
    titleColor: "#0C447C",
    tagBg: "#E6F1FB",
    delay: "0.6s",
  },

  {
    name: "REST API Integration",
    icon: <StorageIcon sx={{ fontSize: 38 }} />,
    bg: "#F0FBF7",
    border: "#9FE1CB",
    iconColor: "#0F6E56",
    titleColor: "#04342C",
    tagBg: "#E1F5EE",
    delay: "0.9s",
  },
  {
    name: "Responsive Design",
    icon: <DevicesIcon sx={{ fontSize: 38 }} />,
    bg: "#FFF8F0",
    border: "#FAC775",
    iconColor: "#854F0B",
    titleColor: "#633806",
    tagBg: "#FAEEDA",
    delay: "1.05s",
  },

  {
    name: "Performance Optimization",
    icon: <SpeedIcon sx={{ fontSize: 38 }} />,
    bg: "#F5F3FF",
    border: "#CECBF6",
    iconColor: "#534AB7",
    titleColor: "#3C3489",
    tagBg: "#EEEDFE",
    delay: "1.35s",
  },
];

export default function Strength() {
  return (
    <Box
      id="strength"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, md: 6 },
        overflow: "hidden",
        position: "relative",
        background: "#139add",

        // Subtle dot grid background
        backgroundImage:
          "radial-gradient(circle, #B5D4F4 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerTop {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Title */}
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
        Strengths
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: { xs: "0.85rem", md: "1.5rem", sm: "1.5rem" },
          color: "#ffffff",
          textAlign: "center",
          mb: 6,
          mt: 1,
          maxWidth: 520,
          animation: "fadeDown 0.6s ease 0.15s both",
          lineHeight: 1.7,
        }}
      >
        What I bring as a MERN Stack Developer — from clean code to
        collaborative problem solving.
      </Typography>

      {/* Cards Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1100 }}
      >
        {strengths.map((s, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              elevation={0}
              sx={{
                height: { xs: 180, md: 200 },
                background: s.bg,
                width: { xs: 200, md: 250, sm: 150 },
                border: `0.5px solid ${s.border}`,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                animation: `fadeUp 0.5s ease ${s.delay} both`,
                transition: "all 0.3s ease-in-out",

                // Top shimmer line
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${s.border}, transparent)`,
                  backgroundSize: "200% 100%",
                  animation: "shimmerTop 2.8s linear infinite",
                  zIndex: 3,
                },

                // Dot grid texture inside card
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(circle, rgba(180,200,230,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.3,
                  zIndex: 0,
                  pointerEvents: "none",
                },

                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: `0 16px 40px ${s.border}90`,
                  borderColor: s.iconColor,
                  animation: "none",
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                {/* Icon circle */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: s.tagBg,
                    border: `0.5px solid ${s.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.iconColor,
                    animation: `floatCard 4s ease-in-out ${s.delay} infinite`,
                    transition: "all 0.3s ease",
                    "& .MuiCard-root:hover &": {
                      background: s.border,
                    },
                  }}
                >
                  {s.icon}
                </Box>

                {/* Name */}
                <Typography
                  variant="body1"
                  sx={{
                    color: s.titleColor,
                    fontWeight: 600,
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: { xs: "0.8rem", md: "0.85rem" },
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {s.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
