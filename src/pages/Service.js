import React, { useState } from "react";
import CoursIndividuel from "../components/CoursIndividuel";
import AtelierConversation from "../components/AtelierConversation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Service = () => {
  const [activeService, setActiveService] = useState("cours");

  const handleSwitch = (service) => {
    setActiveService(service);
  };

  return (
    <div className="servicePage">
      <Navigation />
      <h1 className="title">Nos Services</h1>
      <div className="desc">
        <p>
          Mes cours sont entièrement personnalisés. Je m’adapte à tes demandes
          et tes besoins spécifiques. Les cours ont lieu dans une ambiance
          amicale, sans stress pour booster ta motivation et te guider vers le
          succès.
        </p>
      </div>
      <div className="switcherContainer">
        <button
          onClick={() => handleSwitch("cours")}
          className={activeService === "cours" ? "active" : ""}
        >
          Cours Individuel
        </button>
        <button
          onClick={() => handleSwitch("atelier")}
          className={activeService === "atelier" ? "active" : ""}
        >
          Atelier de Conversation
        </button>
      </div>
      <div>
        {activeService === "cours" ? (
          <CoursIndividuel />
        ) : (
          <AtelierConversation />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Service;
