import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Card Container */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Benvenuto</h1>
          <p className="text-gray-300 mb-8">Accedi o registrati per continuare</p>

          {/* Button Container with Vertical Spacing */}
          <div className="flex flex-col space-y-5 mb-6">
            {/* Login Button - Larger and More Prominent */}
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg rounded-lg py-4 px-6 flex items-center justify-center shadow-md"
            >
              <FiLogIn className="mr-3" size={20} />
              Login
            </Link>

            {/* Register Button - Larger and More Prominent */}
            <Link
              to="/register"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg rounded-lg py-4 px-6 flex items-center justify-center shadow-md"
            >
              <FiUserPlus className="mr-3" size={20} />
              Registrati
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
