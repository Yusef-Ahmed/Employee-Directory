import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/auth/login")
    setIsMenuOpen(false);
  }

  return (
    <header className="relative">
      <div className="flex justify-between items-center h-20 px-4 font-bold text-lg border-b-1 border-gray-400">
        <img
          className="h-3/5"
          src="https://5d.ae/themes/mysite/assets/img/5D-white.svg"
          alt="5D"
        />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute w-full bg-gray-900 z-50">
          <div className="flex flex-col items-center gap-4 py-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/employees" onClick={() => setIsMenuOpen(false)}>Employees</NavLink>
            <NavLink to="/departments" onClick={() => setIsMenuOpen(false)}>Departments</NavLink>
            <NavLink to="/jobTitles" onClick={() => setIsMenuOpen(false)}>Job Title</NavLink>
            {loggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/auth/login" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}

export default MobileHeader;