import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import CompanyReviewStyle from './companyReview.module.css';

const CompanyReview = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>CompanyReview Page</h2>
    </>
  );
};
export default CompanyReview;
