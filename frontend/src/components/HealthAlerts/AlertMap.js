import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './AlertMap.css';

function AlertMap({ alerts, onAlertClick }) {
  useEffect(() => {
    const mapContainer = document.getElementById('alert-map');
    if (!mapContainer) return;

    const map = L.map(mapContainer).setView([-1.9441, 30.0619], 12); // Kigali coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add markers for alerts
    alerts.forEach((alert) => {
      const marker = L.marker([-1.9441, 30.0619]) // Replace with actual coordinates
        .addTo(map)
        .bindPopup(alert.location);

      marker.on('click', () => onAlertClick(alert));
    });

    return () => {
      map.remove();
    };
  }, [alerts, onAlertClick]);

  return <div id="alert-map" className="alert-map"></div>;
}

export default AlertMap;