import React from "react";
import { Grid, Box, Typography } from "@mui/material";

function Quotes() {
    const quotes = [
        "Code. Debug. Learn. Repeat.",
        "Every bug is a lesson in disguise.",
        "Build once, reuse everywhere.",
        "Learning React, one component at a time."
    ];
    
    return (
        <Box sx={{ 
            flexGrow: 1, 
            p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
            my: { xs: 2, md: 3 } // Responsive margin
        }}>
            <Grid 
                container 
                spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
                justifyContent="center"
                alignItems="center"
            >
                {quotes.map((quote, index) => (
                    <Grid 
                        item 
                        key={index}
                        xs={6} // 2 items per row on mobile
                        sm={4} // 3 items per row on small screens
                        md={3} // 4 items per row on desktop
                        sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <Box
                            sx={{
                                width: { 
                                    xs: 100,   // Smaller on mobile
                                    sm: 110,   // Medium on tablet
                                    md: 150   // Normal on desktop
                                },
                                height: { 
                                    xs: 100, 
                                    sm: 110, 
                                    md: 150 
                                },
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #667eea, #764ba2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                p: { xs: 1.5, sm: 2, md: 3 }, // Responsive padding
                                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: { 
                                        xs: "scale(1.02)", // Smaller hover effect on mobile
                                        md: "scale(1.05)"  // Normal hover on desktop
                                    },
                                },
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#fff",
                                  fontWeight:{md:"bold",xs:"bold",sm:"bold"},
                                    fontSize: { 
                                        xs: "0.7rem",   // Smaller font on mobile
                                        sm: "0.85rem",  // Medium on tablet
                                        md: "0.9rem"    // Normal on desktop
                                    },
                                    lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 }
                                }}
                            >
                                “{quote}”
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Quotes;