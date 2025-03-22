import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="footer ">
      <div className="footer__container container flex__col">
        <div className="footer__main flex">
          <div className="social flex">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://web.facebook.com/MAfriculture"
              className="social__link flex"
            >
              <span className="social__link-icon">
                <FacebookRoundedIcon />
              </span>
              <span className="social__link-name">Facebook</span>
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/mafriculture/"
              className="social__link flex"
            >
              <span className="social__link-icon">
                <InstagramIcon />
              </span>
              <span className="social__link-name">Instagram</span>
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.pinterest.com/mafriculture"
              className="social__link flex"
            >
              <span className="social__link-icon">
                <PinterestIcon />
              </span>
              <span className="social__link-name">Pinterest</span>
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/ChenwiEugene"
              className="social__link flex"
            >
              <span className="social__link-icon">
                <TwitterIcon />
              </span>
              <span className="social__link-name">Twitter</span>
            </a>
          </div>
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
