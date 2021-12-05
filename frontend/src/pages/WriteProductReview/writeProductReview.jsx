import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import WriteProductReviewStyle from './writeProductReview.module.css';

const WriteProductReview = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>WriteProductReview Page</h2>
    </>
  );
};
export default WriteProductReview;
