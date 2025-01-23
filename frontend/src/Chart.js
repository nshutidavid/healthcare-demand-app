import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale, // X-axis scale
  LinearScale, // Y-axis scale
  PointElement, // Points on the line
  LineElement, // The line itself
  Title, // Chart title
  Tooltip, // Tooltips on hover
  Legend // Legend
);

// Default data in case no data is provided
const defaultData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels
  datasets: [
    {
      label: 'Healthcare Demand', // Legend label
      data: [100, 150, 200, 250, 300], // Y-axis data
      borderColor: 'blue', // Line color
      fill: false, // Don't fill under the line
    },
  ],
};

// Chart options
const options = {
  responsive: true, // Make the chart responsive
  plugins: {
    legend: {
      position: 'top', // Position of the legend
    },
    title: {
      display: true,
      text: 'Healthcare Demand Over Time', // Chart title
    },
  },
};

function Chart({ data = defaultData }) {
  const chartRef = useRef(null); // Ref to store the chart instance

  // Ensure the chart is destroyed before re-rendering
  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy(); // Destroy the chart instance
      }
    };
  }, []);

  return <Line ref={chartRef} data={data} options={options} />;
}

export default Chart;