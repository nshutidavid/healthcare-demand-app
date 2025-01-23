import React from 'react';
import './RecentUpdates.css';

function RecentUpdates() {
  const updates = [
    { id: 1, message: 'High demand reported in Gasabo.', timestamp: '2 hours ago' },
    { id: 2, message: 'New health alert in Kicukiro.', timestamp: '5 hours ago' },
  ];

  return (
    <div className="recent-updates">
      <h3>Recent Updates</h3>
      <ul>
        {updates.map((update) => (
          <li key={update.id}>
            <p>{update.message}</p>
            <small>{update.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentUpdates;