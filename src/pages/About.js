import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Map from "../components/Map";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPage">
      <Navigation />
      <h1 className="title">À propos</h1>
      <div className="infoContainer">
        <div className="info">
          <h2>Qui suis-je ?</h2>
          <p>
            Salut, je m'appelle Nathalie. Passionnée par l’éducation, j’ai
            commencé par suivre une formation Montessori avant de travailler
            avec des enfants, puis des adultes. Au fil des années, j'ai acquis
            une solide expérience en tant que bénévole dans l'alphabétisation et
            l'enseignement du français. En 2019, avec l’arrivée du Covid, j’ai
            décidé de me tourner vers l'enseignement en ligne. Et comme cette
            expérience m'a beaucoup plu, j'ai choisi de m'y consacrer
            entièrement.
          </p>
          <p>
            Mon approche pédagogique repose sur l’accompagnement personnalisé et
            l'adaptation aux besoins spécifiques de chaque apprenant. Que tu
            sois débutant ou que tu souhaites perfectionner tes compétences, je
            suis là pour te guider pas à pas. Mon objectif est de rendre
            l’apprentissage du français non seulement accessible, mais aussi
            amusant et stimulant.
          </p>
          <p>
            Dans mes cours, je mets un point d'honneur à utiliser des méthodes
            modernes et interactives, tout en intégrant les principes Montessori
            qui favorisent l’autonomie et la confiance en soi. Je crée un
            environnement d’apprentissage dynamique où tu peux progresser à ton
            propre rythme, avec des outils en ligne innovants pour rendre chaque
            leçon engageante et motivante.
          </p>
          <p>
            Pourquoi choisir mes cours en ligne ? <br />
            Avec plusieurs années d'expérience, j'ai développé une approche
            unique qui allie pédagogie bienveillante et utilisation des
            technologies numériques. Mes élèves apprécient particulièrement ma
            capacité à rendre l'apprentissage du français fluide et naturel.
            Ensemble, nous ferons de l’apprentissage une aventure enrichissante
            et épanouissante.
          </p>
          <p>
            Si tu es prêt(e) à te lancer dans l'apprentissage du français avec
            moi, n'hésite pas à me contacter pour en savoir plus sur mes
            services. Ensemble, nous transformerons ton apprentissage en
            réussite !
          </p>
        </div>
        <div className="banner">
          <p>
            Je t’aide à atteindre tes objectifs, à dépasser tes blocages et
            prendre confiance en toi ! Je suis là pour t’accompagner dans ce
            voyage : nous partons de là ou tu es et nous allons là où tu veux
            aller !
          </p>
          <Link to="/services" className="btn">
            En savoir plus
          </Link>
        </div>
        <div className="mapCountries">
          <h2>Les pays et îles francophones</h2>
          <p>
            Pourquoi apprendre le français? Le français est bien plus qu'une
            langue, c'est une véritable porte d'entrée vers un monde riche et
            diversifié. Parlée par environ 300 millions de personnes sur cinq
            continents, la langue française est officielle dans 29 pays, et est
            utilisée dans des régions variées comme l'Europe, l'Afrique, les
            Caraïbes, et même le Pacifique. Apprendre le français, c'est
            s'ouvrir à un réseau de pays francophones avec des cultures
            fascinantes, des traditions uniques et des opportunités
            internationales
          </p>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
