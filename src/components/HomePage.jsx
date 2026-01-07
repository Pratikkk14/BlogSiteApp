import React, { useState } from "react";
import { Search, Bell, PenSquare, TrendingUp } from "lucide-react";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "The Brightest Stars in the Darkest Sky",
      subtitle: "New Zealand's Dark Sky Project at Lake Tekapo",
      author: "tanisha massey",
      username: "@tanisha",
      date: "27 Sep",
      tag: "Travel",
      likes: 1,
      image:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "The Food and Environment in Costa Rica Healed My Gut and My Soul",
      subtitle: "I didn't know I was in for a week of wellness",
      author: "tanisha massey",
      username: "@tanisha",
      date: "27 Sep",
      tag: "Food",
      likes: 1,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "I'm Not Afraid — Let's Say I'm Aware",
      subtitle: "Traveling always gives this woman food for thought",
      author: "tanisha massey",
      username: "@tanisha",
      date: "27 Sep",
      tag: "Travel",
      likes: 0,
      image:
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "The Future of Remote Work in 2025",
      subtitle: "How companies are adapting to the new normal",
      author: "john smith",
      username: "@john",
      date: "26 Sep",
      tag: "Technology",
      likes: 5,
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop",
    },
  ];

  const trendingPosts = [
    {
      rank: "01",
      author: "tanisha massey",
      username: "@tanisha",
      date: "27 Sep",
      title: "The Brightest Stars in the Darkest Sky",
    },
    {
      rank: "02",
      author: "kunaal kumar",
      username: "@kunaal438",
      date: "27 Sep",
      title: "What Is Apple's Vision Pro Really For?",
    },
    {
      rank: "03",
      author: "tanisha massey",
      username: "@tanisha",
      date: "27 Sep",
      title: "The Food and Environment in Costa Rica Healed My Gut...",
    },
  ];

  const interests = [
    "Programming",
    "Hollywood",
    "Film Making",
    "Social Media",
    "Cooking",
    "Technology",
    "Finances",
    "Travel",
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Feed */}
          <div className="lg:col-span-2 space-y-10">
            {posts.map((post, idx) => (
              <article
                key={post.id}
                className="flex gap-8 pb-10 border-b border-gray-200 cursor-pointer group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-gray-900"></div>
                    <span className="text-sm text-gray-900">{post.author}</span>
                    <span className="text-sm text-gray-500">@ {post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-base mb-4">
                    {post.subtitle}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {post.tag}
                    </span>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {post.likes}
                    </button>
                  </div>
                </div>

                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Stories from all interests */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Stories from all interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-gray-700" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Trending
                </h3>
              </div>

              <div className="space-y-6">
                {trendingPosts.map((post) => (
                  <div
                    key={post.rank}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <span className="text-2xl font-bold text-gray-200 group-hover:text-gray-300">
                      {post.rank}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                        <span className="text-xs text-gray-900">
                          {post.author}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.username}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.date}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-gray-700">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
