import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

const FrequentlyAskedQuestions = () => {
  const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
    color: "#138c50", // Custom color
  }));

  return (
    <Container maxWidth={"lg"}>
      <Grid container>
        <Grid item lg={3}>
          <Typography
            variant="h5"
            pt={2}
            pb={1}
            fontWeight={"bold"}
            color={"#138c50"}
          >
            About
          </Typography>
          <Box sx={{ p: 2 }} border={"1px solid black"} borderRadius={"10px"}>
            <Box
              component="img"
              src={"/homepage/about-img.jpg"}
              alt="switch asia image"
              sx={{
                width: "100%",
              }}
            />
            <Typography
              variant="body1"
              pb={3}
              pt={1}
              sx={{ fontSize: 14, lineHeight: 1.7 }}
            >
              Ref-Track is a digital Resource Efficiency Tracker platform
              developed for SMEs in Myanmar to monitor their resources,
              particularly their waste output
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ mb: 2, textAlign: "left" }}
            >
              Learn more
            </Button>
          </Box>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={8}>
          <Typography
            variant="h5"
            pt={2}
            pb={1}
            fontWeight={"bold"}
            color={"#138c50"}
          >
            Frequently Asked Questions
          </Typography>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon style={{ color: "#138c50" }} />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Is there any free to use this platform?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : No, there are no fees required to use this platform. You can
              simply create an account and log in to start using Ref-Track
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Can i sign in using multiple devices?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : Yes, Ref-Track is compatible on most devices including
              desktops, laptops and mobile phones. You can be signed in on
              multiple devices at once.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Can i use this platform in both English and Burmese?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : Yes, there is a toggle at the top of every screen which lets
              you easily switch between Burmese and English anytime
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              How long does it take to get to output stage and start getting
              insights through Ref-Track?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : After successfully saving the set-up requirements, you need
              just three months of data added in the monthly entry to enable
              output generation
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Do i have to fill in my monthtly data in a specific order?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : No, you are not required to fill the monthly data in order
              but, it is recommended that you do so starting from the first
              month.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Can i save/download the input data i enter in the monthtly entry?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : Yes! When generating an output, you will get an option of
              downloading the input log in the form of an excel sheet
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Who should i contact in case of any queries or problems with
              Ref-Track?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" pb={2} sx={{ fontSize: 13 }}>
                Ans : In case you encounter any technical issues or bugs,
                contact ________. If possible, please include the following in
                your email,
              </Typography>
              <Typography variant="body1" pb={2} ml={2} sx={{ fontSize: 13 }}>
                1. Relevant screenshots showcasing the problem
              </Typography>
              <Typography variant="body1" pb={2} ml={2} sx={{ fontSize: 13 }}>
                2. Name and model number of your device
              </Typography>
              <Typography variant="body1" pb={2} ml={2} sx={{ fontSize: 13 }}>
                3. Operating system of your device
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              What should i do if i have made a mistake in set up stage and want
              to remove some of it ?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" pb={2} sx={{ fontSize: 13 }}>
                Ans : If you have still not completed the Set up stage, there is
                an option for you to remove some of your previously-added
                entries. Click/tap on the (︙) icon on the parameter that you
                want to remove and click/tap on (x REMOVE) that appears.
                Click/Tap elsewhere on the screen to close this action, in case
                you change your mind and do not want to remove it anymore.
              </Typography>
              <Typography variant="body1" pb={2} sx={{ fontSize: 13 }}>
                If you have completed the Set up stage, then the only option you
                have left is to use the “Reset All Data” button to reset all of
                your saved data and start over again from the “Set up” stage.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Can i see a history of all the outputs that i have generated?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : No, the system does not remember all of your outputs. It
              only remembers your last generated output. Every time you generate
              a new output, it overrides the previously-generated output.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<StyledExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "black", fontWeight: "bold", fontSize: 14 }}
            >
              Can i change my profile picture?
            </AccordionSummary>
            <AccordionDetails sx={{ fontSize: 13 }}>
              Ans : There is no option to change your profile picture, your
              registered email ID or your registered phone number. You can
              however, change your username from the profile menu by clicking on
              your profile icon at the top right corner of your screen.
            </AccordionDetails>
          </Accordion>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: 14, fontWeight: "bold", color: "#138c50", pr: 1 }}
            >
              Load more
            </Typography>
            <KeyboardDoubleArrowDown
              style={{ color: "#138c50", fontSize: 16, fontWeight: "bold" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              border: "1px solid black",
              borderRadius: "10px",
              textAlign: "center",
              mt: 4,
            }}
          >
            <Typography variant="body1" pb={2} pt={2}>
              Still having queries that aren't being answered?
            </Typography>
            <Button variant="contained" color="success" sx={{ mb: 3 }}>
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FrequentlyAskedQuestions;
