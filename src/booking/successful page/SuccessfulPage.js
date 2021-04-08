import React, { useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalContext } from "../../UI elements/modal/ModalContext";

import "./SuccessfulPage.scss";

const SuccessfulPage = () => {
  const animationRefS = useRef();
  const [, setShowModal, , , , , , , , successfulPage] = useContext(
    ModalContext
  );

  return (
    <CSSTransition
      in={successfulPage}
      timeout={900}
      classNames="swap"
      mountOnEnter
      unmountOnExit
      nodeRef={animationRefS}
    >
      <div className="successful" ref={animationRefS}>
        <p>
          You have successfully made a reservation, we will contact you soon
        </p>
        <button
          type="button"
          className="button"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
    </CSSTransition>
  );
};

export default SuccessfulPage;
