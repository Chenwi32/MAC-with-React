import React, { useState } from "react";
import "./Login.css";
import logo from "../images/icons/7777.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {
  // useHistory allows us to programatically change url when something
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    // Firebase Funtionality
    auth
      .signInWithEmailAndPassword(email, password)
      .then((register) => {
        if (register) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const toRegister = () => {
    history.push("/register");
  };

  return (
    <div className="login flex">
      <div className="login__container container flex">
        <div className="login-form__container ">
          <div className="logo">
            <Link className="link" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <h1>Sign-in</h1>
          <form className="form flex__col">
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

            <button className="btn" type="submit" onClick={signIn}>
              Sign In
            </button>

            <p className="create__notice">You don't have an account?</p>
            <button className="register" onClick={toRegister}>
              Create an account
            </button>
          </form>
        </div>

        <div className="visuals flex__col flex__center">
          <img src="/images/ankara-fabrics-4.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
