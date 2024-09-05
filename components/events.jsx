import React from 'react';

export default function Events() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4">
        <h2 className="text-2xl font-bold">🚀 GPU Meetup at PVG's College of Engineering</h2>
      </div>

      {/* Event Details */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-lg mb-4">
          Join us for Pune's premier GPU Meetup on August 31, 2024, from 4:00 - 7:00 PM! Dive into the latest in Autonomous Vehicles, Healthtech, and Research with industry experts Aditya Rane and Anand Munglikar. Don’t miss this chance to gain insights, network with leaders, and explore the future of technology. 🚗💉🔬
        </p>

        {/* Date and Time */}
        <div className="flex items-center mb-4">
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md mr-2">
            📅 <strong>Date:</strong> August 31, 2024
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md">
            ⏰ <strong>Time:</strong> 4:00 - 7:00 PM
          </span>
        </div>

        {/* Venue */}
        <div className="flex items-center mb-4">
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md">
            📍 <strong>Venue:</strong> PVG's College of Engineering and Technology, Pune
          </span>
        </div>

        {/* Speakers */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-gray-800 font-semibold mb-2">🎤 Speakers:</h3>
          <ul className="text-gray-700 list-disc pl-6">
            <li><strong>Aditya Rane:</strong> Data & AI expert, specializing in NLP and Recommendation Systems</li>
            <li><strong>Anand Munglikar:</strong> Head of Data Science at Partex Group, expert in Computer Vision</li>
          </ul>
        </div>

        {/* Topic */}
        <div className="bg-blue-100 text-blue-800 mt-4 p-4 rounded-lg">
          <h3 className="font-semibold">🔥 Topic:</h3>
          <p>A New Era of Autonomous Vehicles, Healthtech, & Research</p>
        </div>
      </div>
    </div>
  );
}
