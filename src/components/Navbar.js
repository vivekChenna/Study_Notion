import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

const Navbar = () => {
  return (
    <div className=" border-2">
      <div className="flex border-2">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-12 h-12"  />
          <p>Study Notion</p>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        <button className=" bg-slate-400">Signup</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
