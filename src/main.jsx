import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import "./index.css";
import AdminDashboard from "./pages/AdminDashboard/adminDashboard.jsx";
import AdminBooks from "./pages/AdminBooks/index.jsx";
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
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
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/books",
    element: <AdminBooks />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
