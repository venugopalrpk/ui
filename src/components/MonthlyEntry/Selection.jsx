import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/system";
import Info from "../Modal/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  marginTop: "8px",
  marginBottom: "16px",
  gap: "3px",
}));

const Selection = () => {
  const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
    color: "#138c50", // Custom color
  }));

  return (
    <Container maxWidth={"lg"}>
      <Grid container mt={4} mb={1}>
        <Grid item lg={1}>
          <IconButton>
            <ArrowBackIcon
              sx={{
                color: "black",
                "&:hover": {
                  color: "red",
                  transform: "scale(1.5)",
                },
                display: { xs: "none", md: "block" },
              }}
            />
          </IconButton>
        </Grid>

        <Grid item lg={11}>
          <Typography
            variant="body1"
            pb={2}
            sx={{ fontSize: { xs: 18, md: 28 } }}
            fontWeight={"bold"}
          >
            <IconButton sx={{ pl: 0, ml: 0, mt: 2 }}>
              <ArrowBackIcon
                sx={{
                  color: "black",
                  "&:hover": {
                    color: "red",
                    transform: "scale(1.5)",
                  },
                  display: { xs: "block", md: "none" },
                }}
              />
            </IconButton>
            2. Monthly Entry
          </Typography>
          <Typography id="modal-modal-title" sx={{ fontSize: 14, pb: 3 }}>
            <b>Choose a month</b> to start entering in the required data against
            that particular month.
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography id="modal-modal-title" sx={{ fontSize: 14, pb: 1 }}>
              <b> NOTE:</b> Although you are not required to choose months in
              order, it is recommended that you do so, starting from the first
              month.
            </Typography>
            <Info>
              <Typography fontSize={14} fontWeight={"bold"}>
                TOOLTIPS
              </Typography>

              <StyledBox>
                <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                  <ArrowForwardIcon sx={{ fontSize: 15 }} />
                </IconButton>
                <Typography fontSize={13}>
                  Choose a month to log in the required quantities, from the
                  60-month monitoring period. You can choose to start with any
                  month within the monitoring period.
                </Typography>
              </StyledBox>
              <StyledBox>
                <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                  <ArrowForwardIcon sx={{ fontSize: 15 }} />
                </IconButton>
                <Typography fontSize={13}>
                  You can come back any time and edit any month's data. Remember
                  to save every single time after editing the data to let the
                  system know of the changes.
                </Typography>
              </StyledBox>
              <Divider sx={{ width: "15px", backgroundColor: "grey" }} />
              <Typography fontSize={13} pt={2} pl={2}>
                <span style={{ color: "#138c50" }}>NOTE:</span> If you have your
                data on a daily basis, please convert it to a monthly basis and
                then enter it. Colour code Unattemped Complete Incomplete
              </Typography>
            </Info>
          </Box>
          <Box>
            <Divider />
          </Box>

          <Grid container>
            <Grid item lg={6} xs={12}>
              <Accordion
                sx={{
                  mt: 5,
                  borderRadius: "10px",
                }}
              >
                <AccordionSummary
                  expandIcon={<StyledExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 14,
                    backgroundColor: "rgb(217, 217, 217)",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  2022
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontSize: 13,
                    backgroundColor: "rgb(217, 217, 217)",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      width: "100px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    mar
                  </Box>
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  borderRadius: "10px",

                  "&.MuiAccordion-root": { borderRadius: "10px" },
                }}
              >
                <AccordionSummary
                  expandIcon={<StyledExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 14,
                    backgroundColor: "rgb(217, 217, 217)",
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px",
                  }}
                >
                  2022
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontSize: 13,
                    backgroundColor: "rgb(217, 217, 217)",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      "&:hover": { backgroundColor: "grey" },
                      width: "100px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      mb: 2,
                      fontWeight: "bold",
                    }}
                  >
                    mar
                  </Box>

                  <Box
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#F8E0A8",
                      width: "100px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      mb: 2,
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body1"
                      pb={1}
                      fontSize={18}
                      pt={2}
                      fontWeight={"bold"}
                    >
                      Mar
                    </Typography>
                    <Typography
                      variant="body1"
                      pb={2}
                      fontSize={12}
                      color={"red"}
                    >
                      Incomplete!
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#E4F1D4",

                      width: "100px",
                      height: "90px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: "bold",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src="./homepage/checkmark.png"
                      alt=""
                      style={{ width: "18px" }}
                    />
                    <Typography
                      variant="body1"
                      pb={1}
                      pt={1}
                      fontSize={18}
                      fontWeight={"bold"}
                    >
                      Apr
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Selection;
