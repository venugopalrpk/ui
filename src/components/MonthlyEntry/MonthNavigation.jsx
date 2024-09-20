import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  OutlinedInput,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Info from "@mui/icons-material/Info";

const MonthNavigation = () => {
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

  const Booleanopen = Boolean(anchorEl);

  return (
    <Container maxWidth={"md"}>
      <Grid container>
        <Grid item lg={12}>
          <Typography
            fontSize={18}
            pt={5}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Month Navigation
          </Typography>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
            alignItems={"center"}
            mb={2}
          >
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: 12,
                color: "#b5b5b5",
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: "12px" }} />
              Last month
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: 12,

                fontWeight: "bold",
              }}
            >
              Next month
              <ArrowForwardIosIcon sx={{ fontSize: "12px" }} />
            </Typography>
          </Box>
          <Divider />
          <Box display={"flex"} pt={2}>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: 14,

                fontWeight: "bold",
              }}
            >
              Add comment for this month (optional)
            </Typography>
            <IconButton
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onClick={handlePopoverOpen}
            >
              <Info />
            </IconButton>

            <Popover
              id="mouse-over-popover"
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "right",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "right",
                horizontal: "right",
              }}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, maxWidth: "160px", fontSize: "12px" }}>
                Your comment will appear on the output against the month for
                which you have added it.
              </Typography>
            </Popover>
          </Box>
          <Box position={"relative"}>
            <OutlinedInput
              id="filled-multiline-static"
              multiline
              rows={8}
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
          <Button
            sx={{
              color: "#00AA45",
              py: 1,
              mt: 2,
              fontWeight: "bold",
              marginLeft: "auto",
              textAlign: "end",
              "&:hover": { backgroundColor: "white" },
              boxShadow: "0px 0px 10px #00000029",
            }}
            onClick={handleOpen}
          >
            Save comment
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MonthNavigation;
