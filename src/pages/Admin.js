import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Admin = () => {

    return (
        <div className="adminPage">
            <Navigation/>
            <div className="adminContainer">
                <h1 className="title">Admin Page</h1>
                <div className="adminForm">
                    <form>
                        <input type="text" placeholder="Titre" required/>
                        <textarea placeholder="Description" required/>
                        <input type="text" placeholder="Lien" required/>
                        <label className="customFileButton">
                            Choisir une image
                            <input
                                type="file"
                                required
                                style={{display: 'none'}}
                            />
                        </label>
                        <button type="submit">Insérer</button>
                    </form>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Admin;
