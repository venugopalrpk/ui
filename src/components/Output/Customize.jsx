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
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
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

const Customize = () => {
  const [open, setOpen] = React.useState(false);

  const [boiler, setBoiler] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeBoiler = (event) => {
    setBoiler(event.target.value);
  };

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
              Customize your report
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
              <Grid item xs={1}>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: 18, pb: 2, fontWeight: "bold" }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item xs={11}>
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
                <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" fullWidth>
                    <Select
                      // displayEmpty
                      value={"dgh"}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem selected={true}>
                        "Select month and year"
                      </MenuItem>
                      <MenuItem
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          display={"flex"}
                          justifyContent={"space-evenly"}
                          width={"100%"}
                          mt={2}
                          mb={1}
                          alignItems={"center"}
                        >
                          <IconButton>
                            <ArrowBackIosIcon sx={{ fontSize: "14px" }} />
                          </IconButton>
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              fontSize: 14,

                              fontWeight: "bold",
                            }}
                          >
                            2024
                          </Typography>
                          <IconButton>
                            <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                          </IconButton>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            JAN
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            FEB
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            MAR
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            APR
                          </Typography>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            MAY
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            JUN
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            JUL
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            AUG
                          </Typography>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            SEP
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            OCT
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            NOV
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            DEC
                          </Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
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
                <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" fullWidth>
                    <Select
                      // displayEmpty
                      value={"dgh"}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem selected={true}>""</MenuItem>
                      <MenuItem
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          display={"flex"}
                          justifyContent={"space-evenly"}
                          width={"100%"}
                          mt={2}
                          mb={1}
                          alignItems={"center"}
                        >
                          <IconButton>
                            <ArrowBackIosIcon sx={{ fontSize: "14px" }} />
                          </IconButton>
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              fontSize: 14,

                              fontWeight: "bold",
                            }}
                          >
                            2024
                          </Typography>
                          <IconButton>
                            <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                          </IconButton>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            JAN
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            FEB
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            MAR
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            APR
                          </Typography>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            MAY
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            JUN
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            JUL
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            AUG
                          </Typography>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          width={"100%"}
                        >
                          <Typography
                            id="modal-modal-description"
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            SEP
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            OCT
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            NOV
                          </Typography>
                          <Typography
                            sx={{
                              mt: 2,
                              fontSize: 14,
                              mb: 1,
                            }}
                          >
                            DEC
                          </Typography>
                        </Box>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    fontSize: 18,
                    pb: 2,
                    fontWeight: "bold",
                    pt: 1,
                  }}
                >
                  2
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography
                  id="modal-modal-title"
                  sx={{ fontSize: 14, pt: 3, pb: 1, color: "#383838" }}
                >
                  Select the outputs you want to appear on your full report
                </Typography>
                <Box pb={1}>
                  <Checkbox defaultChecked color="success" size="small" />
                  <span style={{ fontSize: 14 }}>RE indicatore name</span>
                  <br />{" "}
                  <Checkbox defaultChecked color="success" size="small" />
                  <span style={{ fontSize: 14 }}>RE indicatore name</span>
                  <br />{" "}
                  <Checkbox defaultChecked color="success" size="small" />
                  <span style={{ fontSize: 14 }}>RE indicatore name</span>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    fontSize: 18,

                    fontWeight: "bold",
                    pt: 3,
                  }}
                >
                  3
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Box fontSize={12} pt={2}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 14, pt: 1, pb: 1, color: "#383838" }}
                  >
                    <span style={{ color: "#DBDBDB" }}>(OPTIONAL)</span> Add the
                    name of your organization to the generated report
                  </Typography>
                  <Box component="form" noValidate autoComplete="off">
                    <OutlinedInput
                      placeholder="Automatically added units"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    fontSize: 18,

                    fontWeight: "bold",
                    pt: 3,
                  }}
                >
                  4
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Box fontSize={12} pt={2}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 14, pt: 1, pb: 1, color: "#383838" }}
                  >
                    <span style={{ color: "#DBDBDB" }}>(OPTIONAL)</span> Add a
                    note to be included in your report. this note will appear
                    onthe cover page of your report.
                  </Typography>
                </Box>
                <Box position={"relative"}>
                  <OutlinedInput
                    id="filled-multiline-static"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Type your comment here"
                    sx={{
                      fontSize: "12px",
                      mt: 2,
                    }}
                  />
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      fontSize: 12,
                      position: "absolute",
                      bottom: 2,
                      right: 4,
                      color: "#b5b5b5",
                    }}
                  >
                    0/250
                  </Typography>
                </Box>
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

export default Customize;
