# Dashboard de Análisis de Campañas

Este proyecto es un dashboard interactivo para el análisis de datos de campañas. Utiliza React para la interfaz de usuario, Chart.js para las visualizaciones de datos y proporciona filtros avanzados para una exploración más profunda de la información.

## Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)

## Características

- Visualización de datos utilizando gráficos de líneas, barras, dona y pastel.
- Filtros avanzados para análisis por rango de fechas, tipo de campaña, grupo de edad y género.
- Funcionalidad de drill-down para explorar datos en detalle.
- Responsive design para una experiencia de usuario óptima en diferentes dispositivos.

## Tecnologías

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Chart.js**: Biblioteca de gráficos para visualizar datos.
- **React Testing Library**: Herramienta para pruebas de componentes de React.
- **Jest**: Framework de pruebas para JavaScript.

## Instalación

1. **Clona el repositorio:**
   git clone https://github.com/tuusuario/tu-repositorio.git
2. **Navega al directorio del proyecto:**
   cd tu-repositorio
3. **Instala las dependencias:**
   npm install
4. **Inicia el servidor de desarrollo:**
   npm start

## Uso
- **Carga de Datos:** Los datos se cargan desde archivos JSON locales (/data/googleData.json y /data/metaData.json). Asegúrate de que estos archivos estén disponibles en el directorio public/data.

- **Aplicar Filtros:** Utiliza el componente de filtro para ajustar el rango de fechas, tipo de campaña, grupo de edad y género. Haz clic en "Aplicar Filtros" para actualizar los gráficos.

- **Explorar Gráficos:** Los gráficos se actualizan en función de los datos filtrados. Puedes hacer clic en puntos de datos para explorar detalles adicionales.

## Estructura del Proyecto
- src/components/: Componentes React utilizados en el proyecto.
   - Dashboard.js: Componente principal que maneja la carga de datos, filtros y renderiza los gráficos.
   - Chart.js: Componente para renderizar gráficos usando Chart.js.
   - Filter.js: Componente para aplicar filtros a los datos.
- public/data/: Directorio que contiene los archivos JSON con los datos de prueba.
- src/tests/: Pruebas unitarias para los componentes React.
- package.json: Archivo de configuración del proyecto y dependencias.

