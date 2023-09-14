// src/components/Registration.js
import React, { useState } from 'react';
import { auth } from '../firebase';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // User registered successfully
    } catch (error) {
      // Handle registration error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;
