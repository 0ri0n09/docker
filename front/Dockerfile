# Étape 1 : Construire l'application avec Node.js
FROM node:20-alpine3.18 as build

# Définir le répertoire de travail
WORKDIR /app/front

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Injecter les variables d'environnement pour le build
ARG API_URL
ENV NUXT_ENV_API_URL=$API_URL

# Build de l'application Nuxt
RUN npm run build

# Étape 2 : Servir l'application avec une image légère
FROM node:20-alpine3.18 as production

# Définir le répertoire de travail
WORKDIR /app/front

# Copier seulement les fichiers nécessaires depuis l'étape 1
COPY --from=build /app/front/.output /app/front/.output
COPY --from=build /app/front/node_modules /app/front/node_modules

# Exposer le port 3000 pour l'application
EXPOSE 3000

# Commande pour démarrer l'application Nuxt en mode production
CMD ["node", ".output/server/index.mjs"]
