import React from "react";
import { useHistory } from "react-router";
import "./Banner.css";

function Banner() {
  const history = useHistory();

  return (
    <div className="banner-container flex__col banner">
      <div className="banner container">
        <h1 id="backToTop">
          <span className="m">
            <em>M</em>
          </span>
          <span className="a">A</span>
          friculture
        </h1>

        <div className="quotes">
          <p>
            There Is Beauty In Everything — <br />
            African Fashion Is Never An Exception.
            <br />
            <strong>Give The African Style A Try!</strong>
          </p>
          <div id="animated__text" className="animated__text"></div>

          <p className="feel hide" id="feel">
            <strong>“FEEL THE ROYALTY”</strong>
          </p>
          <p className="hide" id="priority">
            <strong>
              <em>Your Satisfaction, Our Priority!</em>
            </strong>
          </p>
        </div>

        <div className="buttons flex">
          <button
            className="btn banner__btn"
            onClick={(event) => history.push("/products")}
          >
            Shop Now
          </button>
          <button className="btn2 banner__btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
