/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "./ModalContext";
import Backdrop from "../backdrop/Backdrop";
import DatepickPage from "../../booking/datepick page/DatepickPage";
import ConfirmPage from "../../booking/confirm page/ConfirmPage";
import InfoPage from "../../booking/info page/InfoPage";
import SuccessfulPage from "../../booking/successful page/SuccessfulPage";
import "./Modal.scss";

const Modal = () => {
  const [, setShowModal] = useContext(ModalContext);

  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <DatepickPage />
        <InfoPage />
        <ConfirmPage />
        <SuccessfulPage />
        <div className="close" onClick={() => setShowModal(false)}>
          <FaTimes />
        </div>
      </div>
      <Backdrop onclick={() => setShowModal(false)} />
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
