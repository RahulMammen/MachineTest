import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "purple" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <Button color="inherit" startIcon={<HomeIcon />} onClick={() => navigate("/")}>
        </Button>
        <Button color="inherit" startIcon={<AddIcon />} onClick={() => navigate("/add")}>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
