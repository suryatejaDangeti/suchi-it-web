import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { presistor } from '../../store';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`block h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white font-bold text-xl">Logo</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  About us
                </Link>
                <Link
                  to="/"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/"
                  className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Payments
                </Link>
                
              </div>
            </div>
            <div className="dropdown dropdown-end ml-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  onClick={toggleDropdown}
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    />
                  </div>
                </div>
                {isOpen && (
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow"
                  >
                    <li>
                      <Link to="/">Profile</Link>
                    </li>
                    <li>
                      <Link to='/' onClick={() => { presistor.purge();}}>Logout</Link>
                    </li>
                  </ul>
                )}
              </div>
            {/* <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            /> */}
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-300 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:bg-white hover:text-black block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




