# FILMAPPLI

FILMAPPLI est une application web permettant aux utilisateurs de consulter une base de données de films, d'ajouter des films à leurs favoris, et de laisser des avis. L'application offre une interface simple et intuitive pour parcourir, rechercher, et noter des films.

## 📌 Description
L'application permet aux utilisateurs de s'inscrire, de se connecter et de gérer leur propre liste de films favoris. Elle inclut également une section dédiée aux critiques et aux évaluations laissées par les utilisateurs.

## 🚀 Fonctionnalités principales
- **Inscription et connexion des utilisateurs**.
- **Recherche de films** : Recherche par titre, genre, ou année.
- **Ajout de films aux favoris**.
- **Évaluation et critique des films**.
- **Affichage des détails d'un film** : Synopsis, genre, date de sortie, etc.
- **Gestion des utilisateurs** : Modification du profil et des favoris.

## 📂 Structure du projet
```
.
├── index.php            # Page d'accueil
├── register.php         # Inscription des utilisateurs
├── login.php            # Connexion des utilisateurs
├── movies.php           # Liste des films disponibles
├── movie_detail.php     # Affichage des détails d'un film
├── favorites.php        # Liste des favoris d'un utilisateur
├── assets/              # Fichiers CSS et JavaScript
├── includes/            # Fichiers PHP inclus (header, footer, etc.)
├── README.md            # Documentation du projet
```

## 🔧 Prérequis
- PHP >= 8.0
- Serveur web (Apache, Nginx, etc.)
- Base de données MySQL ou MariaDB

## 📥 Installation
1. Clonez ce dépôt :
```bash
$ git clone https://github.com/Lcs-93/FILMAPPLI.git
```
2. Rendez-vous dans le répertoire cloné :
```bash
$ cd FILMAPPLI
```
3. Placez les fichiers sur votre serveur web local ou distant.
4. Configurez la base de données dans le fichier `config.php` :
```php
$host = '127.0.0.1';
$dbname = 'filmapp';
$username = 'root';
$password = '';
```
5. Importez le fichier SQL fourni pour créer les tables nécessaires.
6. Accédez à l'application via votre navigateur (par exemple : `http://localhost/FILMAPPLI`).

## 📌 Utilisation
- Inscrivez-vous ou connectez-vous pour accéder aux fonctionnalités personnalisées.
- Recherchez des films par titre, genre, ou année.
- Ajoutez des films à vos favoris et laissez des critiques.
- Consultez vos films favoris depuis votre profil.

## 🛠️ Technologies utilisées
- **PHP** : Langage principal pour le backend.
- **HTML / CSS / JavaScript** : Pour le frontend.
- **MySQL / MariaDB** : Base de données relationnelle.

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📣 Auteur
Projet créé par **Lcs-93**. N'hésitez pas à me contacter pour toute suggestion ou amélioration !

---

🔥 Bon développement !

