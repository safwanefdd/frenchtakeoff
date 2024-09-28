import React, {Component} from 'react';
import ressources from '../data/ressources.json';
import {Link} from "react-router-dom"; // Assurez-vous que le chemin d'importation est correct.

class FetchRessource extends Component {
    render() {
        return (
            <div className="fetchRessourcesComponent">
                <h2>Liste des Ressources</h2>
                <div className="ressourcesList">
                    {ressources.map(ressource => (
                        <div key={ressource.id} className="ressourceCard">
                            <div className="imageContainer">
                                <img src={ressource.image} alt={ressource.name}/>
                            </div>
                            <div className="contentContainer">
                                <h3>{ressource.name}</h3>
                                <p>{ressource.description}</p>
                                <Link className={"btn"} to={"/ressources/" + ressource.id}>Voir la ressource</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FetchRessource;
