import React from "react";
import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

// Styled components
const LoginWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#E4F1D4",
  padding: theme.spacing(6.25, 0, 2),
}));

const Container = styled("div")({
  maxWidth: "1140px",
  margin: "0 auto",
  paddingLeft: "15px",
  paddingRight: "15px",
});

const Row = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const Col = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flex: "0 0 33.333333%",
    maxWidth: "33.333333%",
  },
  [theme.breakpoints.down("md")]: {
    flex: "0 0 50%",
    maxWidth: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    flex: "0 0 100%",
    maxWidth: "100%",
  },
}));

const H4 = styled("h4")(({ theme, langId }) => ({
  fontSize: langId === "1" ? "24px" : "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

const Paragraph = styled("p")({
  marginBottom: "1rem",
});

const FloatingForm = styled("div")({
  position: "relative",
  marginBottom: "1rem",
});

const FormInput = styled("input")(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: theme.spacing(1.5, 0),
  fontSize: "16px",
  lineHeight: 1.5,
  color: "#495057",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
  borderRadius: "0.25rem",
}));

const FormLabel = styled("label")({
  position: "absolute",
  top: 0,
  left: 0,
  padding: "0.75rem 0.75rem",
  pointerEvents: "none",
  transition: "0.2s ease all",
});

const EyeIconWrapper = styled("span")({
  position: "absolute",
  top: "50%",
  right: "10px",
  transform: "translateY(-50%)",
  cursor: "pointer",
});

const ForgotPassword = styled("div")({
  textAlign: "right",
  marginBottom: "30px",
  marginTop: "10px",
});

const ForgotPasswordLink = styled(RouterLink)({
  fontFamily: "Inter",
  fontWeight: 600,
  color: "#138C50",
  textDecoration: "none",
  "&:hover": {
    color: "#24B270",
    textDecoration: "underline",
  },
});

const ButtonWrapper = styled("div")({
  display: "grid",
});

const ButtonPrimary = styled("button")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1.5),
  fontSize: "1rem",
  fontWeight: 700,
  color: "#fff",
  backgroundColor: "#138C50",
  border: "none",
  borderRadius: "0.25rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#24B270",
  },
}));

const ButtonLight = styled(ButtonPrimary)({
  backgroundColor: "#f8f9fa",
  color: "#383838",
});

const FooterLinks = styled("ul")({
  display: "flex",
  justifyContent: "center",
  paddingLeft: 0,
  listStyle: "none",
  marginTop: "1rem",
});

const FooterLinkItem = styled("li")({
  margin: "0 0.5rem",
});

const FooterLink = styled(RouterLink)({
  color: "#138C50",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

const Login = ({
  langId,
  loginValues = { userName: "sds" },
  loginSubmit,
  LoginInputFunction,
  PasswordShow,
  passwordType,
  isLoadingUser,
  usernameRef,
  userLabelRef,
  passwordRef,
  passLabelRef,
  handleForgotPassword,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <LoginWrapper id="loginSection">
      <Container>
        <Row>
          <Col>
            <H4 langId={langId}>Log into your account</H4>
            <Paragraph>
              You will need to log into your existing account to access the
              Ref-Track tool
            </Paragraph>

            <TextField
              id="outlined-basic"
              label="Email ID or mobile number"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ mb: 1 }}
            />
            <FormControl fullWidth size="small" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <ForgotPassword>
              <ForgotPasswordLink onClick={handleForgotPassword}>
                ForgotPassword
              </ForgotPasswordLink>
            </ForgotPassword>
            <ButtonWrapper>
              <ButtonPrimary onClick={loginSubmit}>Login</ButtonPrimary>
              <span style={{ marginTop: "8px" }}>
                {isLoadingUser && <CircularProgress />}
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Divider
                  sx={{
                    width: "45%",
                    backgroundColor: "black",
                    mr: 1,
                    my: 4,
                  }}
                />
                <div style={{ fontWeight: "500" }}>OR</div>
                <Divider
                  sx={{
                    width: "45%",
                    backgroundColor: "black",
                    ml: 1,
                    my: 4,
                  }}
                />
              </div>
              <RouterLink to="/createnewaccount">
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "#F5F5F5" },
                  }}
                >
                  Create a new account
                </Button>
              </RouterLink>
            </ButtonWrapper>
          </Col>
        </Row>
        <Row style={{ marginTop: "5rem" }}>
          <div style={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <FooterLink to="/help">Help</FooterLink>

              <Divider
                sx={{
                  width: "1px",
                  height: "15px",
                  backgroundColor: "black",
                  m: 4,
                }}
              />
              <FooterLink to="/privacy">Privacy</FooterLink>
              <Divider
                sx={{
                  width: "1px",
                  height: "15px",
                  backgroundColor: "black",
                  m: 4,
                }}
              />
              <FooterLink to="/terms">Terms</FooterLink>
            </Box>
          </div>
        </Row>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
