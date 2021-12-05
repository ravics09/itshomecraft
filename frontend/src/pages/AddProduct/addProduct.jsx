import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import AddProductStyle from './addProduct.module.css';

const AddProduct = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>AddProduct Page</h2>
    </>
  );
};
export default AddProduct;
