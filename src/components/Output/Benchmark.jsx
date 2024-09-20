import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  Popover,
  InputAdornment,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

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

const Benchmark = () => {
  const [open, setOpen] = React.useState(false);

  const [boiler, setBoiler] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              Set up benchmarks
              <span style={{ color: "#777777" }}> (optional)</span>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontSize: 14, color: "#383838" }}
            >
              Set up benchmark(s) for your indicator. You may set a maximum of 3
              benchmarks per indicator.
            </Typography>
            <Box pt={2}>
              <Button
                variant="outlined"
                sx={{
                  color: "#FFFFFF",
                  border: "none",
                  backgroundColor: "#DBDBDB",
                  boxShadow: "0px 0px 10px #00000029",
                  "&:hover": {
                    backgroundColor: "#DBDBDB",

                    border: "none",
                  },
                }}
              >
                Add a benchmark(3/3 added)
              </Button>
            </Box>
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
              <Grid item xs={12}>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      color: "#383838",
                      fontSize: 16,
                      pb: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Benchmark 1
                  </Typography>
                  <Delete sx={{ color: "#98561D", fontSize: 18 }} />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <OutlinedInput
                  placeholder="Label"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textAlign: "end", mb: 2 }}
                />

                <OutlinedInput
                  placeholder="Benchmark"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textAlign: "end", mb: 2 }}
                  endAdornment={
                    <InputAdornment position="end">units</InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: 16,
                      color: "#383838",
                      pb: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Benchmark 2
                  </Typography>
                  <Delete sx={{ color: "#98561D", fontSize: 18 }} />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <OutlinedInput
                  placeholder=" Label"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textAlign: "end", mb: 2 }}
                />

                <OutlinedInput
                  placeholder=" Benchmark"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textAlign: "end", mb: 2 }}
                  endAdornment={
                    <InputAdornment position="end">units</InputAdornment>
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontSize: 16,
                      color: "#383838",
                      pb: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Benchmark 3
                  </Typography>
                  <Delete sx={{ color: "#98561D", fontSize: 18 }} />
                </Box>
              </Grid>
              <Grid item xs={10}>
                <OutlinedInput
                  placeholder=" Label"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textAlign: "end", mb: 2 }}
                />

                <OutlinedInput
                  placeholder=" Benchmark"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ textAlign: "end", mb: 2 }}
                  endAdornment={
                    <InputAdornment position="end">units</InputAdornment>
                  }
                />
              </Grid>
            </Grid>
            <Box textAlign={"end"} mt={5}>
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  minWidth: "50px",
                  backgroundColor: "#00aa45",
                  "&:hover": { backgroundColor: "#00aa45" },
                }}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Benchmark;
