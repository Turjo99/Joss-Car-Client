import React, { useContext, useEffect, useState } from "react";
import logo from "../../imgs/vintage-car.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Nav = () => {
  const { logout, user } = useContext(AuthContext);
  const [name, setName] = useState(null);
  const handleLogOut = () => {
    logout().then({}).catch({});
  };

  // console.log(name);
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {/* <li>
        <Link to={"/"}>My Orders</Link>
      </li> */}
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li onClick={handleLogOut}>
            <Link to={"/"}>Logout</Link>
          </li>

          <li>
            <Link>{user.displayName}</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>SignUp</Link>
          </li>{" "}
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img className=" w-12 relative left-4" src={logo} alt="" />
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Joss Cars
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        <label
          tabIndex={0}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden navbar-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <label
        tabIndex={0}
        htmlFor="dashboard-drawer"
        className="btn btn-ghost lg:hidden navbar-end"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Nav;
