import React from "react";
import { next, prev } from "../Gallery/images/galleryIndex";
import "./ImageViewer.css";

function ImageViewer(images) {
  let imagesArr = images;

  let i = 0;

  return (
    <div className="container">
      <div class="imagesViewer">
        <img
          src={next}
          alt=""
          class="next "
          onClick={() => {
            i++;
          }}
        />
        <img src={prev} alt="" class="prev " />
        <div class="img">
          <img src={imagesArr[i]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ImageViewer;
