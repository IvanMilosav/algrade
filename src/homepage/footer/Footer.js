import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaSnapchat
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main_section">
        <div className="icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FB"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="insta"
          >
            <FaInstagramSquare className="icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twit"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="snap"
          >
            <FaSnapchat className="icon" />
          </a>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>
            AL-grade is flagship brand and one of the largest hotel brands in
            the world.The brand is targeted at both business and leisure
            travelers with locations in major city centers, near airports,
            convention centers, and popular vacation destinations around the
            world
          </p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>Belgrade Waterfront 2/6</p>
          <br />
          <p>belgrade@algrade.com</p>
          <p>beograd@algrade.com</p>
          <br />
          <p>+381-3912-804</p>
          <p>+381-3912-803</p>
          <p>+381-3912-805</p>
        </div>
      </div>
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Footer;
