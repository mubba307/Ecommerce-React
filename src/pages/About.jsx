import React from "react";

const About = () => {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
          color: "#fff",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
          We are passionate about delivering the best products and services to our customers,  
          blending innovation, quality, and customer satisfaction into everything we do.
        </p>
      </div>

      {/* Mission Section */}
      <div
        style={{
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Our Mission
        </h2>
        <p style={{ maxWidth: "800px", color: "#4b5563", fontSize: "1rem" }}>
          Our mission is to empower people with top-quality products that enhance everyday life.  
          We believe in transparency, trust, and long-term relationships with our customers.
        </p>
      </div>

      {/* Values Section */}
      <div style={{ background: "#fff", padding: "3rem 2rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Our Core Values
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              title: "Integrity",
              desc: "We conduct business with honesty and uphold the highest ethical standards.",
            },
            {
              title: "Innovation",
              desc: "We constantly seek creative solutions to meet our customers’ needs.",
            },
            {
              title: "Customer First",
              desc: "Our customers are at the heart of everything we do.",
            },
            {
              title: "Sustainability",
              desc: "We are committed to reducing our environmental footprint.",
            },
          ].map((value, i) => (
            <div
              key={i}
              style={{
                background: "#f3f4f6",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                {value.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div style={{ padding: "3rem 2rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Meet Our Team
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {[
            {
              name: "Amit Sharma",
              role: "CEO & Founder",
              img: "https://via.placeholder.com/200?text=Amit",
            },
            {
              name: "Priya Singh",
              role: "Head of Marketing",
              img: "https://via.placeholder.com/200?text=Priya",
            },
            {
              name: "Rahul Verma",
              role: "Lead Developer",
              img: "https://via.placeholder.com/200?text=Rahul",
            },
            {
              name: "Sneha Kapoor",
              role: "Customer Success Manager",
              img: "https://via.placeholder.com/200?text=Sneha",
            },
          ].map((member, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "0.75rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                {member.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
