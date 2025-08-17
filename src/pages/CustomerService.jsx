import React, { useState } from "react";

const CustomerService = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Your request has been submitted successfully! ✅");
    setQuery("");
  };

  const faqs = [
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, you will receive an email with the tracking link."
    },
    {
      q: "What is the return policy?",
      a: "You can return products within 7 days of delivery, provided they are unused and in original packaging."
    },
    {
      q: "Do you offer 24/7 support?",
      a: "Our chat and email support are available 24/7, phone support from 9 AM to 9 PM."
    }
  ];

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "#fff",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Customer Service</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "1rem auto" }}>
          We’re here to help you with orders, returns, and any questions you have.
        </p>
      </div>

      {/* FAQ Section */}
      <div style={{ padding: "3rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Frequently Asked Questions
        </h2>
        {faqs.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              {item.q}
            </h3>
            <p style={{ color: "#4b5563" }}>{item.a}</p>
          </div>
        ))}
      </div>

      {/* Help Form */}
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
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Need More Help?
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <textarea
            placeholder="Describe your issue..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
              background: "#2563eb",
              color: "#fff",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
            }}
          >
            Submit Request
          </button>
        </form>
        {status && (
          <p style={{ color: "green", marginTop: "1rem", fontWeight: 600 }}>
            {status}
          </p>
        )}
      </div>

      {/* Contact Shortcuts */}
      <div style={{ textAlign: "center", padding: "2rem", color: "#4b5563" }}>
        <p>📞 Call us: +91 98765 43210 | ✉️ Email: support@shopeasy.com</p>
      </div>
    </div>
  );
};

export default CustomerService;
