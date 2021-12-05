import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import ForgotPasswordStyle from './forgotPassword.module.css';

const ForgotPassword = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>ForgotPassword Page</h2>
    </>
  );
};
export default ForgotPassword;
