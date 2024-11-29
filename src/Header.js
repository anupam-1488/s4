import React, { useState, useEffect } from 'react';
import { CgProfile, CgShoppingCart } from 'react-icons/cg';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; 
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import Sweetalert from './Components/CommonUtils/CommonPopupAndAlerts/SweetAlerts';
import { useNavigate } from 'react-router-dom';
import CommonPost from './Components/CommonUtils/CommonAxios/CommonPost';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // import the CSS for styling the toasts


export const Header = ({ onCartClick, onWishlistClick }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem('userName');
    if (username) {
      setLoggedInUser(username);
    }
  }, []);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    setIsSignUp(false);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove('jwtToken');
    Cookies.remove('jwtRefreshToken');
    Swal.fire('Logged out successfully', '', 'success').then(() => {
      navigate("/")
      window.location.reload();
    });
  };

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
    values.username = values.username.trim();
    values.password = values.password.trim();
    CommonPost.LoginPage(values)
      .then((res) => {
        if (res.data.scode === '01') {
          localStorage.setItem('accesstoken', res.data.access_token);
          const decoded = jwtDecode(res.data.access_token);
          const decoded_refresh = jwtDecode(res.data.refresh_token);
          const date = new Date(decoded.exp * 1000);
          const ref_date = new Date(decoded_refresh.exp * 1000);
          Cookies.set('jwtToken', res.data.access_token, { expires: date });
          Cookies.set('jwtRefreshToken', res.data.refresh_token, { expires: ref_date });
          localStorage.setItem('Id', decoded?.user_id);
          localStorage.setItem('userName', decoded?.username);
  
          // Trigger toast instead of Swal
          toast.success('Logged in Successfully', {
            position: "bottom-right",
            autoClose: 3000, // Toast will auto-close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
  
          // Reload page after toast
          setTimeout(() => {
            window.location.reload();
          }, 3000);  // Wait for toast to close before reloading
        } else {
          toast.warning(res.data.sdesc, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        console.log('error at login page', err);
        toast.error('Login Failed. Please try again.', {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };
  

  const handleSignUpSubmit = (values) => {
    CommonPost.submitLoginPage(values)
      .then((res) => {
        if (res.data.scode === '01') {
          Swal.fire('Signed in Successfully', '', 'success').then(() => {
            navigate('/');
          });
        } else {
          Sweetalert(res.data.sdesc, 'warning');
        }
      })
      .catch((err) => {
        console.log('error at login page', err);
      });
  };

  return (
    <div>
      <div className="top-bar">
        <span className="logo-text">S Four Health Care Solutions</span>
        <div className="order-tracking">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Company</a></li>
              <li><a href="/management">Our Management</a></li>
              <li>
                <a href="#">Our Products</a>
                <ul className="dropdown">
                  <li><a href="#">Surgical Disposable 1</a></li>
                  <li><a href="#">Surgical Disposable 2</a></li>
                  <li><a href="#">Medical Equipment 1</a></li>
                  <li><a href="#">Medical Equipment 2</a></li>
                </ul>
              </li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><CgShoppingCart onClick={onCartClick} className="cart-icon" /></li>
              <li><FaHeart onClick={onWishlistClick} className="heart-icon" /></li>
            </ul>
           
          </nav>
         
          {loggedInUser ? (
            <div className="user-dropdown">
              <span onClick={toggleDropdown} className="username">{loggedInUser}</span>
              {isDropdownVisible && (
                <ul className="dropdown-menu">
                  <li><a href="/changepassword">Change Password</a></li>
                  <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
              )}
            </div>
          ) : (
            <CgProfile onClick={togglePopup} className="profile-icon" />
          )}
        </div>
      </div>

      {/* Popup Form */}
      {isPopupVisible && (
  <div>
    <div className={`popup-overlay ${isPopupVisible ? 'visible' : 'hidden'}`} />
    <div className={`popup ${isPopupVisible ? 'visible' : 'hidden'}`}>
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
    </div>
  </div>
)}
    </div>
  );
};
