import React from 'react';
import './ResourceRecommendations.css';

function ResourceRecommendations() {
  const recommendations = [
    { area: 'Gasabo', action: 'Move 10 doctors from Kicukiro', timeline: 'Within 1 week' },
    { area: 'Nyarugenge', action: 'Add 20 beds', timeline: 'Within 2 weeks' },
  ];

  return (
    <div className="resource-recommendations">
      <h3>Resource Allocation Recommendations</h3>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>
            <strong>{rec.area}:</strong> {rec.action} ({rec.timeline})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceRecommendations;