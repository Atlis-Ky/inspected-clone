import { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>CONTACT</h1>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="company-info">
              <p className="company-name">Inspected Limited</p>
              <p>Studio 6, The Greenhouse</p>
              <p>18 Mannings Heath Road</p>
              <p>Poole, Dorset</p>
              <p>BH12 4NQ</p>
              <p>United Kingdom</p>
            </div>

            <div className="contact-emails">
              <p>
                <strong>Note:</strong>{" "}
                <a href="mailto:general@example.com">
                  Putting some Placeholder emails so that the actual inboxes
                  don't recieve emails
                </a>
              </p>
              <p>
                <strong>General:</strong>{" "}
                <a href="mailto:general@example.com">general@example.com</a>
              </p>
              <p>
                <strong>Orders:</strong>{" "}
                <a href="mailto:orders@example.com">orders@example.com</a>
              </p>
              <p>
                <strong>Press:</strong>{" "}
                <a href="mailto:press@example.com">press@example.com</a>
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  SEND
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
