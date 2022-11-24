import { data } from "autoprefixer";
import { createBrowserRouter } from "react-router-dom";
import Signup from "../Components/Forms/Signup";
import Main from "../Components/Layout/Main";
import Cars from "../Components/Pages/Cars/Cars";
import Home from "../Components/Pages/Home/Home";

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
    ],
  },
]);
