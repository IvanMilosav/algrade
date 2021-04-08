import React, { useContext } from "react";
import { ModalContext } from "../../UI elements/modal/ModalContext";

import "./Location.scss";
import pobednikImg from "../../assets/bgImg1u.jpg";
import kalemegdanImg from "../../assets/bgImg4w.jpg";
import trgImg from "../../assets/bgImg2w.jpg";
import bwImg from "../../assets/bgImg1w.jpg";
import skadarImg from "../../assets/bgImg3w.jpg";
import museumImg from "../../assets/museum.jpg";

const Location = () => {
  const [, , toggleModal] = useContext(ModalContext);
  return (
    <div className="location">
      <div className="quote">
        <div className="title">Located in heart of the Belgrade</div>
        <div className="line">
          From Al-grade all Belgrade&apos;s attractions are in your reach within
          just 10 minutes walk
        </div>
        <button type="button" className="button" onClick={toggleModal}>
          Book a room here
        </button>
      </div>
      <div className="location-images">
        <img src={pobednikImg} alt="pobednik" className="image-pobednik" />
        <img
          src={kalemegdanImg}
          alt="kalemagdan"
          className="image-kalemegdan"
        />
        <img src={trgImg} alt="trg" className="image-trg" />
        <img src={bwImg} alt="bw" className="image-bw" />
        <img src={skadarImg} alt="skadarlija" className="image-skadarlija" />
        <img src={museumImg} alt="museum" className="image-museum" />
      </div>
    </div>
  );
};

export default Location;
