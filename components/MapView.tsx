import React, { useEffect, useRef } from 'react';
import { Vet } from '../types';

// Let TypeScript know that L is a global object from the Leaflet script
declare const L: any;

interface MapViewProps {
  vets: Vet[];
  onSelectVet: (vet: Vet) => void;
}

const MapView: React.FC<MapViewProps> = ({ vets, onSelectVet }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null); // To hold the map instance
  const markersRef = useRef<any[]>([]); // To hold marker instances

  // Initialize map
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      const map = L.map(mapContainerRef.current).setView([0.3476, 32.5825], 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      mapRef.current = map;
    }
  }, []); // Runs only once

  // Update markers when vets list changes
  useEffect(() => {
    if (!mapRef.current) return;

    // 1. Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // 2. Add new markers
    vets.forEach(vet => {
      const iconHtml = `
        <div class="w-5 h-5 rounded-full flex items-center justify-center cursor-pointer ${vet.isAvailable ? 'bg-brand/30' : 'bg-muted/30'}">
            <div class="w-3 h-3 rounded-full ${vet.isAvailable ? 'bg-brand' : 'bg-muted'}"></div>
        </div>`;
      
      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-leaflet-icon', // an empty class to avoid default leaflet styles
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      const marker = L.marker([vet.location.lat, vet.location.lng], { icon: customIcon }).addTo(mapRef.current);
      
      const popupContent = `
        <div class="font-sans p-1">
            <h3 class="font-bold text-md text-text">${vet.name}</h3>
            <p class="text-sm text-text-light -mt-1">${vet.clinicName}</p>
            <button id="vet-popup-${vet.id}" class="mt-2 w-full text-center px-3 py-1 bg-brand text-white text-sm font-semibold rounded-md hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand">View Profile</button>
        </div>
      `;

      marker.bindPopup(popupContent, { closeButton: false });
      
      marker.on('popupopen', () => {
          const btn = document.getElementById(`vet-popup-${vet.id}`);
          if (btn) {
              btn.addEventListener('click', () => {
                onSelectVet(vet)
              });
          }
      });
      
      // Also allow clicking the marker itself to navigate
      marker.on('click', () => {
        onSelectVet(vet);
      });

      markersRef.current.push(marker);
    });
  }, [vets, onSelectVet]);


  return (
    <>
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      <style>{`
        .leaflet-popup-content-wrapper {
            border-radius: 12px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
            border: 1px solid #e2e8f0;
        }
        .leaflet-popup-content {
            margin: 12px 14px !important;
            font-family: 'Inter', sans-serif;
            line-height: 1.5;
        }
        .leaflet-popup-tip {
            background: white !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }
        .custom-leaflet-icon {
            background: transparent;
            border: none;
        }
      `}</style>
    </>
  );
};

export default MapView;