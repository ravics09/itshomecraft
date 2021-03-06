import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill, BsLock } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import signUpStyle from "./signup.module.css";
const { innerHeight: winHight } = window;

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "*Names must have at least 2 characters")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Full Name is required"),
  email: yup
    .string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  password: yup.string().required("Password is mendatory"),
  confirmPassword: yup.string().required("Confirm Password is mendatory"),
});

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className={signUpStyle.formContainer} style={{ height: winHight }}>
      <Row>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // handleSignUp(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
            values,
            touched,
            errors,
          }) => (
            <Form onSubmit={handleSubmit} className={signUpStyle.signUpForm}>
              <div style={{ textAlign: "center" }}>
                <h3>Create Account</h3>
              </div>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormFullName">
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <AiOutlineUser />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      className={signUpStyle.formControl}
                      value={values.fullName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.fullName}
                    />
                    {touched.fullName && errors.fullName ? (
                      <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                      </Form.Control.Feedback>
                    ) : null}
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormEmail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <AiOutlineMail />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      className={signUpStyle.formControl}
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
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <BsLock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      className={signUpStyle.formControl}
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <InputGroup.Text onClick={() => setShowPass(!showPass)}>
                      {showPass ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                    </InputGroup.Text>
                    {touched.password && errors.password ? (
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    ) : null}
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormConfirmPassword"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text style={{ backgroundColor: "white" }}>
                      <BsLock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showConfirmPass ? "text" : "password"}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className={signUpStyle.formControl}
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <InputGroup.Text
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                    >
                      {showConfirmPass ? (
                        <BsFillEyeSlashFill />
                      ) : (
                        <BsFillEyeFill />
                      )}
                    </InputGroup.Text>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    ) : null}
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row
                className="mb-3"
                style={{ paddingLeft: 10, paddingRight: 10 }}
              >
                <Button
                  block
                  className={signUpStyle.sigupBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </Button>
              </Row>
              <Row className="mb-3">
                <p
                  style={{
                    color: "black",
                    paddingTop: 10,
                    textAlign: "center",
                  }}
                >
                  Already have an account ? {""}
                  <Link to="/signin" style={{ color: "black" }}>
                    Sign In here
                  </Link>
                </p>
              </Row>
            </Form>
          )}
        </Formik>
      </Row>
    </div>
  );
};
export default SignUp;
