// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Filter from './Filter';

const Dashboard = () => {
  const [googleData, setGoogleData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [filteredGoogleData, setFilteredGoogleData] = useState(null);
  const [filteredMetaData, setFilteredMetaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const googleResponse = await fetch('/data/googleData.json');
        const googleJson = await googleResponse.json();
        setGoogleData(googleJson);
        setFilteredGoogleData(googleJson);

        const metaResponse = await fetch('/data/metaData.json');
        const metaJson = await metaResponse.json();
        setMetaData(metaJson);
        setFilteredMetaData(metaJson);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filteredGoogleData, filteredMetaData) => {
    setFilteredGoogleData(filteredGoogleData);
    setFilteredMetaData(filteredMetaData);
  };

  const processChartData = (data, type) => {
    switch (type) {
      case 'vistasPagina':
        return {
          labels: data.vistasPagina.map(item => item.fecha),
          values: data.vistasPagina.map(item => item.vistas)
        };
      case 'sesiones':
        return {
          labels: data.sesiones.map(item => item.fecha),
          values: data.sesiones.map(item => item.sesiones)
        };
      case 'demografíaEdad':
        return {
          labels: data.demografía.edad.map(item => item.rango),
          values: data.demografía.edad.map(item => item.porcentaje)
        };
      case 'demografíaGenero':
        return {
          labels: data.demografía.género.map(item => item.tipo),
          values: data.demografía.género.map(item => item.porcentaje)
        };
      case 'campañas':
        return {
          labels: data.campañas.map(item => item.nombre),
          values: data.campañas.map(item => item.impresiones)
        };
      case 'anuncios':
        return {
          labels: data.anuncios.map(item => item.nombre),
          values: data.anuncios.map(item => item.alcance)
        };
      case 'leads':
        return {
          labels: data.leads.map(item => item.nombre),
          values: data.leads.map(item => item.valorDeVida)
        };
      default:
        return { labels: [], values: [] };
    }
  };

  if (!googleData || !metaData) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <header className='header'>
        <h1 className='title'>Dashboard de Análisis de Campañas</h1>
      </header>
      <Filter
        onFilterChange={handleFilterChange}
        googleData={googleData}
        metaData={metaData}
      />
      <div className="dashboard-grid">
        <div className="chart-item">
          <h2>Vistas de Página</h2>
          <Chart data={processChartData(filteredGoogleData, 'vistasPagina')} type='line' />
        </div>
        <div className="chart-item">
          <h2>Sesiones</h2>
          <Chart data={processChartData(filteredGoogleData, 'sesiones')} type='bar' />
        </div>
        <div className="chart-item">
          <h2>Demografía por Edad</h2>
          <Chart data={processChartData(filteredGoogleData, 'demografíaEdad')} type='doughnut' />
        </div>
        <div className="chart-item">
          <h2>Demografía por Género</h2>
          <Chart data={processChartData(filteredGoogleData, 'demografíaGenero')} type='pie' />
        </div>
        <div className="chart-item">
          <h2>Campañas</h2>
          <Chart data={processChartData(filteredMetaData, 'campañas')} type='bar' />
        </div>
        <div className="chart-item">
          <h2>Anuncios</h2>
          <Chart data={processChartData(filteredMetaData, 'anuncios')} type='doughnut' />
        </div>
        <div className="chart-item">
          <h2>Leads</h2>
          <Chart data={processChartData(filteredMetaData, 'leads')} type='pie' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
