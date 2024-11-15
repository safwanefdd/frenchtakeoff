import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineInsertLink } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Admin = () => {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [ebooks, setEbooks] = useState([]);
    const [erreur, setErreur] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [formData, setFormData] = useState({ nom: '', prenom: '', email: '' });
    const [currentUserId, setCurrentUserId] = useState(null);
    const password = process.env.REACT_APP_ADMIN_PASSWORD_ACCESS;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Vérifie si le mot de passe est correct
    if (!sessionStorage.getItem('authenticated')) {
        const passwordAccess = prompt('Mot de passe :');
        if (passwordAccess !== password) {
            alert('Accès refusé.');
            window.location = '/'; // Redirige vers la page d'accueil en cas d'erreur
        } else {
            alert('Accès autorisé.');
            sessionStorage.setItem('authenticated', true); // Indique l'accès
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    // Récupère les données des utilisateurs
    const fetchUsers = () => {
        axios.get('http://localhost:3001/utilisateurs')
            .then((response) => {
                setUtilisateurs(response.data);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
                setErreur("Impossible de récupérer les données des utilisateurs.");
            });
    };

    // Supprime un utilisateur
    const deleteUser = (userId) => {
        axios.delete(`http://localhost:3001/utilisateurs/${userId}`)
            .then(() => {
                setUtilisateurs(utilisateurs.filter((user) => user.id !== userId));
            })
            .catch((error) => {
                console.error("Erreur lors de la suppression de l'utilisateur :", error);
                setErreur("Impossible de supprimer l'utilisateur.");
            });
    };

    // Prépare la mise à jour d'un utilisateur
    const updateUser = (user) => {
        setIsUpdating(true);
        setCurrentUserId(user.id);
        setFormData({
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
        });
    };

    // Gère la soumission du formulaire de mise à jour
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/utilisateurs/${currentUserId}`, formData)
            .then(() => {
                setIsUpdating(false);
                setCurrentUserId(null);
                setFormData({ nom: '', prenom: '', email: '' });
                fetchUsers(); // Met à jour la liste des utilisateurs
            })
            .catch((error) => {
                console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
                setErreur("Impossible de mettre à jour l'utilisateur.");
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Pour nom et prénom, on met en majuscule toute la value
        e.target.value = e.target.name === 'nom' || e.target.name === 'prenom' ? e.target.value.toUpperCase() : e.target.value;
    };

    useEffect(() => {
        fetch('http://localhost:3001/ebooks')
            .then((response) => response.json())
            .then((data) => setEbooks(data))
            .catch((error) => {
                console.error("Erreur:", error);
                setErreur("Erreur lors du chargement des ebooks.");
            });
    }, []);

    // Pour gerer l'ajout d'un ebook
    const handleAddEbook = async (e) => {
        e.preventDefault();

        // Récupération des données du formulaire depuis `formData` de l'état
        const nom = formData.nom;
        const description = formData.description;
        const url = formData.url;
        const imageFile = e.target.image.files[0]; // Récupère le fichier image

        if (!imageFile) {
            setErreur("Veuillez sélectionner une image.");
            return;
        }

        // Vérifie que le fichier est une image
        if (!imageFile.type.startsWith("image/")) {
            setErreur("Veuillez sélectionner un fichier image valide.");
            return;
        }

        // Crée un objet FormData pour envoyer les données en multipart
        const formDataToSend = new FormData();
        formDataToSend.append("nom", nom);
        formDataToSend.append("description", description);
        formDataToSend.append("url", url);
        formDataToSend.append("image", imageFile);

        // Envoi des données avec axios
        try {
            const response = await axios.post('http://localhost:3001/ebooks', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Met à jour la liste des ebooks
            setEbooks([...ebooks, response.data]);
            setErreur(null); // Réinitialise les erreurs
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'ebook :", error);
            setErreur("Impossible d'ajouter l'ebook.");
        }
    };


    const handleDeleteEbook = (ebookId) => {
        axios.delete(`http://localhost:3001/ebooks/${ebookId}`)
            .then(() => {
                setEbooks(ebooks.filter((ebook) => ebook.id !== ebookId));
            })
            .catch((error) => {
                console.error("Erreur lors de la suppression de l'ebook :", error);
                setErreur("Impossible de supprimer l'ebook.");
            });
    }

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className='adminPage'>
            <Navigation />
            <div className="adminContainer">
                <h1 className='title'>Admin</h1>
                <div className="userList">
                    <h2>Liste des Utilisateurs</h2>
                    {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {utilisateurs.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nom}</td>
                                    <td>{user.prenom}</td>
                                    <td>{user.email}</td>
                                    <td className='actionsContainer'>
                                        <button onClick={() => updateUser(user)} className='actions update'><GrUpdate /></button>
                                        <button onClick={() => deleteUser(user.id)} className='actions delete'><MdDeleteOutline /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {isUpdating && (
                        <div className="updateForm">
                            <h2>Mettre à jour l'utilisateur</h2>
                            <form onSubmit={handleUpdateSubmit}>
                                <label>
                                    Nom:
                                    <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
                                </label>
                                <label>
                                    Prénom:
                                    <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </label>
                                <button type="submit">Enregistrer</button>
                                <button type="button" onClick={() => setIsUpdating(false)}>Annuler</button>
                            </form>
                        </div>
                    )}
                </div>
                <div className="ebook">
                    <div className="ebookAdd">
                        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
                        <h2>Ajouter un ebook</h2>
                        <form onSubmit={handleAddEbook}>
                            <label>
                                <input
                                    type="text"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                    required
                                />
                                <span>Nom</span>
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                                <span>Description</span>
                            </label>
                            <label>
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    required
                                />
                                <span>Image</span>
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="url"
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                    required
                                />
                                <span>URL</span>
                            </label>
                            <button type="submit">Ajouter</button>
                            <Link to="https://www.tremplin-numerique.org/comment-creer-un-lien-de-telechargement-direct-pour-les-fichiers-google-drive#:~:text=Commencez%20par%20ouvrir%20un%20navigateur%20Web%20sur%20votre,et%20sélectionnez%20«%20Partager%20»%20dans%20le%20menu." target='_blank' rel='noreferrer' >
                                Tuto URL ?
                            </Link>
                        </form>
                    </div>

                    <div className="ebookList">
                        <h2>Liste des ebooks</h2>
                        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Titre</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>URL</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ebooks.map((ebook) => {
                                    // Si ebook.image est un BLOB, créez une URL pour l'affichage
                                    const imageUrl = ebook.image && ebook.image.type === "Buffer"
                                        ? URL.createObjectURL(new Blob([new Uint8Array(ebook.image.data)], { type: 'image/jpeg' }))
                                        : ebook.image || 'default-image-url.jpg';

                                    return (
                                        <tr key={ebook.id}>
                                            <td>{ebook.id}</td>
                                            <td>{ebook.nom}</td>
                                            <td>{ebook.description}</td>
                                            <td>
                                                <img
                                                    src={imageUrl}
                                                    alt={ebook.nom}
                                                    width="60"
                                                    height="auto"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => openModal(ebook)}
                                                />
                                            </td>
                                            <td>
                                                <a href={"https://drive.google.com/file/d/" + ebook.url + "/view?usp=share_link"} target='_blank' rel='noreferrer'>
                                                    <MdOutlineInsertLink style={
                                                        {
                                                            color: 'blue',
                                                            fontSize: '1.5rem',
                                                            cursor: 'pointer',
                                                            marginRight: '1rem',
                                                        }
                                                    } />
                                                </a>
                                                <a href={"https://drive.google.com/uc?export=download&id=" + ebook.url} target='_blank' rel='noreferrer'>
                                                    <IoCloudDownloadOutline style={
                                                        {
                                                            color: 'green',
                                                            fontSize: '1.5rem',
                                                            cursor: 'pointer',
                                                        }
                                                    } />
                                                </a>
                                            </td>
                                            <td className='actionsContainer'>
                                                <button className='actions update'><GrUpdate /></button>
                                                <button className='actions delete' onClick={() => handleDeleteEbook(ebook.id)} ><MdDeleteOutline /></button>
                                            </td>
                                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
                                                overlay: {
                                                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                                                },
                                                content: {
                                                    maxWidth: "90%",
                                                    maxHeight: "90%",
                                                    margin: "0",
                                                    padding: "0",
                                                    borderRadius: "10px",
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    img: {
                                                        width: '100%',
                                                        height: 'auto',
                                                    }
                                                },
                                            }}>
                                                <button className="close-modal" onClick={closeModal}>X</button>
                                                {selectedImage && <img src={imageUrl} alt={selectedImage.nom} />}
                                            </Modal>
                                        </tr>
                                    );
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Admin;
