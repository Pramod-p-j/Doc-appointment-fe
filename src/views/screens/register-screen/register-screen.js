import React, { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { roleOptions } from "../../../config/config";
import registerServices from "../../../services/register-services";
import "./register-screen.css";

function RegisterComponent() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    registerServices
      .registerNewUser(values)
      .then((res) => console.log("res in register screen", res))
      .catch((err) => err);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="registerScreenContainer">
      <h2 className="title">Create an Account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="userDetails">
            <div className="form-group">
              <label className="formLabel" htmlFor="name">
                Name:
              </label>
              <Field className="formField" type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label className="formLabel" htmlFor="email">
                Email:
              </label>
              <Field
                className="formField"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label className="formLabel" htmlFor="role">
                Role:
              </label>
              <Field className="formField" as="select" id="role" name="role">
                {roleOptions.map((item) => (
                  <option className="roleDropdown" value={item.id} label={item.name} />
                ))}
              </Field>
              <ErrorMessage name="role" component="div" className="error" />
            </div>

            <div className="form-group">
              <label className="formLabel" htmlFor="password">
                Password:
              </label>
              <Field
                className="formField"
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label className="formLabel" htmlFor="confirmPassword">
                Confirm Password:
              </label>
              <Field
                className="formField"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
          </div>

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default RegisterComponent;
