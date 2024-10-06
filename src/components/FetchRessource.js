import React from "react";
import { isEmpty } from "./Utils";

const FetchRessource = () => {
  const ressources = [
    {
      id: "1",
      name: "Ebook Vacances",
      description: "Un super ebook pour préparer vos vacances",
      image: "/ressources/1-Ebook_Vacances.jpg", // Assurez-vous que le chemin est correct
      link: "https://github.com/safwanefdd/FrenchTakeOff_Ressources/blob/main/ebook_vacances.pdf.zip",
    },
    {
      id: "2",
      name: "Découvre Marseille",
      description: "Un guide pour découvrir Marseille",
      image: "/ressources/2-Decouvre_Marseille.jpg", // Assurez-vous que le chemin est correct
      link: "https://github.com/safwanefdd/FrenchTakeOff_Ressources/blob/main/Ebook%20de%CC%81couverte%20Marseille.pdf.zip",
    },
    {
      id: "3",
      name: "Voyage en France",
      description: "Un guide pour voyager en France !",
      image: "/ressources/3-Ton_Guide_De_Voyage_En_France.jpg", // Assurez-vous que le chemin est correct
      link: "https://github.com/safwanefdd/FrenchTakeOff_Ressources/blob/main/Guide%20de%20voyage%20en%20France.pdf.zip",
    }
  ];

  return (
    <div className="fetchRessourcesComponent">
      <h2>Liste des Ressources</h2>
      <div className="ressourcesList">
        {!isEmpty(ressources) ? (
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
                  // target="_blank"
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
