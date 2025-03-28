import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Oops! Looks like you're lost.</h1>
        <p className="text-gray-600">The page you're looking for may have moved or no longer exists.</p>
        <a href="/">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Back to Home
          </button>
        </a>
          
      </div>
    </div>
  );
};

export default NotFoundPage;
