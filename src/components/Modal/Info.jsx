//

import {
  Box,
  Button,
  Typography,
  Popover,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const Info = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setAnchorEl(null);
  };

  const infoOpen = Boolean(anchorEl);
  const id = infoOpen ? "simple-popover" : undefined;
  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <IconButton onClick={handleClick}>
        <InfoIcon />
      </IconButton>
      <Popover
        id={id}
        open={infoOpen}
        anchorEl={anchorEl}
        onClose={handleInfoClose}
        anchorOrigin={{
          vertical: "right",
          horizontal: "right",
        }}
        sx={{ p: 2 }}
      >
        <Box p={2} width={"300px"}>
          <Typography sx={{ color: "#00aa45", fontSize: 18 }}>1</Typography>
          <Typography fontSize={13} color={"#383838"}>
            A <b>Resource Efficiency (RE) indicator</b> is a ratio of two
            parameter sets that serve as the numerator and denominator within
            that ration, as shown below -
          </Typography>
          <Box
            sx={{
              border: "1px solid lightgrey",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              gap: "10px",
              borderRadius: "5px",
              mt: 2,
              mb: 3,
            }}
          >
            <Typography fontSize={13} color={"#383838"}>
              Resource Efficiency Indicator
            </Typography>
            <Typography fontSize={16} color={"#383838"} pr={2}>
              =
            </Typography>
            <Box>
              <Typography fontSize={13} color={"#383838"}>
                Numerator
              </Typography>
              <Divider />
              <Typography fontSize={13} color={"#383838"}>
                Denominator
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ width: "20px", mb: 2 }} />
          <Typography sx={{ color: "#00aa45", fontSize: 18 }}>2</Typography>
          <Typography fontSize={13} color={"#383838"}>
            Thus, the <b>numerator</b> and <b>denominator</b> will need to be
            set up first, before setting up the indicator.
          </Typography>
          <Divider sx={{ width: "20px", mb: 2, mt: 2 }} />
          <Typography sx={{ color: "#00aa45", fontSize: 18 }}>3</Typography>
          <Typography fontSize={13} color={"#383838"}>
            <b>Follow the steps</b> within to create and add your own custom RE
            indicators
          </Typography>
        </Box>
      </Popover>
    </Box>
  );
};

export default Info;
