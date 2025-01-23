import React from 'react';
import './ReportFilters.css';

function ReportFilters({ filters, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="report-filters">
      <label>
        Date Range:
        <select name="dateRange" value={filters.dateRange} onChange={handleChange}>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
          <option value="last-year">Last Year</option>
        </select>
      </label>
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
        Report Type:
        <select name="reportType" value={filters.reportType} onChange={handleChange}>
          <option value="summary">Summary</option>
          <option value="detailed">Detailed</option>
        </select>
      </label>
    </div>
  );
}

export default ReportFilters;