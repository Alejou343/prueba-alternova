import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {

  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-600">The page you're looking for could not be found.</p>
      <Link to="/">
          <div className="mt-4 text-blue-500 hover:underline">Go back to homepage</div>
      </Link>
    </div>
  )
};

export default NotFound;