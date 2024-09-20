import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Products from "./Products";

import { Container, Grid, IconButton, styled, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InputResources from "./InputResources";
import WasteGenerated from "./WasteGenerated";
import Info from "../Modal/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowContent from "../Modal/ArrowContent";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  marginTop: "8px",
  marginBottom: "16px",
  gap: "3px",
}));

const Setup = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{ pt: 3, paddingLeft: "0px !important", paddingRight: "0px", ml: 0 }}
    >
      <Grid container>
        <Grid item lg={12} xs={12}>
          <Typography
            variant="body1"
            pb={2}
            sx={{ fontSize: { xs: 18, md: 28 } }}
            fontWeight={"bold"}
          >
            1. Set up
          </Typography>

          <TabContext value={value} sx={{ color: "primary" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="Products/Services"
                    sx={{
                      textTransform: "capitalize",
                      color: "#138c50",
                      fontWeight: "bold",
                      fontSize: { sm: 16, md: 20 },
                    }}
                    value="1"
                  />

                  <Tab
                    label="Input Resources"
                    sx={{
                      textTransform: "capitalize",
                      color: "#138c50",
                      fontWeight: "bold",
                      fontSize: { sm: 16, md: 20 },
                    }}
                    value="2"
                  />
                  <Tab
                    label="Waste Generated"
                    sx={{
                      textTransform: "capitalize",
                      color: "#138c50",
                      fontWeight: "bold",
                      fontSize: { sm: 16, md: 20 },
                    }}
                    value="3"
                  />
                </TabList>
                {/* <Info>
                  <Typography fontSize={14} fontWeight={"bold"}>
                    TOOLTIPS
                  </Typography>
                  <Typography fontSize={14} color={"#138c50"}>
                    Products
                  </Typography>

                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Tap on <b>Add a product</b> .
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Add a product through the popup that opens, type in your
                      product name, set up unit conversions (if necessary) and
                      click on <b>Save product</b> to add it to the monitoring
                      list.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      To remove an entry from the monitoring list, click on the
                      (︙) icon on any card and then click on <b> REMOVE</b>.
                      Click elsewhere on the screen to cancel this action.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      This section is skippable.
                    </Typography>
                  </StyledBox>
                  <Typography fontSize={13} pl={2}>
                    <b>NOTE:</b> You will be able to add/remove entries as long
                    as Set up is not finished..
                  </Typography>
                </Info> */}

                {/* <Info>
                  <Typography fontSize={14} fontWeight={"bold"}>
                    TOOLTIPS
                  </Typography>
                  <Typography fontSize={14} color={"#138c50"}>
                    Input resources
                  </Typography>

                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Tap on <b> Add a raw material</b>
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Add a raw material through the popup that opens, type in
                      your raw material name, set up unit conversions (if
                      necessary) and click on <b>Save raw material</b> to add it
                      to the monitoring list.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Tap on <b>Add a boiler fuel.</b>
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      For adding boiler fuels, choose your fuel from a drop-down
                      menu on the popup that opens and click on{" "}
                      <b>Save boiler fuel</b>
                      to add it to the monitoring list.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Raw materials and Boiler fuels can be added in any order.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      To remove an entry from the monitoring list, click on the
                      (︙) icon on any card and then click on <b>REMOVE</b> .
                      Click elsewhere on the screen to cancel this action.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      This section is also skippable.
                    </Typography>
                  </StyledBox>
                  <Typography fontSize={13} pl={2}>
                    <b>NOTE</b> :You will be able to add/remove entries as long
                    as Set up is not finished.
                  </Typography>
                </Info> */}
                {/* <Info>
                  <Typography fontSize={14} fontWeight={"bold"}>
                    TOOLTIPS
                  </Typography>
                  <Typography fontSize={14} color={"#138c50"}>
                    Waste Generated
                  </Typography>

                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Tap on <b>Add a type of waste.</b>
                    </Typography>
                  </StyledBox>

                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      Add a new type of waste through the popup that opens by
                      choosing from the drop-down list given and click on
                      <b>Save waste</b> to add it to the monitoring list.
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      To remove an entry from the monitoring list, click on the
                      (︙) icon on any card and then click on <b>REMOVE</b> .
                      Click elsewhere on the screen to cancel this action
                    </Typography>
                  </StyledBox>
                  <StyledBox>
                    <IconButton sx={{ p: 0, m: 0, mt: 0.25 }}>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography fontSize={13}>
                      This section is mandatory for finishing the <b>Set up</b>
                      stage.
                    </Typography>
                  </StyledBox>
                  <Typography fontSize={13} pl={2}>
                    <b>NOTE:</b> You will be able to add/remove entries as long
                    as Set up is not finished.
                  </Typography>
                </Info> */}
              </Box>
            </Box>
            <TabPanel value="1" sx={{ px: 0 }}>
              <Products />
            </TabPanel>
            <TabPanel value="2" sx={{ px: 0 }}>
              <InputResources />
            </TabPanel>
            <TabPanel value="3" sx={{ px: 0 }}>
              <WasteGenerated />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Setup;
