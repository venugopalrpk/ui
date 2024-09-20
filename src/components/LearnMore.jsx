// src/Components/StyledTabs.js
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Tabs as MuiTabs } from "@mui/material";
import { Tab as MuiTab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Tab = styled(MuiTab)(({ theme }) => ({
  textTransform: "none",
  color: "#777777",
  fontSize: 18,
  //   paddingBottom: "8px",
  minWidth: "auto", // Ensure the tab width is only as wide as its content
  paddingLeft: 0,
  paddingRight: "24px",

  "&.Mui-selected": {
    color: "#00AA45",
    fontWeight: 500,
    // paddingBottom: "8px",
    borderRadius: "10px",
    "&::after": {
      content: '""',
      display: "block",
      margin: "0 auto",
      width: "calc(100% )", // Adjust the width as needed
      paddingBottom: "2px",
      borderBottom: "3px solid #00AA45",
    },
  },
  "&:hover:not(.Mui-selected)": {
    color: "#777777",
    "&::after": {
      content: '""',
      display: "block",
      margin: "0 auto",
      width: "calc(100% )", // Adjust the width as needed
      borderBottom: "3px solid #777777",
    },
  },
}));

const Tabs = styled(MuiTabs)(({ theme }) => ({
  //   marginBottom: "32px",

  "& .MuiTabs-indicator": {
    backgroundColor: "#00AA45",
    height: "4px",
    display: "none",
    borderBottom: "3px solid white",
  },
}));

const LearnMore = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth={"lg"}>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid item lg={2}>
          <ArrowBackIcon />
        </Grid>
        <Grid item lg={10}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Box>
            <Tab value={value} index={0}>
              About
            </Tab>
            <Tab value={value} index={1}>
              ContactUs
            </Tab>
            <Tab value={value} index={2}>
              Help
            </Tab>
            <Tab value={value} index={3}>
              Privacy
            </Tab>
            <Tab value={value} index={4}>
              Terms
            </Tab>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LearnMore;
