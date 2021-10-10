import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer__container container flex__col">
        <div className="footer__main flex">
          <div className="social flex__col">
            <a href="www.facebook.com" className="social__link flex">
              <span className="social__link-icon"></span>
              <span className="social__link-name">Facebook</span>
            </a>

            <a href="www.instagram.com" className="social__link flex">
              <span className="social__link-icon"></span>
              <span className="social__link-name">Instagram</span>
            </a>

            <a href="www.pinterest.com" className="social__link flex">
              <span className="social__link-icon"></span>
              <span className="social__link-name">Pinterest</span>
            </a>

            <a href="www.twitter.com" className="social__link flex">
              <span className="social__link-icon"></span>
              <span className="social__link-name">Twitter</span>
            </a>
          </div>

          <hr />

          <form className="footer__main-form flex__col" action="">
            <div className="footer__cta__input-container flex__col">
              <p>
                If you have any sugestions on how we could improve our System,
                please leave a message below
              </p>
              <label className="footer__cta-label" htmlFor="name">
                Name:
              </label>
              <input type="text" className="footer__cta-input" />

              <label className="footer__cta-label" htmlFor="email">
                Email:
              </label>
              <input type="email" className="footer__cta-input" />

              <label className="footer__cta-label" htmlFor="message">
                Message:
              </label>

              <textarea
                className="message"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="footer__cta__button flex">
              <button type="submit" className="btn2">
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="footer__bottom flex">
          <p className="copyright">
            Copyright <sup>&copy;</sup> 2021 | MAfriculture
          </p>

          <div className="policies flex">
            <Link className="policies__option privacy">Privacy </Link>|
            <Link className="policies__option cookie">Cookie</Link>|
            <Link className="policies__option purchase">Purchase</Link>
          </div>
        </div>

        <button className="change__BGcolor btn">BG</button>
      </div>
    </div>
  );
}

export default Footer;
