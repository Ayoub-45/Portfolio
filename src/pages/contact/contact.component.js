import React, { useState } from "react";
import "./contact.styles.css"; // Import your CSS file where the styles will be defined
import { sendEmail } from "../../helpers/sendEmail";
const Contact = ({ toggle }) => {
  const [formData, setFormData] = useState({
    to_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    // Reset form after submission if needed
    setFormData({
      to_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <form
      className="custom-form"
      style={{ marginTop: `${toggle ? "250px" : ""}` }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="to_name"
        placeholder="Recipient Name"
        value={formData.to_name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        value={formData.user_email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default Contact;
