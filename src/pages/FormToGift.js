import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FormToGift = () => {

    return (
        <div className='formToGiftPage'>
            <Navigation />
            <div className='formToGiftContainer'>
                <h1>Insère ton email pour recevoir l'ebook !</h1>
                <form>
                    <input type="text" name="prenom" placeholder='Ton prénom' />
                    <input type='email' name='email' placeholder='Ton email' />
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default FormToGift;