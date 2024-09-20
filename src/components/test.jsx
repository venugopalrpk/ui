  <Typography fontSize={24} pt={5}>
                <span style={{ color: "green", fontWeight: "bold" }}>1</span>{" "}
                <b>Product</b>
              </Typography>
              <Typography fontSize={16} pb={4}>
                How much of the following products were manufactured during this
                month
              </Typography>
              <Typography fontSize={14} pl={1}>
                1
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </FormControl>

                <Box>
                  <Button variant="contained" sx={{ whiteSpace: "nowrap" }}>
                    Save and next
                  </Button>
                </Box>

                <Box>
                  <Button
                    sx={{
                      backgroundColor: "#F2F2F2",
                      "&:hover": {
                        backgroundColor: "white",
                        border: "none",
                        boxShadow: "0px 2px 4px lightgray",
                      },
                      border: "1px solid green",
                      minWidth: "100px",
                    }}
                  >
                    Save
                  </Button>
                </Box>
                <Box display={"flex"}>
                  <Box width={"20px"}>
                    <img
                      src="/homepage/checkmark.png"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box>
                    <Typography fontSize={12}>
                      This section is completed.
                    </Typography>
                  </Box>
                </Box>
              </Box>