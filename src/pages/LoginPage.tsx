import { loginForAccessTokenUsersTokenPost, readUserMeUsersMeGet } from '../client/sdk.gen';
import { client } from '../client/client.gen';
import useAuthStore from '../zustand/AuthStore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export function LoginPage() {
  const { token, email: storedEmail, setToken, setEmail } = useAuthStore();
  const [email, setLocalEmail] = useState(storedEmail);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Check for existing token on component mount
  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        try {
          client.setConfig({
            auth: () => token
          });
          const result = await readUserMeUsersMeGet();

          if (result.data) {
            navigate('/login/calendar');
          }
        } catch (error) {
          console.log("invalid token", error);
        }
      }
    };

    checkToken();
  }, [token, navigate, client]); const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      let response = await loginForAccessTokenUsersTokenPost({
        body: {
          username: email,
          password: password,
          grant_type: 'password'
        }
      });

      // Only proceed if we have a valid token
      if (response.data && response.data.access_token) {
        setToken(response.data.access_token);
        setEmail(email);
        console.log("login success", response);
        client.setConfig({
          auth: () => token
        });
        navigate('/login/calendar');
      } else {
        // If we don't get a token in the response
        setError('Authentication failed. Please try again.');
        console.error("No valid token received");
      }
    } catch (error) {
      console.error("login error", error);
      setError('Wrong password or username');
    }
  };

  const logout = () => {
    setToken('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setLocalEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          {token && (
            <div className="mt-6">
              <button
                onClick={logout}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
