import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import ImageViewer from "../imageViewer/ImageViewer";
import {
  dress_1,
  dress_2,
  dress_3,
  dress_4,
  dress_5,
  dress_6,
  dress_7,
  dress_8,
  dress_9,
  dress_10,
  dress_12,
  dress_13,
} from "./images/galleryIndex";

const images = [
  dress_1,
  dress_10,
  dress_12,
  dress_13,
  dress_4,
  dress_5,
  dress_6,
  dress_7,
  dress_8,
  dress_9,
];

function DressingGallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  console.log(photoIndex);
  const showImageViewer = () => {
    const imageViewer = document.querySelector(".viewimage");
    let classList = imageViewer.classList;

    if (classList.contains("fade2")) {
      classList.remove("fade2");
    } else {
      classList.add("fade2");
    }
  };

  const thumbnails = document.querySelectorAll("gallery__image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      showImageViewer();
    });
  });

  return (
    <div class="container">
      <div className="gallery grid__4">
        <div className=" gallery__image-container">
          <img src={dress_1} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_4} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_5} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_6} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_7} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_8} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_9} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        <div className="gallery__image-container">
          <img src={dress_10} alt="" className="gallery__image" onClick={(e) => { setIsOpen(true); setPhotoIndex(e.target.src) }} />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={photoIndex}
            // nextSrc={images[(photoIndex + 1) % images.length]}
            // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            // onMovePrevRequest={() =>
            //   setPhotoIndex((photoIndex + images.length - 1) % images.length)
            // }
            // onMoveNextRequest={() =>
            //   setPhotoIndex((photoIndex + 1) % images.length)
            // }
          />
        )}
      </div>

      <div className="viewimage fade2">
        <ImageViewer images={images} />
      </div>
    </div>
  );
}

export default DressingGallery;
