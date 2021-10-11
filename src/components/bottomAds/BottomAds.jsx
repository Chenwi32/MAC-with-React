import React from "react";
import { momo_logo, orange_logo, paypal_logo } from "../images/imageindex";
import "./BottomAds.css";

function BottomAds() {
  return (
    <div className="ads flex">
      <div className="ad">
        {<img src={paypal_logo} alt="" className="ads__image" />}
      </div>

      <div className="ad">
        {<img src={momo_logo} alt="" className="ads__image" />}
      </div>

      <div className="ad">
        {<img src={orange_logo} alt="" className="ads__image" />}
      </div>
    </div>
  );
}

export default BottomAds;
