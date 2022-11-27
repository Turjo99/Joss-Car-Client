import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useToken from "../../Hooks/useToken";
import img from "../../imgs/signup.svg";
const Provider = new GoogleAuthProvider();
const Signup = () => {
  const [signUserEmail, setsignUserEmail] = useState("");
  console.log(signUserEmail);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [token] = useToken(signUserEmail);
  console.log(signUserEmail);
  if (token) {
    navigate("/");
  }
  const { createUser, googleSignIn, updateUser } = useContext(AuthContext);

  const handleSignup = (event) => {
    event.preventDefault();
    // form.reset();
    // form.reset();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    console.log(email, password, role);
    createUser(email, password)
      .then((data) => {
        saveUser(email, role, userName);
        toast("User Created Successfully");
        setsignUserEmail(data.user.email);
        console.log(data.user.email);
      })
      .then((err) => console.log(err));
  };
  const saveUser = (email, role, userName) => {
    const user = {
      name: userName,
      email: email,
      role: role,
      isVerified: false,
    };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Successfully Created");
        // navigate("/");
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
    fetch("http://localhost:5000/users", {
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
        fetch("http://localhost:5000/jwt", {
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
      setsignUserEmail(data.user.email);
    });
  };
  return (
    <div className="my-10 container mx-auto">
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className=" w-3/4 h-fit bg-white rounded-lg dark:bg-gray-800">
            <div className="p-5 text-center">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                Sign In
              </h2>

              <Form onSubmit={handleSignup}>
                <div className="mt-4">
                  <input
                    className="block w-3/4 mx-auto px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md  dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                    type="name"
                    placeholder="Name"
                    aria-label="Name"
                    name="name"
                    required
                  />
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
                  />
                  <select
                    name="role"
                    className="select select-bordered w-3/4 mx-auto mt-4"
                  >
                    <option disabled selected required>
                      Join as
                    </option>
                    <option value={"buyer"}>Buyer</option>
                    <option value={"seller"}>Seller</option>
                  </select>
                </div>

                <div className="flex items-center  mt-4 justify-center">
                  <button className="px-4 py-2 btn btn-outline font-semibold text-white ">
                    Signup
                  </button>
                </div>
              </Form>
              <button
                className="btn btn-secondary mt-5"
                onClick={handlegoogleSignin}
              >
                Sign In With Google
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-full px-6 py-8 m-9">
          <div className="w-full h-full bg-cover">
            <img src={img} alt="" className="w-full h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
