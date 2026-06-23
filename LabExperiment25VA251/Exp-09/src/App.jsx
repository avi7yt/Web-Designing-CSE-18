import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Form data state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Error messages state
  const [errors, setErrors] = useState({});

  // Success state
  const [submitted, setSubmitted] = useState(false);

  // useEffect — runs once when component mounts
  useEffect(() => {
    console.log("Component mounted! useEffect ran.");
    document.title = "Registration Form";
  }, []); // empty [] means run only once

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error for this field when user types
    setErrors({ ...errors, [name]: "" });
  }

  // Validate form fields
  function validate() {
    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Name should not be empty.";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain @.";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  }

  // Reset form
  function handleReset() {
    setForm({ name: "", email: "", password: "" });
    setErrors({});
    setSubmitted(false);
  }

  // Show success screen after valid submission
  if (submitted) {
    return (
      <div className="app">
        <div className="card success-card">
          <div className="success-icon">✓</div>
          <h2>Registration Successful!</h2>
          <p>Welcome, <strong>{form.name}</strong>!</p>
          <p className="success-email">{form.email}</p>
          <button className="btn btn-primary" onClick={handleReset}>
            Register Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Registration Form</h1>
        <p className="subtitle">Experiment 9 — useState + useEffect + Validation</p>

        <form onSubmit={handleSubmit} noValidate>

          {/* Name Field */}
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Min. 6 characters"
              value={form.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
