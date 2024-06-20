import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Contact from "../pages/Shared/Contact/Contact";
import AllProducts from "../pages/Product/AllProducts/AllProducts";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
            path: "/order",
            element: <Order></Order>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <SignUp></SignUp>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
            path: "/product",
            element: <AllProducts></AllProducts>
        }
      ]
    },
  ]);