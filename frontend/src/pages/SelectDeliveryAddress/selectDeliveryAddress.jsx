import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import SelectDeliveryAddressStyle from './selectDeliveryAddress.module.css';

const SelectDeliveryAddress = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>SelectDeliveryAddress Page</h2>
    </>
  );
};
export default SelectDeliveryAddress;
