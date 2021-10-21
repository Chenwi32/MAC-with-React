import React from "react";
import "./ImageViewer.css";
import { next, prev } from "./images/galleryIndex";
import { useStateValue } from "../../StateProvider";

function ImageViewer({ image }) {
  const { images } = useStateValue()[0];

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
          <img src={images[i]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ImageViewer;
