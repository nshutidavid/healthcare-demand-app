import React from 'react';
import './Sidebar.css';

function Sidebar({ selectedPage, setSelectedPage }) {
  const pages = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'demand-prediction', label: 'Demand Prediction' },
    { id: 'resource-allocation', label: 'Resource Allocation' },
    { id: 'health-alerts', label: 'Health Alerts' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="sidebar">
      <h2>Healthcare App</h2>
      <ul>
        {pages.map((page) => (
          <li
            key={page.id}
            className={selectedPage === page.id ? 'active' : ''}
            onClick={() => setSelectedPage(page.id)}
          >
            {page.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;