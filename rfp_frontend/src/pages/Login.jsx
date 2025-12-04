// src/pages/Login.jsx
import React from "react";

export default function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",         // Full viewport height
        display: "flex",            // Flex container       // Center vertically
        alignItems: "flex-start",       // Center vertically
        justifyContent: "center",
        paddingTop: "80px",  
        backgroundColor: "#f3f4f6"  // Optional light background
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#36486fff",
            marginBottom: "20px",
            textAlign: "center" // Center title
          }}
        >
          Login
        </h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#36486fff",
              color: "#fff",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
