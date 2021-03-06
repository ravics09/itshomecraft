import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import { Button, Form, Container, Row, Col, InputGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill, BsLock } from "react-icons/bs";

import ResetPasswordStyle from "./resetPassword.module.css";

const { innerHeight: winHight } = window;
const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().required("Password is mendatory"),
  confirmPassword: yup.string().required("Confirm Password is mendatory"),
});

const ResetPassword = () => {
  const [value, setValue] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  useEffect(() => {}, []);

  return (
    <div
      className={ResetPasswordStyle.resetPasswordContainer}
      style={{ height: winHight }}
    >
      <Row>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // handleResetPassword(values);
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
            isValid,
            errors,
          }) => (
            <Form
              onSubmit={handleSubmit}
              className={ResetPasswordStyle.resetPasswordForm}
            >
              <Row className="mb-3">
                <div style={{ textAlign: "center" }}>
                  <h3>Use Strong Password</h3>
                </div>
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
                      className={ResetPasswordStyle.formControl}
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
                      className={ResetPasswordStyle.formControl}
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
              <Row className="mb-2" style={{ padding: 10 }}>
                <Button
                  block
                  className={ResetPasswordStyle.customBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Row>
              <Row className="mb-2">
                <Link to="/signin" style={{ color: "black" }}>
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
export default ResetPassword;
