import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import img from "../../imgs/signup.svg";
const Login = () => {
  const { signInUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handlelogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
      .then((data) => {
        console.log(data);
        toast.success("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="my-10 container mx-auto">
      <div className="lg:flex">
        <div className="w-full h-64 lg:w-1/2 lg:h-full px-6 py-8 m-9">
          <div className="w-full h-full bg-cover">
            <img src={img} alt="" className="w-full h-96" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className=" w-3/4 h-96 bg-white rounded-lg dark:bg-gray-800">
            <div className="p-5 text-center">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                Login
              </h2>

              <Form onSubmit={handlelogin}>
                <div className="mt-4">
                  <input
                    className="block w-3/4 mx-auto  px-4 mt-4 py-2"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    name="email"
                  />
                  <input
                    className="block w-3/4 mx-auto  px-4 py-2 mt-4"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="password"
                  />
                </div>

                <div className="flex items-center  mt-4 justify-center">
                  <button className="px-4 py-2 btn btn-outline font-semibold text-white ">
                    Login
                  </button>
                </div>
              </Form>
              <p className="text-white my-2">
                Dont have an account?Please{" "}
                <Link className="text-blue-600" to={"/signup"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
