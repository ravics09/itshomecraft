import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import CartStyle from './cart.module.css';

const Cart = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>Cart Page</h2>
    </>
  );
};
export default Cart;
