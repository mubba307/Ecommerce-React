import React from "react";

const Footer = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    marginRight: "40px",
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
    marginBottom: "8px",
    transition: "color 0.3s",
  };

  const linkHover = (e) => (e.target.style.color = "#60a5fa");
  const linkLeave = (e) => (e.target.style.color = "#ccc");

  return (
    <footer style={{ backgroundColor: "#1f2937", color: "white", padding: "40px 0", marginTop: "50px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          
          {/* Shop */}
          <div style={sectionStyle}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>Shop</h3>
            <a href="/products" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>All Products</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>New Arrivals</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Sale Items</a>
          </div>

          {/* Customer Service */}
          <div style={sectionStyle}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>Customer Service</h3>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Contact Us</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Shipping Info</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Returns</a>
          </div>

          {/* About */}
          <div style={sectionStyle}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>About</h3>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Our Story</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Careers</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Press</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>GitHub</a>
          </div>

          {/* Follow Us */}
          <div style={sectionStyle}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>Follow Us</h3>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Facebook</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Twitter</a>
            <a href="#" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>Instagram</a>
          </div>
        </div>

        <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #374151", textAlign: "center" }}>
          <p>&copy; 2024 Ecommerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
