import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
