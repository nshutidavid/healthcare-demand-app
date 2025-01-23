import React from 'react';
import './DemandFilters.css';

function DemandFilters({ filters, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="demand-filters">
      <label>
        District:
        <select name="district" value={filters.district} onChange={handleChange}>
          <option value="all">All Districts</option>
          <option value="gasabo">Gasabo</option>
          <option value="kicukiro">Kicukiro</option>
          <option value="nyarugenge">Nyarugenge</option>
        </select>
      </label>
      <label>
        Time Period:
        <select name="timePeriod" value={filters.timePeriod} onChange={handleChange}>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
          <option value="last-year">Last Year</option>
        </select>
      </label>
    </div>
  );
}

export default DemandFilters;