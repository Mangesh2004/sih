import React from 'react';

export default function News() {
  return (
    <div className="max-w-7xl m-5 p-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row">
      
      

      {/* News Content Section */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-black mb-4">News</h1>
        <h2 className="text-xl font-bold text-gray-800">💻 The Future of Software Development: AI, Cloud, and Low-Code Revolution</h2>

        <p className="mt-4 text-gray-700">
          The software industry is entering a new era of rapid innovation with cutting-edge technologies reshaping how we build, deploy, and maintain applications. AI-driven development, cloud-native architectures, and the rise of low-code platforms are enabling faster delivery and increased agility for businesses worldwide.
        </p>

        <p className="mt-4 text-gray-700">
          <strong>AI-Powered Development:</strong> AI tools are streamlining coding tasks, automating testing, and improving software quality. From GitHub Copilot to AI-driven refactoring tools, developers now have more powerful resources to boost productivity and code quality.
        </p>

        <p className="mt-4 text-gray-700">
          <strong>Cloud-Native Ecosystems:</strong> Companies are moving to cloud-native environments for scalability and flexibility, with Kubernetes, Docker, and serverless architectures at the forefront. The cloud is changing how applications are built and managed, offering endless possibilities.
        </p>

        <p className="mt-4 text-gray-700">
          <strong>Low-Code Revolution:</strong> The rise of low-code and no-code platforms has democratized software development, enabling non-programmers to build applications quickly. This trend is set to empower businesses by reducing time to market and bridging the talent gap.
        </p>

      </div>
    </div>
  );
}
