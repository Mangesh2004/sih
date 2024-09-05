
export default function About() {
  return (
    <div id="about" className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the GradNexus, where we foster lifelong connections, collaboration, and growth among our alumni community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              We aim to create a dynamic, supportive ecosystem where alumni can connect, contribute, and thrive, enriching their personal and professional lives while giving back to the institution.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Purpose</h3>
            <p className="text-gray-600">
              At the heart of our platform is a commitment to lifelong engagement, facilitating networking, career advancement, giving back, and celebrating alumni achievements.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
            <ul className="text-gray-600 pl-5">
              <li>Alumni Registration</li>
              <li>Networking Hub</li>
              <li>Job Portal</li>
              <li>Success Stories</li>
              <li>Events and Reunions</li>
              <li>Donation Portal</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Join us in building a legacy of excellence!
          </h3>
          <p className="text-lg text-gray-600">
            Whether you're a recent graduate or a seasoned professional, the GradNexus offers valuable opportunities to engage, grow, and make a lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

