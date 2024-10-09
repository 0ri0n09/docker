# Build de l'application
FROM node:20-alpine3.18 as base
FROM base as deps
WORKDIR /app/backend

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances de production
RUN npm ci --force

FROM deps as build
WORKDIR /app/backend

# Copier tout le code source de l'application
COPY . .

# Build de l'application
RUN node ace build --ignore-ts-errors

# COPY
FROM base
WORKDIR /app/backend
COPY --from=deps /app/backend/node_modules /app/backend/node_modules
COPY --from=build /app/backend/build /app/backend/

# Exposer le port pour le backend
EXPOSE 3333

# Commande pour démarrer l'application
CMD ["sh", "-c", "node bin/server.js"]
