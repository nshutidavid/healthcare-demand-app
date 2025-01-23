// frontend/src/Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  useEffect(() => {
    // Ensure the map container exists in the DOM
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Initialize the map
    const map = L.map(mapContainer).setView([-1.9441, 30.0619], 12); // Kigali coordinates

    // Add a tile layer (map background)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Clean up the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default Map;