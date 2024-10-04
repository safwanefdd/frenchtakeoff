import React, { useState } from "react";
import Confetti from "react-confetti";
import CopyButton from "./CopyButton";

const TestNiveauQuiz = () => {
  const [response, setResponse] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false); // État pour contrôler l'affichage des confettis

  const handleValidation = () => {
    if (response && questions[currentQuestionIndex].answer === response) {
      setScore(score + 1);
    }
    setResponse(null);

    if (isLastQuestion) {
      // Détermine le niveau basé sur le score
      if (score <= 5) {
        setResultMessage("A0. Tu peux faire mieux !");
        setShowConfetti(false); // Pas de confettis pour A0
      } else if (score <= 14) {
        setResultMessage("A1. Bien joué, mais il y a encore du travail !");
        setShowConfetti(false); // Pas de confettis pour A1
      } else if (score <= 20) {
        setResultMessage("A2 ! Bravo, tu es sur la bonne voie !");
        setShowConfetti(false); // Pas de confettis pour A2
      } else if (score <= 26) {
        setResultMessage("B1 ! Excellent travail, continue comme ça !");
        setShowConfetti(true); // Montre les confettis pour B1
      } else {
        setResultMessage("B2 ! Félicitations, tu es vraiment bon !");
        setShowConfetti(true); // Montre les confettis pour B2
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="testNiveauQuizComponent">
      {showConfetti && <Confetti />} {/* Affiche les confettis si nécessaire */}
      <h3>Choisis la bonne réponse :</h3>
      <div className="testNiveauQuizContainer">
        {currentQuestionIndex < questions.length ? (
          <h3>
            Question {currentQuestionIndex + 1}/{questions.length}
          </h3>
        ) : null}
        {currentQuestionIndex < questions.length ? (
          <div className="question">
            <h4>{questions[currentQuestionIndex].question}</h4>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setResponse(option)}
                  className={`option ${response === option ? "selected" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="validate"
              onClick={handleValidation}
              disabled={response === null}
            >
              {isLastQuestion ? "Terminer le quiz" : "Valider"}
            </button>
          </div>
        ) : (
          <div className="result">
            <h4>Quiz terminé !</h4>
            <h3>{resultMessage}</h3>
            <h4>Je t'offre 15€ sur les cours privé !</h4>
            <h4>Bienvenue sur French Take Off !</h4>
            <CopyButton messageACopier="BIENVENUE15" />
          </div>
        )}
      </div>
    </div>
  );
};

const questions = [
  {
    question: "Je .......... Sophie Dupont.",
    options: ["m'appelle", "m'appeler", "s'appeler", "s'appelle"],
    answer: "m'appelle",
  },
  {
    question: "Vous .......... dans ce quartier ?",
    options: ["travailler", "parler", "vivons", "habitez"],
    answer: "habitez",
  },
  {
    question: "Vous .......... quel âge ?",
    options: ["avez", "vivez", "êtes", "faîtes"],
    answer: "avez",
  },
  {
    question: "Sylvie .......... secrétaire dans une grande entreprise.",
    options: ["est", "c'est un", "travaille", "c'est une"],
    answer: "est",
  },
  {
    question: ".......... papiers s'il vous plait !",
    options: ["Votre", "Tes", "Vos", "Ton"],
    answer: "Vos",
  },
  {
    question: "Je n'aime pas .......... poisson.",
    options: ["le", "de la", "un", "du"],
    answer: "le",
  },
  {
    question: "Marie et Paul ? Je les connais, je travaille avec ..........",
    options: ["elles", "leur", "ils", "eux"],
    answer: "eux",
  },
  {
    question: "Tu veux .......... lait dans ton café ?",
    options: ["du", "de la", "le", "un"],
    answer: "du",
  },
  {
    question: "Mon oncle vit depuis longtemps au ..........",
    options: ["Etats-Unis", "Canada", "Suisse", "Pologne"],
    answer: "Canada",
  },
  {
    question: "Thomas s'est faché avec Pierre. Il ne .......... parle plus.",
    options: ["le", "lui", "se", "leur"],
    answer: "lui",
  },
  {
    question:
      "- N'oublie pas d'aller à la pharmacie !\n - Oui, j'.......... vais tout de suite.",
    options: ["en", "y", "au", "irai"],
    answer: "y",
  },
  {
    question: "- Tu veux encore du thé ? \n- Oui, j'.......... veux.",
    options: ["en", "y", "au", "irai"],
    answer: "en",
  },
  {
    question: "Le directeur ? C'est l'homme .......... porte la veste noire.",
    options: ["qui", "que", "dont", "où"],
    answer: "qui",
  },
  {
    question: "Il est malade .......... deux semaines.",
    options: ["après", "depuis", "longtemps", "il y a"],
    answer: "depuis",
  },
  {
    question: "La pollution est un problème .......... on parle beaucoup.",
    options: ["dont", "où", "qui", "que"],
    answer: "dont",
  },
  {
    question: "J'ai téléphoné .......... enfants.",
    options: ["aux", "pour", "les", "à les"],
    answer: "aux",
  },
  {
    question: "Mes amis sont très fiers de .......... enfants.",
    options: ["leur", "lui", "les", "leurs"],
    answer: "leurs",
  },
  {
    question:
      "C'est un excellent film, .......... l'histoire n'est pas très originale.",
    options: ["puisque", "car", "même si", "parce que"],
    answer: "même si",
  },
  {
    question: "Attention! Tu .......... !",
    options: ["vas tomber", "tomberas", "vas tombé", "vais tomber"],
    answer: "vas tomber",
  },
  {
    question: "L'histoire que .......... est authentique.",
    options: [
      "je vais vous parler",
      "je vais vous raconter",
      "je vous parlerai",
      "je me souviens",
    ],
    answer: "je vais vous raconter",
  },
  {
    question: ".......... la pluie, nous avons passé un week-end merveilleux.",
    options: ["À cause", "Bien que", "Malgré", "Faute de"],
    answer: "Malgré",
  },
  {
    question: "- Il me tarde d'être en vacances !",
    options: [
      "- Non, pas cette fois...",
      "- Oui, ça va être génial !",
      "- L'hôtel est nul.",
      "- Moi non plus, je ne veux pas.",
    ],
    answer: "- Oui, ça va être génial !",
  },
  {
    question: "Il faut absolument que vous .......... ce travail pour demain !",
    options: ["rendrez", "terminerez", "finissiez", "achevez"],
    answer: "finissiez",
  },
  {
    question: "Si .......... à temps, il n'aurait pas eu cet accident.",
    options: [
      "je l'aurais prévenu",
      "je l'avais prévenu",
      "je le préviendrais",
      "je le préviens",
    ],
    answer: "je l'avais prévenu",
  },
  {
    question:
      "Est ce qu'il y a encore des lettres .......... je n'ai pas répondu ?",
    options: ["desquelles", "auxquelles", "pour lesquelles", "à qui"],
    answer: "auxquelles",
  },
  {
    question: "J'ai passé la journée ..........",
    options: ["travailler", "en travaillant", "à travailler", "travaillant"],
    answer: "à travailler",
  },
  {
    question:
      "C'est dommage que vous .......... à ce concert, c'était vraiment super !",
    options: [
      "n'assistiez pas",
      "n'assistez",
      "n'assisterez pas",
      "n'ayez pas assisté",
    ],
    answer: "n'ayez pas assisté",
  },
  {
    question:
      "En sortant de chez lui, il s'est rendu compte qu' .......... la fenêtre.",
    options: [
      "il ne fermait pas",
      "il n'avait pas fermé",
      "il ne ferme pas",
      "il n'a pas fermé",
    ],
    answer: "il n'avait pas fermé",
  },
  {
    question: "Quand tu .......... ce travail, tu pourras sortir.",
    options: ["avais terminé", "termines", "aurais terminé", "auras terminé"],
    answer: "auras terminé",
  },
  {
    question: "Les fleurs qu'ils ont .......... étaient ravissantes.",
    options: ["cueillies", "cueillaient", "cueilli", "couper"],
    answer: "cueillies",
  },
  {
    question: "Je suis  étonné que ça te ..........",
    options: ["plaisait", "plaise", "plaît", "plaisent"],
    answer: "plaise",
  },
  {
    question: "Tu m' .......... veux toujours ?",
    options: ["as", "ont", "y", "en"],
    answer: "en",
  },
];

export default TestNiveauQuiz;
