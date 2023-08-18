import React from "react";
import Template from "./Template";

const Login = ({setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today, tomorrow, and beyond"
      desc2="Education to future-proof your career"
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
