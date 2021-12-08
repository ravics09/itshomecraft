import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as yup from "yup";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col, Tabs, Tab } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill, BsLock } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

import AddProductStyle from "./addProduct.module.css";

const initialValues = {
  productName: "",
  sku: "",
  price: "",
  quantity: "",
  tags: "",
  inStock: "Yes",
  category: "Gift",
  productImages: ""
};

const validationSchema = yup.object().shape({
  productName: yup
    .string()
    .min(2, "*Product Name must have at least 2 characters")
    .max(100, "*Product Name can't be longer than 100 characters")
    .required("*Product Name is required"),
  sku: yup
    .string()
    .min(2, "*sku must have at least 2 characters")
    .max(100, "*sku can't be longer than 50 characters")
    .required("*sku is required"),
  quantity: yup
    .number()
    .max(10000, "*Quantity must be less than 10000 characters")
    .required("*Quantity is required"),
  price: yup.string().required("Price is mendatory"),
  tags: yup.string().required("tags is mendatory"),
});

const AddProduct = () => {
  const formRef = useRef();
  const [productImages, setProductImages] = useState();

  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }, []);

  const handleAddNew = () => {
    setShowForm(true);
  };

  const fileSelectedHandler = (e) => {
    e.preventDefault();
    setProductImages(e.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    let myForm = document.getElementById("myForm");
    const formData = new FormData(myForm);

    // for (const key of Object.keys(productImages)) {
    //   console.log("keys", productImages[key]);
    //   formData.append("productImages", productImages[key]);
    // }

    // Display the values
    for (var value of formData.values()) {
      console.log("form values==", value);
    }

    if (formRef.current.values) {
      setStatus(true);
    }
  };

  const resetForm = () => {
    formRef.current.resetForm();
  };

  const AddProductTab = () => {
    return (
      <>
        <Row>
          <div className={AddProductStyle.header}>
            <Button variant="success" size="sm" onClick={() => handleAddNew()}>
              Add
            </Button>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button
                variant="success"
                size="sm"
                onClick={(e) => handleSubmitForm(e)}
              >
                Save
              </Button>
              &nbsp; &nbsp;
              <Button variant="danger" size="sm" onClick={() => resetForm()}>
                Clear
              </Button>
            </div>
          </div>
        </Row>

        {showForm ? (
          <Row>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              innerRef={formRef}
            >
              {({ handleChange, handleBlur, values, errors }) => (
                <Form
                  className={AddProductStyle.addProductForm}
                  id="myForm"
                  name="myForm"
                >
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>Product Name</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="Product Name"
                          name="productName"
                          className={AddProductStyle.formControl}
                          value={values.productName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={!!errors.productName}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>SKU</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="SKU"
                          name="sku"
                          className={AddProductStyle.formControl}
                          value={values.sku}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={!!errors.sku}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>Price</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="Price"
                          name="price"
                          className={AddProductStyle.formControl}
                          value={values.price}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={!!errors.price}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>In Stock</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="select"
                          as="select"
                          value={values.inStock}
                          style={{ width: "200px" }}
                          name="inStock"
                          custom
                          onChange={handleChange}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>Category</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          as="select"
                          custom
                          style={{ width: "200px" }}
                          value={values.category}
                          name="category"
                          onChange={handleChange}
                        >
                          <option value="Gift">Gift</option>
                          <option value="Painting">Painting</option>
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>Quantity</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="Quantity"
                          name="quantity"
                          className={AddProductStyle.formControl}
                          value={values.quantity}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={!!errors.quantity}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Row}
                      md="12"
                      controlId="validationFormFullName"
                    >
                      <Form.Label column>Tags</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type="text"
                          placeholder="Tags"
                          name="tags"
                          className={AddProductStyle.formControl}
                          value={values.tags}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={!!errors.tags}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Row} className="position-relative mb-3">
                      <Form.Label column>Product Image</Form.Label>
                      <Col
                        sm="10"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <Form.Control
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          required
                          name="productImages"
                          filename="productImages"
                          value={values.productImages}
                          onChange={handleChange}
                          className={AddProductStyle.formControl}
                          custom
                          multiple
                          isInvalid={!!errors.profuctImages}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                </Form>
              )}
            </Formik>
          </Row>
        ) : null}
      </>
    );
  };

  const ListProductTab = () => {
    return <h3>All products will listed here...</h3>;
  };

  return (
    <div
      className={AddProductStyle.container}
      style={{ height: window.innerHeight }}
    >
      <Row>
        <Tabs
          defaultActiveKey="add"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <Tab eventKey="add" title="ADD PRODUCT">
            <AddProductTab />
          </Tab>
          <Tab eventKey="list" title="LIST PRODUCT">
            <ListProductTab />
          </Tab>
        </Tabs>
      </Row>
    </div>
  );
};
export default AddProduct;
