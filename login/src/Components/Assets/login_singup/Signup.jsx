import React, { useState } from 'react';
import './login_signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      console.log(response)
      const data = await response.json();
      if (response.ok) {
        setMessage('Signup successful!');
      } else {
        setMessage(`Signup failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  return (
    <div className='cont'>
    <div className='form'>
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSignup} className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Signup</button>
      </form>
      {message && <div className="message">{message}</div>}
      <Link to={"/login"}>Login</Link>
    </div>
    </div>
  );
}

export default Signup;