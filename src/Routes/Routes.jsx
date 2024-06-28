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
import Faq from "../Faq/Faq";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import Desserts from "../pages/Menu/Desserts/Desserts";
import Salad from "../pages/Menu/Salad/Salad";
import Soup from "../pages/Menu/Soup/Soup";
import Pizza from "../pages/Menu/Pizza/Pizza";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";


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
        },
        {
            path: "/faq",
            element: <Faq></Faq>
        },
        {
            path: "/commingsoon",
            element: <ComingSoon></ComingSoon>
        },
        {
            path: "/dessert",
            element: <Desserts></Desserts>
        },
        {
            path: "/salad",
            element: <Salad></Salad>
        },
        {
            path: "/soup",
            element: <Soup></Soup>
        },
        {
            path: "/pizza",
            element: <Pizza></Pizza>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
            path: "cart",
            element: <Cart></Cart>
        },
        
      ]
    },
  ]);