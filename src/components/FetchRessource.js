import React, { useEffect, useState } from "react";
import { isEmpty } from "./Utils"; // Assurez-vous que cette fonction est bien définie
import axios from "axios";

const FetchRessource = () => {
  const [ressources, setRessources] = useState([]);

  useEffect(() => {
    axios
      .get("/data/ressources.json") // Utiliser un chemin correct
      .then((response) => {
        console.log("Données récupérées:", response.data); // Affiche les données
        setRessources(response.data.ressources); // Accède directement aux ressources
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des ressources:", error)
      );
  }, []);

  return (
    <div className="fetchRessourcesComponent">
      <h2>Liste des Ressources</h2>
      <div className="ressourcesList">
        {!isEmpty(ressources) ? ( // Vérifie si les ressources ne sont pas vides
          ressources.map((ressource) => (
            <div key={ressource.id} className="ressourceCard">
              <div className="imageContainer">
                <img src={ressource.image} alt={ressource.name} />
              </div>
              <div className="contentContainer">
                <h3>{ressource.name}</h3>
                <p>{ressource.description}</p>
                <a
                  href={ressource.link + "?raw=true"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Télécharger
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune ressource disponible.</p>
        )}
      </div>
    </div>
  );
};

export default FetchRessource;
