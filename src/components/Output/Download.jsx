import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  styled,
  Typography,
  OutlinedInput,
  Popover,
} from "@mui/material";

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#00000029",
    cursor: "pointer",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 2,
};

const Download = () => {
  const [open, setOpen] = React.useState(false);

  const [boiler, setBoiler] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeBoiler = (event) => {
    setBoiler(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlepopClose = () => {
    setAnchorEl(null);
  };
  const popopen = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container>
      <Button onClick={handleOpen}>click</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} position={"relative"}>
          <Box
            sx={{
              textAlign: "end",
              position: "absolute",
              top: 1,
              right: 1,
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            <IconButton onClick={handleClose}>
              <CloseIcon
                sx={{
                  "&:hover": { color: "#98561D" },
                  fontSize: 30,
                  color: "black",
                }}
              />
            </IconButton>
          </Box>
          <Box p={2}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={"bold"}
              fontSize={24}
            >
              Select time period
            </Typography>
            <Grid
              container
              sx={{
                maxHeight: "50vh",
                overflowY: "scroll",
                scrollbarWidth: "none", // Hide scrollbar in Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Hide scrollbar in Chrome, Safari, and Edge
                },
              }}
            >
              <Grid item xs={12}>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: 14, color: "#383838" }}
                >
                  Select the time period for which the full report must be
                  generated
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 1,
                    fontSize: 14,
                    pb: 2,
                    color: "#383838",
                    fontWeight: "bold",
                  }}
                >
                  Form
                </Typography>
                <Box
                  aria-describedby={id}
                  sx={{
                    width: "100%",
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
                  <Typography>Select month and year</Typography>{" "}
                  <KeyboardArrowDownIcon />
                </Box>
                <Popover
                  id={id}
                  open={popopen}
                  anchorEl={anchorEl}
                  onClose={handlepopClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box p={3} width={"380px"}>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <KeyboardArrowLeftIcon />
                      </Grid>
                      <Grid item xs={7} sx={{ textAlign: "center" }}>
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
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    fontSize: 14,
                    pb: 2,
                    color: "#383838",
                    fontWeight: "bold",
                  }}
                >
                  To
                </Typography>
                <Box
                  aria-describedby={id}
                  sx={{
                    width: "100%",
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
                  <Typography>Select month and year</Typography>{" "}
                  <KeyboardArrowDownIcon />
                </Box>
                <Popover
                  id={id}
                  open={popopen}
                  anchorEl={anchorEl}
                  onClose={handlepopClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box p={3} width={"380px"}>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <KeyboardArrowLeftIcon />
                      </Grid>
                      <Grid item xs={7} sx={{ textAlign: "center" }}>
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
              </Grid>
            </Grid>
            <Box textAlign={"end"} mt={5}>
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  backgroundColor: "#00aa45",
                  "&:hover": { backgroundColor: "#00aa45" },
                }}
              >
                Generate report <ArrowForwardIcon fontSize="16px" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Download;
