import React from "react";
import { office_1, office_2, office_3, office_4 } from "./images/galleryIndex";

function OfficeGallery() {
  return (
    <div class="container">
      <div className="gallery grid__4">
        <div className=" gallery__image-container">
          <img src={office_1} alt="" className="gallery__image" />
        </div>
        <div className="gallery__image-container">
          <img src={office_2} alt="" className="gallery__image" />
        </div>
        <div className="gallery__image-container">
          <img src={office_3} alt="" className="gallery__image" />
        </div>
        <div className="gallery__image-container">
          <img src={office_4} alt="" className="gallery__image" />
        </div>
      </div>
    </div>
  );
}

export default OfficeGallery;
