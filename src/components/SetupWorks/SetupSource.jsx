import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomBox from "../Setup/CustomBox";

const SetupSource = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setAnchorEl(null);
  };

  const infoOpen = Boolean(anchorEl);
  const id = infoOpen ? "simple-popover" : undefined;

  return (
    <Container>
      <Grid container lg={12}>
        <Grid item xs={6}>
          <Typography
            id="modal-modal-title"
            sx={{ fontSize: 26, pb: 2, pt: 3, fontWeight: "bold" }}
          >
            Set up resource efficiency indicators
          </Typography>
          <Typography id="modal-modal-title" sx={{ fontSize: 14, pb: 3 }}>
            Set up the resource efficiency (RE) indicators relevant to your
            specific requirements.
          </Typography>
          <Box display={"flex"} gap={2}>
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
                  fontSize={12}
                >
                  Add an RE indicator
                </Typography>
                <Typography
                  variant="body1"
                  color={"#138c50"}
                  fontSize={10}
                  pl={1}
                  textAlign={"start"}
                >
                  (1 added)
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
              sx={{ mt: 2 }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </Box>
          <CustomBox />
          <Box textAlign={"end"}>
            <Button
              sx={{
                mt: 5,
                color: "white",
                py: 1,
                px: 4,
                fontWeight: "bold",

                textAlign: "end",
                backgroundColor: "#00AA45",
              }}
            >
              Finish this stage <ArrowForwardIcon fontSize="16px" />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SetupSource;
