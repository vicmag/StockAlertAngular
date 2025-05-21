# Imagen base con Node.js y Angular CLI preinstalado
FROM node:18-bullseye

# Instala herramientas esenciales
RUN apt-get update && \
    apt-get install -y \
    git \
    git-lfs \
    && rm -rf /var/lib/apt/lists/*

# Instala Angular CLI globalmente (versión LTS)
RUN npm install -g @angular/cli@latest

# Configura el entorno para desarrollo
USER node
WORKDIR /workspace

# Configura Git para usar VSCode como editor
RUN git config --global core.editor "code --wait" && \
    git config --global init.defaultBranch main

# Puerto para Angular CLI
EXPOSE 4200

# Comando de inicio (se sobreescribe al ejecutar el contenedor)
CMD ["tail", "-f", "/dev/null"]