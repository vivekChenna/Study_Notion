import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";
import toast from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className=" border-2 flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <div className="flex">
        <Link to="/" className="flex gap-2">
          <img
            src={logo}
            alt="logo"
            className=" w-12 h-12 bg-white"
            loading="lazy"
          />
          <p className=" text-5xl font-bold">StudyNotion</p>
        </Link>
      </div>

      <nav className="">
        <ul className="flex gap-9 flex-wrap">
          <li>
            <Link to="/" className=" text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-6 flex-wrap">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="text-xl">Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="text-xl">Signup</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("logged out");
              }}
              className="text-xl"
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="text-xl">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
