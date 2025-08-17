import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 50);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "123456") {
      navigate("/products");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #ffffff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0px)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
          transform: loaded ? "scale(1)" : "scale(0.95)",
          transition: "transform 0.8s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            color: "#1f2937",
          }}
        >
          Login
        </h1>

        {error && (
          <p
            style={{
              color: "#ef4444",
              fontSize: "0.9rem",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.85rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: "1rem",
              transition: "all 0.2s ease",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
            onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.85rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: "1rem",
              transition: "all 0.2s ease",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2563eb")}
            onBlur={(e) => (e.target.style.border = "1px solid #d1d5db")}
          />

          <button
            type="submit"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              background: btnHover
                ? "linear-gradient(90deg, #2563eb, #1d4ed8)"
                : "#2563eb",
              color: "white",
              padding: "0.85rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: btnHover
                ? "0 0 12px rgba(37,99,235,0.6)"
                : "0 4px 8px rgba(0,0,0,0.1)",
              transform: btnHover ? "scale(1.05)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            fontSize: "0.85rem",
            color: "#6b7280",
            marginTop: "1.2rem",
          }}
        >
          Email: <b>user@example.com</b> | Password: <b>123456</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
