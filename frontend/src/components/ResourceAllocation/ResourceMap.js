import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './ResourceMap.css';

function ResourceMap() {
  useEffect(() => {
    const mapContainer = document.getElementById('resource-map');
    if (!mapContainer) return;

    const map = L.map(mapContainer).setView([-1.9441, 30.0619], 12); // Kigali coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add markers for hospitals/clinics
    const markers = [
      { lat: -1.9441, lng: 30.0619, name: 'Hospital A' },
      { lat: -1.9536, lng: 30.0605, name: 'Clinic B' },
    ];

    markers.forEach((marker) => {
      L.marker([marker.lat, marker.lng])
        .addTo(map)
        .bindPopup(marker.name);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="resource-map" className="resource-map"></div>;
}

export default ResourceMap;