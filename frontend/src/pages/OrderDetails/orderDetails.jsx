import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import OrderDetailsStyle from './orderDetails.module.css';

const OrderDetails = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>OrderDetails Page</h2>
    </>
  );
};
export default OrderDetails;
