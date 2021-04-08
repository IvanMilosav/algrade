import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const BookingContext = createContext();

export const BookingProvider = props => {
  const { children } = props;
  const [date, setDate] = useState(new Date());
  const [roomPrice, setRoomPrice] = useState(54);
  const [cruise, setCruise] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("+381");
  const [phone, setPhone] = useState("");
  const onDateChange = newDate => {
    setDate(newDate);
  };
  const stayingDays =
    Math.ceil((date[1] - date[0]) / (24 * 3600 * 1000)) || null;
  const freeCruise = stayingDays >= 10;
  const newCruisePrice = freeCruise ? 0 : 50;
  const cruisePrice = cruise ? newCruisePrice : 0;
  const price = stayingDays * roomPrice + cruisePrice;
  return (
    <BookingContext.Provider
      value={[
        date,
        setDate,
        roomPrice,
        setRoomPrice,
        cruise,
        setCruise,
        onDateChange,
        stayingDays,
        freeCruise,
        price,
        email,
        setEmail,
        name,
        setName,
        code,
        setCode,
        phone,
        setPhone
      ]}
    >
      {children}
    </BookingContext.Provider>
  );
};
BookingProvider.propTypes = {
  children: PropTypes.element
};
BookingProvider.defaultProps = {
  children: null
};
