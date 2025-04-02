import React from 'react';
// Optional: You could add an icon library like react-icons
// import { FiAlertTriangle } from 'react-icons/fi';

function RegistrationPage() {
  const email = 'andreasegalottiabz@gmail.com';

  return (
    // Full page container, centers the content
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

      {/* Warning Box */}
      <div className="max-w-lg w-full bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md shadow-md">

        {/* Optional Icon */}
        {/* <div className="flex items-center mb-3">
          <FiAlertTriangle className="text-yellow-600 h-6 w-6 mr-3" />
          <h3 className="text-lg font-semibold text-yellow-800">Attenzione</h3>
        </div> */}

        {/* Warning Message */}
        <div className="text-yellow-800">
          <p className="font-medium">
            Attualmente non è possibile registrare nuovi utenti.
          </p>
          <p className="mt-2 text-sm">
            Per ulteriori informazioni contattare:{' '}
            <a
              href={`mailto:${email}`}
              className="font-semibold text-yellow-900 hover:text-yellow-700 hover:underline break-all" // break-all for long emails on small screens
            >
              {email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
