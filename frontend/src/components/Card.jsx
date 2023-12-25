import React from 'react';

const StatCard = ({ title, number }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-4xl font-bold text-blue-600 mt-2">{number}</p>
    </div>
  );
};

export default StatCard;
