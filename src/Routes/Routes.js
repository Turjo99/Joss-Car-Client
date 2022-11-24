import { data } from "autoprefixer";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Forms/Login";
import Signup from "../Components/Forms/Signup";
import Main from "../Components/Layout/Main";
import AddProduct from "../Components/Pages/Cars/AddProduct/AddProduct";
import Cars from "../Components/Pages/Cars/Cars";
import Home from "../Components/Pages/Home/Home";
import MyProducts from "../Components/Pages/My Products/MyProducts";

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
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "myproducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
