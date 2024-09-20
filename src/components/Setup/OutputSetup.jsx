import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";

const OutputSetup = ({
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
      <Box onClick={onClick} textAlign={"start"}>
        <Typography
          variant="body1"
          fontSize={14}
          pb={1}
          pt={2}
          color={"#00aa45"}
          fontWeight={"bold"}
        >
          Output
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: "#00aa45",
            width: "200px",
            height: "100px",
            borderRadius: "10px",
            border: "1px solid lightgrey",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "start",
            position: "relative",
            px: 2,
            pt: 1,
            border: "1px solid #D5FFE6",
            "&:hover": {
              boxShadow: "0px 0px 30px #00000029",
              cursor: "pointer",
              ".heading": {
                transform: "scale(1.2)",
              },
            },
          }}
        >
          {/* <Box>
            {src != "" && (
              <LockIcon sx={{ position: "absolute", top: 2, right: 2 }} />
            )}
          </Box> */}
          <Typography
            variant="body1"
            fontSize={16}
            color={"#ffffff"}
            fontWeight={"bold"}
            className="heading"
          >
            {Heading}
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            color={"#ffffff"}
            lineHeight={1.2}
            pb={1}
          >
            {label}
          </Typography>
          <Typography variant="body1" fontSize={12} color={"#FFFFFF"}>
            {label2}
          </Typography>
        </Paper>
      </Box>
      <Typography
        variant="subtitle2"
        color={"#00aa45"}
        mt={1}
        lineHeight={1.2}
        sx={{ width: { sm: "100%", md: "200px" }, fontSize: 12 }}
      >
        {subtitle}
      </Typography>

      {/* <Box onClick={onClick} textAlign={"start"}>
        <Typography
          variant="body1"
          fontSize={14}
          mb={1}
          color={"#b5b5b5"}
          fontWeight={"bold"}
        >
          Output
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: "#FFFFFF",
            width: "180px",
            height: "100px",
            borderRadius: "10px",
            border: "1px solid lightgrey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            position: "relative",
            p: 2,
            border: "1px solid #D5FFE6",
          }}
        >
          <Box>
            {src != "" && (
              <LockIcon
                sx={{
                  position: "absolute",
                  top: 2,
                  right: 2,
                  color: "#b5b5b5",
                }}
              />
            )}
          </Box>
          <Typography
            variant="body1"
            fontSize={16}
            color={"#B5b5b5"}
            fontWeight={"bold"}
            className="heading"
          >
            {Heading}
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            color={"#b5b5b5"}
            lineHeight={1.2}
            pb={1}
          >
            {label}
          </Typography>
          <Typography variant="body1" fontSize={12} color={"#b5b5b5"}>
            {label2}
          </Typography>
        </Paper>
      </Box>
      <Typography
        variant="subtitle2"
        color={"#b5b5b5"}
        mt={1}
        lineHeight={1.2}
        sx={{ width: "200px", fontSize: 12 }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="subtitle2"
        color={"#b5b5b5"}
        mt={1}
        lineHeight={1.2}
        sx={{ width: "200px", fontSize: 12 }}
      >
        {subtitle2}
      </Typography> */}
    </>
  );
};

export default OutputSetup;
