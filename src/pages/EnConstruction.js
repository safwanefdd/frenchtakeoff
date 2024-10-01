import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const EnConstruction = () => {
  return (
    <div className="enConstructionPage">
      <Navigation />
      <div className="enConstructionContainer">
        <h1 className="title">🚧 En construction 🚧</h1>
        <p>La page que vous cherchez est en construction.</p>
        <Link to="/" className="btn">Retourner à l'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default EnConstruction;
