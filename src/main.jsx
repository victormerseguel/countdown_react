import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CountdownProvider } from "./context/CountdownContext.jsx";

import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Countdown from "./routes/Countdown.jsx";

import "./index.css";

// pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </React.StrictMode>
);
