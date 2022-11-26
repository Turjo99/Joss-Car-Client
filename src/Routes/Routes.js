import { data } from "autoprefixer";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Forms/Login";
import Signup from "../Components/Forms/Signup";
import DashBoardLayout from "../Components/Layout/DashBoardLayout";
import Main from "../Components/Layout/Main";
import AddProduct from "../Components/Pages/Cars/AddProduct/AddProduct";
import Cars from "../Components/Pages/Cars/Cars";
import AllBuyers from "../Components/Pages/Dashboard/AllBuyers";
import AllSellers from "../Components/Pages/Dashboard/AllSellers";
import MyProducts from "../Components/Pages/Dashboard/MyProducts";
import Blogs from "../Components/Pages/Home/Blogs";
import Home from "../Components/Pages/Home/Home";

import AdminRoute from "./AdminRoute";

import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cars/:id",
        element: <Cars></Cars>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allcars?categoryID=${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      // {
      //   path: "addproduct",
      //   element: (
      //     <AdminRoute>
      //       <AddProduct></AddProduct>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "myproducts",
      //   element: (
      //     <SellerRoute>
      //       <MyProducts></MyProducts>
      //     </SellerRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "myorders",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "allsellers",
        element: <AllSellers></AllSellers>,
      },
    ],
  },
]);
