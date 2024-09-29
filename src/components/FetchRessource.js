import React from 'react';
import {useSelector} from "react-redux";
import {isEmpty} from "./Utils";


const FetchRessource = () => {

    const ressources = useSelector(state => state.ressourceReducer);
    console.log(ressources);

    return (
        <div className="fetchRessourcesComponent">
            <h2>Liste des Ressources</h2>
            <div className="ressourcesList">
                {!isEmpty(ressources) && ressources.map((ressource, index) => {
                    return (
                        <div key={index} className="ressourceCard">
                            <div className="imageContainer">
                                <img src={ressource.image} alt={ressource.name}/>
                            </div>
                            <div className="contentContainer">
                                <h3>{ressource.name}</h3>
                                <p>{ressource.description}</p>
                                <a className="btn" href={ressource.link + "?raw=true"}>Voir la ressource</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FetchRessource;
