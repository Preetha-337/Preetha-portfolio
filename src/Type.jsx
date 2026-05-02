import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";

function useTypewriter(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return displayed;
}

function TypingTitle() {
  const roles = [
    "MERN Stack Developer",
   
  ];

  const typedText = useTypewriter(roles);

  return (
    <Grid>
      <Typography
        variant="h5"
        sx={{
          color: "#0C447C",
          fontWeight: 600,
          fontSize: { xs: "1.2rem", sm: "1.35rem", md: "2.5rem" },
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {typedText}

        {/* Blinking cursor */}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "2px",
            height: "1.2em",
            background: "#378ADD",
            ml: "3px",
            verticalAlign: "middle",
            borderRadius: "1px",
            animation: "blink 0.8s step-end infinite",
            "@keyframes blink": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0 },
            },
          }}
        />
      </Typography>
    </Grid>
  );
}

export default TypingTitle;