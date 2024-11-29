// src/GlobalPopup.js
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const GlobalPopup = ({ isVisible, onClose, isSignUp, toggleForm }) => {
  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const signUpValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    rpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Re-enter password is required'),
    mobile: Yup.string().required('Mobile number is required'),
  });

  const handleLoginSubmit = (values) => {
    console.log('Login data:', values);
    onClose(); // Close the popup after submission
  };

  const handleSignUpSubmit = (values) => {
    console.log('Sign-up data:', values);
    onClose(); // Close the popup after submission
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup">
          {isSignUp ? (
            <Formik
              initialValues={{ username: '', email: '', password: '', rpassword: '', mobile: '' }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSignUpSubmit}
            >
              {() => (
                <Form className="form-container">
                  <h6 className="form-header">Get Started with S4 Health Care Solutions – Register Now</h6>
                  <div>
                    <label>Username:</label>
                    <Field type="text" name="username" className="form-field" />
                    <ErrorMessage name="username" component="div" className="error-message" />
                  </div>
                  <div>
                    <label>Email:</label>
                    <Field type="email" name="email" className="form-field" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div>
                    <label>Password:</label>
                    <Field type="password" name="password" className="form-field" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>
                  <div>
                    <label>Re-Enter Password:</label>
                    <Field type="password" name="rpassword" className="form-field" />
                    <ErrorMessage name="rpassword" component="div" className="error-message" />
                  </div>
                  <div>
                    <label>Mobile Number:</label>
                    <Field type="text" name="mobile" className="form-field" />
                    <ErrorMessage name="mobile" component="div" className="error-message" />
                  </div>
                  <button type="submit" className="form-button">Sign Up</button>
                  <p className="form-text">Already have an account? <a onClick={toggleForm} className="form-link">Log in</a></p>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={loginValidationSchema}
              onSubmit={handleLoginSubmit}
            >
              {() => (
                <Form className="form-container">
                  <h6 className="form-header">S4 Health Care Solutions – Login to Your Account</h6>
                  <div>
                    <label>Username:</label>
                    <Field type="text" name="username" className="form-field" />
                    <ErrorMessage name="username" component="div" className="error-message" />
                  </div>
                  <div>
                    <label>Password:</label>
                    <Field type="password" name="password" className="form-field" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>
                  <button type="submit" className="form-button">Login</button>
                  <p className="form-text">Don't have an account? <a onClick={toggleForm} className="form-link">Sign up</a></p>
                </Form>
              )}
            </Formik>
          )}
          <button onClick={onClose} className="close-button">X</button>
        </div>
      </div>
    )
  );
};

export default GlobalPopup;
