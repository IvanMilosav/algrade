import React from "react";
import "./Amenities.scss";
import {
  IoIosCar,
  IoIosPaw,
  IoIosWifi,
  IoIosPeople,
  IoIosFitness,
  IoIosRestaurant
} from "react-icons/io";

const Amenities = () => {
  return (
    <div className="amenities">
      <h1 className="section_title">Amenities </h1>
      <h2 className="section_subtitle">For all your needs</h2>
      <div className="amenitie">
        <div className="title">
          Restaurant <IoIosRestaurant className="icon" />
        </div>

        <div className="text">
          Our newly refurbished and extended restaurant has been designed with a
          warm and contemporary feel, carefully designed to enable space yet
          intimacy
        </div>
      </div>
      <div className="amenitie">
        <div className="title">
          Internet <IoIosWifi className="icon" />
        </div>
        <div className="text">
          Our guests have free WIFI access all over hotel, and optic internet
          with highest speed on the market in your room, just for your needs
        </div>
      </div>
      <div className="amenitie">
        <div className="title">
          Parking
          <IoIosCar className="icon" />
        </div>
        <div className="text">
          We have over 200 parking spaces, and it is free for all our guests.
          Our valets will make sure your car is taken care of
        </div>
      </div>
      <div className="amenitie">
        <div className="title">
          Pet friendly <IoIosPaw className="icon" />
        </div>
        <div className="text">
          All our hotels are pet friendly, we even have a daycare and a
          playground for all your animal companions
        </div>
      </div>
      <div className="amenitie">
        <div className="title">
          Fitness <IoIosFitness className="icon" />
        </div>
        <div className="text">
          We have modern gyms and swimming pools. Our team of fitness
          instructors offers group and individual trainings for our guests
        </div>
      </div>
      <div className="amenitie">
        <div className="title">
          Confernce rooms <IoIosPeople className="icon" />
        </div>
        <div className="text">
          Your board meetings, management discussions, and other major
          decision-making situations are made easy in our conference rooms
        </div>
      </div>
    </div>
  );
};

export default Amenities;
