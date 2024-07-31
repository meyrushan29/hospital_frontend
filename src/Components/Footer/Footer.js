import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © {new Date().getFullYear()} North East Hospital. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;