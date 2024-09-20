import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Generated = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth={"md"}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Typography
            fontSize={24}
            pt={5}
            color={"#383838"}
            fontWeight={"bold"}
          >
            WASTE GENERATED
          </Typography>
          <FormControlLabel
            control={<Checkbox size="small" defaultChecked />}
            label={
              <Typography fontSize={14} color={"#777777"}>
                Track and monitor the costs of the listed parameter(s) as well
                <span style={{ color: "#b5b5b5" }}>(OPTIONAL)</span>
              </Typography>
            }
          />
        </Grid>
        <Grid item lg={6}>
          <Typography
            fontSize={14}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Food waste
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </Grid>

        <Grid item lg={6}>
          <Typography
            variant="body1"
            fontSize={14}
            color={"#383838"}
            fontWeight={"bold"}
            pt={2}
            pb={1}
          >
            Waste disposal costs (Food waste)
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Grid item lg={6}></Grid>
        </Grid>

        <Grid item lg={8}>
          <Typography
            variant="body1"
            pb={1}
            pt={2}
            fontSize={14}
            color={"#383838"}
          >
            out of which, the amount of waste disposed off by -
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} gap={2}>
            <Grid item lg={4}>
              <Typography
                variant="body1"
                fontSize={12}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Method 1
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">%</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item lg={4}>
              <Typography
                variant="body1"
                fontSize={12}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Method 2
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">%</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item lg={4}>
              <Typography
                variant="body1"
                fontSize={12}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Method 3
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">%</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>
          </Box>
        </Grid>

        <Grid item lg={6}>
          <Typography
            fontSize={14}
            pt={2}
            pb={1}
            color={"#383838"}
            fontWeight={"bold"}
          >
            Wastewater
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={6}>
          <Typography
            variant="body1"
            fontSize={14}
            color={"#383838"}
            fontWeight={"bold"}
            pt={2}
            pb={1}
          >
            Waste disposal costs (Wastewater)
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInput
              id="outlined-adornment-weight"
              size="small"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Grid item lg={6}></Grid>
        </Grid>

        <Grid item lg={8}>
          <Typography
            variant="body1"
            pb={1}
            pt={2}
            fontSize={14}
            color={"#383838"}
          >
            out of which, the amount of waste disposed off by -
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} gap={2}>
            <Grid item lg={4}>
              <Typography
                variant="body1"
                fontSize={12}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Method 1
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">%</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item lg={4}>
              <Typography
                variant="body1"
                fontSize={12}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Method 2
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">%</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item lg={4}>
              <Typography
                variant="body1"
                fontSize={12}
                color={"#383838"}
                fontWeight={"bold"}
              >
                Method 3
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  size="small"
                  endAdornment={
                    <InputAdornment position="end">%</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>
          </Box>
        </Grid>

        <Grid item lg={6}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box textAlign={"end"} mt={5}>
              <Button
                sx={{
                  color: "#00AA45",
                  py: 1,
                  fontWeight: "bold",
                  marginLeft: "auto",
                  textAlign: "end",
                  "&:hover": { backgroundColor: "white" },
                  boxShadow: "0px 0px 20px #00000029",
                }}
                onClick={handleOpen}
              >
                <ArrowBackIcon sx={{ fontSize: 18, mr: 1 }} />
                Back
              </Button>
            </Box>

            <Box textAlign={"end"} mt={5}>
              <Button
                sx={{
                  color: "white",
                  py: 1,
                  fontWeight: "bold",
                  marginLeft: "auto",
                  textAlign: "end",
                  backgroundColor: "#00AA45",
                }}
                onClick={handleOpen}
              >
                Save changes
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Generated;
