import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({ username: "", password: "" });

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Login:", loginData);
  };

  const handleSignup = () => {
    console.log("Signup:", signupData);
  };

  return (
    <div className="login-page">
      <div className={`login-menu ${isLogin ? "show-login" : "show-signup"}`}>
        <div className={`form-container login ${isLogin ? "active" : ""}`}>
          <div className="header">
            <h1>Login</h1>
            <p>Welcome Back</p>
          </div>
          <div className="userdata">
            <div className="username">
              <label htmlFor="login-username">Username</label>
              <input
                id="login-username"
                name="username"
                type="text"
                value={loginData.username}
                onChange={handleLoginChange}
              />
            </div>
            <div className="password">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>

        <div className={`form-container signup ${!isLogin ? "active" : ""}`}>
          <div className="header">
            <h1>Signup</h1>
            <p>Create new account</p>
          </div>
          <div className="userdata">
            <div className="username">
              <label htmlFor="signup-username">Username</label>
              <input
                id="signup-username"
                name="username"
                type="text"
                value={signupData.username}
                onChange={handleSignupChange}
              />
            </div>
            <div className="password">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                name="password"
                type="password"
                value={signupData.password}
                onChange={handleSignupChange}
              />
            </div>
            <button type="button" onClick={handleSignup}>
              Create account
            </button>
          </div>
        </div>
      </div>

      <div className={isLogin ? "" : "signup"} id="switch">
        <div className="create-account-btn" onClick={handleIsLogin}>
          <span>{isLogin ? "Create an" : "Login"}</span>
          <span>{isLogin ? "account" : ""}</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
