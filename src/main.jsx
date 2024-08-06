import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/login.jsx";
import "./index.css";
const theme = createTheme({
  palette: {
    text: { secondary: "#fffff" },
    primary: {
      main: "#171B36",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00ABFF",
      contrastText: "#ffffff",
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
