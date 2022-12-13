import { css } from "@emotion/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "next", element: <Next /> },
]);

function Home() {
  return (
    <div
      className={css`
        height: 200vh;
        width: 100vw;
        background: linear-gradient(blue, pink);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
      `}
    >
      <h1>Home</h1>
      <Link to={"/next"}>Click to Next page.</Link>
    </div>
  );
}

function Next() {
  return (
    <div
      className={css`
        height: 200vh;
        width: 100vw;
        background: linear-gradient(blue, green);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
      `}
    >
      <h1>Next</h1>
      <Link to={"/"}>Click to Home page.</Link>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
