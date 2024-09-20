import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
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
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import MonthNavigation from "./MonthNavigation";
import InputGenerated from "../Setup/InputGenerated";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  marginTop: "8px",
  marginBottom: "16px",
  gap: "3px",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "lightgrey" : "lightgrey",
  },
}));

const MonthlyEntry = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth={"lg"}>
      <Grid container lg={12}>
        <Grid item lg={9}>
          <Grid item container p={2} pr={2} border={"1px solid black"} lg={10}>
            <Grid item lg={0.75} pr={1}>
              <Box sx={{ "&:hover": { backgroundColor: "#F5F5F5" } }}>
                <Typography fontSize={15} fontWeight={"bold"} color={"#4a4a4a"}>
                  JAN
                </Typography>
                <Typography fontSize={12} color={"#b5b5b5"}>
                  2024
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={8.75}
              pr={2}
              pl={2}
              borderLeft={"1px solid black"}
              borderRight={"1px solid black"}
            >
              <Box position={"relative"} pl={9} pr={2}>
                <Box
                  sx={{
                    width: "75%",
                    height: "5px",
                    backgroundColor: "#b5b5b5",
                    mt: 2,
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    pt: 2,
                  }}
                >
                  <Typography
                    fontSize={10}
                    color={"#00AA45"}
                    fontWeight={"bold"}
                  >
                    products/services
                  </Typography>
                  <Typography
                    fontSize={10}
                    color={"#b5b5b5"}
                    fontWeight={"bold"}
                  >
                    Input resources
                  </Typography>
                  <Typography
                    fontSize={10}
                    color={"#b5b5b5"}
                    fontWeight={"bold"}
                  >
                    Waste generated
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: { sm: "8px", md: "35px" },
                    height: { sm: "3px", md: "35px" },
                    border: "3px solid #00AA45",
                    borderRadius: "50%",

                    position: "absolute",
                    // bottom: "35px",
                    top: { sm: 1, md: -18 },
                    left: "65px",
                    pl: 1,
                    backgroundColor: "#FFFFFF",
                    // backgroundColor: "#00aa45",
                  }}
                >
                  <Typography
                    sx={{ fontSize: { sm: "5px !important", md: "20px" } }}
                  >
                    1
                  </Typography>
                  {/* <Box>
                    <CheckIcon
                      sx={{
                        color: "#ffffff",
                        fontWeight: "bold",
                        position: "absolute",
                        top: 3,
                        right: 3,
                        fontSize: "22px",
                      }}
                    /> */}
                  {/* </Box> */}
                </Box>
                <Box
                  sx={{
                    width: { sm: "15px", md: "35px" },
                    height: { sm: "15px", md: "35px" },
                    border: "1px solid #b5b5b5",
                    borderRadius: "50%",
                    position: "absolute",
                    left: "190px",
                    top: "-16px",
                    fontSize: 21,
                    pl: 1.3,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  2
                </Box>
                <Box
                  sx={{
                    width: { sm: "15px", md: "35px" },
                    height: { sm: "15px", md: "35px" },
                    border: "1px solid #b5b5b5",
                    borderRadius: "50%",
                    position: "absolute",
                    right: "85px",
                    top: "-16px",
                    fontSize: 21,
                    pl: 1.3,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  3
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2.5} pl={1}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    "&:hover": { backgroundColor: "#F5F5F5" },
                  }}
                >
                  <IconButton>
                    <DeleteIcon sx={{ "&:hover": { color: "#98561D" } }} />
                  </IconButton>
                  <Typography fontSize={12} color={"#b5b5b5"}>
                    Clear all entries for this month
                  </Typography>
                </Box>
                <IconButton sx={{ pr: 0, mr: 0 }}>
                  <KeyboardDoubleArrowLeftIcon sx={{ color: "#b5b5b5" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Grid item container lg={12}>
            <Grid item lg={6}>
              {" "}
              <Typography
                fontSize={24}
                pt={5}
                color={"#383838"}
                fontWeight={"bold"}
              >
                PRODUCTS/SERVICES
              </Typography>
              <Typography
                fontSize={16}
                pt={2}
                pb={1}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Guests/customers
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
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
                Chocolate milkshake
              </Typography>
              <Box>
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>

                {/* <Box textAlign={"end"} mt={4}>
                  <Button
                    sx={{
                      mt: 5,
                      color: "#00AA45",
                      py: 1,
                      fontWeight: "bold",
                      marginLeft: "auto",
                      textAlign: "end",
                      "&:hover": { backgroundColor: "white" },
                      boxShadow: "0px 0px 20px #00000029",
                    }}
                    onClick={handleOpen}
                  >
                    Save and next
                    <ArrowForwardIcon sx={{ fontSize: 18, ml: 1 }} />
                  </Button>
                </Box> */}
              </Box>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <InputGenerated />
          </Grid>
          <Grid item lg={3}>
            <MonthNavigation />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MonthlyEntry;
