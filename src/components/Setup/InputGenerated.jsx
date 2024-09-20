import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
  Popover,
} from "@mui/material";
import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const InputGenerated = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const commentOpen = Boolean(anchorEl);

  return (
    <Container maxWidth={"md"}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Divider
            sx={{
              width: "30px",
              height: "3px",
              backgroundColor: "#00000029",
              mt: 3,
            }}
          />
          <Typography
            fontSize={24}
            pt={5}
            color={"#383838"}
            fontWeight={"bold"}
          >
            MATERIALS
          </Typography>
          <FormControlLabel
            control={<Checkbox size="small" defaultChecked />}
            label={
              <Typography fontSize={14}>
                Track and monitor the costs of the listed parameter(s) as well
                <span style={{ color: "#b5b5b5" }}>(OPTIONAL)</span>
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Milk Powder
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Box sx={{ position: "relative" }}>
            <Typography
              fontSize={16}
              pt={2}
              pb={1}
              color={"#383838"}
              fontWeight={"bold"}
            >
              Chocolate syrup{" "}
            </Typography>

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
                top: 17,
                right: 240,
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

          <Box>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="outlined-adornment-weight"
                size="small"
                endAdornment={
                  <InputAdornment position="end">liters</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Cost (Milk powder)
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">USD</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Cost (Chocolate syrup)
          </Typography>
          <Box>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="outlined-adornment-weight"
                size="small"
                endAdornment={
                  <InputAdornment position="end">USD</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Divider
          sx={{
            width: "30px",
            height: "4px",
            backgroundColor: "#00000029",
            mt: 6,
            ml: 2,
          }}
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Typography
            fontSize={24}
            pt={5}
            color={"#383838"}
            fontWeight={"bold"}
          >
            ENERGY SOURCES
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Grid electricity
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">KWH</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Diesel
          </Typography>
          <Box>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="outlined-adornment-weight"
                size="small"
                endAdornment={
                  <InputAdornment position="end">liters</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Electricity bill
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">USD</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </Grid>
        <Divider
          sx={{
            width: "30px",
            height: "4px",
            backgroundColor: "#00000029",
            mt: 6,
            ml: 2,
          }}
        />
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Typography
            fontSize={24}
            pt={5}
            color={"#383838"}
            fontWeight={"bold"}
          >
            WATER SOURCES
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Groundwater
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={
                <InputAdornment position="end">liters</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Harvested rainwater
          </Typography>
          <Box>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput
                id="outlined-adornment-weight"
                size="small"
                endAdornment={
                  <InputAdornment position="end">liters</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={16}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Water bill
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">USD</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Grid item lg={6}></Grid>
        </Grid>

        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box textAlign={"end"} mt={5}>
              <Button
                sx={{
                  color: "#00AA45",
                  py: 1,
                  fontWeight: "bold",
                  marginLeft: "auto",
                  textAlign: "end",
                  "&:hover": { backgroundColor: "white" },
                  boxShadow: "0px 0px 10px #00000029",
                }}
                onClick={handleOpen}
              >
                <ArrowBackIcon sx={{ fontSize: 18, mr: 1 }} />
                Back
              </Button>
            </Box>

            <Box textAlign={"end"} mt={5}>
              <Button
                sx={{
                  color: "#00AA45",
                  py: 1,
                  fontWeight: "bold",
                  marginLeft: "auto",
                  textAlign: "end",
                  "&:hover": { backgroundColor: "white" },
                  boxShadow: "0px 0px 10px #00000029",
                }}
                onClick={handleOpen}
              >
                Save and next
                <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InputGenerated;
