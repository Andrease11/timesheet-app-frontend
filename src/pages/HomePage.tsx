import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Benvenuto</h1>
        <p className="text-gray-600 mb-6">Accedi o registrati per continuare</p>

        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          <Link
            to="/login"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-600"
          >
            <div className="py-3 px-4 rounded-md">
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="text-white font-medium">Login</span>
              </div>
            </div>
          </Link>

          <Link
            to="/register"
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"
          >
            <div className="py-3 px-4 rounded-md">
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span className="text-white font-medium">Registrati</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
