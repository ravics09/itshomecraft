import React, { useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";

import ForgotPasswordStyle from "./forgotPassword.module.css";

const { innerHeight: winHight } = window;
const initialValues = {
  email: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("Email is mendatory"),
});

const ForgotPassword = () => {
  const [value, setValue] = useState();

  useEffect(() => {}, []);

  return (
    <div
      className={ForgotPasswordStyle.formContainer}
      style={{ height: winHight }}
    >
      <Row>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // handleForgetPassword(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 4000);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              onSubmit={handleSubmit}
              className={ForgotPasswordStyle.forgetPasswordForm}
            >
              <Row>
                <h3>Password Reset Link</h3>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormPassword">
                  <Form.Label>Enter email address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <AiOutlineMail />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      className={ForgotPasswordStyle.formControl}
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    {touched.email && errors.email ? (
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    ) : null}
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-2" style={{ padding: 10 }}>
                <Button
                  block
                  className={ForgotPasswordStyle.submitBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Request reset link
                </Button>
              </Row>
              <Row className="mb-2">
                <Link to="/signin" style={{ color: "white" }}>
                  Back To Sign In Page ?
                </Link>
              </Row>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};
export default ForgotPassword;
