import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import CategoryStyle from './category.module.css';

const Category = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>Category Page</h2>
    </>
  );
};
export default Category;
