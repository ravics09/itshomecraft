import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import SelectPaymentModeStyle from './selectPaymentMode.module.css';

const SelectPaymentMode = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>SelectPaymentMode Page</h2>
    </>
  );
};
export default SelectPaymentMode;
