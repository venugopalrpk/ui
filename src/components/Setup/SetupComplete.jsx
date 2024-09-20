import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Stages = ({
  step,
  src,
  label,
  subtitle,
  color,
  elevation = 0,
  fontColor = "white",
}) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          fontSize={35}
          mr={1}
          color={color}
        >
          {step}
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: color,
            width: "300px",
            height: "130px",
            borderRadius: "10px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src={src}
              style={{
                width: "30px",
                height: "30px",
              }}
              alt=""
            />
          </Box>
          <Typography variant="body1" fontSize={14} color={fontColor}>
            <b>{label}</b> (Complete)
          </Typography>
        </Paper>
      </Box>
      <Typography variant="subtitle2" color={color} ml={4} mt={2}>
        {subtitle}
      </Typography>
    </>
  );
};

export default Stages;
