import React from "react";
import DressingGallery from "./DressingGallery";
import 'react-image-lightbox/style.css';
import "./Gallery.css";
import HomeGallery from "./HomeGallery";
import OfficeGallery from "./OfficeGallery";
import { useStateValue } from '../../StateProvider'

function Gallery() {
  console.log(useStateValue()[0])
  return (
    <div className="gallery__container container">
      <h2>This is MAfriculture gallery</h2>
      <div className="gallery__thumbnails">
        <HomeGallery />
      </div>
      <div className="gallery__thumbnails">
        <OfficeGallery />
      </div>
      <div className="gallery__thumbnails">
        <DressingGallery />
      </div>
    </div>
  );
}

export default Gallery;
