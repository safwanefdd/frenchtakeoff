import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FetchRessource from "../components/FetchRessource";

class Ressources extends Component {
    render() {
        return (
            <div className={"ressourcesPage"}>
                <Navigation/>
                <div className={"ressourcesContainer"}>
                    <h1 className={"title"}>Ressources Gratuites</h1>
                    <p>Vous trouverez ici des ressources gratuites pour vous aider à apprendre le français.</p>
                    <div className={"ressourcesList"}>
                        <FetchRessource/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Ressources;