import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box >
   
      <Box sx={{ display: "flex", alignItems: "center" }}>
      
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "block", md: "none" }, color: "white" }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>

        {/* DESKTOP MENU */}
        <List
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            padding: 0,
          }}
        >
          {menuItems.map((item) => (
            <ListItem key={item.text} button component="a" href={item.link}>
              <ListItemText
                primary={item.text}
                sx={{ color: "white" }} 
              />
            </ListItem>
          ))}
        </List>
      </Box>

   
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 150, background: "linear-gradient(135deg, #667eea, #764ba2)", height: "100%",}}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                component="a"
                href={item.link}
                onClick={() => setOpen(false)} 
                
              >
                <ListItemText
                  primary={item.text}
                  sx={{ color: "white" }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;

const menuItems = [
  { text: "Home", link: "#about" },
  { text: "Skills", link: "#skill" },
  { text: "Projects", link: "#Project" },
  { text: "Education", link: "#Education" },
  { text: "Experience", link: "#Experience" },
];
