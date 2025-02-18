import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`py-12 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between px-6 gap-6">
        {/* Countries Section */}
        <div className="flex-1 space-y-4 mb-4 sm:mb-0">
          <h3 className="font-semibold text-lg border-b-2 border-blue-500 pb-2 mb-2">Countries</h3>
          <ul className="space-y-2">
            {["Regions", "Cities", "Districts", "Airports", "Hotels"].map((item) => (
              <li className="hover:text-blue-400 cursor-pointer transition duration-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Homes Section */}
        <div className="flex-1 space-y-4 mb-4 sm:mb-0">
          <h3 className="font-semibold text-lg border-b-2 border-blue-500 pb-2 mb-2">Homes</h3>
          <ul className="space-y-2">
            {["Apartments", "Resorts", "Villas", "Hostels", "Guest houses"].map((item) => (
              <li className="hover:text-blue-400 cursor-pointer transition duration-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Unique Places Section */}
        <div className="flex-1 space-y-4 mb-4 sm:mb-0">
          <h3 className="font-semibold text-lg border-b-2 border-blue-500 pb-2 mb-2">Unique places to stay</h3>
          <ul className="space-y-2">
            {["Reviews", "Unpacked: Travel articles", "Travel communities", "Seasonal and holiday deals"].map((item) => (
              <li className="hover:text-blue-400 cursor-pointer transition duration-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Car Rental Section */}
        <div className="flex-1 space-y-4 mb-4 sm:mb-0">
          <h3 className="font-semibold text-lg border-b-2 border-blue-500 pb-2 mb-2">Car rental</h3>
          <ul className="space-y-2">
            {["Flight Finder", "Restaurant reservations", "Travel Agents"].map((item) => (
              <li className="hover:text-blue-400 cursor-pointer transition duration-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="flex-1 space-y-4">
          <h3 className="font-semibold text-lg border-b-2 border-blue-500 pb-2 mb-2">Customer Service</h3>
          <ul className="space-y-2">
            {[
              "Partner Help",
              "Careers",
              "Sustainability",
              "Press center",
              "Safety Resource Center",
              "Investor relations",
              "Terms & conditions",
            ].map((item) => (
              <li className="hover:text-blue-400 cursor-pointer transition duration-200" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-300 pt-6">
        <p className="text-sm text-gray-600">
          Copyright © 2024 Ankit Sharma. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
