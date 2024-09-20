import React from "react";
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
  Divider,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Tabs as MuiTabs } from "@mui/material";
import { Tab as MuiTab } from "@mui/material";
import { Label } from "@mui/icons-material";
import Info from "@mui/icons-material/Info";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Radio from "@mui/material/Radio";

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: "#138c50", // Custom color
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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

const Tab = styled(MuiTab)(({ theme }) => ({
  textTransform: "none",
  color: "#777777",
  fontSize: 18,
  paddingBottom: "8px",
  minWidth: "auto", // Ensure the tab width is only as wide as its content
  paddingLeft: 0,
  paddingRight: "24px",

  "&.Mui-selected": {
    color: "#00AA45",
    fontWeight: 500,
    paddingBottom: "8px",
    borderRadius: "10px",
    "&::after": {
      content: '""',
      display: "block",
      margin: "0 auto",
      width: "calc(100% )", // Adjust the width as needed
      paddingBottom: "2px",
      borderBottom: "3px solid #00AA45",
    },
  },
  "&:hover:not(.Mui-selected)": {
    color: "#777777",
    "&::after": {
      content: '""',
      display: "block",
      margin: "0 auto",
      width: "calc(100% )", // Adjust the width as needed
      borderBottom: "3px solid #777777",
    },
  },
}));

const Tabs = styled(MuiTabs)(({ theme }) => ({
  marginBottom: "32px",
  "& .MuiTabs-indicator": {
    backgroundColor: "#00AA45",
    height: "4px",
    display: "none",
    borderBottom: "3px solid white",
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Numerator = () => {
  // Tab

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleradioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //Tab
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
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"grey"}
              fontSize={14}
              pb={1}
            >
              Step 1/4
            </Typography> */}
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"grey"}
              fontSize={14}
              pb={1}
            >
              Step 3/4
            </Typography> */}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color={"grey"}
              fontSize={14}
              pb={1}
            >
              Step 4/4
            </Typography>
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={"bold"}
              fontSize={24}
              pb={2}
            >
              Set up the numerator
            </Typography> */}
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={"bold"}
              fontSize={24}
              pb={2}
            >
              Set up the denominator
            </Typography> */}
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={"bold"}
              fontSize={24}
              pb={2}
            >
              Review the RE indicator
            </Typography> */}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={"bold"}
              fontSize={24}
              pb={2}
            >
              Final changes
            </Typography>
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontSize={14}
              pb={2}
            >
              Add parameter(s) from the Set up stage to set up your numerator.
              Only parameters of one type can be added. The others will be
              deactivated once a parameter of a certain type is added.
            </Typography> */}

            <Grid
              container
              sx={{
                overflowX: "scroll",
                scrollbarWidth: "none", // Hide scrollbar in Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Hide scrollbar in Chrome, Safari, and Edge
                },
              }}
            >
              <Grid item xs={12}>
                <Box>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="Materials"
                      {...a11yProps(0)}
                      sx={{ fontSize: 14 }}
                    />
                    <Tab
                      label="Costs"
                      {...a11yProps(1)}
                      sx={{ fontSize: 14 }}
                    />
                    <Tab
                      label="Products/services"
                      {...a11yProps(2)}
                      sx={{ fontSize: 14 }}
                    />
                    <Tab
                      label="Energy sources"
                      {...a11yProps(2)}
                      sx={{ fontSize: 14 }}
                    />
                    <Tab
                      label="Water sources"
                      {...a11yProps(3)}
                      sx={{ fontSize: 14 }}
                    />
                    <Tab
                      label="Type of waste"
                      {...a11yProps(4)}
                      sx={{ fontSize: 14 }}
                    />
                    <Tab
                      label="Waste disposal mathod"
                      {...a11yProps(5)}
                      sx={{ fontSize: 14 }}
                    />
                  </Tabs>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                // border: "1px solid #00000029",
                // borderRadius: "5px",
                maxHeight: "30vh",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none", // Hide scrollbar in Chrome, Safari, and Edge
                },
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        All listed
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        <ArrowBackIosIcon
                          sx={{ fontSize: 10, ml: 1, pr: 0, mr: -0.3 }}
                        />
                        material
                        <ArrowForwardIosIcon
                          sx={{ fontSize: 10, mr: 1, ml: -0.15 }}
                        />
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        parameters
                      </Typography>
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                      color={"#98561D"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={0.5}
                    >
                      <Info sx={{ fontSize: 12, color: "#98561D" }} /> Listed
                      parameters do not have the same units!
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        All listed
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        <ArrowBackIosIcon
                          sx={{ fontSize: 10, ml: 1, pr: 0, mr: -0.3 }}
                        />
                        material
                        <ArrowForwardIosIcon
                          sx={{ fontSize: 10, mr: 1, ml: -0.15 }}
                        />
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        parameters
                      </Typography>
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                      color={"#0000029"}
                    >
                      (Relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        All listed
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        <ArrowBackIosIcon
                          sx={{ fontSize: 10, ml: 1, pr: 0, mr: -0.3 }}
                        />
                        material
                        <ArrowForwardIosIcon
                          sx={{ fontSize: 10, mr: 1, ml: -0.15 }}
                        />
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        parameters
                      </Typography>
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                      color={"#0000029"}
                    >
                      (Relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        All listed
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        <ArrowBackIosIcon
                          sx={{ fontSize: 10, ml: 1, pr: 0, mr: -0.3 }}
                        />
                        material
                        <ArrowForwardIosIcon
                          sx={{ fontSize: 10, mr: 1, ml: -0.15 }}
                        />
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        parameters
                      </Typography>
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                      color={"#0000029"}
                    >
                      (Relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        All listed
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        <ArrowBackIosIcon
                          sx={{ fontSize: 10, ml: 1, pr: 0, mr: -0.3 }}
                        />
                        material
                        <ArrowForwardIosIcon
                          sx={{ fontSize: 10, mr: 1, ml: -0.15 }}
                        />
                      </Typography>

                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                      >
                        parameters
                      </Typography>
                    </Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                      color={"#0000029"}
                    >
                      (Relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Accordion>
                  <Box>
                    <AccordionSummary
                      expandIcon={
                        <StyledExpandMoreIcon style={{ color: "#777777" }} />
                      }
                      aria-controls="panel2-content"
                      id="panel2-header"
                      sx={{
                        color: "#777777",
                        fontWeight: "bold",
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Checkbox />

                      <Box pt={1.1} pl={2}>
                        All <ArrowBackIosIcon sx={{ fontSize: 10 }} />
                        parameter
                        <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                        costs
                      </Box>
                    </AccordionSummary>
                  </Box>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>

                  <Box>
                    <AccordionSummary
                      expandIcon={
                        <StyledExpandMoreIcon style={{ color: "#777777" }} />
                      }
                      aria-controls="panel2-content"
                      id="panel2-header"
                      sx={{
                        color: "#777777",
                        fontWeight: "bold",
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Checkbox />

                      <Box pt={1.1} pl={2}>
                        All <ArrowBackIosIcon sx={{ fontSize: 10 }} />
                        parameter
                        <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                        costs
                      </Box>
                    </AccordionSummary>
                  </Box>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>

                  <AccordionDetails sx={{ display: "flex" }}>
                    <Checkbox />
                    <Box pl={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={14}
                        fontWeight={"bold"}
                        color={"#777777"}
                      >
                        Cost parameter
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        fontSize={12}
                        color={"#777777"}
                        lineHeight={1.2}
                      >
                        (relevant unit)
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </CustomTabPanel>

              {/* <CustomTabPanel value={value} index={2}>
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      fontSize={14}
                      color={"#383838"}
                      fontWeight={"bold"}
                    >
                      Select all listed parameters
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                    >
                      (6 selected)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      fontSize={14}
                      color={"#383838"}
                      fontWeight={"bold"}
                    >
                      Select all listed parameters
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                    >
                      (relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      fontSize={14}
                      color={"#383838"}
                      fontWeight={"bold"}
                    >
                      Select all listed parameters
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                    >
                      (relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      fontSize={14}
                      color={"#383838"}
                      fontWeight={"bold"}
                    >
                      Select all listed parameters
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                    >
                      (relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container py={1}>
                  <Grid item xs={1.5}>
                    <Checkbox defaultChecked color="success" />
                  </Grid>
                  <Grid item xs={10.5}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      fontSize={14}
                      color={"#383838"}
                      fontWeight={"bold"}
                    >
                      Select all listed parameters
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={11}
                      lineHeight={1.4}
                    >
                      (relevant unit)
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
              </CustomTabPanel> */}

              {/* <CustomTabPanel value={value} index={2}>
                <Grid container py={2} px={2}>
                  <Grid item xs={12} px={1}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      fontSize={14}
                      color={"#383838"}
                      fontWeight={"bold"}
                      pb={1}
                    >
                      1 Selected numerator parameter(s)
                    </Typography>

                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      fontSize={12}
                      pb={1}
                    >
                      You have added the following ,
                      <span>
                        <ArrowBackIosIcon
                          sx={{
                            fontSize: 8,
                            ml: 1,
                            pr: 0,
                            mr: -0.3,
                            mb: -0.1,
                          }}
                        />
                        material
                        <ArrowForwardIosIcon
                          sx={{ fontSize: 8, mr: 1.1, ml: -0.18, mb: -0.1 }}
                        />
                      </span>
                      parameter(s) to set up the numerator -
                    </Typography>
                  </Grid>
                  <Grid container px={1}>
                    <Grid item xs={1}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        1.
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      {" "}
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        Selected parameter
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        (unit)
                      </Typography>
                    </Grid>

                    <Grid item xs={1}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        1.
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      {" "}
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        Selected parameter
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        <span style={{ display: "flex", alignItems: "center" }}>
                          old unit <ArrowRightAltIcon sx={{ fontSize: 12 }} />{" "}
                          new unit
                        </span>
                      </Typography>
                    </Grid>

                    <Grid item xs={1}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        1.
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      {" "}
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        Selected parameter
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        (unit)
                      </Typography>
                    </Grid>

                    <Grid item xs={1}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        1.
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      {" "}
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        Selected parameter
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        (unit)
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container px={1}>
                    <Grid item xs={12}>
                      {" "}
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                        color={"#383838"}
                        fontWeight={"bold"}
                        pt={2}
                        pb={1}
                      >
                        2 Selected denominator parameter(s)
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                      >
                        You have added the following{" "}
                        <span style={{ fontWeight: "bold" }}>
                          <ArrowBackIosIcon sx={{ fontSize: 8 }} />
                          product / service
                          <ArrowForwardIosIcon sx={{ fontSize: 8 }} />
                        </span>
                        parameter(s) to set up the denominator -
                      </Typography>
                      <Grid container py={1} px={1}>
                        <Grid item xs={1}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            1.
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            Selected parameter
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            (unit)
                          </Typography>
                        </Grid>

                        <Grid item xs={1}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            2.
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            Selected parameter
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            (unit)
                          </Typography>
                        </Grid>

                        <Grid item xs={1}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            3.
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            Selected parameter
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            (unit)
                          </Typography>
                        </Grid>

                        <Grid item xs={1}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            4.
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            Selected parameter
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            (unit)
                          </Typography>
                        </Grid>

                        <Grid item xs={1}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            5.
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            Selected parameter
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            (unit)
                          </Typography>
                        </Grid>

                        <Grid item xs={1}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            6.
                          </Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            Selected parameter
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            fontWeight={"bold"}
                          >
                            (unit)
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} px={1}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                        color={"#383838"}
                        fontWeight={"bold"}
                        pt={2}
                        pb={1}
                      >
                        3 Selected RE indicator
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                      >
                        The selected indicator will track the{" "}
                        <span style={{ fontWeight: "bold" }}>
                          <ArrowBackIosIcon sx={{ fontSize: 8 }} />
                          selected materials consumed{" "}
                          <ArrowForwardIosIcon sx={{ fontSize: 8 }} />
                        </span>
                        by your enterpries against the{" "}
                        <span style={{ fontWeight: "bold" }}>
                          <ArrowBackIosIcon sx={{ fontSize: 8 }} />
                          selected products/services
                          <ArrowForwardIosIcon sx={{ fontSize: 8 }} />
                        </span>
                        for the duration of your monitering period.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} py={2} px={1}>
                      <Box display={"flex"} alignItems={"center"}>
                        <Box>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                          >
                            You RE indicator
                          </Typography>
                        </Box>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          fontSize={12}
                          color={"#383838"}
                          pr={2}
                        >
                          =
                        </Typography>

                        <Box>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            lineHeight={1.2}
                            mb={1}
                          >
                            Sum of all selected{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <ArrowBackIosIcon sx={{ fontSize: 8 }} />
                              material
                              <ArrowForwardIosIcon sx={{ fontSize: 8 }} />
                            </span>
                            parameter(s)
                          </Typography>
                          <Divider />
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            fontSize={12}
                            color={"#383838"}
                            lineHeight={1.2}
                            mt={1}
                          >
                            Sum of all selected
                            <span style={{ fontWeight: "bold" }}>
                              <ArrowBackIosIcon sx={{ fontSize: 8 }} />
                              products/services
                              <ArrowForwardIosIcon sx={{ fontSize: 8 }} />
                            </span>
                            parameter(s)
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </CustomTabPanel> */}

              <CustomTabPanel value={value} index={2}>
                <Grid container py={2} px={2}>
                  <Grid container px={1}>
                    <Grid item xs={2}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={14}
                        color={"#383838"}
                        fontWeight={"bold"}
                      >
                        1
                      </Typography>
                    </Grid>
                    <Grid item xs={10}>
                      {" "}
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                        fontWeight={"bold"}
                        pb={1}
                      >
                        Name your RE indicator
                      </Typography>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        fontSize={12}
                        color={"#383838"}
                      >
                        Give a custom name to your RE indicator to help you
                        differentiate this indicator from the other similar
                        indicators that you might add.
                      </Typography>
                      <Box component="form" noValidate autoComplete="off">
                        <SmallLabelTextField
                          label="Name of RE indicator"
                          variant="outlined"
                          size="small"
                          sx={{ my: 2 }}
                          fullWidth
                        />
                      </Box>
                    </Grid>
                    <Grid container>
                      <Grid item xs={2}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          fontSize={14}
                          color={"#383838"}
                          fontWeight={"bold"}
                        >
                          2
                        </Typography>
                      </Grid>
                      <Grid item xs={10}>
                        {" "}
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          fontSize={12}
                          color={"#383838"}
                          fontWeight={"bold"}
                          pb={1}
                        >
                          Select a type of visualization
                        </Typography>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          fontSize={12}
                          color={"#383838"}
                        >
                          The default visualization will be automatically
                          selected if there are no other possible types of
                          visualization for your RE indicator.
                        </Typography>
                        <Box display={"flex"} flexDirection={"column"}>
                          <FormControlLabel
                            value="end"
                            control={<Radio size="small" />}
                            label={
                              <Typography fontSize={12}>
                                Trend graph (default)
                              </Typography>
                            }
                          />

                          <FormControlLabel
                            value="end"
                            control={<Radio size="small" />}
                            label={
                              <Typography
                                color={"#00aa45"}
                                fontSize={12}
                                fontWeight={"bold"}
                              >
                                Bar graph
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="end"
                            control={<Radio size="small" />}
                            label={
                              <Typography fontSize={12} color={"#00000029"}>
                                Pie chart (recommended for share indicators)
                              </Typography>
                            }
                          />
                        </Box>
                        <Box
                          border={"1px solid #00000029"}
                          maxWidth={"200px"}
                          minHeight={"200px"}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={3}>
                Item One
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                Item Three
              </CustomTabPanel>
            </Box>
            <Grid
              container
              sx={{
                overflowX: "scroll",
                scrollbarWidth: "none", // Hide scrollbar in Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Hide scrollbar in Chrome, Safari, and Edge
                },
              }}
            ></Grid>
            <Box display={"flex"} justifyContent={"space-between"}>
              {/* <Box textAlign={"end"} mt={5}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  sx={{
                    color: "brown",
                    border: "none",
                    minWidth: "50px",
                    boxShadow: "0px 0px 10px #00000029",
                    "&:hover": {
                      backgroundColor: "white",

                      border: "none",
                    },
                  }}
                >
                  Cancel
                </Button>
              </Box> */}
              <Box textAlign={"end"} mt={5}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  sx={{
                    color: "#00aa45",
                    minWidth: "50px",
                    border: "none",

                    boxShadow: "0px 0px 10px #00000029",
                    "&:hover": { backgroundColor: "#FFFFFF", border: "none" },
                  }}
                >
                  <ArrowBackIcon fontSize="16px" />
                  Back
                </Button>
              </Box>

              {/* <Box textAlign={"end"} mt={5}>
                <Button
                  variant="disabled"
                  onClick={handleOpen}
                  sx={{
                    color: "#FFFFFF",
                    minWidth: "50px",
                    backgroundColor: "#DBDBDB",
                    // boxShadow: "0px 0px 10px #00000029",
                    "&:hover": { backgroundColor: "#DBDBDB" },
                  }}
                >
                  Next <ArrowForwardIcon fontSize="16px" />
                </Button>
              </Box> */}
              {/* <Box textAlign={"end"} mt={5}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  sx={{
                    color: "#00aa45",
                    minWidth: "50px",
                    border: "none",

                    boxShadow: "0px 0px 10px #00000029",
                    "&:hover": { backgroundColor: "#FFFFFF", border: "none" },
                  }}
                >
                  Next <ArrowForwardIcon fontSize="16px" />
                </Button>
              </Box> */}

              <Box textAlign={"end"} mt={5}>
                <Button
                  variant="contained"
                  onClick={handleOpen}
                  sx={{
                    color: "#FFFFFF",
                    minWidth: "50px",
                    border: "none",
                    backgroundColor: "#00aa45",

                    boxShadow: "0px 0px 10px #00000029",
                    "&:hover": {
                      backgroundColor: "#00aa45",
                      border: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  Add indicator <ArrowForwardIcon fontSize="16px" />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Numerator;
