import React, {useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // État pour la protection par mot de passe
    const [password, setPassword] = useState(''); // Stocke la saisie du mot de passe
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
        link: '' // Ajout du champ link
    });
    const [message, setMessage] = useState('');
    const correctPassword = 'Casuffit1132!'; // Définissez ici le mot de passe

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'image' ? files[0] : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('link', formData.link); // Assure-toi que cela est bien inclus
        formDataToSend.append('image', formData.image);

        try {
            const response = await fetch('http://localhost:5000/api/ressources', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('Ressource ajoutée avec succès');
            } else {
                // Gérer les erreurs
                const errorData = await response.json();
                console.error('Erreur:', errorData.message);
            }
        } catch (error) {
            console.error('Erreur de requête:', error);
        }
    };



    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true); // Si le mot de passe est correct, on accède à la page
        } else {
            setMessage('Mot de passe incorrect');
        }
    };

    return (
        <div className="adminPage">
            <Navigation/>
            <div className="adminContainer">
                {!isAuthenticated ? (
                    <div className="passwordProtection">
                        <h1 className="title">Accès Admin</h1>
                        <form onSubmit={handlePasswordSubmit}>
                            <input
                                type="password"
                                placeholder="Entrez le mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit">Valider</button>
                        </form>
                        {message && <p>{message}</p>} {/* Affichage du message d'erreur */}
                    </div>
                ) : (
                    <>
                        <h1 className="title">Admin</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <input
                                name="link"
                                type="text"
                                placeholder="Lien de téléchargement"
                                value={formData.link}
                                onChange={handleChange}
                            />
                            <input
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleChange}
                                required
                            />
                            {formData.image && (
                                <img
                                    src={URL.createObjectURL(formData.image)}
                                    alt="Aperçu"
                                    style={{maxWidth: '300px', marginTop: '1rem'}}
                                />
                            )}
                            <button type="submit">Ajouter</button>
                        </form>

                        {message && <p>{message}</p>} {/* Affichage du message */}
                    </>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Admin;
