import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import AdminDashboardStyle from './adminDashboard.module.css';

const AdminDashboard = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>AdminDashboard Page</h2>
    </>
  );
};
export default AdminDashboard;
