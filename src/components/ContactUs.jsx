import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Container maxWidth={"sm"}>
      <Typography variant="body1" pb={5} pt={2}>
        In case of any queries, contact us for further information.
      </Typography>
      <Grid container>
        <Grid item xs={6} md={6}>
          <Typography
            variant="body1"
            pb={2}
            color={"green"}
            fontWeight={"bold"}
          >
            NAW JULIE AUNG
          </Typography>
          <Typography variant="body1" pb={2}>
            Technical Expert
          </Typography>
          <Typography variant="body1" pb={2}>
            Email:
          </Typography>
          <Typography variant="body1" pb={2}>
            <span style={{ textDecoration: "underline" }}>
              {" "}
              julie@preventplastics.org
            </span>
          </Typography>
        </Grid>
        <Grid xs={6} md={6}>
          <Typography
            variant="body1"
            pb={2}
            color={"green"}
            fontWeight={"bold"}
          >
            NAING YE AUNG
          </Typography>
          <Typography variant="body1" pb={2}>
            Technical Expert
          </Typography>
          <Typography variant="body1" pb={2}>
            Email:
          </Typography>
          <Typography variant="body1" pb={2}>
            <span style={{ textDecoration: "underline" }}>
              {" "}
              naing@preventplastics.org
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
