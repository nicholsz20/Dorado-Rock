import React, { useEffect, useState } from "react";
import axios from "axios";

import { FormData } from "../Types/ContactForm";
import '../styles/ContactForm.css'





export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name,  value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5005/send-email", formData);
      alert("Email sent successfully!");

    } catch (error) {
      console.error("Error sending emial:", error);
      alert("Error sending email. Please try again later.")
    }
  }



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              id="fname"
              className="item"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field field">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              id="lname"
              className="item"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              className="item"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field field">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              id="phone"
              className="item"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="input-field field">
          <textarea
            name="message"
            id="message"
            value={formData.message}
              onChange={handleChange}
            cols={30}
            rows={10}
            placeholder="What can we help you with?"
            className="item"
            autoComplete="off"
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
