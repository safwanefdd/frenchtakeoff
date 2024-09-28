import React, {useState} from "react";
import CoursIndividuel from "../components/CoursIndividuel";
import AtelierConversation from "../components/AtelierConversation";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Service = () => {
    const [activeService, setActiveService] = useState("cours");

    const handleSwitch = (service) => {
        setActiveService(service);
    };

    return (
        <div className="servicePage">
            <Navigation/>
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
                    <CoursIndividuel/>
                ) : (
                    <AtelierConversation/>
                )}
            </div>
            <div className="queChoisir">
                <div className="card">
                    <h3>Cours individuel</h3>
                    <ul>
                        <li className="true">Personnalisation : les cours sont adaptés 100% à toi et à tes besoins.</li>
                        <li className="true">Attention individuelle : l’attention est portée seulement sur toi et tes
                            difficultés.
                        </li>
                        <li className="true">Flexibilité : les cours sont organisés selon tes disponibilités.</li>
                        <li className="false">Plus chers que l’atelier de conversation, mais tu as la professeure rien
                            que pour toi !
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Atelier de conversation</h3>
                    <ul>
                        <li className="true">Coût : les cours sont moins chers que les cours individuels.</li>
                        <li className="true">Motivation : tu vas travailler en groupe, et travailler ensemble motive
                            davantage !
                        </li>
                        <li className="true">Interaction : tu pourras discuter avec d’autres apprenants de ton niveau et
                            faire de nouvelles connaissances.
                        </li>
                        <li className="false">Manque de flexibilité : les cours sont organisés à des heures fixes, à toi
                            de t’adapter !
                        </li>
                    </ul>
                </div>
            </div>
            <div className="niveau">
                <h2>Quel niveau suis-je ?</h2>
                <p>Tu ne connais pas ton niveau ? <Link target="_blank" to="/test-de-francais"> Clique ici ↗ </Link>pour
                    faire un test !</p>
            </div>
            <div className={"appel"}>
                <h2>Besoin d'aide ? Un appel</h2>
                <p>Si tu as des questions ou besoin d’aide pour choisir ton cours, Je te propose un appel visio gratuit
                    de 20 minutes. Tu pourras m’expliquer tes objectifs et tes besoins. Je t’expliquerai le
                    fonctionnement, mon offre et les tarifs des cours.
                </p>
                <Link className={"btn"} to={"https://calendly.com/french-take-off/appel-gratuit"} target={"_blank"}>Réserver un appel</Link>
            </div>
                <Footer/>
            </div>
            );
            };

            export default Service;
