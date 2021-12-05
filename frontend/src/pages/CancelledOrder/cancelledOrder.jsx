import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import CancelledOrderStyle from './cancelledOrder.module.css';

const CancelledOrder = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>CancelledOrder Page</h2>
    </>
  );
};
export default CancelledOrder;
