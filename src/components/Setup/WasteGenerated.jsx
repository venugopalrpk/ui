import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomBox from "./CustomBox";
import Info from "../Modal/Info";
import { CheckBox, Label } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
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

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const WasteGenerated = () => {
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
  return (
    <Grid container>
      <Grid item lg={6} sm={12}>
        <Typography variant="body1" pb={2} fontSize={14}>
          These are the various types of waste that are generated while
          producing the products and services you have set up to track and
          monitor for resource efficiency. The types of waste generated could be
          solid, liquid or gaseous emissions.
        </Typography>
        <Typography variant="body1" pb={2} fontSize={14}>
          You can add a maximum of 20 types of waste
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Button
            sx={{
              width: { xs: "100%", lg: "50%" },
              backgroundColor: "white",
              border: "1px solid #00AA45",
              display: "flex",
              alignItems: "center",
              p: 2,
              mt: 2,
              "&:hover": { backgroundColor: "#D5FFE6" },
            }}
            onClick={handleOpen}
          >
            <Box sx={{ width: "20px", mr: 0.6 }}>
              <img
                src="/homepage/add_green.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
            <Box flexDirection={"column"}>
              <Typography
                variant="body1"
                pl={1}
                color={"#138c50"}
                fontWeight={600}
                fontSize={14}
              >
                Add a type of waste
              </Typography>
              <Typography
                variant="body1"
                color={"#138c50"}
                fontSize={10}
                pl={1}
                textAlign={"start"}
              >
                (1 out of 20 added)
              </Typography>
            </Box>
          </Button>
          <Info />
        </Box>
        <CustomBox />
        <CustomBox />

        <Box textAlign={"end"}>
          <Button
            sx={{
              mt: 5,
              color: "white",
              py: 1,

              fontWeight: "bold",

              textAlign: "end",
              backgroundColor: "#00AA45",
            }}
            onClick={handleOpen}
          >
            Finish this stage <ArrowForwardIcon fontSize="16px" />
          </Button>
        </Box>
      </Grid>
      <Grid item lg={6}>
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
              <IconButton onClick={handleBoilerClose}>
                <CloseIcon sx={{ "&:hover": { color: "#98561D" } }} />
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
                        <MenuItem value={30}>Deisel for the DG set</MenuItem>
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
                    <OutlinedInput
                      placeholder="Automatically added units"
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
                      sx={{ fontSize: 14, pt: 1, pb: 1, color: "#383838" }}
                    >
                      (OPTIONAL) Select the top three waste disposal methods for
                      selected waste type.
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      sx={{ fontSize: 14, pb: 2, color: "#383838" }}
                    >
                      <b>Note:</b> that this can include disposal methods that
                      are by third part actors as well.
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                      <FormControl size="small" fullWidth>
                        <Select
                          value={boiler}
                          onChange={handleChangeBoiler}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">Select disposal method</MenuItem>
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
                          <MenuItem value={30}>Deisel for the DG set</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box textAlign={"end"} mt={5}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00aa45",
                    border: "none",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "#00aa45", border: "none" },
                  }}
                  onClick={handleOpen}
                >
                  Add <ArrowForwardIcon fontSize="16px" />
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>

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
                sx={{ "&:hover": { color: "red" }, p: 0, m: 0 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box display={"flex"} gap={1} color={"#98561D"}>
              <InfoIcon sx={{ fontSize: 36 }} />
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
              Some of the parameters you have added require relevant unit
              conversions for the following indicators
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontSize={14}
            >
              <ArrowForwardIcon sx={{ fontSize: 14 }} /> RE indicator name
              (unit)
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontSize={14}
              pb={2}
            >
              <ArrowForwardIcon sx={{ fontSize: 14 }} /> RE indicator name
              (unit)
            </Typography>

            <Box display={"flex"} alignItems={"center"} justifyContent={"end"}>
              <Button
                variant={"outlined"}
                sx={{
                  color: "#98561D",
                  minWidth: "100px",
                  fontWeight: "bold",
                  backgroundColor: "#ffffff",
                  border: "none",
                  boxShadow: "0px 0px 20px #00000029",
                  mr: 1,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    border: "none",
                  },
                }}
              >
                Take me there{" "}
                <ArrowForwardIcon
                  sx={{ fontSize: 14, color: "98561D", mr: 1 }}
                />
              </Button>
            </Box>
          </Box>
        </Modal> */}
      </Grid>
    </Grid>
  );
};

export default WasteGenerated;
