import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQComponent">
      <h2>F.A.Q</h2>
      <div className="container">
        {faqData.map((item, index) => (
          <div
            className={`card ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <div className="card-header" onClick={() => toggleCard(index)}>
              <h3>{item.question}</h3>
            </div>
            <div className="card-body">
              {typeof item.answer === "string" ? (
                <p>{item.answer}</p>
              ) : (
                item.answer()
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "Comment s’inscrire aux cours de French Take off ?",
    answer: `Rien de plus facile ! Choisis le cours et la formule adaptés à tes besoins et réserve en remplissant le formulaire. Tu hésites encore sur le forfait qui te conviendrait le mieux ? Réserve un appel visio gratuit de 30 minutes. J’évaluerai ton niveau de français et tes besoins pour te proposer la meilleure option. Une fois ton inscription et ton premier paiement confirmés, il ne reste plus qu'à commencer les cours !`,
  },
  {
    question: "C’est quoi un cours de français sur French Take off ?",
    answer: `Tous mes cours sont entièrement personnalisés et sur mesure, en fonction de tes besoins et de tes attentes. Mes leçons sont flexibles et je m’adapte vraiment à toi tout cela en respectant le CECRL (Cadre Européen Commun de Référence pour les Langues). Je mets l’accent sur la compréhension et la pratique orale pour que tu progresses rapidement et efficacement !`,
  },
  {
    question: "Comment se passent les cours ?",
    answer: `Dès ton inscription, tu auras accès à un espace partagé sur Google Classroom. C’est ici que tu trouveras toutes les ressources et exercices nécessaires à ton apprentissage. Ensuite, nous passerons ensemble 1h par séance, une à 2 fois par semaine, selon le forfait choisi, en immersion totale dans la langue française. Ainsi, tu progresseras rapidement dans tous les domaines : parler, écrire, lire et comprendre.`,
  },
  {
    question: "Combien coûtent les cours de français ?",
    answer: () => (
      <>
        Tout dépend de la formule que tu choisis ! Je propose plusieurs forfaits
        avec des tarifs dégressifs selon le nombre d’heures incluses dans le
        pack. Découvre tous mes tarifs{" "}
        <Link to="/services" target="_blank">
          ICI
        </Link>
        .
      </>
    ),
  },
  {
    question: "De quel équipement ai-je besoin pour suivre les cours ?",
    answer: `Il te faut un ordinateur et une connexion internet ! Et c’est tout ! Je fournis tout le reste !`,
  },
  {
    question: "Je ne connais pas mon niveau de français. Quel cours choisir ?",
    answer: () => (
      <>
        Tu peux passer le test gratuit <Link to="/construction" target="_blank">ICI</Link> pour découvrir ton niveau. Tu peux
        aussi réserver un appel gratuit d’environ 30minutes avec moi.
        J’évaluerai ton niveau de français et, selon tes besoins et objectifs,
        je te conseillerai le cours qui te correspond le mieux. Cet appel est
        sans engagement et entièrement gratuit !
      </>
    ),
  },
  {
    question:
      "Est-ce que je peux réserver un cours avec une ou des personnes que je connais ?",
    answer: `Oui, bien sûr ! Et vous pourrez profiter d’un tarif réduit !`,
  },
  {
    question: "J’ai un empêchement, est-ce que je peux annuler un cours ?",
    answer: `Oui, tu peux ! Pour annuler un cours, il faut m’envoyer un message 48h à l’avance.`,
  },
];

export default FAQ;
