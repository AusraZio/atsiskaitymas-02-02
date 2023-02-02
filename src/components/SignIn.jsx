import React, { useState } from 'react';

const SignIn = (props) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')

const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password123') {
      props.handleLogin(email, password);
    }
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-title">Log in</h1>
      <label className="form-label">
        Email:
        <input className="form-input" type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label className="form-label">
        Password:
        <input className="form-input" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button className="form-button" type="submit">Log in</button>
    </form>
  );

}

export default SignIn;