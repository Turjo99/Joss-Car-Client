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
import MyBooking from "../Components/Pages/Dashboard/MyBooking";
import MyProducts from "../Components/Pages/Dashboard/MyProducts";
import Payment from "../Components/Pages/Dashboard/Payment";
import ReportedProduct from "../Components/Pages/Dashboard/ReportedProduct";
import ErrorPage from "../Components/Pages/ErrorPage";
import Blogs from "../Components/Pages/Home/Blogs";
import Home from "../Components/Pages/Home/Home";

import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Cars></Cars>
          </PrivateRoute>
        ),
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
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "myorders",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "mybooking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: `mybooking/payment/:id`,
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/payment/${params.id}`),
      },
      {
        path: "reported",
        element: <ReportedProduct></ReportedProduct>,
      },
    ],
  },
]);
