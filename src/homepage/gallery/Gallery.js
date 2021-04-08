import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import hotelImgTwo from "../../assets/hotelImg2.jpg";
import hallImg from "../../assets/hall.webp";
import poolImg from "../../assets/pool.webp";
import saunaImg from "../../assets/sauna.webp";
import playgroundImg from "../../assets/playground.webp";
import bathroomOne from "../../assets/bathroom.webp";
import outside from "../../assets/outside.webp";
import familyEating from "../../assets/familyEating.webp";
import "./Gallery.scss";

const Gallery = () => {
  const [imageNumber, setImageNumber] = useState(0);
  const [tmpState, setTmpState] = useState(true);
  const imagesArray = [
    hotelImgTwo,
    hallImg,
    poolImg,
    saunaImg,
    playgroundImg,

    bathroomOne,
    outside,
    familyEating
  ];
  const arrayLength = imagesArray.length;
  const animaRef = useRef();
  const toLeft = () => {
    if (imageNumber === 0) {
      setTmpState(false);
      setTimeout(() => setImageNumber(arrayLength - 1), 200);
    } else {
      setTmpState(false);
      setTimeout(() => setImageNumber(imageNumber - 1), 200);
    }
    setTimeout(() => setTmpState(true), 300);
  };
  const toRight = () => {
    if (imageNumber === arrayLength - 1) {
      setTmpState(false);
      setTimeout(() => setImageNumber(0), 200);
    } else {
      setTmpState(false);
      setTimeout(() => setImageNumber(imageNumber + 1), 200);
    }
    setTimeout(() => setTmpState(true), 300);
  };
  const imageToShow = imagesArray[imageNumber];
  return (
    <div className="gallery">
      <div className="titles">
        <h1 className="title">Gallery</h1>
        <h2 className="subtitle">This is how you see us</h2>
      </div>

      <div className="gallery-container">
        <button
          type="button"
          className="button"
          aria-label="left"
          onClick={toLeft}
        >
          <FaChevronLeft />
        </button>
        <div className="image-container">
          <CSSTransition
            in={tmpState}
            timeout={200}
            classNames="my-node"
            mountOnEnter
            unmountOnExit
            nodeRef={animaRef}
          >
            <img
              src={imageToShow}
              alt="gallery"
              className="image "
              ref={animaRef}
            />
          </CSSTransition>
        </div>
        <button
          type="button"
          className="button"
          aria-label="right"
          onClick={() => toRight()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
