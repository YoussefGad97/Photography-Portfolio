import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "About", "Portfolio", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="mobile-menu">
      <IconButton className="close-button" onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            onClick={() => {
              navigate(`/${item.toLowerCase()}`);
              handleDrawerToggle();
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" className="logo">
          LOGO
        </Typography>

        <Box className="desktop-menu">
          {navItems.map((item) => (
            <Button
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              className="nav-link"
            >
              {item}
            </Button>
          ))}
        </Box>

        <IconButton
          className="menu-button"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
