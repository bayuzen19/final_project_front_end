import React from "react";
import "./index.css";

export const LoginPage1 = () => {
  return (
    <div className="login-page-1">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-part d-flex flex-column">
            <h1>LOGIN</h1>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button>LOGIN</button>

            <div className="d-flex justify-content-between mt-2">
              <a href="">Forgot Password</a>
              <a href="">Register</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="src\asset\img1.jpg"
          />
        </div>
      </div>
      <div className="login-page-1-rectangle"></div>
    </div>
  );
};

export default LoginPage1;
