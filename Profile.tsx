import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-4xl text-gray-600">
                {user?.email?.[0]?.toUpperCase() || '?'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-sm font-semibold text-gray-500">Email</h2>
              <p className="text-lg text-gray-900">{user?.email || 'Not available'}</p>
            </div>

            <div className="border-b pb-4">
              <h2 className="text-sm font-semibold text-gray-500">Member Since</h2>
              <p className="text-lg text-gray-900">
                {user?.created_at 
                  ? new Date(user.created_at).toLocaleDateString()
                  : 'Not available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;