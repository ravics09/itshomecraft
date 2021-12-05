import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import AdminAccountStyle from './adminAccount.module.css';

const AdminAccount = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>AdminAccount Page</h2>
    </>
  );
};
export default AdminAccount;
