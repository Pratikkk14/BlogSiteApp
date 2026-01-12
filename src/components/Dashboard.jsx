import React from 'react';
import { FileText, Bell, Library, User, Lock } from "lucide-react";
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-100 bg-white border-r border-gray-200 min-h-screen p-6">
          <div className="mt-5">
            <span className="text-2xl font-semibold text-gray-500 mb-8">
              Dashboard
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 mb-8 mt-8">
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-3 py-2 rounded-lg transition-colors overflow-hidden ${
                  isActive
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <FileText
                    className="w-5 h-5"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="text-base">Blogs</span>
                  <span
                    className={`pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gray-800 transition-transform duration-500 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </>
              )}
            </NavLink>
            <NavLink
              to="notifications"
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-3 py-2 rounded-lg transition-colors overflow-hidden ${
                  isActive
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Bell className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-base">Notifications</span>
                  <span
                    className={`pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gray-800 transition-transform duration-500 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </>
              )}
            </NavLink>
            <NavLink
              to="library"
              className={({ isActive }) =>
                `relative flex items-center gap-3 px-3 py-2 rounded-lg transition-colors overflow-hidden ${
                  isActive
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Library
                    className="w-5 h-5"
                    strokeWidth={isActive ? 2.5 : 2}
                    
                  />
                  <span className="text-base">Library</span>
                  <span
                    className={`pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gray-800 transition-transform duration-500 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </>
              )}
            </NavLink>
          </nav>

          {/* Settings Section */}
          <div className="mt-20">
            <span className="text-2xl font-semibold text-gray-500 mb-4 block">
              Settings
            </span>
            <nav className="space-y-1 mt-6">
              <NavLink
                to="edit-profile"
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-3 py-2 rounded-lg transition-colors overflow-hidden ${
                    isActive
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <User
                      className="w-5 h-5"
                      strokeWidth={isActive ? 2.5 : 2}
                      
                    />
                    <span className="text-base">Edit Profile</span>
                    <span
                      className={`pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gray-800 transition-transform duration-500 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ transformOrigin: "center" }}
                    />
                  </>
                )}
              </NavLink>
              <NavLink
                to="change-password"
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-3 py-2 rounded-lg transition-colors overflow-hidden ${
                    isActive
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Lock
                      className="w-5 h-5"
                      strokeWidth={isActive ? 2.5 : 2}
                      
                    />
                    <span className="text-base">Change Password</span>
                    <span
                      className={`pointer-events-none absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gray-800 transition-transform duration-500 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ transformOrigin: "center" }}
                    />
                  </>
                )}
              </NavLink>
            </nav>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;