import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";

const InputActive = ({
  step,
  src,
  Heading,
  label,
  label2,
  subtitle,
  subtitle2,
  color,
  elevation = 0,
  fontColor = "white",
  onClick,
}) => {
  return (
    <>
      {/* <Box onClick={onClick} textAlign={"start"}>
        <Typography
          variant="body1"
          fontSize={14}
          mb={1}
          color={"#383838"}
          fontWeight={"bold"}
        >
          Input
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: "#D5FFE6",
            width: "180px",
            borderRadius: "10px",
            border: "1px solid lightgrey",
            display: "flex",
            flexDirection: "column",
            p: 2,
            position: "relative",
            "&:hover": {
              boxShadow: "0px 0px 10px #01AA4480",
              cursor: "pointer",
              ".heading": {
                transform: "scale(1.1)",
              },
            },
          }}
        >
          <Box sx={{}}>
            {src != "" && (
              <img
                src={src}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt=""
              />
            )}
            {src != "" && (
              <LockIcon sx={{ position: "absolute", top: 2, right: 2 }} />
            )}
          </Box>
          <Typography
            variant="body1"
            fontSize={16}
            color={"#00aa45"}
            fontWeight={"bold"}
            className="heading"
          >
            {Heading}
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            color={"#383838"}
            lineHeight={1.2}
          >
            {label}
          </Typography>
          <Typography variant="body1" fontSize={12} color={"#777777"} pt={1}>
            {label2}
          </Typography>
        </Paper>
      </Box>
      <Typography
        variant="subtitle2"
        color={"#383838"}
        mt={2}
        fontSize={12}
        lineHeight={1.2}
        sx={{ width: "200px" }}
      >
        {subtitle}
      </Typography> */}
    </>
  );
};

export default InputActive;
