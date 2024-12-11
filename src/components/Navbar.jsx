import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate(); // To navigate programmatically

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">My Blog</Link>
        </div>
        <div className="flex space-x-4">
          {/* Conditionally render links based on login state */}
          {isLoggedIn ? (
            <>
              <Link to="/create" className="text-white hover:bg-blue-700 p-2 rounded-md">
                Create Post
              </Link>
              <button onClick={handleLogout} className="text-white hover:bg-blue-700 p-2 rounded-md">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:bg-blue-700 p-2 rounded-md">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:bg-blue-700 p-2 rounded-md">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
