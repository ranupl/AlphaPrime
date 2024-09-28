import React, { useState } from 'react';
import { signUpApi } from '../api/signUp';

export const SignupModal = ({ isOpen, onClose, onSignUpSuccess }) => {
  // State for form fields
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      companyName,
      email,
      password,
    };

    try {
      // Call signUpApi and pass the payload
      const response = await signUpApi(payload);
      onSignUpSuccess();
      onClose();  
    } catch (err) {
      console.error('Sign up failed:', err);
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">Company Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};
