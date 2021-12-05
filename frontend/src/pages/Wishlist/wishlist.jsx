import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import WishlistStyle from './wishlist.module.css';

const Wishlist = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>Wishlist Page</h2>
    </>
  );
};
export default Wishlist;
