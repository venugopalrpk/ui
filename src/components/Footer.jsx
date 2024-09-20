import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FooterRoot = styled(Box)(({ theme }) => ({
  backgroundColor: "#F2F2F2",

  position: "fixed",
  bottom: 0,
  right: 0,
  left: 0,
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  lineHeight: "18px",
  fontWeight: 400,
  margin: 0,
  textAlign: "left",
  position: "relative",
  paddingTop: "26px",
  maxWidth: "444px",
  "&::before": {
    position: "absolute",
    content: "''",
    width: "12px",
    height: "2px",
    backgroundColor: "#00000069",
    top: "8px",
    left: 0,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
  },
}));

const Footer = () => {
  let location = useLocation();
  let currentPath = location.pathname;

  const date = new Date();
  let CurrentYear = date.getFullYear();

  return (
    <FooterRoot>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} py={4}>
          <Grid item xs={12} md={6} lg={8}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "13px",

                textAlign: "left",
              }}
            >
              <strong>
                © {CurrentYear} Prevent Plastics. All rights reserved.
              </strong>
              <br />
              <span style={{ marginBottom: "10px" }}>
                Licensed to the European Union under conditions.
              </span>
            </Typography>
            <FooterText
              sx={{
                fontSize: "12px",
              }}
            >
              This platform was created and maintained with the financial
              support of the European Union. Its contents are the sole
              responsibility of Prevent Plastics & STENUM Asia and do not
              necessarily reflect the views of the European Union.
            </FooterText>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            display="flex"
            sx={{ justifyContent: { xs: "start", lg: "end" } }}
            alignItems={"center"}
          >
            <Box
              component="img"
              src={"/homepage/switchasia.png"}
              alt="switch asia image"
              sx={{
                width: { xs: "240px", lg: "300px" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
