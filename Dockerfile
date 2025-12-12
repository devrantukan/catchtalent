FROM node:22
ENV NPM_CONFIG_LOGLEVEL warn
EXPOSE 3001
WORKDIR /usr/src/app
COPY package.json package-lock.json* /usr/src/app/
# Install all dependencies including devDependencies (needed for build)
RUN NODE_ENV=development npm ci
COPY . /usr/src/app
RUN npm run build
ENTRYPOINT ["npm", "start"]