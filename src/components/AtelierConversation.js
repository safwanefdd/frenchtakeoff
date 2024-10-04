import React from 'react';
import AtelierConversationTarifs from "./AtelierConversationTarif";

const AtelierConversation = () => {
    return (
        <div className={"atelierConversationInfo"}>
            <div className={"card"}>
                <h2>Atelier de Conversation</h2>
                <p>Une heure par semaine pour booster ta conversation et ta confiance à l’oral</p>
            </div>
            <div className={"infoAtelier"}>
                <ul>
                    <li>
                        Nous nous retrouvons une fois par semaine en petit groupe (maximum 4 apprenants + la prof 😉)
                        pendant 1h.
                    </li>
                    <br/>
                    <li>
                        À travers des discussions variées et des activités ludiques, tu enrichis ton vocabulaire, tu
                        améliores ta fluidité et gagnes en confiance dans un environnement détendu et interactif .
                    </li>
                    <br/>
                    <li>
                        Nous abordons de nombreux thèmes, allant de la culture française à la vie quotidienne, en
                        passant par les voyages, la gastronomie et bien d’autres sujets super intéressants.
                    </li>
                    <br/>
                    <li>
                        Tu as accès au Club French_Take_Off sur Discord qui te permet de me poser des questions et
                        d’échanger avec les autres apprenants. Tu as également accès à des ressources en français et tu
                        peux deposer tes devoirs que je corrigerai.
                    </li>
                    <br/>
                    <li>
                        Avant le cours, je t’envoie des documents, du vocabulaire, des expressions sur le sujet de
                        conversation de la semaine.
                    </li>
                    <br/>
                    <li>
                        Pendant le cours, tu t’exprimes, tu discutes avec des personnes originaires du monde entier sur
                        un sujet intéressant. Je corrige tes erreurs , je te guide et je t’apprends plein de choses sur
                        le sujet ! Nous passons une heure super agréable et amusante!
                    </li>
                    <br/>
                    <li>
                        Après le cours, je t’envoie les documents de la leçon avec les notes et corrections et un devoir
                        à rendre sur le Club French_Take_Off.
                    </li>
                </ul>
            </div>
            <div className={"tarif"}>
                <h2>Tarifs</h2>
                <div>
                    <AtelierConversationTarifs/>
                </div>
            </div>
        </div>
    );
};

export default AtelierConversation;
