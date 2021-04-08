import React, { useContext, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalContext } from "../../UI elements/modal/ModalContext";
import { BookingContext } from "../BookingContext";
import logoDark from "../../assets/logoDark.png";
import "./ConfirmPage.scss";

const ConfirmPage = () => {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    setInfoPage,
    confirmPage,
    setConfirmPage,
    ,
    setSuccessfulPage
  ] = useContext(ModalContext);
  const [
    date,
    ,
    roomPrice,
    ,
    cruise,
    ,
    ,
    stayingDays,
    ,
    price,
    email,
    ,
    name,
    ,
    code,
    ,
    phone
  ] = useContext(BookingContext);
  const confirmToInfo = () => {
    setInfoPage(true);
    setConfirmPage(false);
  };
  const confirmToSuccessful = () => {
    setSuccessfulPage(true);
    setConfirmPage(false);
  };
  const animationRefC = useRef();
  return (
    <CSSTransition
      in={confirmPage}
      timeout={900}
      classNames="swap"
      mountOnEnter
      unmountOnExit
      nodeRef={animationRefC}
    >
      <div className="confirmpage" ref={animationRefC}>
        <img src={logoDark} alt="logodark" className="image" />
        <div className="text">
          Your have selected <b>{stayingDays}</b> day
          {stayingDays > 1 ? "s from" : null}&nbsp;
          <br />
          <b>{date[0] ? date[0].toDateString() : null} </b>
          {stayingDays > 1 ? (
            <span>
              to <b>{date[1].toDateString()} </b>
            </span>
          ) : null}
          {roomPrice === 54 ? " in a classic room," : null}
          {roomPrice === 73 ? " in a couples room," : null}
          {roomPrice === 102 ? " in a family apartment," : null}
          <br />
          {cruise ? "with the cruise," : " without the cruise,"} and your total
          price is <b>{price}&euro;</b>.
        </div>
        <div className="info">
          <p>Contact information:</p>
          <br />
          <div className="info-data">
            <p className="info-name">
              Name: <b>{name}</b>
            </p>
            <p className="info-email">
              E-mail: <b>{email}</b>
            </p>
            <p className="info-phone">
              Phone number:&nbsp;
              <b>
                {code}-{phone}
              </b>
            </p>
          </div>
        </div>

        <button type="button" className="back-button" onClick={confirmToInfo}>
          Back
        </button>
        <button
          type="button"
          className="next-button"
          onClick={confirmToSuccessful}
        >
          Confrim order
        </button>
      </div>
    </CSSTransition>
  );
};

export default ConfirmPage;
