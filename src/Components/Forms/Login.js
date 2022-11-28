import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../Hooks/useToken";
import img from "../../imgs/signup.svg";
import Loading from "../Shared/Loading/Loading";
const Login = () => {
  const { signInUser, user, loading, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  // console.log(loginUserEmail);
  const [token] = useToken(loginUserEmail);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      // console.log(token);
    }
  }, [navigate, from, token]);
  const handlelogin = (event) => {
    event.preventDefault();
    setLoginError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
      .then((data) => {
        console.log(data.user.email);
        toast.success("Login Successfull");
        // navigate(from, { replace: true });
        setLoginUserEmail(data.user.email);
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };
  const savegoogleUser = (email, userName) => {
    const user = {
      name: userName,
      email: email,
      role: "buyer",
      isVerified: false,
    };
    console.log(user);
    fetch("https://y-xi-khaki.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Successfully Logged In");
        fetch("https://y-xi-khaki.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data.user.email),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem("accessToken", data.token);
          });
      });
  };
  const handlegoogleSignin = () => {
    googleSignIn().then((data) => {
      savegoogleUser(data.user.email, data.user.displayName);
      setLoginUserEmail(data.user.email);
    });
  };
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div className="my-10 container mx-auto">
      <div className="lg:flex">
        <div className="">
          <div className="">
            <img src={img} alt="" className="w-full" />
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
                    required
                  />
                  <input
                    className="block w-3/4 mx-auto  px-4 py-2 mt-4"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="password"
                    required
                  />
                </div>

                <div className="flex items-center  mt-4 justify-center">
                  <button className="px-4 py-2 btn btn-outline font-semibold text-white ">
                    Login
                  </button>
                </div>
                <div>
                  {loginError && <p className="text-red-600">{loginError}</p>}
                </div>
              </Form>
              <p className="text-white my-2">
                Dont have an account?Please{" "}
                <Link className="text-blue-600" to={"/signup"}>
                  Sign Up
                </Link>
              </p>
              <button
                className="btn btn-secondary mt-5"
                onClick={handlegoogleSignin}
              >
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
