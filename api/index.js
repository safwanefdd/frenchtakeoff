const express = require('express');
const mysql = require('mysql2'); // Utilisation de mysql2 pour la compatibilité
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path'); // Importation de path pour gérer les chemins de fichiers
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

// Servir les fichiers statiques du dossier build
app.use(express.static(path.join(__dirname, 'build')));

// Routes API
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

app.get('/utilisateurs', (req, res) => {
    connection.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs:', err);
            return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
        }
        res.json(results);
    });
});

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

app.get('/ebooks', (req, res) => {
    connection.query('SELECT * FROM ebook', (error, results) => {
        if (error) {
            console.error("Erreur lors de la récupération des ebooks:", error);
            return res.status(500).json({ message: "Erreur lors de la récupération des ebooks" });
        }
        res.json(results);
    });
});

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

// Rediriger toutes les autres requêtes vers `index.html`
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
