import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {isAuthenticated ? (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img
              className="w-24 h-24 rounded-full border-4 border-blue-500"
              src={user.picture}
              alt="User Profile"
            />
          </div>

          {/* User Details */}
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{user.email}</p>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md animate-slidein bg-gray-500 rounded-lg shadow-lg p-6 font-medium text-xl">
          <h1 className="">Please Login First</h1>
          <button
            className="bg-gray-900 m-2 p-2 font-medium text-xl border rounded-md text-yellow-50"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
