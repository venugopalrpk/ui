import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  OutlinedInput,
  Paper,
  Typography,
  Stack,
  Popover,
} from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import AddIcon from "@mui/icons-material/Add";
import CustomBox from "./CustomBox";
import Info from "../Modal/Info";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const SmallLabelTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "12px", // Adjust the font size as needed
  },
}));

const InputResources = () => {
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

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const commentOpen = Boolean(anchorEl);

  const [alignment, setAlignment] = React.useState("web");

  const handletoggleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid container>
      <Grid item lg={6} sm={12}>
        <Typography variant="body1" pb={2} fontSize={14}>
          These are the input resources that go into the products and services
          you have set up to track and monitor for resource efficiency. The
          input resources could be materials, different forms of energy and
          water.
        </Typography>

        <Typography variant="body1" pb={2} fontSize={20} fontWeight={"bold"}>
          MATERIALS USED
        </Typography>
        <Typography variant="body1" pb={2} fontSize={14}>
          You can add upto 20 materials.
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
                Add a material
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

        <Box sx={{ position: "relative" }}>
          <CustomBox />
          {/* <ChatBubbleIcon
            sx={{
              position: "absolute",
              top: -20,
              right: 250,
              color: "#00aa45",
              "&:hover": { backgroundColor: "green" },
            }}
          /> */}
          <ChatBubbleOutlineIcon
            sx={{
              position: "absolute",
              top: -20,
              right: 250,
              color: "#00aa45",
              "&:hover": { backgroundColor: "green" },
            }}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          />
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
              bottom: "10%",
            }}
            open={commentOpen}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "top",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }} maxWidth={"150px"} fontSize={12}>
              The relevant comment for this month will be displayed here.
            </Typography>
          </Popover>
        </Box>

        <Divider
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "lightgrey",
            mb: 2,
            mt: 6,
          }}
        />

        <Typography variant="body1" pb={2} fontSize={18} fontWeight={"bold"}>
          ENERGY SOURCES
        </Typography>
        <Typography variant="body1" pb={2} fontSize={14}>
          Add the Energy sources (max. 10) that your enterprices uses to the
          monitering list.
        </Typography>
        <Typography variant="body1" pb={2} fontSize={14}>
          A few common energy sources have already been added to your monitering
          list as suggestions, based on your industry sector.
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
                Add an energy source
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

        <Divider
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "lightgrey",
            mb: 2,
            mt: 6,
          }}
        />

        <Typography variant="body1" pb={2} fontSize={18} fontWeight={"bold"}>
          WATER SOURCES
        </Typography>
        <Typography variant="body1" pb={2} fontSize={14}>
          Add the water sources (max. 10) that your enterprices uses to the
          monitering list.
        </Typography>
        <Typography variant="body1" pb={2} fontSize={14}>
          A few common water sources have already been added to your monitering
          list as suggestions, based on your industry sector.
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Button
            sx={{
              width: { xs: "100%", lg: "50%" },
              backgroundColor: "#F5F5F5",

              display: "flex",
              alignItems: "center",
              p: 2,
              mt: 2,
            }}
            onClick={handleOpen}
          >
            <Box sx={{ width: "40px", mr: 0.6 }}>
              <AddIcon sx={{ color: "#00000029" }} />
            </Box>
            <Box flexDirection={"column"}>
              <Typography
                variant="body1"
                pl={1}
                color={"#00000029"}
                fontWeight={600}
                fontSize={14}
              >
                Add an water source
              </Typography>
              <Typography
                variant="body1"
                color={"#00000029"}
                fontSize={10}
                pl={1}
                textAlign={"start"}
              >
                (Maximum limit reached)
              </Typography>
            </Box>
          </Button>
          <Info />
        </Box>
        <CustomBox />
        <CustomBox />
      </Grid>

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
            Add a material
          </Typography>
          <Grid container alignItems={"start"}>
            <Grid xs={1} item>
              <Typography id="modal-modal-description" sx={{ fontSize: 16 }}>
                <b>1</b>
              </Typography>
            </Grid>
            <Grid xs={11} item>
              <Typography
                id="modal-modal-description"
                sx={{ fontSize: 14, pb: 1 }}
              >
                Type the name of the material to be added
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <OutlinedInput
                  placeholder="Name of product"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item xs={1}>
              <Typography id="modal-modal-title" sx={{ fontSize: 16, pt: 2 }}>
                <b>2</b>
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography id="modal-modal-title" sx={{ fontSize: 14, pt: 2 }}>
                Select the relevant units of measurement for this parameter
              </Typography>

              <FormControl size="small" fullWidth sx={{ pt: 2 }}>
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

            <Grid item xs={1}>
              <Typography id="modal-modal-title" sx={{ fontSize: 16, pt: 2 }}>
                <b>3</b>
              </Typography>
            </Grid>
            <Grid item xs={11} alignItems={"center"}>
              <Typography id="modal-modal-title" sx={{ fontSize: 14, pt: 2 }}>
                (OPTIONAL) Add a note for this parameter. This note will appear
                against this parameter in the Setup and Input stages.
              </Typography>
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

            <Grid item xs={12}>
              <Box textAlign={"end"} mt={5}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DBDBDB",
                    border: "none",
                    color: "#FFFFFF",
                    "&:hover": { backgroundColor: "#DBDBDB", border: "none" },
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
            sx={{ textAlign: "end", position: "absolute", right: 1, top: 1 }}
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
              fontSize={"26px"}
            >
              Add a energy source
            </Typography>
            <Grid container>
              <Grid item xs={1} pt={1.5}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight={"bold"}
                  fontSize={18}
                >
                  1
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, fontSize: 16, pb: 1 }}
                >
                  Select an energy source to add
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <FormControl size="small" fullWidth>
                    <Select
                      value={boiler}
                      onChange={handleChangeBoiler}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">Select energy source</MenuItem>
                      <MenuItem value={20}>grid electricity</MenuItem>
                      <MenuItem value={30}>Deisel for the DG set</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  fontWeight={"bold"}
                  fontSize={18}
                  pt={2.5}
                >
                  2
                </Typography>
              </Grid>
              <Grid item xs={11}>
                <Typography
                  id="modal-modal-title"
                  sx={{ fontSize: 16, pt: 3, pb: 1 }}
                >
                  Relevant units will be automatically added for selected energy
                  sources
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
            </Grid>
            <Box textAlign={"end"} mt={5}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#DBDBDB",
                  border: "none",
                  color: "#FFFFFF",
                  "&:hover": { backgroundColor: "#DBDBDB", border: "none" },
                }}
                onClick={handleOpen}
              >
                Add parameter <ArrowForwardIcon fontSize="16px" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal> */}

      {
        // <Modal
        //   open={open}
        //   onClose={handleClose}
        //   aria-labelledby="modal-modal-title"
        //   aria-describedby="modal-modal-description"
        // >
        //   <Box sx={style} position={"relative"}>
        //     <Box
        //       sx={{ textAlign: "end", position: "absolute", right: 1, top: 1 }}
        //     >
        //       <IconButton onClick={handleBoilerClose}>
        //         <CloseIcon sx={{ "&:hover": { color: "#98561D" } }} />
        //       </IconButton>
        //     </Box>
        //     <Box p={2}>
        //       <Typography
        //         id="modal-modal-title"
        //         variant="h6"
        //         component="h2"
        //         fontWeight={"bold"}
        //         fontSize={"26px"}
        //       >
        //         <Modal
        //           open={open}
        //           onClose={handleClose}
        //           aria-labelledby="modal-modal-title"
        //           aria-describedby="modal-modal-description"
        //         >
        //           <Box sx={style} position={"relative"}>
        //             <Box
        //               sx={{
        //                 textAlign: "end",
        //                 position: "absolute",
        //                 right: 1,
        //                 top: 1,
        //               }}
        //             >
        //               <IconButton onClick={handleBoilerClose}>
        //                 <CloseIcon sx={{ "&:hover": { color: "#98561D" } }} />
        //               </IconButton>
        //             </Box>
        //             <Box p={2}>
        //               <Typography
        //                 id="modal-modal-title"
        //                 variant="h6"
        //                 component="h2"
        //                 fontWeight={"bold"}
        //                 fontSize={"26px"}
        //               >
        //                 Add a water source
        //               </Typography>
        //               <Grid container>
        //                 <Grid item xs={1} pt={1.5}>
        //                   <Typography
        //                     id="modal-modal-title"
        //                     variant="h6"
        //                     component="h2"
        //                     fontWeight={"bold"}
        //                     fontSize={18}
        //                   >
        //                     1
        //                   </Typography>
        //                 </Grid>
        //                 <Grid item xs={11}>
        //                   <Typography
        //                     id="modal-modal-description"
        //                     sx={{ mt: 2, fontSize: 16, pb: 1 }}
        //                   >
        //                     Select a water source to add
        //                   </Typography>
        //                   <Box component="form" noValidate autoComplete="off">
        //                     <FormControl size="small" fullWidth>
        //                       <Select
        //                         value={boiler}
        //                         onChange={handleChangeBoiler}
        //                         displayEmpty
        //                         inputProps={{ "aria-label": "Without label" }}
        //                       >
        //                         <MenuItem value="">
        //                           Select water source
        //                         </MenuItem>
        //                         <MenuItem value={20}>
        //                           Municipal water supply
        //                         </MenuItem>
        //                         <MenuItem value={30}>
        //                           Harvested rainwater
        //                         </MenuItem>
        //                         <MenuItem value={30}>
        //                           Groundwater (wells, borewells etc.)
        //                         </MenuItem>
        //                         <MenuItem value={30}>
        //                           Freshwater (ponds, rivers etc.)
        //                         </MenuItem>
        //                       </Select>
        //                     </FormControl>
        //                   </Box>
        //                 </Grid>
        //                 <Grid item xs={1}>
        //                   <Typography
        //                     id="modal-modal-title"
        //                     variant="h6"
        //                     component="h2"
        //                     fontWeight={"bold"}
        //                     fontSize={18}
        //                     pt={2.5}
        //                   >
        //                     2
        //                   </Typography>
        //                 </Grid>
        //                 <Grid item xs={11}>
        //                   <Typography
        //                     id="modal-modal-title"
        //                     sx={{ fontSize: 16, pt: 3, pb: 1 }}
        //                   >
        //                     Relevant units will be automatically added for
        //                     selected water sources
        //                   </Typography>
        //                   <Box component="form" noValidate autoComplete="off">
        //                     <OutlinedInput
        //                       placeholder="Automatically added units"
        //                       variant="outlined"
        //                       size="small"
        //                       fullWidth
        //                     />
        //                   </Box>
        //                 </Grid>
        //               </Grid>
        //               <Box textAlign={"end"} mt={5}>
        //                 <Button
        //                   variant="outlined"
        //                   sx={{
        //                     backgroundColor: "#DBDBDB",
        //                     color: "#FFFFFF",
        //                     border: "none",
        //                     "&:hover": {
        //                       backgroundColor: "#DBDBDB",
        //                       border: "none",
        //                     },
        //                   }}
        //                   onClick={handleOpen}
        //                 >
        //                   Add parameter <ArrowForwardIcon fontSize="16px" />
        //                 </Button>
        //               </Box>
        //             </Box>
        //           </Box>
        //         </Modal>
        //       </Typography>
        //       <Grid container>
        //         <Grid item xs={1} pt={1.5}>
        //           <Typography
        //             id="modal-modal-title"
        //             variant="h6"
        //             component="h2"
        //             fontWeight={"bold"}
        //             fontSize={18}
        //           >
        //             1
        //           </Typography>
        //         </Grid>
        //         <Grid item xs={11}>
        //           <Typography
        //             id="modal-modal-description"
        //             sx={{ mt: 2, fontSize: 16, pb: 1 }}
        //           >
        //             Select an energy source to add
        //           </Typography>
        //           <Box component="form" noValidate autoComplete="off">
        //             <FormControl size="small" fullWidth>
        //               <Select
        //                 value={boiler}
        //                 onChange={handleChangeBoiler}
        //                 displayEmpty
        //                 inputProps={{ "aria-label": "Without label" }}
        //               >
        //                 <MenuItem value="">Select energy source</MenuItem>
        //                 <MenuItem value={20}>grid electricity</MenuItem>
        //                 <MenuItem value={30}>Deisel for the DG set</MenuItem>
        //               </Select>
        //             </FormControl>
        //           </Box>
        //         </Grid>
        //         <Grid item xs={1}>
        //           <Typography
        //             id="modal-modal-title"
        //             variant="h6"
        //             component="h2"
        //             fontWeight={"bold"}
        //             fontSize={18}
        //             pt={2.5}
        //           >
        //             2
        //           </Typography>
        //         </Grid>
        //         <Grid item xs={11}>
        //           <Typography
        //             id="modal-modal-title"
        //             sx={{ fontSize: 16, pt: 3, pb: 1 }}
        //           >
        //             Relevant units will be automatically added for selected
        //             energy sources
        //           </Typography>
        //           <Box component="form" noValidate autoComplete="off">
        //             <SmallLabelTextField
        //               label="Automatically added units"
        //               variant="outlined"
        //               size="small"
        //               fullWidth
        //             />
        //           </Box>
        //         </Grid>
        //       </Grid>
        //       <Box textAlign={"end"} mt={5}>
        //         <Button disabled variant="contained" onClick={handleOpen}>
        //           Add parameter <ArrowForwardIcon fontSize="16px" />
        //         </Button>
        //       </Box>
        //     </Box>
        //   </Box>
        // </Modal>
      }
    </Grid>
  );
};

export default InputResources;
