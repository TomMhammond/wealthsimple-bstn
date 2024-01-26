import React from 'react';
import { FaHome, FaSearch, FaArrowLeft, FaClock } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
import './MobileAppScreen.scss'; // Make sure this path is correct

const MobileAppScreen = () => {
  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <FaArrowLeft className="icon-left" />
        <h1>Home</h1>
        <IoIosMore className="icon-more" />
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Content goes here */}
      </div>

      {/* Bottom Tab Bar */}
      <div className="bottom-tab">
        <FaHome className="icon" />
        <FaSearch className="icon" />
        <FaArrowLeft className="icon" />
        <FaClock className="icon" />
      </div>
    </div>
  );
};

export default MobileAppScreen;
