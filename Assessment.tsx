import React from 'react';
import { useParams } from 'react-router-dom';

const Assessment = () => {
  const { assessmentId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Assessment</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Assessment ID: {assessmentId}</p>
        {/* Assessment content will be implemented later */}
        <p className="text-gray-600 mt-4">Assessment content coming soon...</p>
      </div>
    </div>
  );
};

export default Assessment;