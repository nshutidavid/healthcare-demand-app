import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Chart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {
  const chartRef = useRef(null);

  // Process data for the chart
  const chartData = {
    labels: data.map((item) => new Date(item.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Gasabo',
        data: data.filter((item) => item.district === 'Gasabo').map((item) => item.demand),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Kicukiro',
        data: data.filter((item) => item.district === 'Kicukiro').map((item) => item.demand),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Nyarugenge',
        data: data.filter((item) => item.district === 'Nyarugenge').map((item) => item.demand),
        borderColor: 'red',
        fill: false,
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
        text: 'Healthcare Demand Over Time',
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={chartData} options={options} />;
}

export default Chart;