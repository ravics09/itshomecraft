import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";

import EditProfileStyle from './editProfile.module.css';

const EditProfile = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h2>EditProfile Page</h2>
    </>
  );
};
export default EditProfile;
