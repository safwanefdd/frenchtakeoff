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
        setResultMessage(
          "A0. Tu as tout à apprendre ! Tu es au bon endroit pour commencer ton aventure en français ! 🚀"
        );
        setShowConfetti(false); // Pas de confettis pour A0
      } else if (score <= 14) {
        setResultMessage(
          "A1. Bravo, tu es sur la bonne voie ! Les bases sont posées, maintenant, on va construire ensemble ! 🛠️"
        );
        setShowConfetti(false); // Pas de confettis pour A1
      } else if (score <= 20) {
        setResultMessage(
          "A2 ! Tu avances bien ! Ton français prend forme, bientôt tu pourras impressionner tout le monde ! ✨"
        );
        setShowConfetti(false); // Pas de confettis pour A2
      } else if (score <= 26) {
        setResultMessage(
          "B1 ! Super boulot ! Tu te débrouilles bien !  tu es presque à l’aise dans la langue de Molière ! 💪"
        );
        setShowConfetti(true); // Montre les confettis pour B1
      } else if (score <= 32) {
        setResultMessage(
          "B2 ! Chapeau ! Ton français est vraiment solide, tu t’approches du niveau expert ! 🎩"
        );
        setShowConfetti(true); // Montre les confettis pour B2
      } else if (score <= 38) {
        setResultMessage(
          "C1 ! Félicitations ! Tu es un expert de la langue française ! Tu es prêt pour les plus grands défis ! 🚀"
        );
        setShowConfetti(true); // Montre les confettis pour C1
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  console.log(questions.length);


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
            <h4>{resultMessage}</h4>
            <h3>Je t'offre 15€ sur les cours privés !</h3>
            <h3>Bienvenue sur French Take Off !</h3>
            <CopyButton messageACopier="BIENVENUE15" />
          </div>
        )}
      </div>
    </div>
  );
};

const questions = [
  {
    id: 1,
    question: "Je .......... Sophie Dupont.",
    options: ["m'appelle", "m'appeler", "s'appeler", "s'appelle"],
    answer: "m'appelle",
  },
  {
    id: 2,
    question: "Vous .......... dans ce quartier ?",
    options: ["travailler", "parler", "vivons", "habitez"],
    answer: "habitez",
  },
  {
    id: 3,
    question: "Vous .......... quel âge ?",
    options: ["avez", "vivez", "êtes", "faîtes"],
    answer: "avez",
  },
  {
    id: 4,
    question: "Sylvie .......... secrétaire dans une grande entreprise.",
    options: ["est", "c'est un", "travaille", "c'est une"],
    answer: "est",
  },
  {
    id: 5,
    question: ".......... papiers s'il vous plait !",
    options: ["Votre", "Tes", "Vos", "Ton"],
    answer: "Vos",
  },
  {
    id: 6,
    question: "Je n'aime pas .......... poisson.",
    options: ["le", "de la", "un", "du"],
    answer: "le",
  },
  {
    id: 7,
    question: "Marie et Paul ? Je les connais, je travaille avec ..........",
    options: ["elles", "leur", "ils", "eux"],
    answer: "eux",
  },
  {
    id: 8,
    question: "Tu veux .......... lait dans ton café ?",
    options: ["du", "de la", "le", "un"],
    answer: "du",
  },
  {
    id: 9,
    question: "Mon oncle vit depuis longtemps au ..........",
    options: ["Etats-Unis", "Canada", "Suisse", "Pologne"],
    answer: "Canada",
  },
  {
    id: 10,
    question: "Thomas s'est faché avec Pierre. Il ne .......... parle plus.",
    options: ["le", "lui", "se", "leur"],
    answer: "lui",
  },
  {
    id: 11,
    question:
      "- N'oublie pas d'aller à la pharmacie !\n - Oui, j'.......... vais tout de suite.",
    options: ["en", "y", "au", "irai"],
    answer: "y",
  },
  {
    id: 12,
    question: "- Tu veux encore du thé ? \n- Oui, j'.......... veux.",
    options: ["en", "y", "au", "irai"],
    answer: "en",
  },
  {
    id: 13,
    question: "Le directeur ? C'est l'homme .......... porte la veste noire.",
    options: ["qui", "que", "dont", "où"],
    answer: "qui",
  },
  {
    id: 14,
    question: "Il est malade .......... deux semaines.",
    options: ["après", "depuis", "longtemps", "il y a"],
    answer: "depuis",
  },
  {
    id: 15,
    question: "La pollution est un problème .......... on parle beaucoup.",
    options: ["dont", "où", "qui", "que"],
    answer: "dont",
  },
  {
    id: 16,
    question: "J'ai téléphoné .......... enfants.",
    options: ["aux", "pour", "les", "à les"],
    answer: "aux",
  },
  {
    id: 17,
    question: "Mes amis sont très fiers de .......... enfants.",
    options: ["leur", "lui", "les", "leurs"],
    answer: "leurs",
  },
  {
    id: 18,
    question:
      "C'est un excellent film, .......... l'histoire n'est pas très originale.",
    options: ["puisque", "car", "même si", "parce que"],
    answer: "même si",
  },
  {
    id: 19,
    question: "Attention! Tu .......... !",
    options: ["vas tomber", "tomberas", "vas tombé", "vais tomber"],
    answer: "vas tomber",
  },
  {
    id: 20,
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
    id: 21,
    question: ".......... la pluie, nous avons passé un week-end merveilleux.",
    options: ["À cause", "Bien que", "Malgré", "Faute de"],
    answer: "Malgré",
  },
  {
    id: 22,
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
    id: 23,
    question: "Il faut absolument que vous .......... ce travail pour demain !",
    options: ["rendrez", "terminerez", "finissiez", "achevez"],
    answer: "finissiez",
  },
  {
    id: 24,
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
    id: 25,
    question:
      "Est ce qu'il y a encore des lettres .......... je n'ai pas répondu ?",
    options: ["desquelles", "auxquelles", "pour lesquelles", "à qui"],
    answer: "auxquelles",
  },
  {
    id: 26,
    question: "J'ai passé la journée ..........",
    options: ["travailler", "en travaillant", "à travailler", "travaillant"],
    answer: "à travailler",
  },
  {
    id: 27,
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
    id: 28,
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
    id: 29,
    question: "Quand tu .......... ce travail, tu pourras sortir.",
    options: ["avais terminé", "termines", "aurais terminé", "auras terminé"],
    answer: "auras terminé",
  },
  {
    id: 30,
    question: "Les fleurs qu'ils ont .......... étaient ravissantes.",
    options: ["cueillies", "cueillaient", "cueilli", "couper"],
    answer: "cueillies",
  },
  {
    id: 31,
    question: "Je suis  étonné que ça te ..........",
    options: ["plaisait", "plaise", "plaît", "plaisent"],
    answer: "plaise",
  },
  {
    id: 32,
    question: "Tu m' .......... veux toujours ?",
    options: ["as", "ont", "y", "en"],
    answer: "en",
  },
  {
    id: 33,
    question: "Le maire prendra des mesures après que les habitants .......... leur opinion.",
    options: ["aient exprimé", "auraient exprimé", "eussent exprimé", "auront exprimé"],
    answer: "auront exprimé",
  },
  {
    id: 34,
    question: "L’allocation d’un revenu universel est un sujet .......... les désaccords sont nombreux.",
    options: ["à qui", "de quoi", "sur lequel", "dont"],
    answer: "sur lequel",
  },
  {
    id: 35,
    question: "Le piratage des livres est un problème bien connu et je doute qu’ils ..........",
    options: ["se sont trompés", "s’étaient trompés", "se seraient trompés", "se soient trompés"],
    answer: "se soient trompés",
  },
  {
    id: 36,
    question: `C’est une excellente mesure contre la fracture numérique, encore il faudrait qu’elle soit appliquée. - Cette phrase est-elle correcte ?`,
    options: ["Oui, cette phrase est correcte.", "Non, cette phrase est incorrecte."],
    answer: "Non, cette phrase est incorrecte.",
  },
  {
    id: 37,
    question: ".......... l’enseignement à distance inquiète les élèves.",
    options: ["Fortement pénalisés par les cours en ligne,", "Limitant trop les interactions avec les professeurs,", "Qui ne peuvent encore rejoindre leurs établissements,", "Les 3 réponses ci-dessus sont correctes."],
    answer: "Limitant trop les interactions avec les professeurs,",
  },
  {
    id: 38,
    question: "L’ubérisation est une pratique commerciale qui consiste à proposer des services directement aux clients. .......... passent leurs commandes via des applications mobiles.",
    options: ["Les autres", "Ceux-ci", "Les clients", "Ces dernières"],
    answer: "Ceux-ci",
  }
];

export default TestNiveauQuiz;
