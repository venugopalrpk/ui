import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomBox = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "250px",
        height: "100px",
        position: "relative",
        py: 2.5,
        pl: 2,
        pr: 0,
        my: 3,
        backgroundColor: "#FFFFFFD9",
        border: "1px solid #DBDBDB",
        "&:hover": {
          backgroundColor: "#F5F5F5",
          boxShadow: "0px 4px 8px #00000029",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1" fontSize={14} fontWeight={"bold"} mb={2}>
            Milk powder
          </Typography>
          <Typography variant="body1" fontSize={14}>
            kg
          </Typography>
        </Box>
        <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
          <CloseIcon color="#DBDBDB" sx={{ "&:hover": { color: "#98561D" } }} />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default CustomBox;
