import React, { useState } from 'react';
import './login_signup.css';
import { Link } from 'react-router-dom';
// import user_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'

function Login_signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage]=useState("nkjnkj")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Handle successful login
        console.log('Login successful:', data);
        setMessage(data)
      } else {
        // Handle login error
        console.error('Login failed:', data);
        setMessage(data)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='cont'>
    <div className='form'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin} className="inputs">
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
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p>{message}</p>
      <Link to={"/signup"}>Dont have an account ? signin </Link>

    </div>
    </div>
  );
}

export default Login_signup;