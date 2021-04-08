import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ModalContext = createContext();

export const ModalProvider = props => {
  const { children } = props;
  const [showModal, setShowModal] = useState(false);
  const [bookPage, setBookPage] = useState(true);
  const [infoPage, setInfoPage] = useState(false);
  const [confirmPage, setConfirmPage] = useState(false);
  const [successfulPage, setSuccessfulPage] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ModalContext.Provider
      value={[
        showModal,
        setShowModal,
        toggleModal,
        bookPage,
        setBookPage,
        infoPage,
        setInfoPage,
        confirmPage,
        setConfirmPage,
        successfulPage,
        setSuccessfulPage
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
};
ModalProvider.propTypes = {
  children: PropTypes.element
};
ModalProvider.defaultProps = {
  children: null
};
