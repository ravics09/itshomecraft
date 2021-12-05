import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button, InputGroup, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import SignInStyle from "./signin.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeFill, BsFillEyeSlashFill, BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .max(100, "Email must be less than 100 characters")
    .required("Please provide your email address"),

  password: yup.string().required("Please provide your password"),
});

const SignIn = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div
      className={SignInStyle.formContainer}
      style={{ height: window.innerHeight }}
    >
      <Row>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            // handleSignIn(values);
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
            <Form onSubmit={handleSubmit} className={SignInStyle.signInForm}>
              <div style={{ textAlign: "center" }}>
                <h3>Customer Sign In</h3>
              </div>
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
                      className={SignInStyle.formControl}
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
                      className={SignInStyle.formControl}
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
                <Link
                  to="/forgetpassword"
                  style={{ color: "black" }}
                  as={Col}
                  md="12"
                >
                  Forget Password ?
                </Link>
              </Row>
              <Row className="mb-3" style={{ padding: 10 }}>
                <Button
                  block
                  className={SignInStyle.siginBtn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Row>

              <Row
                className="mb-3"
                style={{ paddingLeft: 10, paddingRight: 10 }}
              >
                <Button block className={SignInStyle.googleSignBtn}>
                  Sign In With {"  "}
                  <InputGroup.Text
                    style={{
                      backgroundColor: "#ffff",
                      border: "white",
                    }}
                  >
                    <FcGoogle />
                  </InputGroup.Text>
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
                  Don't have an account ? {""}
                  <Link to="/signup" style={{ color: "black" }}>
                    Sign Up
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
export default SignIn;
