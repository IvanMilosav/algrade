import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ModalContext } from "../../UI elements/modal/ModalContext";
import { BookingContext } from "../BookingContext";
// import logoDark from "../../assets/logoDark.png";

import "./DatepickPage.scss";
import "./ElementsStyle.scss";

const DatepickPage = () => {
  const [, , , bookPage, setBookPage, , setInfoPage, ,] = useContext(
    ModalContext
  );
  const [
    date,
    ,
    roomPrice,
    setRoomPrice,
    cruise,
    setCruise,
    onDateChange,
    stayingDays,
    freeCruise,
    price
  ] = useContext(BookingContext);

  const bookToInfo = () => {
    setBookPage(false);
    setInfoPage(true);
  };
  const animationRef = useRef();
  return (
    <CSSTransition
      in={bookPage}
      timeout={900}
      classNames="swap"
      mountOnEnter
      unmountOnExit
      nodeRef={animationRef}
    >
      <>
        <div className="not_suported">
          This screen resolution is not suported
        </div>
        <div className="datepicker" ref={animationRef}>
          <div className="calendar-container">
            <Calendar
              returnValue="range"
              selectRange
              minDate={new Date()}
              className="calendar"
              onChange={onDateChange}
            />
            {date.length === 2 ? (
              <div className="text">
                Selected: <br />
                <p>{date[0].toDateString()}</p>
                {stayingDays > 1 ? <p>{date[1].toDateString()}</p> : null}
              </div>
            ) : (
              <p className="text">
                Please select desired period,
                <br />
                double click on a day, for single a day.
              </p>
            )}
          </div>
          <div className="selects">
            <div className="roomselect">
              <h1 className="roomselect-title">Pick a room :</h1>
              <div className="roomselect-options">
                <div className="room">
                  <label htmlFor="broom" className="container">
                    Classsic room
                    <br />
                    <p className="room-price"> 54&euro;/day </p>
                    <input
                      type="radio"
                      value="broom"
                      id="broom"
                      name="room"
                      checked={roomPrice === 54}
                      onChange={() => setRoomPrice(54)}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="room">
                  <label htmlFor="croom" className="container">
                    Couples room
                    <br />
                    <p className="room-price"> 73&euro;/day </p>
                    <input
                      type="radio"
                      value="broom"
                      id="croom"
                      name="room"
                      checked={roomPrice === 73}
                      onChange={() => setRoomPrice(73)}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="room">
                  <label htmlFor="froom" className="container">
                    Family apartment
                    <br />
                    <p className="room-price"> 102&euro;/day </p>
                    <input
                      type="radio"
                      value="broom"
                      id="froom"
                      name="room"
                      checked={roomPrice === 102}
                      onChange={() => setRoomPrice(102)}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="cruiseselect">
              <h1 className="cruise-title">The cruise: </h1>
              <div className="cruiseselect-options">
                <div className="cruiseselect-option">
                  <label htmlFor="nocruse" className="container">
                    No
                    <input
                      type="radio"
                      value="broom"
                      id="nocruse"
                      name="cruise"
                      checked={cruise === false}
                      onChange={() => setCruise(false)}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="cruiseselect-option">
                  <label htmlFor="yescruse" className="container">
                    Yes
                    <input
                      type="radio"
                      value="broom"
                      id="yescruse"
                      name="cruise"
                      checked={cruise === true}
                      onChange={() => setCruise(true)}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <p className="cruiseselect-special">
                  guests who stay more than 10 days get free cruise*
                </p>
                {freeCruise ? (
                  <p className="cruiseselect-free">*your cruise is free</p>
                ) : null}
              </div>
            </div>
          </div>
          {stayingDays < 1 ? null : (
            <h1 className="total">Total: {price} &euro;</h1>
          )}
          <button
            type="button"
            onClick={bookToInfo}
            disabled={stayingDays < 1}
            className="next-button"
          >
            Next
          </button>
        </div>
      </>
    </CSSTransition>
  );
};

export default DatepickPage;
