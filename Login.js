// Login component

import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
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
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'abc123');
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        message: 'Invalid username or password!'
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.state;
    if (isLoggedIn) {
      return <Navigate to="/" />
    }
    return (
      <div>
        <h2>Login</h2>
        {message && <p>{message}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;