# Projet Docker

Ce projet utilise Docker Compose pour orchestrer une application composée d'un backend, d'un frontend et d'une base de données PostgreSQL.
Réalisé par Jonathan JAREMCZUK et Antony PINEL

## Structure du projet

Le projet est composé de trois services principaux :

1. Backend
2. Frontend
3. Base de données PostgreSQL

## Configuration

La configuration du projet est définie dans le fichier `docker-compose.yml`. Assurez-vous de vérifier et de modifier si nécessaire les variables d'environnement pour chaque service.

### Backend

- Port: 3333
- Environnement de production
- Utilise une base de données PostgreSQL

### Frontend

- Port: 3000
- Environnement de production
- Communique avec le backend via l'URL : http://localhost:3333

### Base de données

- PostgreSQL 17
- Port: 5432
- Base de données : projet_docker
- Utilisateur : docker
- Mot de passe : docker

## Installation et démarrage

1. Clonez ce dépôt :
   ```
   git clone https://github.com/0ri0n09/docker.git
   cd docker
   ```

2. Lancez les services avec Docker Compose :
   ```
   docker-compose up -d
   ```

3. L'application devrait maintenant être accessible :
   - Frontend : http://localhost:3000
   - Backend : http://localhost:3333

## Arrêt des services

Pour arrêter tous les services :

```
docker-compose down
```

Pour arrêter les services et supprimer les volumes (cela effacera les données de la base de données) :

```
docker-compose down -v
```

## Persistance des données

Les données de la base de données sont persistées dans un volume Docker nommé `db-data`.

## Réseau

Tous les services sont connectés via un réseau Docker nommé `app-network`.

## Remarques

- Assurez-vous que les ports 3000, 3333 et 5432 sont disponibles sur votre machine hôte.
- Pour le développement, vous pouvez modifier les variables d'environnement dans le fichier `docker-compose.yml`.
