import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import AddPaymentOptionsStyle from './addPaymentOptions.module.css';

const AddPaymentOptions = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>AddPaymentOptions Page</h2>
    </>
  );
};
export default AddPaymentOptions;
