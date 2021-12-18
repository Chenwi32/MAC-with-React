import React, { useState } from "react";
import "../login/Login.css";
import logo from "../images/icons/7777.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = (event) => {
    event.preventDefault();

    // Firebase Functionality
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const toLogin = () => {
    history.push("/login");
  };

  return (
    <div className="login flex">
      <div className="login__container container flex">
        <div className="login-form__container flex__col">
          <div className="logo">
            <Link className="link" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <h1>Sign-up</h1>
          <form className="form flex__col">
            <div className="input__container ">
              <h5>First Name</h5>
              <input
                className="input"
                type="text"
                // This ties the useState to this input field
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="input__container ">
              <h5>Last Name</h5>
              <input
                className="input"
                type="text"
                // This ties the useState to this input field
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="input__container ">
              <h5>E-mail</h5>
              <input
                className="input"
                type="email"
                // This ties the useState to this input field
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="input__container">
              <h5>Password</h5>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button className="btn" type="submit" onClick={register}>
              Sign Up
            </button>

            <p>
              By signing in, you agree to the MAfriculture use and sale
              policies. Please see our Privacy notice, Cookies notice and our
              Interest-Based Ads notice
            </p>
            <p className="create__notice">You already have an account?</p>
            <button className="register" onClick={toLogin}>
              Sign In
            </button>
          </form>
        </div>

        <div className="visuals flex__col flex__center">
          <img src="/images/flower-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
