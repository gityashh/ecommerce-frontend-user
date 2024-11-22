import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center py-44 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Forgot Password
        </h3>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email address, and we'll send you a link to reset your password.
        </p>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Send Reset Link
            </button>
          </div>

          {/* Back to Login */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Remembered your password?{' '}
              <Link
                to="/login"
                className="text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;