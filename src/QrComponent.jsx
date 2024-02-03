import React, { useState, useEffect } from 'react';
import './QrCodeComponent.scss';
import logo from './images/Logo.png';
import wblogo from './images/Wildberries_Logo.png';
import QRCode from "react-qr-code";

function QrCodeComponent() {

  const [queryString, setQueryString] = useState(window.location.search);
  const [valueQrCode, setValueQrCode] = useState(null);
  const [cost, setCost] = useState(null)

  useEffect(() => {

    if (queryString !== '') {
      const str = queryString.split("&");
      setCost(str[2].slice(4, str[2].length) / 100);
      setValueQrCode(queryString?.substring(6))
    }

  }, [])

  return (
    <div className="qrCodeComponent">
      <img className="qrCodeComponent__logo" src={logo} alt="logo" />
      <img className="qrCodeComponent__wblogo" id="wb_logo" src={wblogo} alt="wblogo" />
      {valueQrCode &&
        <QRCode
          size={256}
          style={{ height: "256px", width: "256px" }}
          value={valueQrCode}
          viewBox={`0 0 256 256`}
        />}
      {cost && <div className="qrCodeComponent__cost">{cost} РУБ</div>}
      <a className="qrCodeComponent__link" href="https://www.wildberries.ru/">
        <button className="qrCodeComponent__button">Вернуться в Wildberries</button>
      </a>
    </div>
  )
}

export default QrCodeComponent;
