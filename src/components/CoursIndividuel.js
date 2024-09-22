import React, { useState } from "react";
import CoursIndividuelPonctuel from "./CoursIndividuelPonctuel";
import CoursIndividuelAbonnement from "./CoursIndividuelAbonnement";

const CoursIndividuel = () => {

  const [activeService, setActiveService] = useState("tarif");

  const handleSwitch = (service) => {
    setActiveService(service);
  };

  return (
    <div className="coursIndividuelInfo">
      <div className="card">
        <h2>Cours individuel</h2>
        <p>Cours entierement personnalisés et adaptés à tes besoins</p>
      </div>
      <div className="infoCours" id="infoCours">
        <ul>
          <li>
            Tu aimes le français et tu souhaites progresser, mais tu te sens
            bloqué ?
          </li>
          <li>
            Tu cherches des réponses sur certains points de la langue comme la
            grammaire, la prononciation ou le vocabulaire ?
          </li>
          <li>
            Tu es passionné par le français et tu as envie d’aller plus loin
            dans ton apprentissage?
          </li>
          <br />
          <li>
            Avec un cours privé, je réponds directement à tes besoins et à tes
            questions. C’est une expérience unique entre toi et moi, pour une
            leçon 100 % personnalisée et efficace !
          </li>
          <br />
          <li>
            Avant le cours, nous discutons de tes envies et objectifs, et je
            prépare une séance spécialement adaptée pour toi !
          </li>
          <br />
          <li>
            Pendant le cours, je t'accompagne dans ton apprentissage , tu
            apprends plein de choses et en plus , nous passons un moment très
            agréable !
          </li>
          <br />
          <li>
            Après le cours, je t’envoie la leçon et toutes les notes et
            corrections. J’ajoute aussi des exercices et des conseils pour
            pratiquer !
          </li>
        </ul>
      </div>
      <div className="tarif" id="tarif">
        <h2>Tarifs</h2>
        <div className="switcherContainer">
        <button
          onClick={() => handleSwitch("tarif")}
          className={activeService === "tarif" ? "active" : ""}
        >
          Ponctuel
        </button>
        <button
          onClick={() => handleSwitch("atelier")}
          className={activeService === "atelier" ? "active" : ""}
        >
          Abonnement
        </button>
      </div>
      <div>
        {activeService === "tarif" ? (
          <CoursIndividuelPonctuel />
        ) : (
          <CoursIndividuelAbonnement />
        )}
      </div>
        
      </div>
    </div>
  );
};

export default CoursIndividuel;
