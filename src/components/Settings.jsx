import React, { useState } from "react";
import {
  FileText,
  Bell,
  PenSquare,
  User,
  Lock,
  Youtube,
  Instagram,
  Twitter,
  Link2,
} from "lucide-react";

function Settings() {
  const [bio, setBio] = useState('');
  const maxBioLength = 200;
  return (
    <div className="flex-1 p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        Edit Profile
      </h1>

      <div className="max-w-3xl">
        {/* Profile Picture Section */}
        <div className="flex items-start gap-6 mb-8">
          <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kunaal"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Upload
            </button>
          </div>
        </div>

        {/* Name Input */}
        <div className="mb-6">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <User className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="kunaal"
              defaultValue="kunaal"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="email"
              placeholder="kunaal@gmail.com"
              defaultValue="kunaal@gmail.com"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>
        </div>

        {/* Username Input */}
        <div className="mb-2">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <span className="text-gray-500 text-sm">@</span>
            <input
              type="text"
              placeholder="kunaal"
              defaultValue="kunaal"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Username will use to search user and will be visible to all users
        </p>

        {/* Bio Textarea */}
        <div className="mb-2">
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={maxBioLength}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none resize-none h-24"
          />
        </div>
        <p className="text-xs text-gray-500 mb-6">
          {maxBioLength - bio.length} characters left
        </p>

        {/* Social Handles */}
        <h3 className="text-sm text-gray-600 mb-4">
          Add Your Social Handles below
        </h3>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* YouTube */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <Youtube className="w-4 h-4 text-gray-500" />
            <input
              type="url"
              placeholder="https://"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <Instagram className="w-4 h-4 text-gray-500" />
            <input
              type="url"
              placeholder="https://"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <input
              type="url"
              placeholder="https://"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <Twitter className="w-4 h-4 text-gray-500" />
            <input
              type="url"
              placeholder="https://"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <input
              type="url"
              placeholder="https://"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>

          {/* Website */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-3">
            <Link2 className="w-4 h-4 text-gray-500" />
            <input
              type="url"
              placeholder="https://"
              className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>
        </div>

        {/* Update Button */}
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors">
          Update
        </button>
      </div>
    </div>
  );
}

export default Settings;
