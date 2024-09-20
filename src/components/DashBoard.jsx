import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  Modal,
  styled,
  Switch,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  FormControlLabel,
  Checkbox,
  InputLabel,
  ListSubheader,
  Divider,
  Popover,
} from "@mui/material";
import React from "react";
import Stages from "./Setup/Stages";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import StagesActive from "./Setup/StagesActive";
import InputSetup from "./Setup/InputSetup";
import InputActive from "./Setup/InputActive";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Info, Label } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OutputSetup from "./Setup/OutputSetup";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: "5px",
  "&:hover": {
    backgroundColor: "#00000029",
    cursor: "pointer",
  },
}));

const DashBoard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "black",
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
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "black",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));

  return (
    <Container maxWidth={"lg"} sx={{ paddingLeft: "0px !important", ml: 0 }}>
      <Typography variant="body1" fontSize={20} mb={1} color={"#383838"}>
        Welcome, John Doe.
      </Typography>
      <Typography
        variant="body1"
        fontSize={24}
        mb={1}
        color={"#4a4a4a"}
        fontWeight={"bold"}
      >
        Complete the setup using REMS
      </Typography>

      <Grid container>
        <Grid item lg={4} xs={12}>
          <Stages
            color="#00AA45"
            step={1}
            subtitle={
              "These are parameters for the products and services which you would like to track and monitor for resource efficiency."
            }
            Heading={"Setup"}
            label={" resource consumption parameters"}
            onClick={handleOpen}
            src={""}
          />

          {/* <StagesActive
            color="#FFFFFF"
            step={1}
            Heading={"Setup"}
            subtitle={
              "These are parameters for the products and services which you would like to track and monitor for resource efficiency."
            }
            label={" resource consumption parameters"}
            label2={"12 parameter(s) added"}
            onClick={handleOpen}
            src={""}
          /> */}

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
                  sx={{ "&:hover": { color: "#98561D" }, p: 0, m: 0 }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box px={2}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight={"bold"}
                >
                  Select your location, currency and industry sector
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: 12, mb: 3 }}
                >
                  {" "}
                  The currency will be chosen automatically depending on your
                  location. However, you can also choose to switch to a global
                  currency, if necessary.
                </Typography>
              </Box>
              <Grid container px={2}>
                <Grid item xs={1}>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: 16, mb: 1 }}
                  >
                    <b>1</b>
                  </Typography>
                </Grid>
                <Grid item xs={11}>
                  <Box component="form" noValidate autoComplete="off">
                    <FormControl size="small" fullWidth>
                      <InputLabel htmlFor="grouped-select">
                        Select country
                      </InputLabel>
                      <Select
                        defaultValue=""
                        id="grouped-select"
                        label="Select country"
                        // sx={{ maxHeight: "100px", overflowY: "scroll" }}
                      >
                        <ListSubheader
                          sx={{ fontWeight: "bold", color: "black" }}
                        >
                          Asia
                        </ListSubheader>
                        <MenuItem value={1}>India</MenuItem>
                        <MenuItem value={2}>Maldives</MenuItem>
                        <MenuItem value={2}>Mayanmar</MenuItem>
                        <MenuItem value={2}>Srilnka</MenuItem>
                        <Divider sx={{ mx: 2 }} />
                        <ListSubheader
                          sx={{ fontWeight: "bold", color: "black" }}
                        >
                          Europe
                        </ListSubheader>
                        <MenuItem value={3}>France</MenuItem>
                        <MenuItem value={4}>Germany</MenuItem>
                        <MenuItem value={4}>Russia</MenuItem>
                        <MenuItem value={4}>Germany</MenuItem>
                        <Divider sx={{ mx: 2 }} />
                        <ListSubheader
                          sx={{ fontWeight: "bold", color: "black" }}
                        >
                          North America
                        </ListSubheader>
                        <MenuItem value={3}>United states</MenuItem>
                        <MenuItem value={4}>Canada</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 16, pt: 2 }}
                  >
                    <b>2</b>
                  </Typography>
                </Grid>
                <Grid item xs={11} mt={1}>
                  <FormControlLabel
                    control={<Checkbox size="small" defaultChecked />}
                    label={
                      <Typography fontSize={12} color={"#777777"}>
                        I want to switch to a global currency.
                      </Typography>
                    }
                  />
                  <Box component="form" noValidate autoComplete="off">
                    <FormControl size="small" fullWidth>
                      <Select
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">Select currency</MenuItem>
                        <MenuItem value={10}>Us dallar(USD)</MenuItem>
                        <MenuItem value={20}>Euro(EUR)</MenuItem>
                        <MenuItem value={30}>Indian rupees(INR)</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>

                <Grid item xs={1}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 16, pt: 4 }}
                  >
                    <b>3</b>
                  </Typography>
                </Grid>
                <Grid item xs={11} mt={4}>
                  <Box component="form" noValidate autoComplete="off">
                    <FormControl size="small" fullWidth>
                      <InputLabel htmlFor="grouped-select">
                        Select industry sector
                      </InputLabel>
                      <Select
                        defaultValue=""
                        id="grouped-select"
                        label="Select industry sector"
                        // sx={{ maxHeight: "100px", overflowY: "scroll" }}
                      >
                        <ListSubheader
                          sx={{ fontWeight: "bold", color: "black" }}
                        >
                          Tier 1
                        </ListSubheader>
                        <MenuItem value={1}>Industry sector</MenuItem>
                        <MenuItem value={2}>Industry sector</MenuItem>
                        <MenuItem value={2}>Industry sector</MenuItem>
                        <MenuItem value={2}>Industry sector</MenuItem>
                        <Divider sx={{ mx: 2 }} />
                        <ListSubheader
                          sx={{ fontWeight: "bold", color: "black" }}
                        >
                          Tier 2
                        </ListSubheader>
                        <MenuItem value={3}>Industry sector</MenuItem>
                        <MenuItem value={4}>Industry sector</MenuItem>
                        <MenuItem value={4}>Industry sector</MenuItem>
                        <MenuItem value={4}>Industry sector</MenuItem>
                        <Divider sx={{ mx: 2 }} />
                        <ListSubheader
                          sx={{ fontWeight: "bold", color: "black" }}
                        >
                          Tier 3
                        </ListSubheader>
                        <MenuItem value={3}>Industry sector</MenuItem>
                        <MenuItem value={4}>Industry sector</MenuItem>
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
                    mr: 2,
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

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} px={2}>
              <Box textAlign="end">
                <IconButton
                  onClick={handleClose}
                  sx={{ "&:hover": { color: "#98561D" }, p: 0, m: 0 }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box display={"flex"} gap={1} color={"#98561D"}>
                <Info sx={{ fontSize: 46 }} />
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight={"bold"}
                  fontSize={28}
                  pb={2}
                >
                  Alert
                </Typography>
              </Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontSize={14}
                pb={2}
              >
                Adding/deleting parameters after the initial setup may affect
                the previously input data in the Input and Output stages. In
                such a case, the following changes might be noted -
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight={"bold"}
                fontSize={14}
              >
                Monthly Entry stage
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontSize={14}
                pb={2}
              >
                Fields for newly-added parameters will be highlighted for months
                that previously had completed entries and the relevant months
                will also be marked as "needs attention".
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight={"bold"}
                fontSize={14}
              >
                Output stage
              </Typography>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontSize={14}
              >
                The resource efficiency indicators that were affected by this
                change will now display a message notifying the same, against
                the month after the last month for which input was completed
                previously.
              </Typography>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                mt={3}
              >
                <Button
                  variant={"outlined"}
                  sx={{
                    color: "#98561D",
                    minWidth: "100px",
                    border: "none",
                    boxShadow: "0px 0px 10px #00000029",
                    backgroundColor: "#ffffff",
                    mr: 1,
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      border: "none",
                    },
                  }}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: 14, color: "98561D", mr: 1 }}
                  />{" "}
                  Go back
                </Button>

                <Button
                  sx={{
                    color: "white",
                    minWidth: "100px",
                    ml: 2,
                    backgroundColor: "#98561D",
                    "&:hover": { backgroundColor: "#98561D" },
                  }}
                >
                  Ok, I understand
                </Button>
              </Box>
            </Box>
          </Modal> */}
        </Grid>

        <Grid item lg={4} xs={12}>
          <InputSetup
            color="#00AA45"
            step={2}
            subtitle={
              <Typography variant="subtitle" color={"#00aa45"} lineHeight={1.2}>
                You can view your resource efficiency indicators, once you have
                input <b>at least 3 months</b> of data in this stage.
              </Typography>
            }
            Heading={"Enrer/edit"}
            src={""}
            label={"Monthly data of resource consumption parameter"}
            label2={"Last edited month - N/A"}
            onClick={handleOpen}
          />

          {/* <InputActive
            color="#00AA45"
            step={2}
            subtitle={
              <Typography
                variant="subtitle2"
                color={"#383838"}
                lineHeight={1.2}
                fontSize={12}
              >
                A few indicators have already been added for you. You can view
                these resource efficiency indicators and any others that you
                might add in the Output stage, once you have input at least 3
                months of data in this stage.
              </Typography>
            }
            Heading={"Enrer/edit"}
            src={""}
            label={"Monthly data of resource consumption parameter"}
            label2={"Last edited month - N/A"}
            onClick={handleOpen}
          /> */}

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box textAlign="end">
                <IconButton
                  onClick={handleClose}
                  sx={{ "&:hover": { color: "#98561D" }, p: 0, m: 0 }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Grid container px={2}>
                <Grid item xs={10}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    fontWeight={"bold"}
                  >
                    Choose the starting month and year
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2, mb: 1 }}
                  ></Typography>
                </Grid>

                <Grid item xs={11}>
                  {" "}
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2, fontSize: 12, mb: 1, color: "#383838" }}
                  >
                    Choose the starting month and year for your monitoring
                    period.
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: 12, mb: 1 }}
                  >
                    <b>Note:</b> Starting from the month and year selected here,
                    you will be able to add data for a maximum of 10 years.
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
                    <Box p={3} width={"340px"}>
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
              <Box textAlign={"end"}>
                <Button
                  sx={{
                    mt: 5,
                    color: "white",
                    py: 1,
                    mr: 3,
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
          </Modal> */}
        </Grid>

        <Grid item lg={4} xs={12}>
          <OutputSetup
            color="#d9d9d9"
            Heading={"View/Edit/Add"}
            label={" resource efficiency indicators"}
            label2={"4 RE indicator(s) pre-added"}
            step={3}
            subtitle={
              "After you have input at least 3 months of data, you can view your resource efficiency indicators, edit them or add new resource efficiency indicators"
            }
          />
        </Grid>
        <Box textAlign={"end"} mt={5}>
          <Button
            variant="outlined"
            onClick={handleOpen}
            sx={{
              color: "brown",
              backgroundColor: "#FFFFFF",
              border: "none",
              boxShadow: "0px 0px 10px #00000029",
              "&:hover": { backgroundColor: "#FFFFFF", border: "none" },
            }}
          >
            Reset all data
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default DashBoard;
