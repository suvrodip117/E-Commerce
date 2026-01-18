import React, { useState } from "react";
import "../styles/Form.css";
import { userSchema } from "../Validations/SignupValidations";
import { useFormik } from "formik";
import axios from "axios";

const SignUpForm = () => {
  const [success, setSuccess] = useState(null);

  const onSubmit = async (values) => {
    const { signup_confirm_password, ...data } = values;
    const response = await axios
      .post("http://localhost:5000/api/v1/register", data)
      .catch((err) => {
        if (err && err.response) console.log("Error: ", err);
      });
    if (response && response.data) {
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      signup_fname: "",
      signup_lname: "",
      signup_username: "",
      signup_email: "",
      signup_password: "",
      signup_confirm_password: "",
      signup_phn: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div id="form_container">
      <p>{success ? success : ""}</p>
      <form id="form" onSubmit={formik.handleSubmit}>
        <div className="fields-cont">
          <label for="signup_fname" className="common-labels">
            First Name:
          </label>
          <input
            type="text"
            id="signup_fname"
            placeholder="Enter First Name"
            className="common-inputs"
            value={formik.values.signup_fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_fname && formik.touched.signup_fname && (
            <p className="form-error">{formik.errors.signup_fname}</p>
          )}
        </div>

        <div className="fields-cont">
          <label for="signup_lname" className="common-labels">
            Last Name:
          </label>
          <input
            type="text"
            id="signup_lname"
            placeholder="Enter Last Name"
            className="common-inputs"
            value={formik.values.signup_lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_lname && formik.touched.signup_lname && (
            <p className="form-error">{formik.errors.signup_lname}</p>
          )}
        </div>

        <div className="fields-cont">
          <label for="signup_username" className="common-labels">
            Username:
          </label>
          <input
            type="text"
            id="signup_username"
            placeholder="Enter Username"
            className="common-inputs"
            value={formik.values.signup_username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_username && formik.touched.signup_username && (
            <p className="form-error">{formik.errors.signup_username}</p>
          )}
        </div>

        <div className="fields-cont">
          <label for="signup_email" className="common-labels">
            Email:
          </label>
          <input
            type="email"
            id="signup_email"
            placeholder="Enter Email"
            className="common-inputs"
            value={formik.values.signup_email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_email && formik.touched.signup_email && (
            <p className="form-error">{formik.errors.signup_email}</p>
          )}
        </div>

        <div className="fields-cont">
          <label for="signup_password" className="common-labels">
            New Password:
          </label>
          <input
            type="password"
            id="signup_password"
            placeholder="Enter New Password"
            className="common-inputs"
            value={formik.values.signup_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_password && formik.touched.signup_password && (
            <p className="form-error">{formik.errors.signup_password}</p>
          )}
        </div>

        <div className="fields-cont">
          <label for="signup_confirm_password" className="common-labels">
            Confirm Password:
          </label>
          <input
            type="password"
            id="signup_confirm_password"
            placeholder="Confirm Password"
            className="common-inputs"
            value={formik.values.signup_confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_confirm_password &&
            formik.touched.signup_confirm_password && (
              <p className="form-error">
                {formik.errors.signup_confirm_password}
              </p>
            )}
        </div>

        <div className="fields-cont">
          <label for="signup_phn" className="common-labels">
            Phone Number:
          </label>
          <input
            type="text"
            id="signup_phn"
            placeholder="Enter Phone number"
            className="common-inputs"
            value={formik.values.signup_phn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.signup_phn && formik.touched.signup_phn && (
            <p className="form-error">{formik.errors.signup_phn}</p>
          )}
        </div>

        <input type="submit" value="SIGN UP" className="submitBtn" />
      </form>
    </div>
  );
};

export default SignUpForm;
