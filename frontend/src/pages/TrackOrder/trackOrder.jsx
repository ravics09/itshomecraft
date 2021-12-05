import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import TrackOrderStyle from './trackOrder.module.css';

const TrackOrder = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>TrackOrder Page</h2>
    </>
  );
};
export default TrackOrder;
