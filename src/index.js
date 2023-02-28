import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComponent from "./components/LayoutComponent";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "contacts/:contactId",
        element: <UserDetailsPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
