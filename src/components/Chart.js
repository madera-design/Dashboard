// src/components/Chart.js
import React from 'react';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data, type = 'line' }) => {
  // Verifica si no hay datos
  const hasData = data.values && data.values.length > 0;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Metrics',
        data: data.values,
        backgroundColor: type === 'doughnut' || type === 'pie'
          ? ['#FF6384', '#36A2EB']  // Dos colores para doughnut y pie
          : 'rgb(54, 162, 235)',    // Un solo color para otros tipos de gráficos
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: type === 'doughnut' || type === 'pie' ? 0 : 1,
        fill: type === 'line' ? true : false,
        tension: type === 'line' ? 0.1 : 0,
      },
    ],
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Si no hay datos, muestra "Sin datos" */}
      {!hasData ? (
        <div style={{ textAlign: 'center', fontSize: '18px', color: '#999', padding: '20px' }}>
          Sin datos
        </div>
      ) : (
        // Renderiza el gráfico si hay datos
        <>
          {type === 'line' && <Line data={chartData} />}
          {type === 'bar' && <Bar data={chartData} />}
          {type === 'doughnut' && <Doughnut data={chartData} />}
          {type === 'pie' && <Pie data={chartData} />}
        </>
      )}
    </div>
  );
};

export default Chart;
