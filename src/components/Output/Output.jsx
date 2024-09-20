import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Paper,
  Popover,
  Select,
  Stack,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import AddchartIcon from "@mui/icons-material/Addchart";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { Delete, Label, Style } from "@mui/icons-material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const Output = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setAnchorEl(null);
  };

  const infoOpen = Boolean(anchorEl);
  const id = infoOpen ? "simple-popover" : undefined;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [boilerOpen, setBoilerOpen] = React.useState(false);
  const [boiler, setBoiler] = React.useState("");

  const handleBoilerOpen = () => setBoilerOpen(true);
  const handleBoilerClose = () => setBoilerOpen(false);

  const handleChangeBoiler = (event) => {
    setBoiler(event.target.value);
  };

  const [anchorElIcons, setAnchorElIcons] = React.useState(null);

  const handleClickIcons = (event) => {
    setAnchorElIcons(event.currentTarget);
  };

  const handleCloseIcons = () => {
    setAnchorElIcons(null);
  };

  const openIcons = Boolean(anchorElIcons);
  const idIcons = openIcons ? "simple-popover" : undefined;

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 30,
    height: 12,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 8,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 0,
      "&.Mui-checked": {
        transform: "translateX(17px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          // backgroundColor: "black",
          ...theme.applyStyles("dark", {
            backgroundColor: "#1890ff",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 300,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      // backgroundColor: "black",

      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));

  return (
    <Container maxWidth={"lg"} sx={{ paddingRight: "0px", paddingLeft: "0px" }}>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={26}
            pb={5}
            fontWeight={"bold"}
          >
            Output
          </Typography>
          <Container maxWidth="sm" sx={{ marginLeft: "0px!important" }}>
            <Box
              display={"flex"}
              alignItems={"stretch"}
              gap={2}
              justifyContent={"space-between"}
            >
              <Button
                variant={"contained"}
                sx={{
                  flex: 1,
                  // height: { xs: "50%", md: "none" },
                  fontWeight: "bold",
                  backgroundColor: "#00aa45",
                  display: "flex",

                  textTransform: "capitalize",

                  // py: 1.5,
                  "&:hover": {
                    backgroundColor: "#00aa45",
                    boxShadow: "none",
                  },
                }}
              >
                <DownloadIcon
                  sx={{ color: "white", fontSize: { xs: 25, md: 38 } }}
                />
                <Box>
                  <Typography
                    align="start"
                    variant="body1"
                    color={"#ffffff"}
                    fontWeight={"bold"}
                    sx={{ fontSize: { xs: 8, md: 14 } }}
                  >
                    Download
                  </Typography>
                  <Typography
                    align="start"
                    variant="body1"
                    color={"#ffffff"}
                    lineHeight={1.2}
                    sx={{ fontSize: { xs: 8, md: 12 } }}
                  >
                    the RE indicators shown below in the form of a pdf report
                  </Typography>
                </Box>
              </Button>
              {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={Style} position={"relative"}>
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
                  <IconButton onClick={handleBoilerClose}>
                    <CloseIcon sx={{ "&:hover": { color: "red" } }} />
                  </IconButton>
                </Box>
                <Box p={2}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    fontWeight={"bold"}
                    fontSize={26}
                  >
                    Add a type of waste
                  </Typography>
                  <Grid container>
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
                        sx={{ mt: 2, fontSize: 14, pb: 2, color: "#383838" }}
                      >
                        Select a type of waste or add a custom entry
                      </Typography>
                      <Box component="form" noValidate autoComplete="off">
                        <FormControl size="small" fullWidth>
                          <Select
                            value={boiler}
                            onChange={handleChangeBoiler}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="">Select waste type</MenuItem>
                            <MenuItem value={20}>grid electricity</MenuItem>
                            <MenuItem value={30}>
                              Deisel for the DG set
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
                        sx={{ fontSize: 14, pt: 3, pb: 2, color: "#383838" }}
                      >
                        Relevant units will be automatically added for selected
                        services, except for custom entries
                      </Typography>
                      <Box component="form" noValidate autoComplete="off">
                        <SmallLabelTextField
                          label="Automatically added units"
                          variant="outlined"
                          size="small"
                          fullWidth
                        />
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
                          sx={{ fontSize: 14, pt: 1,  color: "#383838" }}
                        >
                          (OPTIONAL) Select the top three waste disposal methods
                          for selected waste type.
                        </Typography>
                        <Typography
                          id="modal-modal-title"
                          sx={{ fontSize: 14, pb: 2, color: "#383838" }}
                        >
                          <b>Note:</b> that this can include disposal methods
                          that are by third part actors as well.
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                          <FormControl size="small" fullWidth>
                            <Select
                              value={boiler}
                              onChange={handleChangeBoiler}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="">
                                Select disposal method
                              </MenuItem>
                              <MenuItem value={20}>
                                <Checkbox
                                  {...Label}
                                  defaultChecked
                                  color="success"
                                />
                                Incineration
                              </MenuItem>
                              <MenuItem value={20}>
                                <Checkbox
                                  {...Label}
                                  defaultChecked
                                  color="success"
                                />
                                Selling
                              </MenuItem>
                              <MenuItem value={20}>
                                <Checkbox
                                  {...Label}
                                  defaultChecked
                                  color="success"
                                />
                                Recycling
                              </MenuItem>
                              <MenuItem value={20}>
                                <Checkbox
                                  {...Label}
                                  defaultChecked
                                  color="success"
                                />
                                Landfilling
                              </MenuItem>
                              <MenuItem value={20}>
                                <Checkbox
                                  {...Label}
                                  defaultChecked
                                  color="success"
                                />
                                Composting
                              </MenuItem>
                              <MenuItem value={30}>
                                Deisel for the DG set
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box textAlign={"end"} mt={5}>
                    <Button disabled variant="contained" onClick={handleOpen}>
                      Add parameter <ArrowForwardIcon fontSize="16px" />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Modal> */}
              <Button
                sx={{
                  backgroundColor: "white",
                  flex: 1,
                  // height: { xs: "35%", md: "none" },
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "0px 0px 10px #00000029",
                  justifyContent: "start",

                  "&:hover": { backgroundColor: "#D5FFE6" },
                }}
                onClick={handleOpen}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"start"}
                  gap={1}
                >
                  <AddIcon sx={{ color: "#00aa45", fontSize: 20 }} />
                  <Box flexDirection={"column"}>
                    <Typography
                      variant="body1"
                      color={"#138c50"}
                      fontWeight={600}
                      align="start"
                      sx={{ fontSize: { xs: 12, md: 14 } }}
                    >
                      Add
                    </Typography>
                    <Typography
                      variant="body1"
                      color={"#138c50"}
                      textAlign={"start"}
                      lineHeight={1.2}
                      sx={{
                        fontSize: { xs: 10, md: 14 },
                        textTransform: "capitalize",
                      }}
                    >
                      a new resource efficiency indicator
                    </Typography>
                  </Box>
                </Box>
              </Button>

              {/* <Box display={"flex"} gap={2} alignItems={"center"} flex={1}>
                <Button
                  sx={{
                    backgroundColor: "white",

                    // height: { xs: "35%", md: "none" },
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px #00000029",
                    justifyContent: "start",

                    "&:hover": { backgroundColor: "#D5FFE6" },
                  }}
                  onClick={handleOpen}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    gap={1}
                    sx={{ p: { xs: 0, md: 1 } }}
                  >
                    <AddIcon sx={{ color: "#00aa45", fontSize: 38 }} />
                    <Box flexDirection={"column"}>
                      <Typography
                        variant="body1"
                        color={"#138c50"}
                        fontWeight={600}
                        align="start"
                        sx={{ fontSize: { xs: 12, md: 14 } }}
                      >
                        Add
                      </Typography>
                      <Typography
                        variant="body1"
                        color={"#138c50"}
                        textAlign={"start"}
                        lineHeight={1.2}
                        sx={{
                          fontSize: { xs: 10, md: 14 },
                          textTransform: "capitalize",
                        }}
                      >
                        a new resource efficiency indicator
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </Box> */}

              <IconButton
                sx={{ display: { xs: "none", md: "block" } }}
                onClick={handleClick}
              >
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
              >
                <Box
                  p={2}
                  width={"300px"}
                  sx={{ border: "2px solid green", borderRadius: "5px" }}
                >
                  <Typography
                    sx={{
                      color: "#00aa45",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </Typography>
                  <Typography fontSize={13} color={"#383838"}>
                    A <b>Resource Efficiency (RE) indicator</b> is a ratio of
                    two parameter sets that serve as the numerator and
                    denominator within that ration, as shown below -
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid lightgrey",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",

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
                  <Typography
                    sx={{
                      color: "#00aa45",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </Typography>
                  <Typography fontSize={13} color={"#383838"}>
                    Thus, the <b>numerator</b> and <b>denominator</b> will need
                    to be set up first, before setting up the indicator.
                  </Typography>
                  <Divider sx={{ width: "20px", mb: 2, mt: 2 }} />
                  <Typography
                    sx={{
                      color: "#00aa45",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </Typography>
                  <Typography fontSize={13} color={"#383838"}>
                    <b>Follow the steps</b> within to create and add your own
                    custom RE indicators
                  </Typography>
                </Box>
              </Popover>
            </Box>
          </Container>
          <Box sx={{ border: "1px solid #D9D9D9", borderRadius: "5px", mt: 5 }}>
            <Box sx={{ textAlign: "center" }}>
              <IconButton
                sx={{ transform: "rotate(90deg)", color: "#00000029" }}
              >
                <DragIndicatorIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                ml: 2,
                mr: 2,
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <Typography
                  sx={{ fontSize: { xs: 12, md: 20 } }}
                  color={"#777777"}
                >
                  y axis =
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontSize={26}
                  fontWeight={"bold"}
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ fontSize: { xs: 16, md: 26 } }}
                >
                  RE indicator name
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 12, md: 20 } }}
                  color={"#777777"}
                >
                  (unit)
                </Typography>
                <IconButton onClick={handleClickIcons}>
                  <MoreVertIcon />
                </IconButton>
                <Popover
                  id={idIcons}
                  open={openIcons}
                  anchorEl={anchorElIcons}
                  onClose={handleCloseIcons}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Stack sx={{ p: 2, fontSize: 14 }} spacing={2}>
                    <Typography
                      sx={{ display: "flex", color: "#777777", fontSize: 14 }}
                    >
                      <DownloadIcon sx={{ pr: 1, color: "#777777" }} /> Download
                      indicator
                    </Typography>
                    <Typography
                      sx={{ display: "flex", color: "#777777", fontSize: 14 }}
                    >
                      <LibraryAddIcon sx={{ pr: 1, color: "#777777" }} />
                      Add/edit milestone(s)
                    </Typography>
                    <Typography
                      sx={{ display: "flex", color: "#777777", fontSize: 14 }}
                    >
                      <AddchartIcon sx={{ pr: 1, color: "#777777" }} /> Add/edit
                      benchmark(s)
                    </Typography>
                    <Typography
                      sx={{ display: "flex", color: "#777777", fontSize: 14 }}
                    >
                      <EditNoteIcon sx={{ pr: 1, color: "#777777" }} /> Edit
                      indicator
                    </Typography>
                    <Typography
                      sx={{ display: "flex", color: "#777777", fontSize: 14 }}
                    >
                      <Delete sx={{ pr: 1, color: "#777777" }} /> Delete
                      indicator
                    </Typography>
                  </Stack>
                </Popover>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Paper sx={{ width: "40px", ml: 2 }}>
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                </Paper>

                <Paper sx={{ width: "40px", ml: 2 }}>
                  <IconButton>
                    <LibraryAddIcon />
                  </IconButton>
                </Paper>

                <Paper sx={{ width: "40px", ml: 2 }}>
                  <IconButton>
                    <AddchartIcon />
                  </IconButton>
                </Paper>

                <Paper sx={{ width: "40px", ml: 2 }}>
                  <IconButton>
                    <EditNoteIcon />
                  </IconButton>
                </Paper>

                <Paper sx={{ width: "40px", ml: 2 }}>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Paper>

                <Paper
                  sx={{
                    width: "135px",
                    ml: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    fontSize={14}
                    pr={2}
                    pl={2}
                  >
                    Comments
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AntSwitch
                      size="small"
                      defaultChecked
                      inputProps={{ "aria-label": "ant design" }}
                    />
                  </Stack>
                </Paper>
              </Box>
            </Box>
            <Box sx={{ height: "200px" }}></Box>
            <Box display={"flex"} alignItems={"center"} m={3}>
              <Typography variant="body1" fontSize={16} pr={1}>
                Benchmark label - 000 unit
              </Typography>
              <Divider
                sx={{
                  width: "3px",
                  height: "20px",
                  backgroundColor: "#00000029",
                }}
              />
              <Typography variant="body1" fontSize={16} pl={1} pr={1}>
                Benchmark label - 000 unit
              </Typography>
              <Divider
                sx={{
                  width: "3px",
                  height: "20px",
                  backgroundColor: "#00000029",
                }}
              />
              <Typography variant="body1" fontSize={16} pl={1}>
                Benchmark label - 000 unit
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Output;
