import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './HomeChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function HomeChart() {
  const data = {
    labels: ['Gasabo', 'Kicukiro', 'Nyarugenge'],
    datasets: [
      {
        label: 'Healthcare Demand',
        data: [500, 300, 200],
        backgroundColor: 'blue',
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
        text: 'Healthcare Demand by District',
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default HomeChart;