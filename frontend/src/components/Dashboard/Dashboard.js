import React, { useEffect, useState } from 'react';
import { FaUsers, FaMapMarkerAlt, FaBell } from 'react-icons/fa';
import { metrics, demandData } from '../../mockData';
import MetricCard from './MetricCard';
import RecentDataTable from './RecentDataTable';
import Chart from '../Chart/Chart';
import './Dashboard.css';

function Dashboard() {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    // Simulate fetching recent data
    setTimeout(() => {
      setRecentData(demandData);
    }, 1000);
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
        <MetricCard title="Total Demand" value={metrics.totalDemand} icon={<FaUsers />} />
        <MetricCard title="High Demand Areas" value={metrics.highDemandAreas} icon={<FaMapMarkerAlt />} />
        <MetricCard title="Recent Alerts" value={metrics.recentAlerts} icon={<FaBell />} />
      </div>
      <div className="chart">
        <Chart data={demandData} />
      </div>
      <RecentDataTable data={recentData} />
    </div>
  );
}

export default Dashboard;