import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className="flex items-center p-5 bg-red-400 border-t-4 border-blue-800">
        {/* Logo */}
        <div className="mr-5">
          <span className="text-white text-2xl font-bold">Kalvium</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 items-center justify-between">
          <div className="text-sm flex flex-wrap">
            <a className="font-semibold mr-4 xl:text-lg">About Us</a>
            <a className="mr-4 xl:text-lg font-semibold">Contacts</a>
            <a className="mr-4 xl:text-lg font-semibold">Courses</a>
          </div>

          {/* Login Button */}
          <div>
            <button className="text-white border-white border rounded p-1 px-5 font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="px-40 my-5">
        {/* Button One */}
        <button className="text-white bg-blue-600 text-s font-bold rounded-lg px-5 py-2">
          Button One
        </button>
      </div>
    </>
  );
};

export default Navbar;
