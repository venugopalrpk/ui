import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const RemsLowa = () => {
  return (
    <Container maxWidth={"md"}>
      <Grid container>
        <Grid item xs={12}>
          <Box display={"flex"} alignItems={"start"} justifyContent={"center"}>
            <Box sx={{ width: "400px", height: "100%", pt: 3 }}>
              <img
                src="/homepage/Waves.svg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Box sx={{ width: "500px", height: "100%" }}>
              <Typography
                color={"#1B9E91"}
                fontSize={18}
                textAlign={"start"}
                pl={3}
              >
                Wel come to the
              </Typography>

              <img
                src="/homepage/lowalogo.svg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <Typography color={"#777777"} fontSize={12} pl={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                omnis non nesciunt illum perspiciatis vero? Iste praesentium
                deserunt nostrum quibusdam alias ullam? Ex expedita voluptatibus
                dolorem vitae rerum laborum unde.
              </Typography>
              <Box textAlign={"start"} mt={5}>
                <Button
                  variant="contained"
                  sx={{
                    ml: 3,
                    fontWeight: "bold",
                    backgroundColor: "#1FBAAC",
                    minWidth: "50px",
                    "&:hover": { backgroundColor: "#1FBAAC" },
                  }}
                >
                  Proceed <ArrowForwardIcon fontSize="16px" />
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RemsLowa;
