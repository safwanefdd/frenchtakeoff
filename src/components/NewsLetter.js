import React, { useState } from 'react';

const NewsLetter = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {

        // Pour nom et prénom, on met en majuscule toute la value
        e.target.value = e.target.name === 'nom' || e.target.name === 'prenom' ? e.target.value.toUpperCase() : e.target.value;

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                setResponseMessage(data.message);
                setFormData({
                    nom: '',
                    prenom: '',
                    email: ''
                });
            })
            .catch((error) => {
                console.error('Erreur:', error);
                setResponseMessage('Une erreur est survenue');
            });
    };

    return (
        <div className='newsLetterComponent'>
            <h2>Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                        <span>Nom</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                        <span>Prénom</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <span>Email</span>
                    </label>
                </div>
                <button type="submit">Envoyer</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default NewsLetter;
