import React from "react";
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro">
      <p className="about__p">
        Welcome to MAfriculture, the new trending arts and craft market in the
        world. <br />
        Please watch this intrductory Video.
      </p>

      <div className="yout__video">
        <iframe
          src="https://www.youtube.com/embed/bmVKaAV_7-A?autoplay=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Intro;
