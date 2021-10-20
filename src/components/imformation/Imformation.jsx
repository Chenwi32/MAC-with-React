import React from "react";
import "./Imformation.css";

function Imformation() {
  return (
    <div className="imform flex__col">
      <h1 className="imform__greet">Welcome</h1>
      <h3 className="imform__news">
        <em>
          Nothing goes up and never comes back down, it always falls back.
          COVID-19 is not an exception
        </em>
      </h3>
    </div>
  );
}

export default Imformation;
