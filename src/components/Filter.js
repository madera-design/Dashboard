// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ onFilterChange, googleData, metaData }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [campaignType, setCampaignType] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');

  // Función para manejar cambios en el rango de fechas
  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({ ...prev, [name]: value }));
  };

  // Función para manejar cambios en el tipo de campaña
  const handleCampaignTypeChange = (e) => {
    setCampaignType(e.target.value);
  };

  // Función para manejar cambios en el grupo de edad
  const handleAgeGroupChange = (e) => {
    setAgeGroup(e.target.value);
  };

  // Función para manejar cambios en el género
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Función para aplicar filtros
  const applyFilters = () => {
    const filteredGoogleData = {
      vistasPagina: googleData.vistasPagina.filter(item => {
        const date = new Date(item.fecha);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return date >= startDate && date <= endDate;
      }),
      sesiones: googleData.sesiones.filter(item => {
        const date = new Date(item.fecha);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return date >= startDate && date <= endDate;
      }),
      demografía: {
        edad: googleData.demografía.edad.filter(item => item.rango === ageGroup),
        género: googleData.demografía.género.filter(item => item.tipo === gender),
      }
    };

    const filteredMetaData = {
      campañas: metaData.campañas.filter(item => campaignType === '' || item.nombre.includes(campaignType)),
      anuncios: metaData.anuncios,
      leads: metaData.leads,
      tasaConversión: metaData.tasaConversión,
    };

    onFilterChange(filteredGoogleData, filteredMetaData);
  };

  // Función para remover filtros
  const removeFilters = () => {
    // Resetear los campos de filtro
    setDateRange({ start: '', end: '' });
    setCampaignType('');
    setAgeGroup('');
    setGender('');

    // Restablecer los datos originales
    onFilterChange(googleData, metaData);
  };

  // Función para verificar si el botón de aplicar filtros debe estar habilitado
  const isButtonDisabled = () => {
    return !(
      dateRange.start ||
      dateRange.end ||
      campaignType ||
      ageGroup ||
      gender
    );
  };

  return (
    <div className="filter-container">
      <h2>Filtros</h2>
      <div className="row">
        <div className="filter-section col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <label>Rango de Fechas:</label>
          <input
            type="date"
            name="start"
            value={dateRange.start}
            onChange={handleDateRangeChange}
          />
          <input
            type="date"
            name="end"
            value={dateRange.end}
            onChange={handleDateRangeChange}
          />
        </div>
        <div className="filter-section  col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <label>Tipo de Campaña:</label>
          <input
            type="text"
            value={campaignType}
            onChange={handleCampaignTypeChange}
          />
        </div>
        <div className="filter-section  col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <label>Grupo de Edad:</label>
          <select value={ageGroup} onChange={handleAgeGroupChange}>
            <option value="">Seleccione</option>
            {googleData.demografía.edad.map((item, index) => (
              <option key={index} value={item.rango}>{item.rango}</option>
            ))}
          </select>
        </div>
        <div className="filter-section  col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <label>Género:</label>
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Seleccione</option>
            {googleData.demografía.género.map((item, index) => (
              <option key={index} value={item.tipo}>{item.tipo}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="filter-actions">
        <button
          className='filter-button'
          onClick={applyFilters}
          disabled={isButtonDisabled()}
        >
          Aplicar Filtros
        </button>
        {!isButtonDisabled() && (
          <button
            className='remove-button'
            onClick={removeFilters}
          >
            Remover Filtros
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
