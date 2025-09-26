import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      
      {/* Profile Header */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6 text-center">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500 shadow-md"
        />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">John Doe</h1>
        <p className="text-gray-500">Computer Engineering Student</p>
        <p className="mt-2 text-gray-600">
          Passionate about AI, Machine Learning, and Data Science. Always eager
          to learn and research cutting-edge technologies.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-3">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition">
            Edit Profile
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
            Connect
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full max-w-4xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Profile Details</h2>
          <ul className="space-y-2 text-gray-600">
            <li><span className="font-medium">Username:</span> johndoe123</li>
            <li><span className="font-medium">Email:</span> johndoe@gmail.com</li>
            <li><span className="font-medium">College:</span> SKN Sinhgad Institute of Technology</li>
            <li><span className="font-medium">Location:</span> Pune, India</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Machine Learning</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Data Science</span>
          </div>
        </div>
      </div>

      {/* Education / Projects */}
      <div className="w-full max-w-4xl mt-8 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Education & Projects</h2>
        <ul className="space-y-3 text-gray-600">
          <li>
            🎓 <span className="font-medium">B.E. Computer Engineering</span> - SKN Sinhgad Institute of Technology
          </li>
          <li>
            💻 <span className="font-medium">AI Research Project:</span> Smart Synthetic Data Generator for Hackathon
          </li>
          <li>
            📊 <span className="font-medium">Internship:</span> Data Science Intern at XYZ Company
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
