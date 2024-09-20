import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            src={"/homepage/logoabout.png"}
            alt="switch asia image"
            sx={{
              width: { xs: "40px", lg: "70px" },
            }}
          />

          <Button variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
