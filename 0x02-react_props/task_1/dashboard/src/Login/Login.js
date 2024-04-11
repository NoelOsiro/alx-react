import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for form submission, such as API calls or validation
  };

  return (
    <React.Fragment>
      <div className="App-body" data-testid="app-body">
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            data-testid="password"
          />
          <button type="submit">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
