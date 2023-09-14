// src/components/Login.js
// Import 'auth' from your own 'firebase.js' file
import { auth } from '../firebase';

// Rest of your Login.js code

import React, { useState } from 'react';
// import { auth } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // User logged in successfully
    } catch (error) {
      // Handle login error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
