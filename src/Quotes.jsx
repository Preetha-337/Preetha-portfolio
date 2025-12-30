import React from "react"
import { Container, Stack,AppBar,Toolbar, Grid, Box,Typography} from "@mui/material";
function Quotes(){
    const quotes = [
  "Code. Debug. Learn. Repeat.",
  "Every bug is a lesson in disguise.",
  "Build once, reuse everywhere.",
  "Learning React, one component at a time."
];
    return(
      <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {quotes.map((quote, index) => (
          <Grid item key={index}>
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                “{quote}”
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    )
        
}
export default Quotes;