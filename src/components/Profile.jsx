import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blogs Published */}
          <div className="lg:col-span-2">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                Blogs Published
              </h2>
              <div className="w-32 h-0.5 bg-gray-300 mb-6"></div>
            </div>

            {/* Empty State */}
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-500 text-base">No blogs published yet</p>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=pratik31"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Username */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                @Pratik
              </h3>

              {/* Name */}
              <p className="text-gray-600 text-center mb-3">Pratik</p>

              {/* Stats */}
              <p className="text-gray-500 text-sm text-center mb-6">
                0 Blogs - 0 Reads
              </p>

              {/* Edit Profile Button */}
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm">
                Edit Profile
              </button>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>

              {/* Nothing to read */}
              <p className="text-gray-500 text-sm text-center mb-6">
                Nothing to read here.
              </p>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>

              {/* Joined Date */}
              <p className="text-gray-400 text-xs text-center">
                Joined on 29 Sep 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
