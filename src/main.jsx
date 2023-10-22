import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Layout/Home";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import productsLoad from "./loaders/productsLoad";
import Checkout from "./components/Checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/ema-john/",
    element: <Home></Home>,
    children: [
      {
        path: "/ema-john/",
        element: <Shop></Shop>,
      },
      {
        path: "/ema-john/orders",
        element: <Orders></Orders>,
        loader: productsLoad,
      },
      {
        path: "/ema-john/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "/ema-john/Login",
        element: <Login></Login>,
      },
      {
        path: "/ema-john/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
