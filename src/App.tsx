import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react";
import Home from "./pages/home/index";
import Stock from "./pages/stock/index";
import Salles from "./pages/salles/index";
import Reports from "./pages/reports/index";
import Fiscals from "./pages/fiscals/fiscals";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/stock",
      element: <Stock/>,
    },
    {
      path: "/salles",
      element: <Salles/>,
    },
    {
      path: "/reports",
      element: <Reports/>,
    },
    {
      path: "/fiscals",
      element: <Fiscals/>,
    },
  ]);

  return  <RouterProvider router={router} />;
};

export default App;
