import React from "react";
import { FaHome, FaSearch, FaArrowLeft, FaClock } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import "./MobileAppScreen.scss";

const MobileAppScreen = () => {
	return (
		<div className="flex flex-col h-screen justify-between">
			{/* Top Navigation Bar */}
			<div className="p-4 flex items-center justify-between border-b border-gray-200">
				<FaArrowLeft className="text-xl" />
				<h1 className="text-xl font-semibold">Home</h1>
				<IoIosMore className="text-3xl" />
			</div>
			{/* Content Area */}
			<div className="flex-grow p-4 placeholder-div">I'm a div!</div>
			{/* Bottom Tab Bar */}
			<div className="p-4 flex justify-between border-t border-gray-200">
				<FaHome className="text-2xl" />
				<FaSearch className="text-2xl" />
				<FaArrowLeft className="text-2xl" />
				<FaClock className="text-2xl" />
			</div>
		</div>
	);
};
export default MobileAppScreen;
