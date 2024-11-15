const express = require('express');
const mysql = require('mysql2'); // Utilisation de mysql2 pour la compatibilité
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config(); // Utilisation de dotenv pour les variables d'environnement

// Configuration de stockage pour multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Configuration du pool de connexions avec mysql2
const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    // Suppression des options invalides
    // Configuration SSL si requis, ou laisser vide
    ssl: { rejectUnauthorized: false }, // Mettre `ssl: undefined` si SSL n'est pas requis
});

// Vérifie la connexion au pool
connection.getConnection((err) => {
    if (err) {
        console.error('Erreur de connexion au pool de connexions:', err);
        return;
    }
    console.log('Connecté au pool de connexions MySQL');
});

// Route pour gérer le formulaire (ajout de données)
app.post('/submit-form', (req, res) => {
    const { nom, prenom, email } = req.body;

    // Validation des données
    if (!nom || !prenom || !email) {
        return res.status(400).json({ message: 'Données manquantes' });
    }

    const sql = 'INSERT INTO user (nom, prenom, email) VALUES (?, ?, ?)';
    connection.query(sql, [nom, prenom, email], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion:', err);
            return res.status(500).json({ message: 'Erreur lors de l\'insertion: ' + err.message });
        }
        res.json({ message: 'Formulaire soumis avec succès' });
    });
});

// Route pour récupérer tous les utilisateurs (affichage de données)
app.get('/utilisateurs', (req, res) => {
    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs:', err);
            return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
        }
        res.json(results);
    });
});

// Route pour récupérer un utilisateur par son ID
app.get('/utilisateurs/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM user WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'utilisateur:', err);
            return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json(results[0]);
    });
});

// Route pour récupérer les ebooks
app.get('/ebooks', (req, res) => {
    connection.query('SELECT * FROM ebook', (error, results) => {
        if (error) {
            console.error("Erreur lors de la récupération des ebooks:", error);
            return res.status(500).json({ message: "Erreur lors de la récupération des ebooks" });
        }
        res.json(results);
    });
});

// Route pour ajouter un ebook
app.post('/ebooks', upload.single('image'), (req, res) => {
    const { nom, description, url } = req.body;
    const image = req.file ? req.file.buffer.toString('base64') : null;

    if (!nom || !description || !image || !url) {
        return res.status(400).json({ message: 'Données manquantes' });
    }

    const sql = 'INSERT INTO ebook (nom, description, image, url) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nom, description, image, url], (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'insertion de l\'ebook:', error);
            return res.status(500).json({ message: 'Erreur lors de l\'insertion de l\'ebook' });
        }
        res.json({ id: result.insertId, nom, description, image, url });
    });
});


// Démarrage du serveur
module.exports = app;
