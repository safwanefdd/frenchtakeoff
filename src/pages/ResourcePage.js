// src/pages/ResourcePage.jsx
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import ressources from '../data/ressources.json';

const ResourcePage = () => {
    const {id} = useParams(); // Récupérer l'ID de la ressource à partir de l'URL
    const ressource = ressources.find(res => res.id === parseInt(id)); // Trouver la ressource correspondante

    if (!ressource) {
        return (
        <>
            <div className="error">
                <h2>Ressource non trouvée</h2>
                <Link to="/ressources" className="btn">Retourner à la liste des ressources</Link>
            </div>
        </>);
    }

    return (
        <div className="resourcePage">
            <h2>{ressource.name}</h2>
            <img src={ressource.image} alt={ressource.name}/>
            <p>{ressource.description}</p>
        </div>
    );
};

export default ResourcePage;
