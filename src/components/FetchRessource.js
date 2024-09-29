import React, {Component} from 'react';
import ressources from '../data/ressources.json';


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
                                <a href={ressource.link + "?raw=true"} className="btn" download>Télécharger</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FetchRessource;
