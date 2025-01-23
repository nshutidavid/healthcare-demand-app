import React, { useState } from 'react';
import DemandMap from './DemandMap';
import DemandChart from './DemandChart';
import ResourceRecommendations from './ResourceRecommendations';
import FacilityCapacity from './FacilityCapacity';
import DemandFilters from './DemandFilters';
import './DemandPrediction.css';

function DemandPrediction() {
  const [filters, setFilters] = useState({
    district: 'all',
    timePeriod: 'last-month',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="demand-prediction">
      <h2>Demand Prediction</h2>

      {/* Filters */}
      <div className="filters-container">
        <DemandFilters filters={filters} onChange={handleFilterChange} />
      </div>

      {/* Key Metrics */}
      <div className="metrics">
        <div className="metric-card">
          <h3>Total Demand</h3>
          <p>1,200</p>
        </div>
        <div className="metric-card">
          <h3>Predicted Demand</h3>
          <p>1,500</p>
        </div>
        <div className="metric-card">
          <h3>Resource Gap</h3>
          <p>300</p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="map-container">
        <DemandMap filters={filters} />
      </div>

      {/* Demand Forecast Chart */}
      <div className="chart-container">
        <DemandChart filters={filters} />
      </div>

      {/* Resource Recommendations */}
      <div className="recommendations-container">
        <ResourceRecommendations />
      </div>

      {/* Facility Capacity Overview */}
      <div className="facility-container">
        <FacilityCapacity />
      </div>
    </div>
  );
}

export default DemandPrediction;