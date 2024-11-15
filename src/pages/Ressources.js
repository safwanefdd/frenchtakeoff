import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Ressources = () => {

    const [data, setData] = useState([]);
    const [selectedEbook, setSelectedEbook] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Récupérer les ressources depuis le serveur
    useEffect(() => {
        axios("http://localhost:3001/ebooks")
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }
        , []);

    // Modal de formulaire pour télécharger l'ebook
    const openModal = (ebook) => {
        setSelectedEbook(ebook);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedEbook(null);
    };

    return (
        <div className='ressourcesPage'>
            <Navigation />
            <h1 className='title' >Ressources</h1>
            <div className="ressourcesList">
                {data.map(ebook => {
                    const imageUrl = ebook.image && ebook.image.type === "Buffer"
                        ? URL.createObjectURL(new Blob([new Uint8Array(ebook.image.data)], { type: 'image/jpeg' }))
                        : ebook.image;  // ou utilisez directement l'URL si ce n'est pas un BLOB

                    return (
                        <div className='ressourceCard' key={ebook.id}>
                            <div className="imageContainer">
                                <img src={imageUrl} alt={ebook.nom} />
                            </div>
                            <div className="contentContainer">
                                <h3>{ebook.nom}</h3>
                                <p>{ebook.description}</p>
                                <button className='btn' onClick={
                                    () => openModal(ebook)
                                }>Télécharger</button>
                            </div>
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={
                                {
                                    content: {
                                        background: `url(${imageUrl}) no-repeat center center / cover`,
                                        backdropFilter: 'blur(5px)',
                                        color: 'white',
                                    }
                                }
                            }>
                                <h2>{selectedEbook && selectedEbook.nom}</h2>
                                <p>{selectedEbook && selectedEbook.description}</p>
                                <a href={selectedEbook && selectedEbook.url} download>Télécharger</a>
                                <button onClick={closeModal}>Fermer</button>
                            </Modal>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    );
};

export default Ressources;