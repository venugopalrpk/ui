import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 2,
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "blue",
    cursor: "pointer",
  },
}));

const Down = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Container>
      <Box
        aria-describedby={id}
        sx={{
          width: "250px",
          border: "1px solid gray",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
        onClick={handleClick}
      >
        <Typography>Select month and year</Typography> <KeyboardArrowDownIcon />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box p={3} width={"250px"}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <KeyboardArrowLeftIcon />
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "center" }}>
              2024
            </Grid>
            <Grid item xs={1} justifySelf={"end"}>
              <KeyboardArrowRightIcon />
            </Grid>

            <Grid item xs={3}>
              <StyledTypography>Jan</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Feb</StyledTypography>
            </Grid>

            <Grid item xs={3}>
              <StyledTypography>Mar</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Apr</StyledTypography>
            </Grid>

            <Grid item xs={3}>
              <StyledTypography>May</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Jun</StyledTypography>
            </Grid>

            <Grid item xs={3}>
              <StyledTypography>Jul</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Aug</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Sep</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Oct</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Nov</StyledTypography>
            </Grid>
            <Grid item xs={3}>
              <StyledTypography>Dec</StyledTypography>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </Container>
  );
};

export default Down;
