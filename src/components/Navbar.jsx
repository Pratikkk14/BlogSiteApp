import React, {useEffect, useState, useRef} from "react";
import { Outlet, Link } from "react-router";
import InputBox from "./Input";
import { Search, Bell, PenSquare, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useStore";
import authService from "../appwrite/Auth";
import { useNavigate } from "react-router";

function Navbar({ children }) {
  
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfileMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileMenu]);

  const handleLogout = async () => {
    try {
      await authService.logout();
      logout();
      navigate('/signin');
    } catch (err) {
      // Even if logout fails on server, clear local state
      logout();
      navigate('/signin');
    }
  };

  return (
    <>
      <nav className="w-full h-20 flex items-center justify-between px-6 py-3 bg-base-100 text-base-content shadow-md border-b border-base-300">
        {/* Logo on the left and searchbar */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary mr-4 transition-transform duration-300 hover:scale-110">
            MegaBlogSite
          </span>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/60 w-4 h-4 transition-transform duration-300 hover:scale-125" />
              <input
                type="text"
                placeholder="Search"
                className="bg-base-200 border border-base-300 rounded-full pl-10 pr-4 py-2 text-sm text-base-content placeholder:text-base-content/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 w-64 transition-all duration-300 focus:w-65"
              />
            </div>
          </div>
        </div>
        {/* Buttons on the right */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-base-content hover:text-primary text-sm">
            <Link to="/write" className="btn btn-ghost">
              <PenSquare className="w-6 h-6" />
              Write
            </Link>
          </button>
          {isLoggedIn ? (
            <div
              className="flex items-center gap-3 relative"
              ref={profileMenuRef}
            >
              <Bell className="w-6 h-6 text-base-content cursor-pointer hover:text-primary mr-2 transition-transform duration-200 hover:scale-110 active:scale-95" />
              <div
                className="rounded-4xl h-12 w-12 bg-gray-300 btn btn-ghost flex items-center justify-center text-sm mr-3 cursor-pointer transition-all duration-200 hover:shadow-lg hover:bg-gray-400 active:scale-95 active:bg-gray-200"
                onClick={handleProfileClick}
                tabIndex={0}
                role="button"
                aria-label="Profile"
              >
                Profile
              </div>
              {showProfileMenu && (
                <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg py-2 w-48 z-10 animate-fade-in">
                  <Link
                    to="/user/profile"
                    className="block px-4 py-2 hover:bg-base-200 text-base-content transition-colors duration-150"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/user/dashboard"
                    className="block px-4 py-2 hover:bg-base-200 text-base-content transition-colors duration-150"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/user/settings"
                    className="block px-4 py-2 hover:bg-base-200 text-base-content transition-colors duration-150"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    Settings
                  </Link>
                  <div
                    className="block px-4 py-2 hover:bg-base-200 text-base-content transition-colors duration-150 cursor-pointer h-10 w-auto text-xl"
                    onClick={handleLogout}
                  >
                    <LogOut className="inline-block w-5 h-5 mr-2" />
                    SignOut
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/signup" className="btn btn-outline rounded-4xl">
                Signup
              </Link>
              <Link to="/signin" className="btn btn-primary rounded-4xl">
                Signin
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
