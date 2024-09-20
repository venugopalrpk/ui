import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";

const StagesActive = ({
  step,
  src,
  Heading,
  label,
  label2,
  subtitle,
  color,
  elevation = 0,
  fontColor = "white",
  onClick,
}) => {
  return (
    <>
      {/* <Box onClick={onClick} textAlign={"start"}>
        <Typography variant="body1" fontSize={20} mb={1} color={"#383838"}>
          Welcome, John Doe!
        </Typography>
        <Typography
          variant="body1"
          fontSize={26}
          mb={1}
          color={"#4a4a4a"}
          fontWeight={"bold"}
        >
          REMS Dashboard
        </Typography>
        <Typography
          variant="body1"
          fontSize={14}
          mb={1}
          color={"#383838"}
          fontWeight={"bold"}
        >
          setup
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: color,
            width: "180px",
            borderRadius: "10px",
            border: "1px solid lightgrey",
            display: "flex",
            flexDirection: "column",
            p: 2,
            position: "relative",
            border: "3px solid #D5FFE6",
            "&:hover": {
              boxShadow: "0px 0px 30px #01AA4480",
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
            pb={0.5}
          >
            {label}
          </Typography>
          <Typography variant="body1" fontSize={12} color={"#DBDBDB"}>
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

export default StagesActive;
