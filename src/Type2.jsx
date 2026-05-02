import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

function TypingHeadline() {
  const phrases = [
    "Turning ideas into intuitive React experiences",
    "Building scalable MERN stack applications",
    "Crafting pixel-perfect UI with Material-UI",
    "Bringing designs to life with clean code",
  ];

  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          // Pause at end before deleting
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        // Deleting
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? 40 : 65);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <Box sx={{ display: "inline-flex", alignItems: "center",justifyContent:"center" }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          background: "linear-gradient(90deg, #0aa2f4, #2b7ad4, #2bd6ca)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: 0.8,
          fontSize: {
            xs: "1rem",
            sm: "1.3rem",
            md: "1.8rem",
          },
          lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
          px: { xs: 1, sm: 2, md: 0 },
          minHeight: { xs: "1.5rem", sm: "2rem", md: "2.8rem" },
        }}
      >
        {displayed}

        {/* Blinking cursor */}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: { xs: "2px", md: "3px" },
            height: { xs: "1rem", sm: "1.3rem", md: "1.8rem" },
            background: "linear-gradient(180deg, #2faade, #2ab4cf)",
            ml: "3px",
            borderRadius: "2px",
            verticalAlign: "middle",
            animation: "blink 1s step-start infinite",
            "@keyframes blink": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0 },
            },
          }}
        />
      </Typography>
    </Box>
  );
}

export default TypingHeadline;