import React from "react";
import "./Header.css";
import logo from "../images/icons/7777.png";
import { Search, Menu, AddShoppingCart } from "@mui/icons-material";
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
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>

          <div className="header-nav">
            <div className="header__option" id="search">
              <span className="line__2">Search</span>
            </div>

            <Link className="link" to="/products">
              <div className="header__option">
                <span className="line__2">Store</span>
              </div>
            </Link>

            <Link className="link">
              <div className="header__option">
                <span className="line__2">Category</span>
              </div>
            </Link>

            <Link className="link">
              <div className="header__option">
                <span className="line__2">Blog</span>
              </div>
            </Link>

            <Link className="link">
              <div className="header__option">
                <span className="line__2">Gallery</span>
              </div>
            </Link>

            <div className="header__option">
              <span className="line__2">About Us</span>
            </div>

            <div className="user">
              <Link
                className="link"
                to={(location) => ({
                  ...location,
                  pathname: !user && "/login",
                })}
              >
                <div
                  onClick={handleAuthentication}
                  className="header__option user__menu flex"
                >
                  <span className="line__2">
                    {user ? `Hello ${user.email}` : `Sign In`}
                  </span>
                </div>
              </Link>
              <div className="user__options flex__col hide">
                <span className="line__2">{user ? `Sign Out` : `Sign In`}</span>
                <span className="line__2">Dashboard</span>
                <span className="line__2">Your Store</span>
              </div>
            </div>

            <Link className="link" to="/checkout">
              <div className="card__icon">
                <span className="items__inCart">{basket?.length}</span>
                <AddShoppingCart />
              </div>
            </Link>
          </div>
        </div>

        <div className="header__search container hide">
          <input className="search__input" type="text" />
          <Search className="search__icon" />
        </div>
      </div>

      {/*/////////// Mobile Menu //////////*/}

      <div className="mobile__header ">
        <div className="header__container container">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>

          <div className="header-nav ">
            <Link className="link" to="/checkout">
              <div className="card__icon menu__icons">
                <span className="items__inCart">{basket?.length}</span>
                <AddShoppingCart />
              </div>
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
          className="link"
          to={(location) => ({
            ...location,
            pathname: !user && "/login",
          })}
        >
          <div onClick={handleAuthentication} className="header__option">
            <span className="line__1">
              {user ? `Hello ${user.email}` : `Hello Guest`}
            </span>

            <span className="line__2">{user ? `Sign Out` : `Sign In`}</span>
          </div>
        </Link>

        <Link className="link" to="/products">
          <div className="header__option">
            <span className="line__2">Store</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="line__2">About Us</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
