# Dashboard de Análisis de Campañas

Este proyecto es un dashboard interactivo para el análisis de datos de campañas. Utiliza React para la interfaz de usuario, Chart.js para las visualizaciones de datos y proporciona filtros avanzados para una exploración más profunda de la información.

## Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue ](#Despliegue )

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

## Despliegue
Para desplegar tu proyecto en Vercel, sigue estos pasos:
- Instala Vercel CLI: Si aún no tienes la CLI de Vercel instalada, instálala globalmente usando npm: npm install -g vercel
- Autenticación en Vercel: Asegúrate de estar autenticado en Vercel. Si es la primera vez que usas Vercel CLI, ejecuta: vercel login
Sigue las instrucciones para completar el proceso de autenticación.
- Despliegue: En el directorio raíz de tu proyecto, ejecuta: vercel
La CLI de Vercel te guiará a través del proceso de despliegue. Puedes aceptar las configuraciones predeterminadas o personalizarlas según tus necesidades.
- Configuración del Proyecto: Si es la primera vez que despliegas este proyecto, Vercel te pedirá configurar algunos detalles del proyecto, como el nombre y la configuración del dominio.
- Verificación: Una vez completado el despliegue, Vercel te proporcionará una URL para acceder a tu aplicación desplegada. Puedes utilizar esta URL para verificar que todo esté funcionando correctamente.
- Actualizaciones: Para realizar nuevas implementaciones, solo necesitas ejecutar nuevamente el comando vercel en el directorio del proyecto. Vercel manejará las actualizaciones y el enrutamiento de manera automática.


![image](https://github.com/user-attachments/assets/8113d13a-6761-4d4e-9cde-2907aea2879f)

