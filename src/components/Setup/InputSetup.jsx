import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const InputSetup = ({
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
      <Box onClick={onClick} textAlign={"start"}>
        <Typography
          variant="body1"
          fontSize={14}
          mb={1}
          pt={2}
          color={color}
          fontWeight={"bold"}
        >
          Input
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: color,
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
              <LockIcon sx={{ position: "absolute", top: 2, right: 2 }} />
            )}
          </Box>
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
            color={"#FFFFFF"}
            lineHeight={1.2}
          >
            {label}
          </Typography>
          <Typography variant="body1" fontSize={12} color={"#FFFFFF"} pt={1}>
            {label2}
          </Typography>
        </Paper>
      </Box>

      <Box
        mt={1}
        lineHeight={1.2}
        sx={{ width: { sm: "100%", md: "200px" }, fontSize: 12 }}
      >
        {subtitle}
      </Box>

      {/* <Box onClick={onClick} textAlign={"start"}>
        <Typography
          variant="body1"
          fontSize={14}
          mb={1}
          color={"#B5B5B5"}
          fontWeight={"bold"}
        >
          Input
        </Typography>
        <Paper
          elevation={elevation}
          sx={{
            backgroundColor: "#FFFFFF",
            width: "180px",
            borderRadius: "10px",
            border: "1px solid lightgrey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            position: "relative",
            p: 2,
          }}
        >
          <Box>
            <LockIcon
              sx={{ position: "absolute", top: 2, right: 2, color: "#B5B5B5" }}
            />
          </Box>
          <Typography
            variant="body1"
            fontSize={16}
            color={"#B5B5B5"}
            fontWeight={"bold"}
            className="heading"
          >
            {Heading}
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            color={"#B5B5B5"}
            lineHeight={1.2}
          >
            {label}
          </Typography>
        </Paper>
        <Box
          mt={1}
          lineHeight={1.2}
          sx={{ width: "200px", fontSize: 12, color: "#B5B5B5" }}
        >
          {subtitle}
        </Box>
      </Box> */}
    </>
  );
};

export default InputSetup;
