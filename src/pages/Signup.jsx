import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center py-12 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h3>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your account to get started.
        </p>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Mobile Number Input */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;