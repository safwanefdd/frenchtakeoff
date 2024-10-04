import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TestNiveauQuiz from "../components/TestNiveauQuiz";

const TestNiveau = () => {
  return (
    <div className="testNiveauPage">
      <Navigation />
      <div className="testNiveauContainer">
        <h1 className="title">Test de Niveau</h1>
        <TestNiveauQuiz />
      </div>
      <Footer />
    </div>
  );
};

export default TestNiveau;
