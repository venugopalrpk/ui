import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowContent = ({ content }) => {
  return (
    <Box mt={1} mb={2}>
      <Typography fontSize={13}>
        <IconButton sx={{ p: 0, m: 0 }}>
          <ArrowForwardIcon sx={{ fontSize: 15 }} />
        </IconButton>
        {content}
      </Typography>
    </Box>
  );
};

export default ArrowContent;
