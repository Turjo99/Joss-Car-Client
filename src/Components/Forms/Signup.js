import React from "react";
import { Form } from "react-router-dom";

const Signup = () => {
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="my-10 container mx-auto">
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className=" w-3/4 h-96 bg-white rounded-lg dark:bg-gray-800">
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
                  />
                  <input
                    className="block w-3/4 mx-auto  px-4 mt-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    name="email"
                  />
                  <input
                    className="block w-3/4 mx-auto  px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    name="password"
                  />
                </div>

                <div className="flex items-center  mt-4 justify-center">
                  <button className="px-4 py-2 btn btn-outline font-semibold text-white ">
                    Signup
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-full px-6 py-8 m-9">
          <div className="w-full h-full bg-cover">
            <img
              src="https://maserati.scene7.com/is/image/maserati/maserati/international/HomePage/Hero/models/LUX7417-1_desktop.jpg?$1920x2000$&fit=constrain"
              alt=""
              className="w-full h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
