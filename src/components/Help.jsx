import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Paper, Typography } from "@mui/material";

const Help = () => {
  return (
    <Container maxWidth={"md"}>
      <Paper elevation={1}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ color: "green", fontWeight: "bold" }}
          >
            1. Account
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                1.1 Create a new account
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" pb={2}>
                  1. Scroll down to the login section on the Ref-Track landing
                  page
                </Typography>
                <Typography variant="body1" pb={2}>
                  2. Click/Tap on the Create a new account
                </Typography>
                <Typography variant="body1" pb={2}>
                  3. Fill in the required details and click/tap on Create my
                  account.
                </Typography>
                <Typography variant="body1" pb={2}>
                  4. Click/Tap on the activation link that you will have
                  received in your email
                </Typography>
                <Typography variant="body1" pb={2}>
                  5. You will be redirected to your account’s homepage.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                1.2 Account activation/verification
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" pb={2}>
                  1. Your account activation/verification links are sent to your
                  registered email ID.
                </Typography>
                <Typography variant="body1" pb={2}>
                  2. Your registered email ID is the one you provided while you
                  created your account.
                </Typography>
                <Typography variant="body1" pb={2}>
                  3. Check your spam folder, in case your email service provider
                  has marked it as one
                </Typography>
                <Typography variant="body1" pb={2}>
                  4. Try clicking/tapping on RESEND to prompt the system to send
                  it again.
                </Typography>
                <Typography variant="body1" pb={2}>
                  In case you are still not getting your activation/verification
                  link sent to your email, get directly in contact with us by
                  switching to the Contact us tab now
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                1.3 Forgot password
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" pb={2}>
                  1. Scroll down to the Login section of the Ref-Track landing
                  page and click/tap on Forgot password?
                </Typography>
                <Typography variant="body1" pb={2}>
                  2. Click/Tap on the verification link sent to your email to
                  verify your account.
                </Typography>
                <Typography variant="body1" pb={2}>
                  3. Once verified, you will be redirected to the Reset you
                  password page.
                </Typography>
                <Typography variant="body1" pb={2}>
                  4. Create a new password to replace the previous one.
                </Typography>
                <Typography variant="body1" pb={2}>
                  5. Click/Tap on Reset my password
                </Typography>
                <Typography variant="body1" pb={2}>
                  6. Go back to your Ref-Track landing page and scroll down to
                  the Login section.
                </Typography>
                <Typography variant="body1" pb={2}>
                  7. Log in now with your new password to access your account.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                1.4 Change username
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" pb={2}>
                  1. Click /Tap on the profile icon at the top right corner of
                  your page.
                </Typography>
                <Typography variant="body1" pb={2}>
                  2. Profile menu will pop up.
                </Typography>
                <Typography variant="body1" pb={2}>
                  3. Click /Tap on your username on the profile menu.
                </Typography>
                <Typography variant="body1" pb={2}>
                  4. Change my username pop-up opens
                </Typography>
                <Typography variant="body1" pb={2}>
                  5. Type in your new username in the place of your old username
                  and click/tap on Save username
                </Typography>
                <Typography variant="body1" pb={2}>
                  6. Your new username will be updated in a few minutes.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                1.5 Log out
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" pb={2}>
                  1. While logged in, click /tap on the profile icon at the top
                  right corner of your page.
                </Typography>
                <Typography variant="body1" pb={2}>
                  2. Profile menu will pop up.
                </Typography>
                <Typography variant="body1" pb={2}>
                  3. Click/Tap on the Log out to log out.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ color: "green", fontWeight: "bold" }}
          >
            2. Homepage
          </AccordionSummary>
          <AccordionDetails>
            Complete the Set up stage to unlock the Monthly Entry stage. Have at
            least 3 months with complete data in the Monthly Entry stage to
            unlock the Output stage
          </AccordionDetails>
          <AccordionDetails>
            In case of any discrepancies, used the Reset All Data button to
            reset all of your saved data and start over again from the Set up
            stage.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ color: "green", fontWeight: "bold" }}
          >
            3. Set up
          </AccordionSummary>
          <AccordionDetails>
            The Set up stage has 3 tabs which can be freely cycled through –
            Products, Input Resources and Waste Generated. You can add a maximum
            5 products, 12 raw materials, 2 boiler fuels and 5 types of waste to
            your monitoring list in each of these categories
          </AccordionDetails>
          <AccordionDetails>
            In order to remove any added entry, click/tap on the kebab menu (︙)
            on the card and click/tap on the (✖ REMOVE) overlay that pops up.
            Click/Tap elsewhere on the screen to close this action, in case you
            do not want to remove the entry. Once you think you have added all
            the products, input resources and wastes that you want to monitor,
            you can complete the Set up stage by clicking/tapping on the Finish
            Set up button
          </AccordionDetails>
          <AccordionDetails>
            <b>Note :</b> Until you complete Set up, you can still keep moving
            freely between the Set up page and your homepage using the Back (←)
            button on the top left corner of your screen. This will not delete
            any of your saved entries and it will not finish Set up, and Monthly
            Entry will remain locked
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ color: "green", fontWeight: "bold" }}
          >
            4. Monthly Entry
          </AccordionSummary>
          <AccordionDetails>
            The monitoring period will be for a <b>maximum of 60 months</b> ,
            depending on the starting month & year that you choose for the first
            time that you first enter this stage. After the monitoring period
            has been set up, you can choose any month on the calendar list to
            start entering in data for.
          </AccordionDetails>
          <AccordionDetails>
            Each month has its own log, where you will have to add in the
            required quantities, which will depend on{" "}
            <b>Products, Input Resources</b> and
            <b> Waste Generated</b> that you identified during the <b>Set up</b>{" "}
            stage. There will also be a few extra fields that are standard for
            all users, regardless of what they added in the Set up stage.
          </AccordionDetails>
          <AccordionDetails>
            Empty fields will be marked as{" "}
            <span style={{ color: "red" }}>“Incomplete field!”</span> upon
            clicking/tapping <b>Save & Next</b> . Completed fields will have a
            green check mark and a message indicating the same
          </AccordionDetails>
          <AccordionDetails>
            You can also add a comment for a month by clicking on the
            <b>Add comment</b>
            button located at the top right corner of your page
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ color: "green", fontWeight: "bold" }}
          >
            5. Output
          </AccordionSummary>
          <AccordionDetails>
            Use Generate output with latest data button to generate an output.
            Customize your output using the pop-up that appears every time you
            generate a new output. Once output has been generated, click/tap on
            the respective buttons to download, and save each output to your
            device. Based on your customization, your output may include the
            following downloadable content: four trend graphs as (.jpg images),
            an input log (.xls file) and a full report (.pdf file).
          </AccordionDetails>
          <AccordionDetails>
            Every output generated will override the previously generated ones.
            If you want to preserve them, download them to your device before
            generating another output.
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  );
};

export default Help;
