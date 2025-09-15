import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for the notification message
  const [notification, setNotification] = useState(null);

  // Handle input changes and update the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: 'error',
        heading: 'Please fill in all fields before submitting.',
      });
      return;
    }

    // Set the notification message with the user's data
    setNotification({
      type: 'success',
      heading: 'Thanks for the feedback!',
      name: formData.name,
      details: {
        email: formData.email,
        message: formData.message,
      },
    });

    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Automatically hide the notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div className="contact-page-container">
      {notification && (
        <div className={`notification-message ${notification.type}`}>
          <button className="close-btn" onClick={handleCloseNotification}>&times;</button>
          <p className="notification-heading">{notification.heading}</p>
          {notification.name && <p className="notification-name">{notification.name}</p>}
          {notification.details && (
            <div className="notification-details">
              <p>Email: {notification.details.email}</p>
              <p>Message: {notification.details.message}</p>
            </div>
          )}
        </div>
      )}

      <div className="contact-container">
        <div className="social-links-container">
          <div className="social-links">
    
            {/* GitHub Profile Link */}
            <a href="https://github.com/vaidehispatil" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <i className="fab fa-github"></i>
            </a>
            {/* Email Link */}
            <a href="mailto:vaidehispatil1306@gmail.com" aria-label="Email Me">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-intro">
            If you have a project in mind, a question, or just want to say hello, feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


export default Contact;
