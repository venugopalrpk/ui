import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#138C50", // Primary color
    },
    secondary: {
      main: "#383838", // Secondary color
    },
  },
  typography: {
    allVariants: {
      color: "#383838", // Global font color
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 10px #00000029", // Apply this globally to all Paper components
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove uppercase transformation
          borderRadius: "8px", // Rounded corners for all buttons
          padding: "8px 16px", // Adjust padding
          minWidth: "160px",
        },
        contained: {
          backgroundColor: "#138C50", // Default background color for contained buttons
          color: "#fff", // Text color for contained buttons
          "&.Mui-disabled": {
            backgroundColor: "gray", // Custom background for disabled button
            color: "#fff", // Custom color for disabled button text
            opacity: 0.7, // You can adjust opacity or other styles
          },
        },
        outlined: {
          borderColor: "#138C50", // Border color for outlined buttons
          color: "#138C50", // Text color for outlined buttons
        },
        text: {
          color: "#138C50", // Text color for text buttons
          "&:hover": {
            backgroundColor: "#00aa45", // Light green background on hover
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    <div>Hello</div>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
