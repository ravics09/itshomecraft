import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import UserAccountStyle from './userAccount.module.css';

const UserAccount = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>UserAccount Page</h2>
    </>
  );
};
export default UserAccount;
