import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "animate.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/root";
import { ErrorPage } from "./ErrorPage";
import { FirstExercise, SecondExercises, ThirdExercises } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/exercise1",
    element: <FirstExercise />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/exercise2",
    element: <SecondExercises />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/exercise3",
    element: <ThirdExercises />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
