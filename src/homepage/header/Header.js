import React, { useContext } from "react";
import { ModalContext } from "../../UI elements/modal/ModalContext";
import logo from "../../assets/logo.png";
import arabImg from "../../assets/arab2.jpg";
import "./Header.scss";

const Header = () => {
  const [, , toggleModal] = useContext(ModalContext);

  return (
    <div className="header">
      <div className="main_section">
        <img src={logo} alt="logo" className="logo" />
        <div className="main_section-container">
          <div className="title">AL-grade</div>
          <div className="line">Middle eastern style hotel in Belgrade</div>
          <button className="button" type="button" onClick={toggleModal}>
            Book a room now
          </button>
        </div>
      </div>
      <div className="ceo_section">
        <div className="ceo_section-container">
          <img src={arabImg} alt="arab" className="ceo_img" />
          <div className="text">
            &#34;I am very happy that we have chosen Belgrade as first city in
            our expansion towards Europe. &#34;
          </div>
          <div className="name">
            Muhammad Sarim Akhtar <br />
            CEO of the AL-international
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
