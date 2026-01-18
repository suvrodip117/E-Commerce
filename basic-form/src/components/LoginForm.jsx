import React, { useState, useEffect } from "react";
import "../styles/Form.css";
import { userSchema } from "../Validations/LoginValidations";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(null);

  const onSubmit = async (values) => {
    const response = await axios
      .post("http://localhost:5000/api/v1/login", values)
      .catch((err) => {
        if (err && err.response) {
          console.log("Error: ", err);
          sessionStorage.setItem("login_state", "logged_out");
        }
      });
    if (response && response.data) {
      setSuccess(response.data.message);
      if (response.data.message == "Login Successful!") {
        sessionStorage.setItem("userName", values.login_username);
        sessionStorage.setItem("login_state", "logged_in");
        navigate("/home");
        window.location.reload();
      }
      else {
        sessionStorage.setItem("login_state", "logged_out");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      login_username: "",
      login_password: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div id="form_container">
      <p>{success ? success : ""}</p>
      <form action="" id="form" onSubmit={formik.handleSubmit}>
        <div className="fields-cont">
          <label for="login_username" className="common-labels">
            Username:
          </label>
          <input
            type="text"
            id="login_username"
            placeholder="Enter Username"
            className="common-inputs"
            value={formik.values.login_username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.login_username && formik.touched.login_username && (
            <p className="form-error">{formik.errors.login_username}</p>
          )}
        </div>

        <div className="fields-cont">
          <label for="login_password" className="common-labels">
            Password:
          </label>
          <input
            type="password"
            id="login_password"
            placeholder="Enter Password"
            className="common-inputs"
            value={formik.values.login_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.login_password && formik.touched.login_password && (
            <p className="form-error">{formik.errors.login_password}</p>
          )}
        </div>

        <input type="submit" value="LOGIN" className="submitBtn" />
      </form>
    </div>
  );
};

export default LoginForm;
