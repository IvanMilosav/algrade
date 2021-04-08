import React, { useContext } from "react";
import { FaBath, FaBed, FaWifi, FaDollyFlatbed } from "react-icons/fa";
import { ModalContext } from "../../UI elements/modal/ModalContext";
import singlesRoomImg from "../../assets/singleRoom.webp";
import couplesRoomImg from "../../assets/couplesRoom.webp";
import familyApartmentImg from "../../assets/familyApartment.webp";
import "./Rooms.scss";

const Rooms = () => {
  const [, , toggleModal] = useContext(ModalContext);

  return (
    <div className="rooms">
      <h1 className="section_title">Our rooms</h1>
      <h2 className="section_subtitle">Perfect accommodation for you</h2>
      <div className="room">
        <img src={singlesRoomImg} alt="singles" className="room_img" />
        <div className="info">
          <FaBath className="icon" />
          <FaDollyFlatbed className="icon" />
          <FaWifi className="icon" />
          <FaBed className="icon" />
        </div>
        <div className="title">Classic room</div>
        <button type="button" className="button" onClick={toggleModal}>
          Book for 54&euro; per day
        </button>
      </div>

      <div className="room">
        <img src={couplesRoomImg} alt="coupes" className="room_img" />
        <div className="info">
          <FaBath className="icon" />
          <FaDollyFlatbed className="icon" />
          <FaWifi className="icon" />
          <div className="icon_container">
            <FaBed className="icon" />
            <FaBed className="icon" />
          </div>
        </div>
        <div className="title">Couples Room</div>
        <button type="button" className="button" onClick={toggleModal}>
          Book for 73&euro; per day
        </button>
      </div>

      <div className="room">
        <img src={familyApartmentImg} alt="famiRoom" className="room_img" />
        <div className="info">
          <div className="icon_container">
            <FaBath className="icon" />
            <FaBath className="icon" />
          </div>
          <FaDollyFlatbed className="icon" />
          <FaWifi className="icon" />
          <div className="icon_container">
            <FaBed className="icon" />
            <FaBed className="icon" />
            <FaBed className="icon" />
            <FaBed className="icon" />
          </div>
        </div>
        <div className="title">Family apartment</div>
        <button type="button" className="button" onClick={toggleModal}>
          Book for 102&euro; per day
        </button>
      </div>
    </div>
  );
};

export default Rooms;
