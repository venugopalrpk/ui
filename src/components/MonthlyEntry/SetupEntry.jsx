import {
  Container,
  Typography,
  IconButton,
  Grid,
  Button,
  Box,
  Paper,
  Popover,
} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Modal from "@mui/material/Modal";
import { Check, Info } from "@mui/icons-material";

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

const SetupEntry = () => {
  const [open, setOpen] = React.useState(false);
  const [boilerOpen, setBoilerOpen] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [boiler, setBoiler] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBoilerOpen = () => setBoilerOpen(true);
  const handleBoilerClose = () => setBoilerOpen(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeBoiler = (event) => {
    setBoiler(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlepopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlepopoverClose = () => {
    setAnchorEl(null);
  };

  const popoveropen = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container maxWidth={"sm"} sx={{ marginLeft: 0 }}>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Typography
          variant="body1"
          pb={1}
          sx={{ fontSize: { xs: 18, md: 30 } }}
        >
          <b> Calendar</b>
        </Typography>

        <IconButton onClick={handlepopoverClick}>
          <Info sx={{ color: "#777777" }} />
        </IconButton>

        <Popover
          id={id}
          open={popoveropen}
          anchorEl={anchorEl}
          onClose={handlepopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2, fontWeight: "bold" }}>Legend</Typography>
          <Box display={"flex"} m={2} alignItems={"center"}>
            <Box
              sx={{
                border: "1px solid #00000029",
                borderRadius: "5px",
                width: "50px",
                height: "50px",
                backgroundColor: "#ffffff",
                mr: 1,
              }}
            ></Box>
            <Box>
              <Typography color={"#dbdbdb"} fontSize={14}>
                White
              </Typography>
              <Typography color={"#383838"} fontSize={14}>
                Month not attempted
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} m={2} alignItems={"center"}>
            <Box
              sx={{
                border: "1px solid #777777",
                borderRadius: "5px",
                width: "50px",
                height: "50px",
                backgroundColor: "#DBDBDB",
                mr: 1,
              }}
            ></Box>
            <Box>
              <Typography color={"grey"} fontSize={14} fontWeight={"bold"}>
                Grey
              </Typography>
              <Typography color={"#383838"} fontSize={14}>
                Month skipped
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} m={2} alignItems={"center"}>
            <Box
              sx={{
                border: "1px solid #00AA45",
                borderRadius: "5px",
                width: "50px",
                height: "50px",
                backgroundColor: "#D5FFE6",
                mr: 1,
              }}
            ></Box>
            <Box>
              <Typography color={"#00AA45"} fontSize={14} fontWeight={"bold"}>
                Green
              </Typography>
              <Typography color={"#383838"} fontSize={14}>
                Month completed
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"} m={2} alignItems={"center"}>
            <Box
              sx={{
                border: "1px solid #98561D",
                borderRadius: "5px",
                width: "50px",
                height: "50px",
                backgroundColor: "#FEF8E6",
                mr: 1,
              }}
            ></Box>
            <Box>
              <Typography color={"#98561D"} fontSize={14} fontWeight={"bold"}>
                Brown
              </Typography>
              <Typography color={"#383838"} fontSize={14}>
                Month needs attention
              </Typography>
            </Box>
          </Box>
        </Popover>
      </Box>
      <Typography
        id="modal-modal-title"
        sx={{ fontSize: 14, color: "#383838" }}
      >
        Choose a month to start logging in data.
      </Typography>
      <Typography
        id="modal-modal-title"
        sx={{ fontSize: 14, pb: 3, color: "#383838" }}
      >
        You can choose any month to begin, but it is advised to start with the
        first month.
      </Typography>
      <Grid container mt={4} mb={1}>
        <Grid item container>
          <Grid item lg={12}>
            <Grid item xs={4}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"100%"}
                alignItems={"center"}
                mb={2}
              >
                <IconButton>
                  <ArrowBackIosIcon sx={{ fontSize: "14px" }} />
                </IconButton>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    fontSize: 20,

                    fontWeight: "bold",
                  }}
                >
                  2024
                </Typography>
                <IconButton>
                  <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                </IconButton>
              </Box>
            </Grid>

            <Grid item lg={4} xs={3}>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#D5FFE6",

                      boxShadow: "0px 0px 10px #00000029",

                      "&:hover": { border: "1px solid #00AA45" },
                    }}
                  >
                    <Box textAlign={"end"}>
                      <Check
                        sx={{
                          fontSize: "15px",
                          color: "#00aa45",
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                        pt: 2.5,
                        pl: 0.8,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#00aa45",
                        lineHeight: 1,
                        pl: 0.8,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#FEF8E6",
                      boxShadow: "0px 0px 10px #00000029",

                      "&:hover": { border: "1px solid #98561D" },
                    }}
                  >
                    <Box textAlign={"end"} p={0.1}>
                      <Info sx={{ fontSize: "16px", color: "#98561D" }} />
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        pt: 2.5,
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                        pl: 0.8,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#98561D",
                        lineHeight: 1,
                        pl: 0.8,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#EBEBEB",

                      boxShadow: "0px 0px 10px #00000029",

                      "&:hover": {
                        backgroundColor: "#00000000",
                        border: "1px solid #DBDBDB",
                      },
                    }}
                  >
                    <Box textAlign={"end"}>
                      <Info
                        sx={{
                          fontSize: "16px",
                          color: "#777777",
                          fontWeight: "bold",
                        }}
                      />
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",
                        pt: 2.5,
                        fontWeight: "bold",
                        lineHeight: 1.1,
                        pl: 0.8,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                        pl: 0.8,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4} xs={3}>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4} xs={3}>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 10px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#4a4a4a",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>

                <Box>
                  <Paper
                    sx={{
                      width: "80px",
                      height: "80px",
                      p: 0.8,
                      boxShadow: "0px 0px 3px #00000029",
                      pt: 5.5,
                      "&:hover": { border: "1px solid #777777" },
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 14,
                        color: "#b5b5b5",

                        fontWeight: "bold",
                        lineHeight: 1.1,
                      }}
                    >
                      JAN
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{
                        fontSize: 12,
                        color: "#b5b5b5",
                        lineHeight: 1,
                      }}
                    >
                      2024
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box textAlign={"end"} mt={4}>
        <Button
          sx={{
            mt: 5,
            color: "#98561D",
            py: 1,
            px: 4,
            fontWeight: "bold",
            marginLeft: "auto",
            textAlign: "end",
            "&:hover": { backgroundColor: "#F5F5F5" },
            boxShadow: "0px 0px 10px #00000029",
          }}
          onClick={handleOpen}
        >
          Change starting month and year
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box textAlign="end">
            <IconButton
              onClick={handleClose}
              sx={{ "&:hover": { color: "red" }, p: 0, m: 0 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
            fontSize={24}
            color={"#383838"}
            pl={2}
          >
            Change starting month and year
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={10} ml={2}>
              {" "}
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, fontSize: 14, mb: 1 }}
              >
                Change the starting month and year for your monitoring period.
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ fontSize: 14, mb: 1, color: "#98561D" }}
              >
                <b>Note:</b> This will reset all data in your iput stage.
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <FormControl size="small" fullWidth>
                  <Select
                    // displayEmpty
                    value={"dgh"}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem selected={true}>""</MenuItem>
                    <MenuItem sx={{ display: "flex", flexDirection: "column" }}>
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
          </Grid>
          <Box textAlign={"end"}>
            <Button
              sx={{
                mt: 5,
                color: "white",
                py: 1,
                px: 1,
                minWidth: "100px",
                fontWeight: "bold",
                marginLeft: "auto",
                textAlign: "end",
                backgroundColor: "#00AA45",
              }}
            >
              Save and proceed <ArrowForwardIcon fontSize="16px" />
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={boilerOpen}
        onClose={handleBoilerClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src="/homepage/Setmonitoringperiodicon.png"
              alt=""
              style={{ width: "70px" }}
            />
          </Box>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"bold"}
          >
            Confirm your monitoring period
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: 12, pb: 4 }}
          >
            <span style={{ color: "#138c50", fontWeight: "bold" }}>NOTE:</span>{" "}
            Once chosen, you will not be able to change the monitoring period
            again. You will only be able to change it by resetting the entire
            save file and starting over
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} mb={2}>
            <Button variant="contained">Yes,confirm</Button>
            <Button variant="outlined">No, go back</Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default SetupEntry;
