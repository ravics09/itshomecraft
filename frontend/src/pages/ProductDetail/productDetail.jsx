import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import ProductDetailStyle from './productDetail.module.css';

const ProductDetail = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>ProductDetail Page</h2>
    </>
  );
};
export default ProductDetail;
