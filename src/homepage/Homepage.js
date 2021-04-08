import React, { useContext } from "react";
import { ModalContext } from "../UI elements/modal/ModalContext";
import Modal from "../UI elements/modal/Modal";
import Header from "./header/Header";
import Amenities from "./amenities/Amenities";
import Location from "./location/Location";
import Rooms from "./rooms/Rooms";
import Gallery from "./gallery/Gallery";
import Cruise from "./cruise/Cruise";
import Footer from "./footer/Footer";

const Homepage = () => {
  const [showModal] = useContext(ModalContext);

  return (
    <div className="homepage">
      {showModal ? <Modal /> : null}
      <Header />
      <Rooms />
      <Location />
      <Amenities />
      <Gallery />
      <Cruise />
      <Footer />
    </div>
  );
};

export default Homepage;
