import React from "react";
import "./App.scss";
import Homepage from "./homepage/Homepage";
import { ModalProvider } from "./UI elements/modal/ModalContext";
import { BookingProvider } from "./booking/BookingContext";

const App = () => {
  return (
    <ModalProvider>
      <BookingProvider>
        <Homepage />
      </BookingProvider>
    </ModalProvider>
  );
};

export default App;
