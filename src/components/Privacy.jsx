import { Container, Typography } from "@mui/material";
import React from "react";

const Privacy = () => {
  return (
    <Container maxWidth={"md"}>
      <Typography
        variant="body1"
        pb={3}
        pt={2}
        fontWeight={"bold"}
        fontSize={15}
      >
        1. Acceptance
      </Typography>
      <Typography variant="body1" pb={2} fontSize={14}>
        This privacy policy (“privacy policy”) and related terms and conditions
        (terms and conditions) shall govern your usage of this Ref-Track digital
        platform.
        <span style={{ fontWeight: "bold" }} fontSize={14}>
          If you do not agree to this privacy policy and the related terms and
          conditions, you must not use the digital platform.
        </span>
      </Typography>
      <Typography variant="body1" pb={3} fontWeight={"bold"} fontSize={15}>
        2. Definition of Personal Information
      </Typography>
      <Typography variant="body1" pb={2} fontSize={14}>
        Personal information will include your name, e-mail address, country of
        residence, phone number (“personal data”) and any other information that
        can directly be identified and linked with your name, email id and/or
        phone number and has been submitted by you on or through this Ref-Track
        digital platform.
      </Typography>
      <Typography variant="body1" pb={3} fontWeight={"bold"} fontSize={15}>
        3. Why do we collect the above defined Personal Information?
      </Typography>
      <Typography variant="body1" pb={2} fontSize={14}>
        When you use this digital platform, we collect some data relating to the
        user and usage activity. This information helps us in many ways to
        improve your experience of using the digital platform. Additionally,
        aggregated data that contains no reference to any individual personal
        information may be extracted for internal analysis by the Organizers. We
        do not share your personal information with anyone else
      </Typography>
      <Typography variant="body1" pb={3} fontWeight={"bold"} fontSize={15}>
        4. Security
      </Typography>
      <Typography variant="body1" pb={2} fontSize={14}>
        We use modern, globally popular technologies to give our users a very
        safe and secure experience on the digital platform. However, we are not
        responsible in any way for your privacy on all other digital properties
        from where you may come from to download and use this digital platform
        or where you may go to after using this digital platform.
      </Typography>
      <Typography variant="body1" pb={3} fontWeight={"bold"} fontSize={15}>
        5. General Disclaimer
      </Typography>
      <Typography variant="body1" pb={2} fontSize={14}>
        The Ref-Track digital platform is hosted and made available from India.
        In the event you access Ref-Track digital platform from other
        jurisdictions, you are solely responsible for complying with the local
        law as it may be applicable
      </Typography>
    </Container>
  );
};

export default Privacy;
