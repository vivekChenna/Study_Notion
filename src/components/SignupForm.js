import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("password not match");
      return;
    } else {
      toast.success("Account Created");
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* contains first Name and Last Name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              required
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              required
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>

        <div>
          <label>
            <p>
              Email Address <sup>*</sup>
            </p>
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* password and confirm password */}
        <div>
          <label>
            <p>
              Create Password
              <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              onChange={changeHandler}
              name="password"
              value={formData.password}
              placeholder="Enter Password"
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              confirm Password<sup>*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              onChange={changeHandler}
              required
              value={formData.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm the Password"
            />
            <span
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
