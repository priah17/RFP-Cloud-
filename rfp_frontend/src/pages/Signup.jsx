// src/pages/Signup.jsx
import React from "react";

export default function Signup() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full viewport height
        backgroundColor: "#f3f4f6", // Light gray background
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
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
            textAlign: "center",
          }}
        >
          Signup
        </h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter your name"
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

          <label>
            Role
            <select
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            >
              <option value="">Select Role</option>
              <option value="organization">Organization</option>
              <option value="vendor">Vendor</option>
            </select>
          </label>

          <label>
            Organization
            <input
              type="text"
              placeholder="Enter organization name"
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
