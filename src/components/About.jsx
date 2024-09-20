import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// import StaticTab from "./staticTab";

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: "calc(100vh - 40px)",
  marginTop: window.innerWidth > 768 ? "78px" : "90px",
  "& ul": {
    paddingLeft: 0,
    listStyle: "none",
  },
  "& li span": {
    color: "#138C50",
    fontWeight: 600,
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "60px",
  marginRight: theme.spacing(1),
  maxWidth: "250px",
}));

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 3, left: 0 });
  }, []);

  return (
    <AboutContainer>
      {/* <StaticTab /> */}
      <Container>
        <Typography variant="body1" pb={2}>
          Ref-Track is a digital Resource Efficiency Tracker platform developed
          for SMEs in Myanmar to monitor their resources, particularly their
          waste output.
        </Typography>
        <Typography variant="body1" pb={2}>
          The Ref-Track tool will help users with the following:
        </Typography>
        <Typography variant="body1" ml={2}>
          <span style={{ color: "green" }}>a.</span> Reduce waste generation in
          their processes.
        </Typography>
        <Typography variant="body1" ml={2}>
          <span style={{ color: "green" }}>b.</span> Monitor resource efficiency
          – materials and energy.
        </Typography>
        <Typography variant="body1" ml={2} pb={2}>
          <span style={{ color: "green" }}>c.</span> Visualize the trends over a
          period of time.
        </Typography>

        <Typography variant="body1" pb={2}>
          The Ref-Track platform is provided by <b>Prevent Plastics</b> for the
          internal use by any enterprise.
        </Typography>
        <Typography variant="body1" pb={2}>
          Started in May 2020, Prevent Plastics is a four-year project funded by
          the European Union with the aim to promote sustainable production and
          consumption patterns in Myanmar through raised awareness and best
          practices on waste management. The project is a joint approach of
          sequa gGmbH, Myanmar Banks Association and STENUM Asia.
        </Typography>
        <Typography variant="body1" pb={2}>
          This platform has been developed as a part of the{" "}
          <b>Prevent Plastics</b> project and maintained with the financial
          support of the{" "}
          <span style={{ color: "#138C50" }}>European Union’s SWITCH-Asia</span>{" "}
          grants program. The contents displayed on it can be under no
          circumstances be regarded as the reflecting the position of the
          European Union.
        </Typography>
        <Box sx={{ paddingTop: 4 }}>
          <StyledImage
            src={"/homepage/logoabout.png"}
            alt="logo"
            style={{ width: "60px" }}
          />
          <StyledImage
            src={"/homepage/switchasia.png"}
            alt="SwitchAsia"
            style={{ width: "250px" }}
          />
        </Box>
      </Container>
    </AboutContainer>
  );
};

export default About;
