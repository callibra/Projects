import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { Fade, Zoom } from "react-awesome-reveal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(""); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Button set

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.jobType) newErrors.jobType = "Job type is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsButtonDisabled(true); // Disable the button

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      const successMessage = response.data.message;

      toast.success(successMessage);
      setNotification("Thanks for Contact Me!");

      setTimeout(() => {
        setNotification("");
        setIsButtonDisabled(false); // Re-enable the button
      }, 30000);

      setFormData({ name: "", email: "", jobType: "", message: "" });
      setErrors({});
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.error
          : "Server not responding.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container contact-section" id="contact">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-0">
          <Fade delay={400}>
            <div className="contact-form-image">
              <img src="public/contact.jpeg" alt="contact form" />
            </div>
          </Fade>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
          <Zoom>
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
                <span className="line"></span>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="contact-form">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && (
                    <div className="error-message">{errors.name}</div>
                  )}
                </div>

                <div className="contact-form">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>

                <div className="contact-form">
                  <label className="form-label">Job Types</label>
                  <select
                    name="jobType"
                    className="custom-select-tag"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Job Types
                    </option>
                    <option value="Full-time">Full-time</option>
                    <option value="Working Student">Working Student</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                  {errors.jobType && (
                    <div className="error-message">{errors.jobType}</div>
                  )}
                </div>

                <div className="contact-form">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && (
                    <div className="error-message">{errors.message}</div>
                  )}
                </div>

                {notification ? (
                 <div className="notification-message">{notification}</div>
                 ) : (
                <button
                    className="button-submit"
                    onClick={handleSubmit}
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}> Send <RiSendPlaneFill size={20} />
                </button>
                )}
              </form>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Contact;
