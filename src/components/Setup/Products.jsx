import {
  Button,
  Box,
  Grid,
  Typography,
  Container,
  OutlinedInput,
  Paper,
  IconButton,
  Stack,
  Popover,
  Divider,
} from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoIcon from "@mui/icons-material/Info";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      // backgroundColor: "black",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setAnchorEl(null);
  };

  const infoOpen = Boolean(anchorEl);
  const id = infoOpen ? "simple-popover" : undefined;

  const [alignment, setAlignment] = React.useState("Product");

  const handletoggleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <Typography variant="body1" pb={2} fontSize={14}>
            These are the products and services produced by you and which you
            would like to track and monitor for resource efficiency.
          </Typography>
          <Typography variant="body1" pb={2} fontSize={14}>
            You can add a maximum of 20 products and services.
          </Typography>

          <Box display={"flex"} gap={2} alignItems={"center"}>
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
              <Box sx={{ width: "20px", mr: 0.6, mt: 0.5 }}>
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
                  Add a product/Services
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
                <Typography sx={{ color: "#00aa45", fontSize: 18 }}>
                  1
                </Typography>
                <Typography fontSize={13} color={"#383838"}>
                  A <b>Resource Efficiency (RE) indicator</b> is a ratio of two
                  parameter sets that serve as the numerator and denominator
                  within that ration, as shown below -
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
                <Typography sx={{ color: "#00aa45", fontSize: 18 }}>
                  2
                </Typography>
                <Typography fontSize={13} color={"#383838"}>
                  Thus, the <b>numerator</b> and <b>denominator</b> will need to
                  be set up first, before setting up the indicator.
                </Typography>
                <Divider sx={{ width: "20px", mb: 2, mt: 2 }} />
                <Typography sx={{ color: "#00aa45", fontSize: 18 }}>
                  3
                </Typography>
                <Typography fontSize={13} color={"#383838"}>
                  <b>Follow the steps</b> within to create and add your own
                  custom RE indicators
                </Typography>
              </Box>
            </Popover>
          </Box>

          <Paper
            elevation={1}
            sx={{
              width: "250px",
              height: "100px",
              position: "relative",
              py: 2.5,
              pl: 2,
              pr: 0,
              my: 3,
              backgroundColor: "#FFFFFFD9",
              border: "1px solid #DBDBDB",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                boxShadow: "0px 0px 10px #00000029",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  fontSize={14}
                  fontWeight={"bold"}
                  mb={2}
                >
                  Guests/customers
                </Typography>
                <Typography variant="body1" fontSize={14}>
                  (Numbers)
                </Typography>
              </Box>
              <IconButton sx={{ position: "absolute", top: 0, right: 0 }}>
                <CloseIcon
                  color="#DBDBDB"
                  sx={{
                    "&:hover": {
                      color: "#98561D",
                    },
                  }}
                />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container>
        {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={12}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} position={"relative"}>
              <Box
                sx={{ textAlign: "end", "&:hover": { color: "#98561D" } }}
                position={"absolute"}
                right={1}
                top={1}
              >
                <CloseIcon sx={{ fontSize: 30 }} />
              </Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight={"bold"}
                pb={3}
              >
                Add a product/Services
              </Typography>
              <Grid container alignItems={"start"}>
                <Grid xs={1} item>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: 16 }}
                  >
                    <b>1</b>
                  </Typography>
                </Grid>
                <Grid xs={11} item>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: 14, pb: 1 }}
                  >
                    Choose to add a product or a service
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handletoggleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton
                      value="Product"
                      sx={{
                        textTransform: "capitalize",
                        width: "100px",
                        borderRadius: "5px",
                      }}
                      size="small"
                      fullWidth
                    >
                      Product
                    </ToggleButton>
                    <ToggleButton
                      value="Service"
                      sx={{
                        textTransform: "capitalize",
                        width: "100px",
                        borderRadius: "5px",
                      }}
                      size="small"
                      fullWidth
                    >
                      Service
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>

                <Grid item xs={1}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 16, pt: 2 }}
                  >
                    <b>2</b>
                  </Typography>
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 14, pt: 2 }}
                  >
                    Type the name of the product to be added
                  </Typography>

                  <Box component="form" noValidate autoComplete="off">
                    <OutlinedInput
                      placeholder="Name of product"
                      variant="outlined"
                      size="small"
                      sx={{ mt: 1, mb: 2 }}
                      fullWidth
                    />
                  </Box>
                </Grid>

                <Grid item xs={1}>
                  <Typography id="modal-modal-title" sx={{ fontSize: 16 }}>
                    <b>3</b>
                  </Typography>
                </Grid>
                <Grid item xs={11} alignItems={"center"}>
                  <Typography id="modal-modal-title" sx={{ fontSize: 14 }}>
                    Select the relevant units of measurement for this parameter
                  </Typography>

                  <Grid
                    item
                    container
                    mt={0.5}
                    spacing={1}
                    alignItems={"center"}
                  >
                    <Grid item xs={12}>
                      <FormControl size="small" fullWidth>
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">Select unit</MenuItem>
                          <MenuItem value={10}>kg</MenuItem>
                          <MenuItem value={20}>liter</MenuItem>
                          <MenuItem value={50}>nos</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Box textAlign={"end"} mt={5}>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: "#DBDBDB",
                        color: "#FFFFFF",
                        border: "none",
                        "&:hover": {
                          backgroundColor: "#DBDBDB",
                          border: "none",
                        },
                      }}
                      onClick={handleOpen}
                    >
                      Add parameter <ArrowForwardIcon fontSize="16px" />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Modal>

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} position={"relative"}>
              <Box
                sx={{ textAlign: "end", "&:hover": { color: "red" } }}
                position={"absolute"}
                right={1}
                top={1}
              >
                <CloseIcon sx={{ fontSize: 30 }} />
              </Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight={"bold"}
                pb={3}
              >
                Add a services
              </Typography>
              <Grid container alignItems={"start"}>
                <Grid xs={1} item>
                  <Typography
                    id="modal-modal-description"
                    sx={{ fontSize: 16 }}
                  >
                    <b>1</b>
                  </Typography>
                </Grid>

                <Grid item xs={11}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 14, pb: 2 }}
                  >
                    Select a service or add a custom entry
                  </Typography>

                  <Box component="form" noValidate autoComplete="off">
                    <FormControl size="small" fullWidth>
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">Select service</MenuItem>
                        <MenuItem value={10}>Guest-nights</MenuItem>
                        <MenuItem value={20}>Guests served</MenuItem>
                        <MenuItem value={50}>In-house catering</MenuItem>
                        <MenuItem value={50}>Add a custom entry</MenuItem>
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
                <Grid item xs={11} alignItems={"center"}>
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: 14, pt: 2 }}
                  >
                    Relevant units will be automatically added for selected
                    parameters, except for custom entries
                  </Typography>

                  <Grid
                    item
                    container
                    mt={0.5}
                    spacing={1}
                    alignItems={"center"}
                  >
                    <Grid item xs={12}>
                      <OutlinedInput
                        placeholder=" Automatically added units"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{ textAlign: "end", mb: 2 }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Box textAlign={"end"} mt={5}>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: "#DBDBDB",
                        color: "#FFFFFF",
                        border: "none",
                        "&:hover": {
                          backgroundColor: "#DBDBDB",
                          border: "none",
                        },
                      }}
                      onClick={handleOpen}
                    >
                      Add parameter <ArrowForwardIcon fontSize="16px" />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Modal> */}
        </Grid>
      </Grid>

      {
        // <Modal
        //   open={open}
        //   onClose={handleClose}
        //   aria-labelledby="modal-modal-title"
        //   aria-describedby="modal-modal-description"
        // >
        //   <Box sx={style} position={"relative"}>
        //     <Box
        //       sx={{
        //         textAlign: "end",
        //         position: "absolute",
        //         top: 1,
        //         right: 1,
        //         "&:hover": { color: "#98561D" },
        //       }}
        //     >
        //       <CloseIcon />
        //     </Box>
        //     <Typography
        //       id="modal-modal-title"
        //       variant="h6"
        //       component="h2"
        //       fontWeight={"bold"}
        //     >
        //       Add a product/service
        //     </Typography>
        //     <Grid container>
        //       <Grid item xs={1}>
        //         <Typography
        //           id="modal-modal-description"
        //           sx={{ mt: 2, fontSize: 14, mb: 1 }}
        //         >
        //           <b>1</b>
        //         </Typography>
        //       </Grid>
        //       <Grid item xs={11}>
        //         <Typography
        //           id="modal-modal-description"
        //           sx={{ mt: 2, fontSize: 12, mb: 1 }}
        //         >
        //           {" "}
        //           Choose to whether add a product or a service
        //         </Typography>
        //         <Box>
        //           <Stack
        //             direction="row"
        //             spacing={1}
        //             sx={{ alignItems: "center" }}
        //           >
        //             <Typography>Product</Typography>
        //             <AntSwitch
        //               defaultChecked
        //               inputProps={{ "aria-label": "ant design" }}
        //             />
        //             <Typography>Service</Typography>
        //           </Stack>
        //         </Box>
        //       </Grid>
        //       <Grid item xs={1}>
        //         <Typography id="modal-modal-title" sx={{ fontSize: 12, pt: 2 }}>
        //           <b>2</b>
        //         </Typography>
        //       </Grid>
        //       <Grid item xs={11}>
        //         <Typography id="modal-modal-title" sx={{ fontSize: 12, pt: 2 }}>
        //           Type the name of the service to be added
        //         </Typography>
        //         <Box component="form" noValidate autoComplete="off">
        //           <OutlinedInput
        //             placeholder="Name of service"
        //             variant="outlined"
        //             size="small"
        //             sx={{ my: 2 }}
        //             fullWidth
        //           />
        //         </Box>
        //       </Grid>
        //       <Grid item xs={1}>
        //         <Typography id="modal-modal-title" sx={{ fontSize: 14 }}>
        //           <b>3</b>
        //         </Typography>
        //       </Grid>
        //       <Grid item xs={11}>
        //         <Typography id="modal-modal-title" sx={{ fontSize: 12 }}>
        //           Depending on the option chosen, the relevant units of
        //           measurement will be automatically added for you
        //         </Typography>
        //         <Box component="form" noValidate autoComplete="off">
        //           <SmallLabelTextField
        //             label="selected the relevant unit"
        //             variant="outlined"
        //             size="small"
        //             sx={{ my: 2 }}
        //             fullWidth
        //           />
        //         </Box>
        //       </Grid>
        //     </Grid>
        //     <Box textAlign={"end"}>
        //       <Button
        //         sx={{
        //           mt: 5,
        //           color: "white",
        //           py: 1,
        //           px: 8,
        //           fontWeight: "bold",
        //           marginLeft: "auto",
        //           textAlign: "end",
        //           backgroundColor: "#00AA45",
        //         }}
        //         onClick={handleOpen}
        //       >
        //         Add <ArrowForwardIcon fontSize="16px" />
        //       </Button>
        //     </Box>
        //   </Box>
        // </Modal>
      }
    </>
  );
};

export default Products;
