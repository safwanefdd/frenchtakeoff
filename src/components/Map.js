import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { isEmpty } from "./Utils";

// Clé d'accès Mapbox (utilise la tienne ici)
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fmd2FuZWZkZCIsImEiOiJjbTFjMjRscWMxd2hlMmpxeDJvYW4zNDhxIn0.baGxA7YI7TI1TfBSBf2hAg";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 2.3488; // Longitude initiale (centre sur Paris)
  const lat = 48.8534; // Latitude initiale (centre sur Paris)
  const zoom = 2; // Zoom initial pour voir tous les pays francophones

  // Tableau complet des pays et îles francophones avec leurs coordonnées

  useEffect(() => {
    if (map.current || isEmpty(mapContainer.current)) return; // Si la carte est déjà initialisée ou si le conteneur est vide, ne pas la recréer
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Style de la carte
      center: [lng, lat], // Coordonnées du centre
      zoom: zoom, // Niveau de zoom
    });

    // Ajouter des marqueurs sur la carte pour chaque pays/île francophone
    markers.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([marker.lng, marker.lat]) // Position du marqueur
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // Ajouter un popup pour chaque marqueur
            .setText(marker.name)
        ) // Afficher le nom du pays ou de l'île dans le popup
        .addTo(map.current); // Ajouter le marqueur à la carte
    });
  }, []);

  return (
    <div className="map-container">
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

const markers = [
  // Afrique
  { name: "Bénin", lng: 2.6326, lat: 6.3703 },
  { name: "Burkina Faso", lng: -1.5181, lat: 12.3714 },
  { name: "Burundi", lng: 29.9189, lat: -3.3731 },
  { name: "Cameroun", lng: 11.5187, lat: 3.848 },
  { name: "Centrafrique", lng: 20.9394, lat: 4.3967 },
  { name: "Comores", lng: 43.2551, lat: -11.7042 },
  { name: "Congo (République du Congo)", lng: 15.8277, lat: -0.228 },
  {
    name: "Congo (République Démocratique du Congo)",
    lng: 15.2663,
    lat: -4.4419,
  },
  { name: "Côte d'Ivoire", lng: -5.5471, lat: 7.5399 },
  { name: "Djibouti", lng: 43.15, lat: 11.595 },
  { name: "Gabon", lng: 9.4518, lat: 0.4162 },
  { name: "Guinée", lng: -13.7007, lat: 9.6412 },
  { name: "Guinée équatoriale", lng: 9.4536, lat: 1.6132 },
  { name: "Madagascar", lng: 47.5162, lat: -18.8792 },
  { name: "Mali", lng: -7.9907, lat: 12.6392 },
  { name: "Niger", lng: 2.1167, lat: 13.5116 },
  { name: "Rwanda", lng: 30.0589, lat: -1.9499 },
  { name: "Sénégal", lng: -17.4734, lat: 14.6928 },
  { name: "Seychelles", lng: 55.454, lat: -4.6796 },
  { name: "Tchad", lng: 15.0444, lat: 12.115 },
  { name: "Togo", lng: 1.2074, lat: 6.1375 },

  // Europe
  { name: "Belgique", lng: 4.3517, lat: 50.8503 },
  { name: "France", lng: 2.3488, lat: 48.8534 },
  { name: "Luxembourg", lng: 6.1319, lat: 49.6117 },
  { name: "Monaco", lng: 7.4246, lat: 43.7384 },
  { name: "Suisse", lng: 6.1432, lat: 46.2044 },

  // Amérique
  { name: "Canada", lng: -75.6972, lat: 45.4215 }, // Ottawa
  { name: "Haïti", lng: -72.3364, lat: 18.5944 }, // Port-au-Prince
  { name: "Saint-Pierre-et-Miquelon", lng: -56.3333, lat: 46.7758 },
  { name: "Guadeloupe", lng: -61.551, lat: 16.265 },
  { name: "Martinique", lng: -61.0242, lat: 14.6415 },
  { name: "Guyane française", lng: -53.1257, lat: 4.2923 },

  // Océanie
  { name: "Vanuatu", lng: 168.3273, lat: -17.7333 },
  { name: "Nouvelle-Calédonie", lng: 166.4505, lat: -22.2558 },
  { name: "Polynésie française", lng: -149.4068, lat: -17.6797 },
  { name: "Wallis-et-Futuna", lng: -178.1165, lat: -13.7681 },

  // Asie
  { name: "Liban", lng: 35.8623, lat: 33.8547 },
];

export default Map;
