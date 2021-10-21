import React from "react";
import "./ImageViewer.css";
import { next, prev } from "./images/galleryIndex";

function ImageViewer({ image }) {
  return (
    <div className="container">
      <div class="imagesViewer">
        <img src={next} alt="" class="next " />
        <img src={prev} alt="" class="prev " />
        <div class="img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ImageViewer;
