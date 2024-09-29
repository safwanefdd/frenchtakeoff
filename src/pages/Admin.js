import React, {useRef, useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useDispatch} from "react-redux";
import {addRessource} from "../actions/ressource.action";

const Admin = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            title: form.current[0].value,
            description: form.current[1].value,
            link: form.current[2].value,
            image: selectedFile // Cela devrait être une Data URL ou une référence à l'image
        };

        // Sauvegarder l'image dans localStorage pour démonstration
        localStorage.setItem('imageData', imagePreview);
        dispatch(addRessource(postData));
        form.current.reset();
        setImagePreview(null);
        setSelectedFile(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Enregistre l'aperçu
                setSelectedFile(file); // Enregistre le fichier
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="adminPage">
            <Navigation/>
            <div className="adminContainer">
                <h1 className="title">Admin Page</h1>
                <div className="adminForm">
                    <form ref={form} onSubmit={handleForm}>
                        <input type="text" placeholder="Titre" required/>
                        <textarea placeholder="Description" required/>
                        <input type="text" placeholder="Lien" required/>
                        <label className="customFileButton">
                            Choisir une image
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                style={{display: 'none'}}
                            />
                        </label>
                        <button type="submit">Insérer</button>
                    </form>
                    {imagePreview && (
                        <div className="imagePreview">
                            <img src={imagePreview} alt="Aperçu"/>
                        </div>
                    )}
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Admin;
