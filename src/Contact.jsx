import { Card, Box, Typography, List, ListItem, ListItemIcon, ListItemText,Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactCard() {
  return (
     <Grid
      container
      spacing={3}
      alignItems="center"
      sx={{
        mt: 3,
        px: { xs: 2, sm: 3, md: 6 },
        flexWrap: "nowrap",     
        overflowX: "auto",        
      }}
    >
    <Card
      elevation={0}
      sx={{
        width: { xs: "100%", md: "50%" },
        p: { xs: 2, sm: 3 },
        mt: { xs: 3, md: 0 },
        background: "#F8FAFF",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
        border: "0.5px solid #B5D4F4",
        borderRadius: "18px",
        position: "relative",
        overflow: "hidden",
        animation: "fadeSlideIn 0.6s cubic-bezier(.22,.68,0,1.2) both",
        "&:hover": {
          transform: { xs: "none", md: "scale(1.025)" },
          boxShadow: "0 8px 32px rgba(55,138,221,0.10)",
        },
        transition: "all 0.3s ease-in-out",
        "@keyframes fadeSlideIn": {
          from: { opacity: 0, transform: "translateY(18px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Box
          sx={{
            width: 4,
            height: 20,
            borderRadius: "2px",
            background: "#378ADD",
          }}
        />
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{ fontSize: { xs: "0.95rem", sm: "2rem" }, color: "#0C447C" }}
        >
          Contact Information
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: "0.5px",
          background: "#B5D4F4",
          mb: 2,
        }}
      />

      <List disablePadding>
        {/* Email */}
        <ListItem
          component="a"
          href="mailto:preethat1408@gmail.com"
          sx={{
            px: 0,
            py: { xs: 0.75, md: 1 },
            textDecoration: "none",
            borderRadius: "10px",
            "&:hover .icon-wrap": { background: "#B5D4F4" },
            "&:hover": { background: "#EEF5FF" },
            px: 1,
            mx: -1,
            transition: "all 0.2s ease",
          }}
        >
          <ListItemIcon sx={{ minWidth: { xs: 40, md: 44 } }}>
            <Box
              className="icon-wrap"
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#E6F1FB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
              }}
            >
              <EmailIcon sx={{ fontSize: 16, color: "#185FA5" }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary="preethat1408@gmail.com"
            secondary="Email"
            primaryTypographyProps={{
              sx: {
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.88rem" },
                color: "#1a1a1a",
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            secondaryTypographyProps={{
              sx: { fontSize: "0.72rem", color: "#888780" },
            }}
          />
        </ListItem>

        {/* Phone */}
        <ListItem
          component="a"
          href="tel:8778662568"
          sx={{
            px: 1,
            mx: -1,
            py: { xs: 0.75, md: 1 },
            textDecoration: "none",
            borderRadius: "10px",
            "&:hover .icon-wrap": { background: "#C0DD97" },
            "&:hover": { background: "#F3F9EC" },
            transition: "all 0.2s ease",
          }}
        >
          <ListItemIcon sx={{ minWidth: { xs: 40, md: 44 } }}>
            <Box
              className="icon-wrap"
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#EAF3DE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
              }}
            >
              <PhoneIcon sx={{ fontSize: 16, color: "#3B6D11" }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary="8778662568"
            secondary="Phone"
            primaryTypographyProps={{
              sx: {
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.88rem" },
                color: "#1a1a1a",
                fontWeight: 500,
              },
            }}
            secondaryTypographyProps={{
              sx: { fontSize: "0.72rem", color: "#888780" },
            }}
          />
        </ListItem>

        {/* LinkedIn */}
        <ListItem
          component="a"
          href="https://linkedin.com/in/preetha-t78405a258"
          target="_blank"
          sx={{
            px: 1,
            mx: -1,
            py: { xs: 0.75, md: 1 },
            textDecoration: "none",
            borderRadius: "10px",
            "&:hover .icon-wrap": { background: "#CECBF6" },
            "&:hover": { background: "#F3F2FE" },
            transition: "all 0.2s ease",
          }}
        >
          <ListItemIcon sx={{ minWidth: { xs: 40, md: 44 } }}>
            <Box
              className="icon-wrap"
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#EEEDFE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
              }}
            >
              <LinkedInIcon sx={{ fontSize: 16, color: "#534AB7" }} />
            </Box>
          </ListItemIcon>
          <ListItemText
            primary="linkedin.com/in/preetha-t78405a258"
            secondary="LinkedIn"
            primaryTypographyProps={{
              sx: {
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.88rem" },
                color: "#1a1a1a",
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
            secondaryTypographyProps={{
              sx: { fontSize: "0.72rem", color: "#888780" },
            }}
          />
        </ListItem>
      </List>
    </Card>
    </Grid>
  );
}

export default ContactCard;