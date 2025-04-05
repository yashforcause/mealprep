// src/MealPrepApp.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Home from "../components/Home";
import Contact from "../pages/Contact";
import MealDetails from "../components/MealDetails";
import About from "../pages/About";

const MealPrepApp = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <div style={{ display: "flex", justifyContent: "flex-start", padding: "1rem" }}>
            <Tooltip title="Back to Home">
              <IconButton
                color="primary"
                component={Link}
                to="/"
                sx={{ bgcolor: "#e3f2fd", "&:hover": { bgcolor: "#bbdefb" } }}
              >
                <HomeIcon fontSize="large" />
                Meal Prep
              </IconButton>
            </Tooltip>
          </div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meal-details/:id" element={<MealDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default MealPrepApp;
