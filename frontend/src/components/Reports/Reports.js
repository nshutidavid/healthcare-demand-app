import React, { useState } from 'react';
import SummaryReport from './SummaryReport';
import DetailedReport from './DetailedReport';
import ReportFilters from './ReportFilters';
import ReportChart from './ReportChart';
import './Reports.css';

function Reports() {
  const [filters, setFilters] = useState({
    dateRange: 'last-month',
    district: 'all',
    reportType: 'summary',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="reports">
      <h2>Reports</h2>

      {/* Filters */}
      <div className="filters-container">
        <ReportFilters filters={filters} onChange={handleFilterChange} />
      </div>

      {/* Summary Report */}
      {filters.reportType === 'summary' && (
        <div className="summary-container">
          <SummaryReport filters={filters} />
        </div>
      )}

      {/* Detailed Report */}
      {filters.reportType === 'detailed' && (
        <div className="detailed-container">
          <DetailedReport filters={filters} />
        </div>
      )}

      {/* Visualizations */}
      <div className="chart-container">
        <ReportChart filters={filters} />
      </div>
    </div>
  );
}

export default Reports;