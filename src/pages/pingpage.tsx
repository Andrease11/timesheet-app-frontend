import PingButton from '../components/pingbutton';
import React from 'react';

function PingPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Status Check</h1>
      <PingButton />
    </div>
  );
}

export default PingPage;
