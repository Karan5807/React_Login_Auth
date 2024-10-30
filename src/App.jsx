import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Notfound from "./pages/Notfound";
import About from "./pages/About";
import Layout from "./pages/Layout";
import UserProfile from "./Pages/UserProfile";


function App() {
  const Routerdata = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "About", element: <About /> },
        { path: "UserProfile", element: <UserProfile /> },
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
