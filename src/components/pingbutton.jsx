import React, { useState } from 'react';
import { pingUsersPingGet } from '../client/sdk.gen';

const PingButton = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePing = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await pingUsersPingGet();
      setResponse(result.data); // Assuming the API returns data in a standard format

    } catch (err) {
      setError(err.message || 'An error occurred');
      console.error('Ping error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={handlePing}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Pinging...' : 'Ping Server'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {response && !error && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
          {response.body || response}
        </div>
      )}
    </div>
  );
};

export default PingButton;
