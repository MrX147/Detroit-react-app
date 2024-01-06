// ExpandableSidebar.jsx

import React, { useState } from "react";
import "./ExpandableSidebar.css";

const ExpandableSidebar = ({ handleExpensesCalculatorClick }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`expandable-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {!isSidebarOpen && (
        <div className="sidebar-content">
          <div className="logo">
            {/* Add your logo or sidebar header here */}
            <h2>My Sidebar</h2>
          </div>
          <ul className="my-nav">
            <li className="my-nav-item">
              <a
                href="/expenses"
                className="my-nav-link"
                onClick={handleExpensesCalculatorClick}
              >
                Expenses Calculator
              </a>
            </li>

            {/* Add more navigation items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExpandableSidebar;
