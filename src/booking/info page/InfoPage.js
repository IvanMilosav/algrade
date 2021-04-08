import React, { useContext, useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ModalContext } from "../../UI elements/modal/ModalContext";
import { BookingContext } from "../BookingContext";
import Countries from "../../assets/phonesData.json";
import logoDark from "../../assets/logoDark.png";

import "./InfoPage.scss";

const InfoPage = () => {
  const [
    ,
    ,
    ,
    ,
    setBookPage,
    infoPage,
    setInfoPage,
    ,
    setConfirmPage
  ] = useContext(ModalContext);
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    email,
    setEmail,
    name,
    setName,
    code,
    setCode,
    phone,
    setPhone
  ] = useContext(BookingContext);

  const animationRefInfo = useRef();

  const [emailTouched, setEmailTouched] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [country, setCountry] = useState("Serbia");

  const [phoneValid, setPhoneValid] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const nameRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){1,2}$/;
  const phoneRegex = /^[+]?[0-9]+$/;
  const selectCountryOptions = Countries.map(nation => (
    <option key={nation.code} value={nation.name}>
      {nation.name}
    </option>
  ));
  useEffect(() => {
    if (phoneRegex.test(phone) && phone.length > 5) setPhoneValid(true);
    else setPhoneValid(false);
  }, [phone, phoneRegex]);

  useEffect(() => {
    if (nameRegex.test(name)) setNameValid(true);
    else setNameValid(false);
  }, [name, nameRegex]);

  useEffect(() => {
    if (emailRegex.test(email)) setEmailValid(true);
    else setEmailValid(false);
  }, [email, emailRegex]);
  useEffect(() => {
    setCode(
      Countries.find(obj => {
        return obj.name === country;
      }).dial_code
    );
  }, [country, setCode]);
  const infoToBook = () => {
    setBookPage(true);
    setInfoPage(false);
  };
  const infoToConfirm = () => {
    setConfirmPage(true);
    setInfoPage(false);
  };
  const nameErrorMsg = !nameValid && nameTouched ? "enter valid name" : null;
  const emailErrorMsg =
    !emailValid && emailTouched ? "enter valid email" : null;
  const phoneErrorMsg =
    !phoneValid && phoneTouched ? "enter valid phone number" : null;
  const allValil = emailValid && phoneValid && nameValid;
  return (
    <CSSTransition
      in={infoPage}
      timeout={900}
      classNames="swap"
      mountOnEnter
      unmountOnExit
      nodeRef={animationRefInfo}
    >
      <>
        <div className="not_suported">
          This screen resolution is not suported, please flip your device
        </div>
        <div className="infopage" ref={animationRefInfo}>
          <img src={logoDark} alt="logodark" className="info-image" />
          <div className="info-left">
            <label className="input-label" htmlFor="name">
              Full name:
              <input
                id="name"
                value={name}
                className="input-name"
                onChange={e => {
                  setName(e.target.value);
                  setNameTouched(true);
                }}
              />
              <p className="input-error">{nameErrorMsg}</p>
            </label>
            <label className="input-label" htmlFor="email">
              E-mail:
              <input
                id="email"
                value={email}
                type="email"
                className="input-email"
                onChange={e => {
                  setEmail(e.target.value);
                  setEmailTouched(true);
                }}
              />
              <p className="input-error"> {emailErrorMsg}</p>
            </label>
          </div>
          <div className="info-right">
            <label className="input-label" htmlFor="country">
              Country:
              <select
                id="country"
                value={country}
                className="info-select"
                onChange={e => {
                  setCountry(e.target.value);
                }}
              >
                {selectCountryOptions}
              </select>
            </label>
            <label className="input-label" htmlFor="phone">
              Phone:
              <div className="phone">
                <input value={code} className="input-phonecode" readOnly />
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  className="input-phone"
                  onChange={e => {
                    setPhone(e.target.value);
                    setPhoneTouched(true);
                  }}
                />
              </div>
              <p className="input-error"> {phoneErrorMsg}</p>
            </label>
          </div>
          <button type="button" className="back-button" onClick={infoToBook}>
            Back
          </button>
          <button
            type="button"
            className="next-button"
            disabled={!allValil}
            onClick={infoToConfirm}
          >
            Next
          </button>
        </div>
      </>
    </CSSTransition>
  );
};

export default InfoPage;
