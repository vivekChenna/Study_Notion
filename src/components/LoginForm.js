import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("successfully logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>

        <input
          className=""
          required
          type="email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
          placeholder="Enter Email id"
        />
      </label>

      <label>
        <p>
          Password <sup>*</sup>
        </p>

        <input
          className=""
          required
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={changeHandler}
          value={formData.password}
          placeholder="Enter your Password.."
        />
        <span
          className="cursor-pointer"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password?</p>
        </Link>

        <button>Sign In</button>
      </label>
    </form>
  );
};

export default LoginForm;
