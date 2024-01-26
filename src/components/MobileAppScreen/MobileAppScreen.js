import React from 'react';
import { FaHouse, FaSistrix, FaArrowLeft, FaArrowRightArrowLeft, FaClock } from 'react-icons/fa6';
import { IoIosMore } from 'react-icons/io';
import './MobileAppScreen.scss'; 

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
         <FaHouse className="icon" />
        <FaSistrix className="icon" />
        <FaArrowRightArrowLeft className="icon" />
        <FaClock className="icon" />
      </div>
    </div>
  );
};

export default MobileAppScreen;
