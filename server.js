const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // Pour le traitement des fichiers

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Configuration de multer pour le stockage des fichiers
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'ressources')); // Dossier de destination pour les images
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Nom du fichier d'origine
    }
});
const upload = multer({storage});

// Route pour ajouter une ressource
app.post('/api/ressources', upload.single('image'), (req, res) => {
    console.log(req.body); // Ajoute cette ligne pour voir les données reçues

    if (!req.file) {
        console.error('Aucun fichier n\'a été téléchargé.');
        return res.status(400).json({message: 'Aucun fichier téléchargé.'});
    }

    const newResource = {
        id: Date.now(),
        name: req.body.name,
        description: req.body.description,
        image: `/ressources/${req.file.filename}`,
        link: req.body.link, // Assure-toi que cela est bien récupéré
    };

    // ... le reste du code
});


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
