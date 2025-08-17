import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message sent successfully! ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #16a34a, #065f46)",
          color: "#fff",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
          Contact Us
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          Have questions or need help? We’re here to assist you anytime.
        </p>
      </div>

      {/* Contact Info */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          padding: "3rem 2rem",
        }}
      >
        {[
          {
            title: "📍 Our Office",
            text: "123 Main Street, New Delhi, India",
          },
          {
            title: "📞 Call Us",
            text: "+91 98765 43210",
          },
          {
            title: "✉️ Email Us",
            text: "support@shopeasy.com",
          },
        ].map((info, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              textAlign: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              {info.title}
            </h3>
            <p style={{ color: "#4b5563" }}>{info.text}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div
        style={{
          background: "#fff",
          padding: "3rem 2rem",
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "0.75rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            style={{
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              background: "#16a34a",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
            }}
          >
            Send Message
          </button>
        </form>
        {status && (
          <p style={{ color: "green", marginTop: "1rem", fontWeight: 600 }}>
            {status}
          </p>
        )}
      </div>

      {/* Social Links */}
      <div style={{ textAlign: "center", padding: "2rem", color: "#4b5563" }}>
        <p>Follow us on:</p>
        <div style={{ marginTop: "0.5rem", fontSize: "1.5rem" }}>
          🌐 🔗 📸 🐦
        </div>
      </div>
    </div>
  );
};

export default Contact;
