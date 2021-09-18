import React from 'react';
import './Header.css';
import logo from '../images/icons/7777.png';
import { Search, Menu, AddShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

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

          <div className="header-search">
            <input className="search-input" type="text" />
            <Search className="search-icon" />
          </div>
          <div className="header-nav">
            <Link
              className="link"
              to={(location) => ({
                ...location,
                pathname: !user && '/login',
              })}
            >
              <div onClick={handleAuthentication} className="header-option">
                <span className="line-1">
                  {user ? `Hello ${user.email}` : `Hello Guest`}
                </span>
                <span className="line-2">{user ? `Sign Out` : `Sign In`}</span>
              </div>
            </Link>

            <Link className="link" to="/products">
              <div className="header-option">
                <span className="line-2">Store</span>
              </div>
            </Link>
            <div className="header-option">
              <span className="line-2">About Us</span>
            </div>

            <Link className="link" to="/checkout">
              <div className="card-icon">
                <span className="items-inCart">{basket?.length}</span>
                <AddShoppingCart />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/*/////////// Mobile Menu //////////*/}

      <div className="mobile__header ">
        <div className="header__container container">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>

          <div className="header-nav ">
            <div className="mobile__header__nav slide">
              <Link
                className="link"
                to={(location) => ({
                  ...location,
                  pathname: !user && '/login',
                })}
              >
                <div onClick={handleAuthentication} className="header-option">
                  <span className="line-2">
                    {user ? `Sign Out` : `Sign In`}
                  </span>
                </div>
              </Link>

              <Link className="link" to="/products">
                <div className="header-option">
                  <span className="line-2">Store</span>
                </div>
              </Link>

              <div className="header-option">
                <span className="line-2">About Us</span>
              </div>
            </div>

            <Link className="link" to="/checkout">
              <div className="card-icon menu__icons">
                <span className="items-inCart">{basket?.length}</span>
                <AddShoppingCart />
              </div>
            </Link>
            <div className="menu__icons toggle__icon">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
