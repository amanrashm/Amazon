// Signup component

import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isRegistered: false,
      message: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        message: 'Passwords don\'t match!'
      });
    } else {
      // Create user
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isRegistered: true,
        message: ''
      });
    }
  }

  render() {
    const { isRegistered, message } = this.state;
    if (isRegistered) {
      return <Navigate to="/" />
    }
    return (
      <div>
        <h2>Signup</h2>
        {message && <p>{message}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;