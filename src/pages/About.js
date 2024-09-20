import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigation />
      <h1 className="title">À propos</h1>
      <div className="infoContainer">
        <div className="info">
          <h2>Qui suis-je ?</h2>
          <p>
            Je m’appelle Nathalie, je suis française et j’habite actuellement
            dans le sud de la France. J’ai une grande famille : 6 enfants et un
            petit fils ! Mes enfants sont grands maintenant. J’ai aussi un chat
            et un lapin !
          </p>
          <p>
            J’aime voyager, découvrir de nouveaux horizons, de nouvelles
            cultures et de nouvelles saveurs (je suis très gourmande !) J’aime
            tout particulièrement la nature et les animaux. Je suis professeure
            de français langue étrangère diplômée de l’Alliance française de
            Paris. j’enseigne le français en ligne depuis plus de 5 ans sur
            différentes plateformes de langues et j’ai créé mon école de langue
            en 2024 pour être indépendante.
          </p>
          <p>
            J’adore mon travail ! Ma plus grande satisfaction est de constater
            les progrès de mes élèves, leurs succès, leur confiance retrouvée et
            leur joie de pouvoir enfin parler français !
          </p>
          <p>
            Je suis une personne très patiente. J’enseigne avec beaucoup de
            douceur et d’attention dans une ambiance joyeuse et détendue. Je
            m’adapte aux objectifs, besoins et gouts de chacun de mes élèves.
          </p>
          <p>
            J’ai déjà accompagné plus de 300 élèves dans leur apprentissage !
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
