import React from "react";
import "./Header.css";
import logo from "../images/icons/7777.png";
import { Menu, AddShoppingCart, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header(authUser) {
  const { basket, user } = useStateValue()[0];

  // debugger

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="header__container container">
          <div className="header__left flex">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
            <Link to="/">
              <Home className="link" />
            </Link>
          </div>

          <div className="header-nav">
            {/* <Link className="link header__option" id="search">
              <span className="line__2">Search</span>
            </Link> */}

            <Link className="link header__option" to="/products">
              <span className="line__2">Shop</span>
            </Link>

            <Link className="link header__option" to="/blog">
              <span className="line__2">Blog</span>
            </Link>

            <Link className="link header__option" to="/gallery">
              <span className="line__2">Gallery</span>
            </Link>

            <Link className="link header__option" to="/aboutus">
              <span className="line__2">About Us</span>
            </Link>

            <div className="user">
              <div className="user__options flex__col hide">
                <span className="line__2">{user ? `Sign Out` : `Sign In`}</span>
                <span className="line__2">Dashboard</span>
                <span className="line__2">Your Store</span>
              </div>
            </div>

            <Link className="link card__icon" to="/checkout">
              <span className="items__inCart">{basket?.length}</span>
              <AddShoppingCart />
            </Link>

            <Link
              className="link header__option user__menu flex btn2"
              to={(location) => ({
                ...location,
                pathname: !user && "/login",
              })}
              onClick={handleAuthentication}
            >
              <span className="line__2">
                {user ? `Hello ${user.email}` : `Sign In`}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/*/////////// Mobile Menu //////////*/}

      <div className="mobile__header ">
        <div className="header__container container">
          <Link className="logo__link" to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>

          <div className="header-nav ">
            {/* <Link className="link header__option search" id="search">
              <Search className="search__icon" />
            </Link> */}

            <Link className="link card__icon menu__icons" to="/checkout">
              <span className="items__inCart">{basket?.length}</span>
              <AddShoppingCart />
            </Link>
            <div className="menu__icons toggle__icon">
              <Menu />
            </div>
          </div>
        </div>
      </div>

      <div className="overlay hide"></div>
      <div className="mobile__header__nav slide">
        <Link
          to={(location) => ({
            ...location,
            pathname: !user && "/login",
          })}
          className="link header__option"
          onClick={handleAuthentication}
        >
          <span className="line__1">
            {user ? `Hello ${user.email}` : `Hello Guest`}
          </span>

          <span className="line__2">{user ? `Sign Out` : `Sign In`}</span>
        </Link>

        <Link className=" header__option" to="/products">
          <span className="line__2">Shop</span>
        </Link>

        <Link className=" header__option" to="/blog">
          <span className="line__2">Blog</span>
        </Link>

        <Link className="link header__option" to="/gallery">
          <span className="line__2">Gallery</span>
        </Link>

        <Link className=" header__option" to="/aboutus">
          <span className="line__2">About Us</span>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Header;
