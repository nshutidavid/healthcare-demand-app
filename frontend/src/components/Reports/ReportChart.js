import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ReportChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ReportChart({ filters }) {
  const data = {
    labels: ['Gasabo', 'Kicukiro', 'Nyarugenge'],
    datasets: [
      {
        label: 'Demand',
        data: [500, 300, 200],
        backgroundColor: 'blue',
      },
      {
        label: 'Resources',
        data: [400, 250, 150],
        backgroundColor: 'green',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Healthcare Demand and Resources',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default ReportChart;