import { Container } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Checkbox,
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

const AreYouSure = () => {
  const [open, setOpen] = React.useState(false);

  const [boiler, setBoiler] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Button onClick={handleOpen}>click</Button>
      <Modal
        sx={{ border: "none" }}
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
              Are you sure?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 1, fontSize: 14, color: "#383838" }}
            >
              All data regarding this indicator will be deleted forever.
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 1, fontSize: 14, color: "#383838" }}
            >
              <b>Note:</b> It is recommended that you download this indicator to
              your device by before deleting it, for future reference.
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box textAlign={"end"} mt={5}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  sx={{
                    color: "#98561D",
                    border: "none",
                    boxShadow: "0px 0px 10px #00000029",
                    minWidth: "50px",
                    backgroundColor: "#FFFFFF",
                    "&:hover": { backgroundColor: "#FFFFFF", border: "none" },
                  }}
                >
                  Cancal
                </Button>
              </Box>

              <Box textAlign={"end"} mt={5}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  sx={{
                    color: "#00aa45",
                    border: "none",
                    boxShadow: "0px 0px 10px #00000029",
                    minWidth: "50px",
                    backgroundColor: "#FFFFFF",
                    "&:hover": { backgroundColor: "#FFFFFF", border: "none" },
                  }}
                >
                  Yes, delete
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default AreYouSure;
