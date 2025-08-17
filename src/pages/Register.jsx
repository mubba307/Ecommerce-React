import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/\d/) && password.length >= 8)
      return "Strong";
    return "Medium";
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidEmail(formData.email)) {
      return setError("Please enter a valid email address.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      await register(formData.name.trim(), formData.email.trim(), formData.password);
      navigate("/");
    } catch {
      setError("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom right, #bfdbfe, #c4b5fd)",
      padding: "1rem",
    },
    card: {
      background: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
      transition: "all 0.3s ease",
    },
    heading: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#1f2937",
      marginBottom: "1.5rem",
    },
    input: {
      width: "100%",
      padding: "0.5rem 1rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.5rem",
      outline: "none",
      fontSize: "1rem",
    },
    inputError: {
      borderColor: "#ef4444",
    },
    focusBlue: {
      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
    },
    button: {
      width: "100%",
      background: "#2563eb",
      color: "white",
      padding: "0.5rem",
      borderRadius: "0.5rem",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      transition: "background 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
    },
    buttonHover: {
      background: "#1d4ed8",
    },
    errorBox: {
      background: "#fee2e2",
      border: "1px solid #fca5a5",
      color: "#b91c1c",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      marginBottom: "1rem",
    },
    passwordToggle: {
      position: "absolute",
      right: "0.75rem",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
    },
    link: {
      color: "#2563eb",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create your account</h2>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(formData.email && !isValidEmail(formData.email) ? styles.inputError : {}),
            }}
          />

          {/* Password */}
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={styles.passwordToggle}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Password Strength */}
          {formData.password && (
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color:
                  getPasswordStrength(formData.password) === "Weak"
                    ? "#ef4444"
                    : getPasswordStrength(formData.password) === "Medium"
                    ? "#f59e0b"
                    : "#10b981",
              }}
            >
              Strength: {getPasswordStrength(formData.password)}
            </p>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {/* Submit */}
          <button type="submit" disabled={loading} style={styles.button}>
            {loading && <span>⏳</span>}
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.875rem", color: "#4b5563" }}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
