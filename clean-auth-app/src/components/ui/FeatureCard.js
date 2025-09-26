import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 border border-gray-100 rounded-xl hover:border-gray-200 transition">
    <div className={`w-12 h-12 ${icon.bg} rounded-lg mb-4 flex items-center justify-center`}>
      <svg className={`w-6 h-6 ${icon.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
      </svg>
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default FeatureCard;