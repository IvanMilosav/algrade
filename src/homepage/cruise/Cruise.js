import React, { useContext } from "react";
import { ModalContext } from "../../UI elements/modal/ModalContext";

import "./Cruise.scss";
import cruiseImg from "../../assets/cruiser.png";

const Cruise = () => {
  const [, , toggleModal] = useContext(ModalContext);

  return (
    <div className="cruise">
      <div className="main_section">
        <div className="title">Explore Sava and Danube</div>
        <div className="text">
          Our guests have special chance to cruise Sava and Danube rivers and
          see Belgrade Waterfront first hand, guests who stay more than 10 days
          get it free
        </div>
        <button type="button" className="button" onClick={toggleModal}>
          Book a cruise now
        </button>
      </div>
      <img src={cruiseImg} alt="cruImg" className="cruise-img" />
    </div>
  );
};

export default Cruise;
