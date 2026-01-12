import React, { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const PasswordPage = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">
            Change Password
          </h1>

          <div className="max-w-md">
            {/* Old Password Input */}
            <div className="mb-6">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                <Lock className="w-4 h-4 text-gray-500" />
                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
                />
                <button
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showOldPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password Input */}
            <div className="mb-8">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
                <Lock className="w-4 h-4 text-gray-500" />
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
                />
                <button
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showNewPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Change Password Button */}
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
