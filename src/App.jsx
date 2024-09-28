import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Notfound from "./pages/Notfound";
import About from "./pages/About";
import Layout from "./pages/Layout";
import { Loader } from "./Services";

function App() {
  const Routerdata = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: Loader,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "About", element: <About /> },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={Routerdata} />
    </React.Fragment>
  );
}

export default App;
