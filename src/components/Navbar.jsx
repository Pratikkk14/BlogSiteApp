import React from "react";
import { Outlet, Link } from "react-router";

function Navbar({children}) {
  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 py-3 bg-base-100 shadow">
        {/* Logo on the left */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary">MegaBlogSite</span>
        </div>
        {/* Buttons on the right */}
        <div className="flex items-center gap-3">
          <button className="btn btn-ghost">Write</button>
          <Link to="/signup" className="btn btn-outline">Signup</Link>
          <Link to="/signin" className="btn btn-primary">Signin</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
