import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './DemandMap.css';

function DemandMap({ filters }) {
  useEffect(() => {
    const mapContainer = document.getElementById('demand-map');
    if (!mapContainer) return;

    const map = L.map(mapContainer).setView([-1.9441, 30.0619], 12); // Kigali coordinates
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add markers for demand hotspots
    const markers = [
      { lat: -1.9441, lng: 30.0619, demand: 'High', facility: 'Hospital A' },
      { lat: -1.9536, lng: 30.0605, demand: 'Medium', facility: 'Clinic B' },
    ];

    markers.forEach((marker) => {
      const color = marker.demand === 'High' ? 'red' : marker.demand === 'Medium' ? 'orange' : 'green';
      L.circleMarker([marker.lat, marker.lng], { radius: 10, color })
        .addTo(map)
        .bindPopup(`${marker.facility}: ${marker.demand} Demand`);
    });

    return () => {
      map.remove();
    };
  }, [filters]);

  return <div id="demand-map" className="demand-map"></div>;
}

export default DemandMap;