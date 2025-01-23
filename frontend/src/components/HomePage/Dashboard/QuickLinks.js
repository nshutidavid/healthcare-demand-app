import React from 'react';
import { FaChartLine, FaMapMarkerAlt, FaBell } from 'react-icons/fa';
import './QuickLinks.css';

function QuickLinks() {
  return (
    <div className="quick-links">
      <a href="/demand-prediction" className="link-card">
        <FaChartLine className="link-icon" />
        <span>Demand Prediction</span>
      </a>
      <a href="/resource-allocation" className="link-card">
        <FaMapMarkerAlt className="link-icon" />
        <span>Resource Allocation</span>
      </a>
      <a href="/health-alerts" className="link-card">
        <FaBell className="link-icon" />
        <span>Health Alerts</span>
      </a>
    </div>
  );
}

export default QuickLinks;