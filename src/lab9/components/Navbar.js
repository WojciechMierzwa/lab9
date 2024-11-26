import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); 
  const currentPath = location.pathname;

  
  const renderLinks = () => {
    if (currentPath.startsWith('/lab7')) {
      return (
        <ul className="flex flex-col md:flex-row gap-4 items-center">
          <li>
            <Link
              to="/lab7Zad1"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Zad1
            </Link>
          </li>
          <li>
            <Link
              to="/lab7Zad2"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Zad2
            </Link>
          </li>
        </ul>
      );
    } else if (currentPath.startsWith('/lab8')) {
      return (
        <ul className="flex flex-col md:flex-row gap-4 items-center">
          <li>
            <Link
              to="/lab8Zad1"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Zad1
            </Link>
          </li>
          <li>
            <Link
              to="/lab8Zad2"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Zad2
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="flex flex-col md:flex-row gap-4 items-center">
        <li>
          <Link
            to="/"
            className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/hobbies"
            className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
          >
            Hobbies
          </Link>
        </li>
        <li>
          <Link
            to="/fav-movie"
            className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
          >
            Favorite Movie
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
        {}
        <ul className="flex flex-col md:flex-row gap-4 items-center">
          <li>
            <Link
              to="/lab7Zad1"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Lab7
            </Link>
          </li>
          <li>
            <Link
              to="/lab8Zad1"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Lab8
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded text-sm md:text-base"
            >
              Lab9
            </Link>
          </li>
        </ul>

        {}
        {renderLinks()}
      </div>
    </nav>
  );
}

export default Navbar;
