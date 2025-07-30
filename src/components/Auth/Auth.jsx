import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [mode, setMode] = useState("signin"); // 'signup', 'signin', 'lost'
  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
  });

  const resetForm = () =>
    setForm({
      emailOrPhone: "",
      password: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { emailOrPhone, password } = form;
    const trimmedInput = emailOrPhone.trim();

    // Gmail and Phone validation regex
    const isGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(trimmedInput);
    const isPhone = /^(\+91)?[6-9]\d{9}$/.test(trimmedInput);

    if (!trimmedInput) {
      alert("Please enter your phone number or Gmail.");
      return;
    }

    if (!isGmail && !isPhone) {
      alert("Please enter a valid Gmail address or  phone number.");
      return;
    }

    if ((mode === "signin" || mode === "signup") && !password.trim()) {
      alert("Password is required.");
      return;
    }

    if (mode === "signup") {
      alert(`SIGNUP → ${isGmail ? "Gmail" : "Phone"}: ${trimmedInput}`);
    } else if (mode === "signin") {
      alert(`SIGNIN → ${isGmail ? "Gmail" : "Phone"}: ${trimmedInput}`);
    } else {
      alert(`RESET LINK SENT to: ${trimmedInput}`);
    }

    resetForm();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src="/images/image1.png" alt="Logo" className="auth-logo" />

        <div className="auth-tabs">
          {["signin", "signup", "lost"].map((item) => (
            <button
              key={item}
              className={mode === item ? "active" : ""}
              onClick={() => {
                setMode(item);
                resetForm();
              }}
            >
              {item === "signin"
                ? "Sign In"
                : item === "signup"
                ? "Sign Up"
                : "Lost Password"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2>
            {mode === "signup"
              ? "Create Account"
              : mode === "signin"
              ? "Welcome Back"
              : "Reset Password"}
          </h2>

          <input
            type="text"
            placeholder="Phone or Gmail"
            value={form.emailOrPhone}
            onChange={(e) =>
              setForm({ ...form, emailOrPhone: e.target.value })
            }
            required
          />

          {(mode === "signup" || mode === "signin") && (
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />
          )}

          <button type="submit" className="submit-btn">
            {mode === "signup"
              ? "Sign Up"
              : mode === "signin"
              ? "Sign In"
              : "Send Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
