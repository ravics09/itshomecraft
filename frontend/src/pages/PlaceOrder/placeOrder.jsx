import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import PlaceOrderStyle from './placeOrder.module.css';

const PlaceOrder = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>PlaceOrder Page</h2>
    </>
  );
};
export default PlaceOrder;
