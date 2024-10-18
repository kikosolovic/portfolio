"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const InputField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-gray-700 text-sm font-bold mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Contact Me
        </h2>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-6">
                I'd love to hear from you! Whether you have a question or just
                want to say hi, feel free to drop a message.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-3" />
                  <span>johndoe@example.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-3" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
