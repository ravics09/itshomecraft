import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import OrderListStyle from './orderList.module.css';

const OrderList = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>OrderList Page</h2>
    </>
  );
};
export default OrderList;
