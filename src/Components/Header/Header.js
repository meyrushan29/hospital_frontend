import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/Logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto sm:h-16 mr-3" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">North East Hospital</h1>
              <h2 className="text-sm sm:text-lg text-gray-600 dark:text-gray-400">Colombo</h2>
            </div>
          </div>
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a onClick={() => navigate('/')} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 cursor-pointer" aria-current="page">Home</a>
              </li>
              <li>
                <a onClick={() => navigate('/about')} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">About Us</a>
              </li>
              <li>
                <a onClick={() => navigate('/news')} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">News</a>
              </li>
              <li>
                <a onClick={() => navigate('/myTicket')} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">MyTicket</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 md:mt-0">
            <button 
              className="w-full sm:w-auto bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded text-sm"
              onClick={() => navigate('/find-doc')}
            >
              Find Doctor
            </button>
            <button 
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm"
              onClick={() => navigate('/ticket_rise')}
            >
              Services
            </button>
            <button 
              className="w-full sm:w-auto bg-gradient-to-br from-teal-300 to-cyan-500 text-white font-bold py-2 px-4 rounded text-sm"
              onClick={() => navigate('/my-appoiments')}
            >
              My Appointment
            </button>
          </div>
        </div>
      </nav>
      <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
    </>
  );
}

export default Header;