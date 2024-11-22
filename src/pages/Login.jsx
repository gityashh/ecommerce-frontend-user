import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 py-32">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h3>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-4 text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-yellow-600 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Login
            </button>
          </div>

          {/* Sign Up */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;